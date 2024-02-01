import makeButtonContainer from "./buttonContainer.js";

function createMainPicContainer() {

    const mainPicContainer = document.createElement('div');
    mainPicContainer.setAttribute('class', 'main-pic')

    mainPicContainer.appendChild(makeHeader());
    mainPicContainer.appendChild(createPicture());
    mainPicContainer.appendChild(makeButtonContainer());

    return mainPicContainer;
}

function makeHeader() {
    const header = document.createElement('h1');
    header.setAttribute('class', 'title');
    header.innerText = 'Catstagram';

    return header;
}

function createPicture() {
    const catPic = document.createElement('img');
    catPic.setAttribute('class', 'cat-img');

    if (localStorage.getItem('catUrl')) {
        catPic.src = localStorage.getItem('catUrl');
    }

    return catPic;
}

export default createMainPicContainer
