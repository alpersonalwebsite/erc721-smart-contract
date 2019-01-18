const modalWindow = document.querySelector('body > .modal');

// Modal template 1: no MetaMask
const noMetamaskAcCtemplate =
  '<div class="modal-background"></div><div class="modal-card"> <header class="modal-card-head"> <p class="modal-card-title">Warning!</p> <button class="delete close" aria-label="close"></button> </header> <section class="modal-card-body"> Please, login into your MetaMask account. </section> <footer class="modal-card-foot"> <button class="button close">OK</button> </footer> </div>';

//Modal template 2: zoom image
let showFullImage = function(imagePath) {
  return (
    '<div class="modal-background"><img src="' +
    imagePath +
    '" class="bigImage"></div><button class="modal-close is-large close" aria-label="close"></button>'
  );
};

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}

// The default (top) wallet account from a list of test accounts
// web3.eth.defaultAccount = web3.eth.accounts[0];
web3.eth.getAccounts(function(error, accounts) {
  web3.eth.defaultAccount = web3.eth.accounts[0];
});

if (!web3.eth.defaultAccount) {
  // We dont care about IE9
  modalWindow.classList.add('is-active');
  modalContent(noMetamaskAcCtemplate);
  eventsForClosing();
}

function eventsForClosing() {
  document.querySelectorAll('.close').forEach(function(elem) {
    elem.addEventListener('click', closeModal);
  });
}

function closeModal() {
  modalWindow.classList.remove('is-active');
}

function modalContent(type, imagePath) {
  if (imagePath) {
    document.querySelector('.modal').innerHTML = type(imagePath);
    return;
  }
  document.querySelector('.modal').innerHTML = type;
}

// The interface definition for your smart contract (the ABI) >> build/contracts/StarNotary.json > abi property
const StarNotary = web3.eth.contract(ABI);
// Grab the contract at specified deployed address with the >> interface defined by the ABI
const starNotary = StarNotary.at('0xF7c71e77b4E0670019D4e4C89Be877428A25489d');

const starImage = 'images/starIcon.png';
const radar = 'images/radar.gif'; // For loading

let name, particularSection;

let basicTemplateCard = (starImageClass, starImage, name, particularSection) =>
  '<article class="media"><figure class="media-left"><p class="image is-64x64"><img src="' +
  starImage +
  '" class="' +
  starImageClass +
  '" ></p></figure><div class="media-content"><div class="content"><p><strong>' +
  name +
  '</strong>' +
  particularSection +
  '</p></div><div></article>';

function claimButtonClicked() {
  name = document.querySelector('#star-name').value;
  const story = document.querySelector('#star-story').value;
  const ra = document.querySelector('#star-ra').value;
  const dec = document.querySelector('#star-dec').value;
  const mag = document.querySelector('#star-mag').value;

  // Verify ra/dec/mag just number
  let coordinatesArr = [];
  const errorNumberCoordinatesTemplate =
    'can only be numbers (0 to 9), dot (.) or negative sign (-) and spaces( ). <br />Examples: <br />RA 13h 03m 33.35sec should be 13 03 33.35 <br />Dec -49° 31’ 38.1” should be -49 31 38.1';

  coordinatesArr = [ra, dec, mag];

  console.log(coordinatesArr);

  const pattern = /[^0-9 .-]/g;

  let errorsCorrdinates = 0;
  for (let i = 0; i < coordinatesArr.length; i++) {
    console.log('corriendo');
    if (pattern.test(Number(coordinatesArr[i].replace(/[. ]/gi, '')))) {
      errorsCorrdinates++;
    }
  }

  document.querySelector('.corrdinatesValidation').innerHTML =
    'You have ' +
    errorsCorrdinates +
    ' errors.<br /> Please, check your coordinates and submit again. <br />Message: ra/dec/mag ' +
    errorNumberCoordinatesTemplate;

  document.querySelector('.corrdinatesValidationWrap').classList.add('show');

  console.log(errorsCorrdinates);

  if (errorsCorrdinates > 0) {
    return;
  } else {
    document
      .querySelector('.corrdinatesValidationWrap')
      .classList.remove('show');
  }

  web3.eth.getAccounts(function(error, accounts) {
    if (error) {
      console.log(error);
      return;
    }

    const account = accounts[0];

    starNotary.createStar.sendTransaction(name, story, ra, dec, mag, function(
      error,
      result
    ) {
      document.querySelector('#star-answer').innerHTML =
        '<b>Loading...</b> Please wait...!';

      shortTx = result.substring(0, 4);

      if (!error) {
        particularSection =
          '<br>Great! </b>Check your transaction here <a href="https://rinkeby.etherscan.io/tx/' +
          result +
          '">' +
          shortTx +
          '...</a>';
        document.querySelector('#star-answer').innerHTML = basicTemplateCard(
          'register',
          starImage,
          name,
          particularSection
        );

        const starClaimedEvent = starNotary.Transfer({ from: account });
        starClaimedEvent.watch(function(error, result) {
          console.log(result);
          if (!error) {
            console.log('If I see this Tx should be done!');
            //location.reload();
          } else {
            console.log('watching for star claimed event is failing');
          }
        });
      } else {
        console.log(error);
      }
    });
  });
}

function checkStarByTx() {
  web3.eth.getAccounts(function(error, accounts) {
    if (error) {
      console.log(error);
      return;
    }
    const account = accounts[0];
    const tokenId = document.querySelector('#star-token').value;
    if (tokenId == '' || tokenId == ' ') {
      alert('Token should be something...!');
      return;
    }
    if (!tokenId.match(/^[0-9]*$/gm)) {
      alert('Token should be a number...!');
      return;
    }

    // We pass thecurrent window´s size
    const windoWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    const windowHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );

    // We are also going to pass starInfo: tokenId, ra, dec, mag
    starNotary.tokenIdToStarInfo.call(tokenId, function(error, result) {
      if (!error) {
        if (!result[0]) {
          document.querySelector('#star-show').innerHTML =
            '<b>Please, provide a valid token</b>';
          return;
        }

        console.log(result);

        const ra = result[2];
        const dec = result[3];
        const mag = result[4];

        const secStarStory =
          '<span style="display: block;"><span class="icon"><i class="fas fa-signature"></i></span>' +
          result[1] +
          '</span>';

        const secStarInfo =
          '<div class="buttons has-addons"> <span class="button">RA: ' +
          result[2] +
          '</span> <span class="button">DEC: ' +
          result[3] +
          '</span> <span class="button">MAG: ' +
          result[4] +
          '</span> </div>';

        particularSection = secStarStory;
        particularSection += secStarInfo;

        const yourStarImage = 'images/' + tokenId + '.png';

        let starResponse = basicTemplateCard(
          'retrieve',
          radar,
          result[0],
          particularSection
        );

        document.querySelector('#star-show').innerHTML = starResponse;

        const url = '/star';
        const data = {
          starInfo: { tokenId, ra, dec, mag },
          userInfo: { windoWidth, windowHeight }
        };

        fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(response => {
            // It should retrieve something like: {"imagePath":"public/images/2.png"}
            //alert(JSON.stringify(response));
            document.querySelector('.retrieve').src = response.imagePath;
            document.querySelector('.retrieve').onclick = function() {
              modalWindow.classList.add('is-active');
              modalContent(showFullImage, response.imagePath);
              eventsForClosing();
            };
          })
          //.then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error));
      } else {
        console.log(error);
      }
    });

    /*
    document.querySelector('#star-show').innerHTML =
    '<b>Loading...</b> Please wait...!';
    */
  });
}
