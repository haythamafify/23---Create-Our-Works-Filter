let switcherList = document.querySelectorAll(".switcher li");
// let imgs = document.querySelectorAll(".gallery img");
let imgs = Array.from(document.images);

switcherList.forEach((element) => {
  element.addEventListener("click", removeActiveClass);
  element.addEventListener("click", mangeImgs);
});

// remove active class from list
function removeActiveClass() {
  switcherList.forEach((e) => {
    e.classList.remove("active");
    this.classList.add("active");
  });
}

// hide all images

function mangeImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });

  document.querySelectorAll(this.dataset.cat).forEach(e=>{
    e.style.display="block"
  })

 
}
