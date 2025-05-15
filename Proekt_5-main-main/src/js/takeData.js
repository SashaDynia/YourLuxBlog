import { createPost } from "./addPost";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const carMake = form.elements.carMake.value;
    const carModel = form.elements.carModel.value;
    const year = form.elements.year.value;
    const description = form.elements.description.value;

    const postData = {
        carMake,
        carModel,
        year,
        description
    };
    createPost(postData);
});