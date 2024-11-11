let titles = ["Coder", "Programmer", "Artist", "designer", "freelancer", "Graphics Designer", "Web Developer", "UI/UX Designer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "Software Developer", "App Developer", "Game Developer", "Web Designer"];
let updatedTitle = titles[Math.floor(Math.random() * titles.length)];

setInterval(() => {
    updatedTitle = titles[Math.floor(Math.random() * titles.length)];
    document.title = "Abhay Gupta | " + updatedTitle;
}, 2000);
