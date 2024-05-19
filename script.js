//DOM Elements
const boxes = document.querySelectorAll(".box"),
    image = document.querySelector(".image");

//loop trougth each boxes element
boxes.forEach((box) => {
    //When a darggable element dragged over a box element
    box.addEventListener("dragover", (e) => {
        e.preventDefault();//Prevent default behaviour
        box.classList.add("hovered");
    });


    //When a draggable element leaves box element
    box.addEventListener("dragleave", () => {
        box.classList.remove("hovered");
    });

    //When a draggable element is dropped on a box element
    box.addEventListener("drop", () => {
        box.appendChild(image);
        box.classList.remove("hovered");

    })
});