const showMoreBtn = document.getElementById("show-more");
const secondPart = document.querySelector(".second-part");

showMoreBtn.addEventListener("click", () => {
  secondPart.style.display = "block";
  showMoreBtn.style.display = "none";
});
    
