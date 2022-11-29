var display = document.getElementById("display");
function getBtnValue(a) {
    display.value += a
}
function calculateVal() {
    display.value = eval(display.value)
}
function ClearAll() {
    display.value = "";
}