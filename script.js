// Typing Animation
let text = ["Web Developer", "AI Enthusiast", "Engineer"];
let i = 0, j = 0;
let current = "", isDeleting = false;

function type() {
    current = text[i];

    if (!isDeleting) {
        document.getElementById("typing").innerHTML = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.getElementById("typing").innerHTML = current.substring(0, j--);
        if (j == 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }
    setTimeout(type, 100);
}
type();

// Open certificate
function openImage(src) {
    window.open(src, "_blank");
}