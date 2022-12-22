//Declaring global variables
const content = document.querySelector(".content");
const btn = document.querySelector(".btn");
const rate = document.querySelectorAll(".rate");
const rating = document.querySelector(".rating");
let selected;

rating.addEventListener("click", (e) => {
  if (e.target.classList.contains("rate")) {
    removeCheck();
    e.target.classList.add("active");
    selected = e.target.innerText;
  }
});

btn.addEventListener("click", (e) => {
  content.innerHTML = `
    <div class="img1">
    <img src="images/illustration-thank-you.svg" alt="" />
  </div>
  <div class="selected">
    <p>you selected ${selected} out of 5</p>
  </div>
  <div class="body">
    <h3>Thank you!</h3>
    <p>
      We appreciate you taking the time to give us a rating. If you ever
      need more support, Don't hesitate to get in touch
    </p>
  </div>
    `;
});

function removeCheck() {
  rate.forEach((rate) => rate.classList.remove("active"));
}
