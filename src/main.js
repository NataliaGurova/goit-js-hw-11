import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import searchImages from "./js/pixabay-api"
import showGallery from "./js/render-functions"


const textInput = document.querySelector("#form");
const button = document.querySelector(".button");
const gallery = document.querySelector(".gallery");
const block = document.querySelector(".block");


textInput.addEventListener("submit", handleSubmit);

// Function to show the loader
const showLoader = () => {
  const loader = document.createElement('span');
  loader.classList.add('loader');
  loader.textContent = "Loading images, please wait...";
  block.append(loader);
};

// Function to hide the loader
const hideLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
};

function handleSubmit(e) {
  e.preventDefault();
  const userSearch = textInput.elements.query.value.trim();

  if (userSearch === "") {
    iziToast.show({
        position: 'topRight',
        color: 'red', // blue, red, green, yellow
        message: "Sorry, there are no images matching<br>your search query. Please try again!",
      });
  } else {
    showLoader();
    searchImages(userSearch);
    }; 
  textInput.reset();
  removeGallery();
};


function removeGallery() {
  gallery.innerHTML = '';
};


