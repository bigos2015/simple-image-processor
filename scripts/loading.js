var form = document.getElementById('image-selector-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var inputUrl = document.querySelector('input#url');
    var image = document.querySelector('.image-to-crop')
    image.src = inputUrl.value;
});
