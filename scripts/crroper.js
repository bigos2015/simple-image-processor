var cropper = document.querySelector('.cropping-area');
cropper.addEventListener('mousedown', function () {
    document.addEventListener('mousemove', moveArea);
});
document.addEventListener('mouseup', function (event) {
    event.preventDefault;
    document.removeEventListener('mousemove', moveArea);
});

function moveArea() {
    console.info('coś');
}
