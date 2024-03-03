document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image");

  let draggedItem = null;

  images.forEach((image) => {
    image.addEventListener("dragstart", function () {
      draggedItem = image;
      setTimeout(() => {
        image.style.display = "none";
      }, 0);
    });

    image.addEventListener("dragend", function () {
      setTimeout(() => {
        draggedItem.style.display = "block";
        draggedItem = null;
      }, 0);
    });

    image.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    image.addEventListener("dragenter", function (e) {
      e.preventDefault();
      this.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    });

    image.addEventListener("dragleave", function () {
      this.style.backgroundColor = "transparent";
    });

    image.addEventListener("drop", function () {
      this.style.backgroundColor = "transparent";
      if (draggedItem !== null && draggedItem !== this) {
        const tempBackground = this.style.backgroundImage;
        this.style.backgroundImage = draggedItem.style.backgroundImage;
        draggedItem.style.backgroundImage = tempBackground;
      }
    });
  });
});
