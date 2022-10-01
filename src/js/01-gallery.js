// Add imports above this line
<<<<<<< Updated upstream
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const ListImg = galleryItems.map(item => {
=======
import { galleryItems } from "./gallery-items";
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const ListImg = galleryItems.map((item) => {
>>>>>>> Stashed changes
  return `
  <a class="gallery__item" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>`;
});
<<<<<<< Updated upstream
gallery.insertAdjacentHTML('afterbegin', ListImg.join(' '));
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
// console.log(galleryItems);
=======
gallery.insertAdjacentHTML("afterbegin", ListImg.join(" "));
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
>>>>>>> Stashed changes
