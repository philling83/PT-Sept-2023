/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();
        // console.log(data)

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        const breed = url.split("/")[4] 

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // const newDog = document.createElement("li"); 
        // const newFigure = document.createElement("figure"); 
        // const newImg = document.createElement("img"); 
        // const newFigCaption = document.createElement("figcaption");
        
        // newImg.src = url;
        // newFigCaption.innerText = breed;

        // newFigure.appendChild(newImg);
        // newFigure.appendChild(newFigCaption);
        // // newFigure.append(newImg, newFigCaption);

        // newDog.appendChild(newFigure);


        // /* Add the new dog card as a child to the ul in the .gallery element */
        const ul = document.querySelector("body > section.gallery > ul");
        // ul.appendChild(newDog);
        
        ul.innerHTML += `
            <li>
                <figure>
                    <img src="${url}" />
                    <figcaption>${breed}</figcaption>
                </figure>
            </li>
        `
    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    const firstDog = document.querySelector("body > section.gallery > ul > li");
    if (firstDog) {
        firstDog.remove();
    } else {
        window.alert("No dogs left");
    }

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here 
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    const allDogs = document.querySelectorAll("li");
    let lastDog;

    if (allDogs.length > 0) {
        lastDog = allDogs[allDogs.length - 1];
    };

    if (lastDog) {
        lastDog.remove();
        if (allDogs.length === 1) {
            removeLast.setAttribute("disabled", true);
        }
    } else {
        // window.alert("No dogs left"); 
    }

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here 
});
