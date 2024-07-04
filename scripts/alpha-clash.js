// function play() {
//     // step -1 : hide the home screen. to hide the home screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboarKeyUpPress(event) {
    const playerPessed = event.key;

    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if (playerPessed === expectedAlphabet) {
        // console.log('you get a point');

        const currentScore = getTextElementValueById('current-score');
        // console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);


        // -------------------------------------------
        // update score:
        // 1. get a current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);


        // // 2. increase new score
        const newScore = currentScore + 1;

        // // 3. show the update
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        // console.log('you missed. you lost a life!');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver()
        }

        // ===========================
        // step 1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // step 2: reduce the life count
        // const newLife = currentLife - 1;

        // // step 3: display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}


document.addEventListener('keyup', handleKeyboarKeyUpPress);


function continueGame() {
    // step 1: genarate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the screen (show it);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}


function play() {
    // hide everything show only the playground
    hideElementByid('home-screen');
    hideElementByid('final-score');
    showElementById('play-ground');
    continueGame();

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
}


function gameOver() {
    hideElementByid('play-ground');
    showElementById('final-score');

    // update final scoreeeeee
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);
}

