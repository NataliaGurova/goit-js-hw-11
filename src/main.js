import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const textInput = document.querySelector("#form");
const button = document.querySelector(".button");
const gallery = document.querySelector(".gallery");

const options = {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionSelector: "img",
  captionDelay: 250,
};


textInput.addEventListener("submit", handleSubmit);


function handleSubmit(e) {
  e.preventDefault();
  
  const userSearch = textInput.elements.query.value.trim();

  if (userSearch === "") {
    iziToast.show({
        position: 'topRight',
        color: 'red', // blue, red, green, yellow
        message: `"Sorry, there are no images matching your search query. Please try again!"`,
      });
  } else {
    searchName(userSearch);
    const lightbox = new SimpleLightbox('.gallery a', options);
    lightbox.on("show.simplelightbox");
    lightbox.refresh();

    }; 
    console.log(userSearch);
  textInput.reset();
  removeGallery();
  }


function searchName(userSearch) {
  const apiKey = "42275750-ff2dba3de74b1266fbd0f53be";
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${userSearch}&image_type=photo`
  return fetch(url)
    .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
    })
    .then((data) => {
      console.log(data);
      showGallery(data);

    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function showGallery(data) {
  const markup = data.hits
    .map((item) => {
      const { largeImageURL, webformatURL, tags, likes, views, comments, downloads } = item;
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
          </a>
          <div>
            <p><b>Likes </b>${likes}</p>
            <p><b>Views </b>${views}</p>
            <p><b>Comments </b>${comments}</p>
            <p><b>Downloads </b>${downloads}</p>
          </div>
        </li>
      `;
    })
    .join("");
  gallery.insertAdjacentHTML("beforeend", markup);
}


function removeGallery() {
  gallery.innerHTML = '';
}


