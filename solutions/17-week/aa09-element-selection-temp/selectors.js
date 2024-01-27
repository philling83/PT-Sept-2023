const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    const seededC = document.getElementsByClassName("seed");
    const seededL = document.querySelectorAll(".seed");
    console.log(seededL);
    
    // 2. Get all seedless fruit elements
    const seedlessC = document.getElementsByClassName("seedless");
    const seedlessL = document.querySelectorAll(".seedless");

    // 3. Get first seedless fruit element
    // const firstSeedless = document.querySelector(".seedless");
    const firstSeedless = document.querySelectorAll(".seedless")[0];

    /* Section 2 */
    // 4. Get inner span with text "you"
    const you = Array.from(document.getElementsByTagName("span"))
        .filter(span => span.innerText === "you");

    // 5. Get all children of element "wrapper"
    // const wrapperChildren = document.getElementById("wrapper").children;
    const wrapperChildren = document.querySelectorAll("#wrapper > *");

    // 6. Get all odd number list items in the list
    // const odds = document.getElementsByClassName("odd")
    const odds = document.querySelectorAll("#two > ol > li:nth-child(odd)");

    // 7. Get all even number list items in the list
    const evens = document.querySelectorAll("#two > ol > li:nth-child(even)")

    /* Section 3 */
    // 8. Get all tech companies without a class name
    const nonClassTech = document.querySelectorAll("#three a:not([class])");

    // 9. Get "Amazon" list element
    const amazon = document.querySelector("#three > p > a.shopping");

    // 10. Get all unicorn list elements (not the image element)
    const unicorns = document.querySelector("#three > ul").children
}

window.onload = select;