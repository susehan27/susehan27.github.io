var menu = document.getElementById("menuCollapse");

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      menu.classList.add("invisible");
    } else {
      menu.classList.add("visible");
    }
}

$(document).ready(function() {
    scrollFunction();
    console.log("ready!");
})
