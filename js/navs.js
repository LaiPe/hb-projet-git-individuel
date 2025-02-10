const checkbox = document.getElementById("activ-nav-menu");

document.querySelectorAll("header nav a").forEach((a) => {
    a.addEventListener("click", () => {
      checkbox.checked = false;
    });
})