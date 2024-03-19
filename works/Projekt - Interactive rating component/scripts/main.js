showResult = () => {
  const mainContainer = document.querySelector(".main");
  const thanksContainer = document.querySelector(".mainThankU");
  mainContainer.classList.toggle("flag");
  thanksContainer.classList.remove("flag");
};

document.querySelectorAll(".ratings input").forEach((input) =>
  input.addEventListener("change", () => {
    const numberPlace = document.querySelector(".chosenNumber");
    numberPlace.innerHTML = input.value;
  })
);
