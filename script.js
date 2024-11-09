"use strict";
const colorBoxes = [
    document.getElementById("color1"),
    document.getElementById("color2"),
    document.getElementById("color3"),
    document.getElementById("color4"),
    document.getElementById("color5"),
];
const generateButton = document.getElementById("generate-colors-btn");
const notification = document.getElementById("notification");
const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
};
const generatePalette = () => {
    colorBoxes.forEach(box => {
        const color = getRandomColor();
        box.style.backgroundColor = color;
        box.setAttribute("data-color", color); // Store color code in a data attribute
    });
};
const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color).then(() => {
        notification.classList.add("show");
        setTimeout(() => notification.classList.remove("show"), 1000);
    });
};
generateButton.addEventListener("click", generatePalette);
colorBoxes.forEach(box => {
    box.addEventListener("click", () => {
        const color = box.getAttribute("data-color");
        copyToClipboard(color);
    });
});
generatePalette();
