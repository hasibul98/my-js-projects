const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  // console.log(e.target);
  ratings.forEach((rating) => {
    if (rating.classList.contains("active")) {
      rating.classList.remove("active");
    }
  });
  // const parent = e.target.parentNode;

  // if (e.target.parentNode.classList.contains("rating")) {
  // if (parent && parent.classList && parent.classList.contains("rating")) {
  // console.log(e.target);

  // e.target.parentNode.classList.add("active");
  // parent.classList.add("active");
  // selectedRating = e.target.parentNode.querySelector("small").innerText;
  // console.log(selectedRating);
  // }
  const selected = e.target.closest(".rating");
  // console.log(selected);

  if (selected) {
    selected.classList.add("active");
    selectedRating = selected.querySelector("small").innerText;
    console.log("Selected Rating:", selectedRating);
  }
});
function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
    <i class='fas fa-heart'></i>
    <strong>Thank You!  </strong>
    <br>
    <strong>${selectedRating}  </strong>
    <p>We'l use your feedback to improve our customer support  </p>
  `;
});
