
function makeButtonContainer() {
    const mainBtnContainer = document.createElement('div');
    mainBtnContainer.setAttribute('class', 'button-container');

    mainBtnContainer.appendChild(makeVoteCounter());

    const upDownContainer = document.createElement('div');
    upDownContainer.setAttribute('class', 'up-down-container');


    upDownContainer.innerHTML =
        '<div class="up-button vote-button" id="up">⬆</div> <div class="down-button vote-button" id="down">⬇</div>'

    makeVoteEvent(upDownContainer);

    mainBtnContainer.appendChild(upDownContainer);

    const newCatBtn = document.createElement('button');
    newCatBtn.setAttribute('class', 'new-cat-button');

    newCatBtn.innerText = 'NEW CAT'

    makeNewCatEvent(newCatBtn);


    mainBtnContainer.appendChild(newCatBtn);

    return mainBtnContainer;

}

function makeVoteCounter() {
    const voteCounterContainer = document.createElement('div');
    let votes = 0;

    if (localStorage.getItem('votes')) votes = localStorage.getItem('votes');

    voteCounterContainer.setAttribute('class', 'vote-counter-container');

    voteCounterContainer.innerHTML = `<div class="votes-text"> Votes: </div> <div class="votes-num" id="votes"> ${votes} </div>`

    return voteCounterContainer;
}

function makeNewCatEvent(catButton) {

    catButton.addEventListener('click', event => {
        const catImg = document.querySelector('.cat-img');

        fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => {
                // console.log(res);
                return res.json();
            })
            .then(body => {
                // console.log(body);
                const catUrl = body[0].url;
                catImg.src = catUrl;
                localStorage.setItem('catUrl', catUrl);

                resetValues();
        })

        event.preventDefault();
    })
}

function makeVoteEvent(voteButtonContainer) {

    voteButtonContainer.addEventListener('click', event => {
        const button = event.target;
        const voteNumEl = document.querySelector('#votes');
        let voteNum = Number(voteNumEl.innerText);

        if (button.id === 'up') {
            voteNum++
        }
        else if (button.id === 'down') {
            voteNum--
        }

        localStorage.setItem('votes', voteNum);
        voteNumEl.innerText = voteNum;

    })
}

function resetValues() {
    const voteCount = document.querySelector('#votes');
    const comments = document.querySelector('.comments-box');

    voteCount.innerText = 0;
    localStorage.setItem('votes', 0);
    comments.innerHTML = '';
    localStorage.setItem('comments', JSON.stringify([]));
}


export default makeButtonContainer
