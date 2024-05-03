const body = document.querySelector("body");
const toggleBtn = document.querySelector(".toggle-btn");
const btnIcon = document.querySelector(".circle");

const handleDark = () => {
    const mode = body.getAttribute("mode");
    if (mode=== "light") {
        btnIcon.children[0].setAttribute("name", "moon-outline");
        body.setAttribute("mode","dark");
        btnIcon.style.backgroundColor = "#000000";
        btnIcon.style.transform = "translateX(100px)"; 
        body.style.backgroundColor = "#1b1b1b";

        body.setAttribute("mode","dark");
    }
    else {
        btnIcon.children[0].setAttribute("name", "sunny-outline");
        body.setAttribute("mode","light");
        btnIcon.style.backgroundColor = "#ff2600fd"
        btnIcon.style.transform = "none";
        body.style.backgroundColor = "#0093e9";

        body.setAttribute("mode", "light");

    }
};

toggleBtn.addEventListener("click", handleDark)

