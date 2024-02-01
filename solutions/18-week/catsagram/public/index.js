
import createMainCommentsContainer from "./components/mainCommentsContainer.js";
import createMainPicContainer from "./components/mainPicContainer.js";

window.onload = () => {

    const main = document.createElement('div');
    main.setAttribute('class', 'main');

    const mainPicContainer = createMainPicContainer();
    main.appendChild(mainPicContainer)

    const commentsContainer = createMainCommentsContainer();
    main.appendChild(commentsContainer)

    document.body.appendChild(main);

}
