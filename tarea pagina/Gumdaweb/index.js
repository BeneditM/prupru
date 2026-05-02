const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
  img.addEventListener("click", () => {
    images.forEach(i => i.style.width = "10%");
    img.style.width = "40%";
  });
});