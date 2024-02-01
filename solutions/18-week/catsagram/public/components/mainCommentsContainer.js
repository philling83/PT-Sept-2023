

function createMainCommentsContainer() {
    const commentsContainer = document.createElement('div');
    commentsContainer.setAttribute('class', 'main-comments');


    commentsContainer.appendChild(createInputBox());
    commentsContainer.appendChild(createCommentsBox());


    return commentsContainer;
}

function createCommentsBox() {
    const commentsBox = document.createElement('div');
    commentsBox.setAttribute('class', 'comments-box');

    const comments = JSON.parse(localStorage.getItem('comments'));

    if (comments?.length > 0) {

        comments.forEach(el => {

            const comment = createComment(el);
            commentsBox.appendChild(comment);

        })
    }


    return commentsBox;

}

function createInputBox() {
    const inputContainer = document.createElement('div');
    inputContainer.setAttribute('class', 'input-container');

    const inputField = document.createElement('input');
    inputField.setAttribute('class', 'input-field');
    inputField.type = 'text'

    inputContainer.appendChild(inputField);

    const postCommentButton = document.createElement('button');
    postCommentButton.setAttribute('class', 'post-comment-button');
    postCommentButton.innerText = 'Post'

    inputContainer.appendChild(postCommentButton);


    makePostCommentEvent(postCommentButton);

    return inputContainer;
}

function createComment(text) {
    const commentContainer = document.createElement('div');
    commentContainer.setAttribute('class', 'comment-container');

    const newComment = document.createElement('div');
    newComment.setAttribute('class', 'comment');
    newComment.innerText = text;

    const deleteCommentButton = document.createElement('button');

    deleteCommentButton.setAttribute('class', 'delete-comment-button');
    deleteCommentButton.setAttribute('id', 'delete-button');


    deleteCommentButton.innerText = '❌'


    commentContainer.appendChild(newComment);
    commentContainer.appendChild(deleteCommentButton);


    makeDeleteCommentEvent(commentContainer);

    return commentContainer;
}


function makePostCommentEvent(postButton) {

    postButton.addEventListener('click', event => {
        const inputField = document.querySelector('.input-field');
        const commentBox = document.querySelector('.comments-box');
        const newComment = createComment(inputField.value);
        const initArr = [];

        const commentsDb = JSON.parse(localStorage.getItem('comments'));

        if (commentsDb) {
            commentsDb.push(inputField.value);
        }
        else {
            initArr.push(inputField.value);
        }

        commentBox.appendChild(newComment);

        localStorage.setItem('comments', JSON.stringify(commentsDb ? commentsDb : initArr));
        inputField.value = '';
        event.preventDefault();
    })
}

function makeDeleteCommentEvent(commentContainer) {

    commentContainer.addEventListener('click', event => {
        const button = event.target
        const commentsDb = JSON.parse(localStorage.getItem('comments'));
        const text = commentContainer.children[0].innerText;
        const commentIndex = commentsDb.findIndex(el => el === text);

        if (button.id === 'delete-button') {
            commentsDb.splice(commentIndex, 1);

            localStorage.setItem('comments', JSON.stringify(commentsDb));

            commentContainer.remove();
        }
    })

}



export default createMainCommentsContainer
