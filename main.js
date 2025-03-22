const revealElements = document.querySelectorAll(".reveal")

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll()