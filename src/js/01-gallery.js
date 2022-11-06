// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"

// console.log(galleryItems);
const gallaryImges = document.querySelector('.gallery');
const markupGallary = createMarkupImges(galleryItems);
gallaryImges.insertAdjacentHTML('beforeend', markupGallary)


function createMarkupImges(items){
    return items.map(({original, preview, description}) => 
        `<a class="gallery__item" href="${original}" target="_blank" rel="noopener noreferrer nofollow">
        <img class="gallery__image" src="${preview}" alt="${description}"/></a>`).join('')
}

// console.dir(SimpleLightbox)

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250, captionClass: 'sl-capt'});

