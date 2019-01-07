pragma solidity ^0.4.24;

// For remix
//import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-solidity/master/contracts/token/ERC721/ERC721.sol";
import '../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import '../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Metadata.sol';

contract StarNotary is ERC721, ERC721Metadata  {

	constructor() ERC721Metadata("UdaTokenName", "USYMB") public {
	}

	struct Star {
		string starName;
		string starStory;
		string ra;
		string dec;
		string mag;
		bytes32 coordsHash;
	}

	mapping(uint256 => Star) public tokenIdToStarInfo;
	mapping(bytes32 => bool) public unique;
	mapping(uint256 => uint256) public starsForSale;

	uint256 public tokenAt;

	function createStar(string starName, string starStory, string ra, string dec, string mag) public {
		tokenAt++;

		bytes32 coordinates;

		// It should be greater than 3
		require(bytes(starName).length > 3);

		// coordinates = keccak256(abi.encodePacked(ra, dec, mag));
		coordinates = coordinatesToHash(ra, dec, mag);

		require(!checkIfStarExist(coordinates), "We have that Star!");

		Star memory newStar = Star(starName, starStory, ra, dec, mag, coordinates);

		uint256 tokenId = tokenAt;
		tokenIdToStarInfo[tokenId] = newStar;
		unique[coordinates] = true;

		_mint(msg.sender, tokenId);
	}

	function tokenIdToStarInfo(uint256 tokenId) public view returns(string, string, string, string, string) {
		return (tokenIdToStarInfo[tokenId].starName, tokenIdToStarInfo[tokenId].starStory, tokenIdToStarInfo[tokenId].ra, tokenIdToStarInfo[tokenId].dec, tokenIdToStarInfo[tokenId].mag);
	}

	function checkIfStarExist(bytes32 coordinates) public view returns(bool) {
		return unique[coordinates];
	}

	// To avoid:  Warning: Function state mutability can be restricted to pure
	function coordinatesToHash(string ra, string dec, string mag) public pure returns(bytes32) {
		return keccak256(abi.encodePacked(ra, dec, mag));
	}

	function putStarUpForSale(uint256 tokenId, uint256 price) public {
		require(this.ownerOf(tokenId) == msg.sender, "You are not the owner of that Star!");
		starsForSale[tokenId] = price;
	}

	function buyStar(uint256 tokenId) public payable {
		// If it has a price, it is up for sale
		require(starsForSale[tokenId] > 0);

		uint256 starCost = starsForSale[tokenId];
		address starOwner = this.ownerOf(tokenId);
		require(msg.value >= starCost);

		_removeTokenFrom(starOwner, tokenId);

		_addTokenTo(msg.sender, tokenId);

		starOwner.transfer(starCost);

		// If the value sent is more than the value of the star, we send the remaining back
		if(msg.value > starCost) {
			msg.sender.transfer(msg.value - starCost);
		}

		// And since it was sold, we remove it from the mapping
		starsForSale[tokenId] = 0;
	}

	// https://medium.com/coinmonks/exploring-non-fungible-token-with-zeppelin-library-erc721-399cb180cfaf
	function mint(uint256 tokenId) public {
		super._mint(msg.sender, tokenId);
	}

	function transferStar(address starOwner, address to, uint256 tokenId) public {
		safeTransferFrom(starOwner, to, tokenId);
	}

	function exchangeStars(address user1, uint256 user1TokenId, address user2, uint256 user2TokenId) public {

		require(this.ownerOf(user1TokenId) == user1);
		require(this.ownerOf(user2TokenId) == user2);

		_removeTokenFrom(user1, user1TokenId);
		_addTokenTo(user2, user1TokenId);

		_removeTokenFrom(user2, user2TokenId);
		_addTokenTo(user1, user2TokenId);
	}

}
