document.addEventListener('DOMContentLoaded', event => {

    const addButton = document.querySelector('#add');

    addButton.addEventListener('click', event => {
        const shoppingList = document.querySelector('#shopping-list');
        const type = document.querySelector('#type');
        const textInput = document.querySelector('#name');

        const newLi = document.createElement('li');

        newLi.innerText = textInput.value;

        newLi.setAttribute('data-type', type.value);
        

        shoppingList.appendChild(newLi);



        event.preventDefault();
    })



})
