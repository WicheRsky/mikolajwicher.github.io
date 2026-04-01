document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    backToTop.style.display = "none";
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    });
    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");
  const thumbs = document.querySelectorAll(".gallery-thumb");
  if (lightbox && lightboxImg && closeBtn && thumbs.length > 0) {
    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
      });
    });
    closeBtn.addEventListener("click", function () {
      lightbox.style.display = "none";
    });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        lightbox.style.display = "none";
      }
    });
  }
});