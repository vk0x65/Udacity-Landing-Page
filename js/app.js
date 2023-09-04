// Run the APP when the DOM is ready.
window.onload = runLandPage();


function runLandPage() {
    // Add class 'active' to section when near top of viewport
    // Set sections as active
    // Create a function to determine the section in the viewport and give it a class 'active'
    activeStateClass();
    function activeStateClass() {
        window.onscroll = function () {
            let checkNav = document.getElementsByClassName("menu__link");
            document.querySelectorAll("section").forEach(function(section) {
                if(section.getBoundingClientRect().top >= -400 && section.getBoundingClientRect().top <= 150){
                    section.classList.add("your-active-class");
                    for (link of checkNav) {
                        if (link.textContent === section.dataset.nav) {
                            link.classList.add("your-active-class")
                        } else {
                            link.classList.remove("your-active-class")
                        }
                    }
                }
                else{
                    section.classList.remove("your-active-class");
                }
            });
        }
    }

    // Define a variables to store sections & navbar
    let sections = document.getElementsByTagName("section");
    const navBar = document.getElementById("navbar__list");
    // Create the navbar and add sections to it with a hyper-reference to make a link by using IIFE
    // build the nav
    (function getNav() {for (section of sections) {
        let listItem = document.createElement("li");
        let listItemID = document.createElement("a");
        listItemID.textContent = section.dataset.nav;
        listItemID.setAttribute("class", "menu__link");
        smoothScroll(listItem,section);
        listItem.appendChild(listItemID);
        navBar.appendChild(listItem); }
    }) ();

    // Scroll to anchor ID using scrollTO event
    // Scroll to section on link click
    // I have added a smooth scroll effect
    function smoothScroll(listItem, section) {
        listItem.addEventListener("click", function (e) {
            e.preventDefault();
            section.scrollIntoView({ behavior: "smooth" });
            activeStateClass();
        })
    }
}
