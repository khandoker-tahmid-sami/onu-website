var navLinks = document.getElementById("nav_links");

function showMenu(){
    navLinks.style.opacity = "1";
    navLinks.style.visibility = "visible";
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.opacity = "0";
    navLinks.style.visibility = "hidden";
    // navLinks.style.right = "0";
}


// var serviceSection = document.getElementById("serviceCol");
// var linkIcon = document.querySelectorAll("#linkIcon");
// var googleIcon = document.querySelectorAll("#googleIcon");


// linkIcon.addEventListener("mouseenter", (e) =>{
//     // e.preventDefault();
//     linkIcon.style.backgroundColor = "#87d37c";
//     console.log("mouse hover");
// });
// linkIcon.addEventListener("mouseleave", (e) =>{
//     // e.preventDefault();
//     linkIcon.style.backgroundColor = "transparent";
//     console.log("mouse out");
// });

// googleIcon.addEventListener("mouseenter", (e) =>{
//     // e.preventDefault();
//     googleIcon.style.backgroundColor = "#87d37c";
// });
// googleIcon.addEventListener("mouseleave", (e) =>{
//     // e.preventDefault();
//     googleIcon.style.backgroundColor = "transparent";
// });