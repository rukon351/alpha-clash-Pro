// function play() {
//     // step -1 : hide the home screen. to hide the home screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function continueGame() {
    // step 1: genarate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet is: ', alphabet)

    // set randomly generated alphabet to the screen (show it);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}


function play() {
    hideElementByid('home-screen');
    showElementById('play-ground');
    continueGame();
}
