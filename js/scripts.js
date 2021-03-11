const writeUs = document.querySelector(".write-us");
const writePopup = document.querySelector(".popup");
const close = document.querySelector(".popup-close");
const form = writePopup.querySelector("form");
const name = writePopup.querySelector("[name=name]");
const mail = writePopup.querySelector("[name=mail]");
const lead = writePopup.querySelector("[name=lead]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

try {
  storage = localStorage.getItem("mail");
} catch (err) {
  isStorageSupport = false;
}


writeUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  writePopup.classList.add("modal-show");
  name.focus();
  if (storage) {
    name.value = storage
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  writePopup.classList.remove("modal-show");
  writePopup.classList.remove("popup-input-error");
});

form.addEventListener("submit", function(evt) {
  if (!name.value || !mail.value || !lead.value) {
    evt.preventDefault();
    writePopup.classList.add("popup-input-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value)
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (writePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writePopup.classList.remove("modal-show");
    }
  }
});



// Slider

const slider = document.querySelector(".description-list");

if (slider) {
  const slides = document.querySelectorAll(".description-item");
  const sliderControls = document.querySelectorAll(".slider-controls button");

  function toggleSlide() {

    const activeSlideIndex = +this.dataset.index;


    sliderControls.forEach(function(control) {
      control.classList.remove("current");
    });

    this.classList.add("current");

    slides.forEach(function(slide) {
      slide.classList.remove("current");
    });

    slides[activeSlideIndex].classList.add("current");
  }

  sliderControls.forEach(function(control) {
    control.addEventListener("click", toggleSlide);
  });
}
