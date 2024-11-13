let titles = ["Coder", "Programmer", "Artist", "Designer", "Freelancer", "Graphics Designer", "Web Developer", "UI/UX Designer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "Software Developer", "App Developer", "Game Developer", "Web Designer"];
let updatedTitle = titles[Math.floor(Math.random() * titles.length)];
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');

const colors = ['#fff', '#d1d1d1', '#a8a8a8', '#a8a8a8'];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener('mousemove', function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.x += (x - circle.x) * 0.1;
        circle.y += (y - circle.y) * 0.1;

        circle.style.left = circle.x - 2 + 'px';
        circle.style.top = circle.y - 2 + 'px';
        circle.style.scale = (circles.length - index) / circles.length;

        x = circle.x;
        y = circle.y;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();

setInterval(() => {
    updatedTitle = titles[Math.floor(Math.random() * titles.length)];
    document.title = "Abhay Gupta | " + updatedTitle;
}, 2000);

(function () {
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
