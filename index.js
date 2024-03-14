const no = document.getElementById("no");
const yes = document.getElementById("yes");

const buttons = document.querySelectorAll(".buttons");

let swapped = false;
no.addEventListener("mouseover", () => {
  // e.preventDefault();
  // console.log(swapped);
  if (!swapped) {
    no.style.order = 0;
    yes.style.order = 1;
    // swapped = true;
  } else {
    no.style.order = 1;
    yes.style.order = 0;
  }

  swapped = !swapped;
  // console.log(swapped);
});

yes.addEventListener("click", () => {
  document.querySelector("#img").setAttribute("src", "images/third.gif");
  buttons.forEach((button) => {
    button.style.display = "none";
  });
  document.querySelector("header").style.display = "none";
});
