let ridesBtn = document.querySelector(".btn4");
let deliveriesBtn = document.querySelector(".btn5");
let imageSrc = document.querySelector(".rides-image");
let imageMobile = document.querySelector(".rides-image1");

function imageChange() {
  imageMobile.style.display = "block";
  imageSrc.style.display = "none";
}

function imageChange2() {
  imageMobile.style.display = "none";
  imageSrc.style.display = "block";
}

//  adding an eventListener to deliveriesBtn

deliveriesBtn.addEventListener("click", () => {
  ridesBtn.style.background = "#fff";
  deliveriesBtn.style.background = "#65e317";
  imageChange();
});

//  adding an eventListener to ridesBtn

ridesBtn.addEventListener("click", () => {
  ridesBtn.style.background = "#65e317";
  deliveriesBtn.style.background = "#fff";
  imageChange2();
});
