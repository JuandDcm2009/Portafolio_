const next_button = document.querySelector(".next-button");
const back_button = document.querySelector(".back-button");
const block = document.querySelector(".projects-project-container"); 

let current_index = 0;

function next_project() {
    let w_value = document.querySelector(".project").offsetWidth;

    current_index = current_index < 2 ? current_index += 1 : current_index = current_index;

    block.style.transform = `translateX(-${current_index * w_value}px)`;
    block.style.transition = "transform 0.5s ease";
};

function back_project() {
    let w_value = document.querySelector(".project").offsetWidth;
    current_index = current_index > 0 ? current_index -= 1 : current_index = current_index;

    block.style.transform = `translateX(-${current_index * w_value}px)`;
    block.style.transition = "transform 0.5s ease";
};


back_button.addEventListener("click", back_project);
next_button.addEventListener("click", next_project);