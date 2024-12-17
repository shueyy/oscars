document.addEventListener('DOMContentLoaded', function () {
    var splides = document.querySelectorAll('.splide');

    splides.forEach(function (splide) {
        // Initialize each carousel
        var splideInstance = new Splide(splide, {
            pagination: false,
        }).mount();

        // Get the ID of the current carousel
        var carouselId = splide.getAttribute('id');

        // Find the corresponding thumbnails container by matching the ID
        var thumbnailsContainer = document.querySelector('#thumbnails-' + carouselId.replace('carousel-', ''));

        if (thumbnailsContainer) {
            var thumbnails = thumbnailsContainer.querySelectorAll('.thumbnail');
            var currentThumbnail;

            // Set up click event for each thumbnail
            thumbnails.forEach(function (thumbnail, index) {
                thumbnail.addEventListener('click', function () {
                    splideInstance.go(index); // Navigate carousel to the clicked thumbnail
                });
            });

            // Sync thumbnails with the carousel's active slide
            splideInstance.on('mounted move', function () {
                var thumbnail = thumbnails[splideInstance.index];

                if (thumbnail) {
                    if (currentThumbnail) {
                        currentThumbnail.classList.remove('is-active');
                    }

                    thumbnail.classList.add('is-active');
                    currentThumbnail = thumbnail;
                }
            });
        }
    });
});


function toggleCheck(element) {
    element.classList.toggle('checked');  // Toggle the 'checked' class on the holder div
    const voteIcon = element.querySelector('.vote::before'); // Select the .vote::before element
    if (element.classList.contains('checked')) {
        voteIcon.textContent = '✔'; // Change the icon to a checkmark
    } else {
        voteIcon.textContent = '^'; // Revert the icon to a caret (^) symbol
    }
}