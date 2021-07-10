let photoFilter = document.querySelector('#filtro-da-foto');

photoFilter.addEventListener('change', e => {
    bodyToggle.style.filter = photoFilter.value;
});