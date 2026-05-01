let display = document.getElementById("display");

/* Add values */
function appendValue(value) {
    display.value += value;
}

/* Clear */
function clearDisplay() {
    display.value = "";
}

/* Backspace */
function backspace() {
    display.value = display.value.slice(0, -1);
}

/* Calculate */
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

/* Theme toggle */
function toggleTheme() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
}

/* Default theme */
document.body.classList.add("dark");