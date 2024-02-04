window.addEventListener("DOMContentLoaded", () => {
  // Problem 1
  const blueButton = document.getElementById("make-circle-blue");

  blueButton.addEventListener("click", () => {
    const blueCircle = document.getElementById("blue-border-circle");
    blueCircle.classList.add("blue-fill");
  });

  // Problem 2
  const checkBox = document.getElementById("will-not-check");
  checkBox.addEventListener("click", (e) => {
    e.preventDefault();
  });

  // Problem 3
  const bananasButton = document.getElementById("change-bananas-status");
  bananasButton.addEventListener("click", (e) => {
    const bananaText = document.getElementById("bananas-div");
    bananaText.innerHTML = "No Bananas Today!";

    const bananaImg = document.getElementById("bananas-image-div");
    if (bananaImg.children.length) return;

    const noBananas = document.createElement("img");
    noBananas.src = "./images/no-bananas.png";
    bananaImg.appendChild(noBananas);
  });

  // Problem 4
  const cookieButton = document.getElementById("store-cookie");
  const cookieInput = document.getElementById("fav-cookie");
  cookieButton.addEventListener("click", (e) => {

    document.cookie = `favCookie=${cookieInput.value};max-age=${30 * 60}`;
  });

  if (document.cookie) {
    const [key, value] = document.cookie.split("=");
    cookieInput.value = value;
  };

  // Problem 5
  const pieButton = document.getElementById("save-pie");
  pieButton.addEventListener("click", (e) => {
    const pieInput = document.getElementById("pie-type");
    const pieList = document.querySelector(".pie-list");
    const newPie = document.createElement("li");

    if (pieList.children.length >= 5) return;

    if (pieInput.value.length > 0) {
      newPie.innerText = pieInput.value;
      pieList.appendChild(newPie);

      pieInput.value = "";
    };
  });

  // Problem 6
  const iceCreamButton = document.getElementById("save-ice-cream");
  const iceCreamInput = document.getElementById("fav-ice-cream");
  iceCreamButton.addEventListener("click", (e) => {
    localStorage.setItem("fav-flavor", iceCreamInput.value);
  });

  let favFlavor = localStorage.getItem("fav-flavor");

  if (favFlavor) {
    iceCreamInput.value = favFlavor;
  };

  // Problem 7
  let fruitCount = 0;
  const fruitCounter = document.getElementById("total-fruit");
  fruitCounter.innerText = fruitCount;

  const fruitBasket = document.getElementById("fruit-storage");

  const fruitButtons = document.getElementById("fruit-buttons-div");
  fruitButtons.addEventListener("click", (e) => {
    if (e.target.id === "add-apple") {
      if (fruitCount >= 25) return;

      fruitBasket.innerHTML += "🍎";
      fruitCounter.innerText = fruitCount += 1;
    };

    if (e.target.id === "add-orange") {
      if (fruitCount >= 25) return;

      fruitBasket.innerHTML += "🍊";
      fruitCounter.innerText = fruitCount += 1;
    };

    if (e.target.id === "reset-basket") {
      fruitBasket.innerHTML = "";
      fruitCounter.innerText = fruitCount = 0;
    };
  });

  // Problem 8
  const bubbleButton = document.getElementById("bubble-maker");
  bubbleButton.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Problem 9
  const fetchButton = document.getElementById("dictionary-fetch");
  fetchButton.addEventListener("click", async (e) => {
    const resultsArea = document.getElementById("results-area");
    // console.log(resultsArea)
    const res = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/dictionary");
    const data = await res.json();
    const word = data[0].word;
    const definition = data[0].meanings[0].definitions[0].definition;

    const resultsUL = document.createElement("ul")
    const wordLI = document.createElement("li");
    wordLI.innerText = word;

    const definitionLI = document.createElement("li");
    definitionLI.innerText = definition
    // wordLI.innerText += definition;

    resultsUL.appendChild(wordLI);
    resultsUL.appendChild(definitionLI);

    resultsArea.appendChild(resultsUL);
  });
});