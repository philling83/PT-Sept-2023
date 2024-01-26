window.addEventListener('DOMContentLoaded', event => {

    //? NESTED DIV EXAMPLE

    const parentDiv = document.querySelector('.parent-div')


    //! added an event listener to the parent div. None of the child
    //! divs have any eventlisteners added, the click event bubbles up
    //! and fires the parent div event listener

    parentDiv.addEventListener('click', event =>{
        window.alert(`I FIRED AN EVENT AS THE PARENT DIV!!!, you clicked on ${event.target.innerText}`)
        // console.log(`CLICKED THIS DIV : ${event.target.innerText}`)

        parentDiv.classList.add('prop-active')

    })

    const childDiv = document.querySelector('.stop-bubble')

    childDiv.addEventListener('click', event =>{
        console.log("YOU CLICKED MY EVENT I AM A CHILD OF THAT PARENT DIV!!! MY EVENT WILL NOT BUBBLE UP!");


        //! STOP propogation
        childDiv.classList.add('prop-active')
        event.stopPropagation();
    })

    const innerDiv = document.querySelector('.inner-div');

    innerDiv.addEventListener('click', event => {

        //! will fire this event, AND the parent's event listener due to event propagation.
        console.log('I HAVE MY OWN EVENT LISTENER WHEN YOU CLICK ON ME');
        // innerDiv.classList.add('prop-active')
    })

    const testButton = document.querySelector('.test-button')

    testButton.addEventListener('click', event => {
        console.log('I have my own event listener, and i prevent the default behavior')
        event.preventDefault();
    })




//? LIST EXAMPLE


    const list = document.querySelector('.test-list')

    //! event listener added on parent list element
    //! because of propogation I dont need to add listeners to each of the children

    list.addEventListener('click', event =>{
        // console.log(`${event.target.innerText}`);
        const label = document.querySelector('.label')

        //! event target is essentially the element that cause the event to go off.
        //! in this case, the element we clicked.
        label.innerText = event.target.innerText
    })




})
