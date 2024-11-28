const viewButtons = document.querySelectorAll('.view-btn');
const modalOverlay = document.getElementById('modal-overlay');
const modalMedia = document.getElementById('modal-media');
const closeBtn = document.getElementById('close-btn');

viewButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const mediaSource = button.dataset.media;

        if (mediaSource.endsWith('.mp4')) {
            modalMedia.innerHTML = `<video src="${mediaSource}" controls></video>`;
        } else {
            modalMedia.innerHTML = `<img src="${mediaSource}" alt="Project Media">`;
        }

        modalOverlay.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    modalMedia.innerHTML = '';
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
        modalMedia.innerHTML = '';
    }
});
