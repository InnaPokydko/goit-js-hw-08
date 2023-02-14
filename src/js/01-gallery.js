import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const itemsEl = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", itemsEl);
galleryContainer.addEventListener("click", onImgClickCreateModal);

function createGalleryItems(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onImgClickCreateModal(evn) {
  evn.preventDefault();
  if (!evn.target.classList.contains("gallery__image")) {
    return;
  }

    const instance = basicLightbox.create(
    `<img src="${evn.target.dataset.source}" width="340" height="480"/>`,
    {
      onShow: () => document.addEventListener("keydown", onCloseModal),
      onClose: () => document.removeEventListener("keydown", onCloseModal),
    }
  );
  instance.show();

   function onCloseModal(evn) {
    if (evn.code === "Escape") {
      instance.close();
    }
  }
}
