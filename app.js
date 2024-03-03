const wrapper = document.querySelector(".wrapper"),
  itemEl = wrapper.querySelectorAll(".item"),
  menuEl = document.querySelector(".menu"),
  arrowUp = document.querySelectorAll(".up");

menuEl.addEventListener("click", () => {
  wrapper.classList.toggle("hide");
  if (wrapper.classList.contains("hide")) {
    itemEl.forEach((item) => {
      item.classList.remove("active");
    });
  }
});

arrowUp.forEach((upIcon) => {
  upIcon.addEventListener("click", () => {
    upIcon.parentElement.parentElement.parentElement.classList.toggle("active");
    if (
      upIcon.parentElement.parentElement.parentElement.classList.contains(
        "active"
      )
    ) {
      upIcon.style.transform = "rotate(180deg)";
    } else {
      upIcon.style.transform = "rotate(0deg)";
    }
  });
});
