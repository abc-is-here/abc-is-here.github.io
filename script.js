let titles = ["Coder", "Programmer", "Artist", "designer", "freelancer", "Graphics Designer", "Web Developer", "UI/UX Designer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "Software Developer", "App Developer", "Game Developer", "Web Designer"];
let updatedTitle = titles[Math.floor(Math.random() * titles.length)];

setInterval(() => {
    updatedTitle = titles[Math.floor(Math.random() * titles.length)];
    document.title = "Abhay Gupta | " + updatedTitle;
}, 2000);

(function() {
    "use strict";
    let items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && rect.bottom >= 0
        );
    }

    function callbackFunc() {
        items.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add("in-view");
            }
        });
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    document.addEventListener("scroll", callbackFunc);
})();
