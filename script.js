let menu = false;
async function openNavbar() {
    if (!menu) {
        let element = document.getElementById("menu");
        element.style.display = "flex";
        element.animate(
            [
                // Keyframes
                { opacity: 0, transform: "translateY(-30px)" }, // Start
                { opacity: 1, transform: "translateY(0)" }, // End
            ],
            {
                // Timing options
                duration: 500,
                fill: "forwards",
                easing: "ease-out",
            }
        );
        menu = true;
    } else {
        let element = document.getElementById("menu");
        element.animate(
            [
                { opacity: 1, transform: "translateY(0)" }, //Start
                { opacity: 0, transform: "translateY(-30px)" },
            ],
            { duration: 500, fill: "forwards", easing: "ease-out" }
        );
        await new Promise((r) => setTimeout(r, 500));
        element.style.display = "none";
        menu = false;
    }
}
AOS.init();
var typed = new Typed(".animated", {
    strings: ["Software Engineer", "Web Developer"],
    typeSpeed: 150,
    backSpeed: 90,
    typeDelay: 1000,
    loop: true,
});
let navItems = document.querySelectorAll("#menu li");
console.log(navItems);
navItems.forEach((ele) => {
    ele.onclick = () => {
        //first remove the class from all other items
        navItems.forEach((ele) => ele.classList.remove("activated"));
        //then add the class to curr item
        ele.classList.add("activated");
    };
});
