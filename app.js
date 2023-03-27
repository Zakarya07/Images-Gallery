function imageGallery() {
    let highlightImage = document.querySelector(".gallery_highlight");
    let imagesPreview = document.querySelectorAll(".room_gallery .pictures_preview img")

    imagesPreview.forEach(image => {
        image.addEventListener("click", () => {
            const smallImageSource=image.src;
            const bigImageSource=smallImageSource.replace('small', "big");
            highlightImage.src=bigImageSource;
            imagesPreview.forEach(image=>{
                image.classList.remove("room_active");
            })
            image.classList.add("room_active");
        })
    });
}

imageGallery();