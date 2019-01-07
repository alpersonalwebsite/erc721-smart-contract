// Contract abstraction, JSON representation
const StarNotary = artifacts.require('StarNotary');

contract('StarNotary', accounts => {
  let user0 = accounts[0];
  let user1 = accounts[1];
  let user2 = accounts[2];
  //let randomMaliciousUser = accounts[3];

  let starName = 'My Star';
  let starStory = 'I found it when I was...';
  let ra = '1';
  let dec = '1';
  let mag = '1';

  let tokenId = 1;

  let weiQt = 0.01;

  const tokenName = 'UdaTokenName';
  const tokenSymbol = 'USYMB';

  // web3 object is available automatically
  let starPrice = web3.utils.toWei(weiQt.toString(), 'ether');
  // We can convert to BN web3.utils.toBN()

  beforeEach(async function() {
    this.contract = await StarNotary.new({
      from: user0
    });
  });

  describe('Token information', () => {
    it('displays the right token name', async function() {
      assert.equal(await this.contract.name.call(), tokenName);
    });
    it('displays the right token symbol', async function() {
      assert.equal(await this.contract.symbol.call(), tokenSymbol);
    });
  });

  describe('Star Creation', () => {
    it('can create a star and retrieve its name', async function() {
      await this.contract.createStar(starName, starStory, ra, dec, mag, {
        from: user1
      });
      let starInfo = await this.contract.tokenIdToStarInfo.call(tokenId);
      assert.equal(starInfo[0], starName);
    });

    describe('transfering Stars', () => {
      beforeEach(async function() {
        //await this.contract.createStar('awesome star!', starId, {
        await this.contract.createStar(starName, starStory, ra, dec, mag, {
          from: user1
        });
      });
      it('can transfer a star', async function() {
        assert.equal(await this.contract.ownerOf.call(tokenId), user1);
        await this.contract.transferStar(user1, user2, tokenId, {
          from: user1
        });
        assert.equal(await this.contract.ownerOf.call(tokenId), user2);
      });
    });

    describe('buying and selling stars', () => {
      beforeEach(async function() {
        //await this.contract.createStar('awesome star!', starId, {
        await this.contract.createStar(starName, starStory, ra, dec, mag, {
          from: user1
        });
      });

      it('user1 can put up their star for sale', async function() {
        assert.equal(await this.contract.ownerOf(tokenId), user1);
        await this.contract.putStarUpForSale(tokenId, starPrice, {
          from: user1
        });

        assert.equal(await this.contract.starsForSale.call(tokenId), starPrice);
      });

      describe('user2 can buy a star that was put up for sale', () => {
        beforeEach(async function() {
          await this.contract.putStarUpForSale(tokenId, starPrice, {
            from: user1
          });
        });

        it('user2 is the owner of the star after they buy it', async function() {
          await this.contract.buyStar(tokenId, {
            from: user2,
            value: starPrice,
            gasPrice: 0
          });
          assert.equal(await this.contract.ownerOf.call(tokenId), user2);
        });

        it('user2 ether balance changed correctly', async function() {
          let overpaidAmount = web3.utils.toWei((0.05).toString(), 'ether');
          const balanceBeforeTransaction = await web3.eth.getBalance(user2);
          await this.contract.buyStar(tokenId, {
            from: user2,
            value: overpaidAmount,
            gasPrice: 0
          });
          const balanceAfterTransaction = await web3.eth.getBalance(user2);

          assert.equal(
            balanceBeforeTransaction - balanceAfterTransaction,
            starPrice
          );
        });
      });
    });

    /////////////////////////////////////////

    describe('transfering tokens simultaneously between 2 owners', () => {
      const starUser1info = ['star1', 'starStory1', 'ra1', 'dec1', 'mag1'];
      const starUser2info = ['star2', 'starStory2', 'ra2', 'dec2', 'mag2'];
      let starUser1TokenId, starUser2TokenId;
      const regex = /[0-9]+/gm;

      beforeEach(async function() {
        // User 1
        let starUser1 = await this.contract.createStar(...starUser1info, {
          from: user1
        });
        let tokenId1 = starUser1.logs[0].args.tokenId.toString();
        starUser1TokenId = tokenId1.match(regex);

        // User 2
        let starUser2 = await this.contract.createStar(...starUser2info, {
          from: user2
        });
        let tokenId2 = starUser2.logs[0].args.tokenId.toString();
        starUser2TokenId = tokenId2.match(regex);
      });

      it('changes token from user1 to user 2 and viceversa', async function() {
        await this.contract.exchangeStars(
          user1,
          starUser1TokenId[0],
          user2,
          starUser2TokenId[0]
        );

        assert.equal(await this.contract.ownerOf(starUser1TokenId[0]), user2);
        assert.equal(await this.contract.ownerOf(starUser2TokenId[0]), user1);
      });
    });
  });

  describe('Other functions tests...', () => {
    beforeEach(async function() {
      // { from: user0 } is a special object that always can be passed as the last parameter of any function
      await this.contract.createStar(starName, starStory, ra, dec, mag, {
        from: user0
      });
    });

    describe('checkIfStarExist()', () => {
      it('verifies if a Star was registered', async function() {
        let coordinates = await this.contract.coordinatesToHash(ra, dec, mag);
        assert.equal(
          await this.contract.checkIfStarExist.call(coordinates),
          true
        );
      });
    });

    describe('mint() and ownerOf()', () => {
      it('verifies ownership after mint', async function() {
        await this.contract.mint('3');
        assert.equal(await this.contract.ownerOf.call(tokenId), user0);
      });
    });

    describe('approve() and getApproved()', () => {
      it('approves and get approved.', async function() {
        await this.contract.approve(user2, tokenId, { from: user0 });
        assert.equal(
          await this.contract.getApproved.call(tokenId, { from: user0 }),
          user2
        );
      });
    });

    describe('setApprovalForAll()', () => {
      it('sets approval for all', async function() {
        await this.contract.setApprovalForAll(user2, tokenId);
        assert.equal(
          await this.contract.isApprovedForAll.call(user0, user2, {
            from: user0
          }),
          true
        );
      });
    });

    describe('safeTransferFrom()', () => {
      it('can be transferred', async function() {
        await this.contract.safeTransferFrom(user0, user2, tokenId);
        assert.equal(await this.contract.ownerOf.call(tokenId), user2);
      });
    });
  });
});
