const btn = document.getElementById("hireBtn");
const box = document.getElementById("contactOptions");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    box.classList.toggle("show");
});