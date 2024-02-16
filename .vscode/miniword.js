const colorInput = document.getElementById("colorInput");
const fontSizeInput = document.getElementById("fontSizeInput");
const fontSelect = document.getElementById("fontSelect");
const paragraph = document.getElementById("paragraph");

colorInput.addEventListener("input", function() {
    changeColor(colorInput.value);
});

fontSizeInput.addEventListener("input", function() {
    changeFontSize(fontSizeInput.value);
});

fontSelect.addEventListener("input", function() {
    changeFont(fontSelect.value);
});

function changeColor(color) {
    paragraph.style.color = color;
}

function changeFontSize(fontSize) {
    paragraph.style.fontSize = fontSize + "px";
}

function changeFont(font) {
    paragraph.style.fontFamily = font;
}