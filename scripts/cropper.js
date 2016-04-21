var cropper = document.querySelector('.cropping-area');
var cropperContainer = document.querySelector('.image-container');
var dragOffsetX;
var dragOffsetY;

cropper.addEventListener('mousedown', function (event) {
    event.preventDefault();
    var cropperPosition = cropper.getBoundingClientRect();
    dragOffsetX = event.clientX - cropperPosition.left;
    dragOffsetY = event.clientY - cropperPosition.top;
    document.addEventListener('mousemove', moveArea);
});

document.addEventListener('mouseup', function () {
    document.removeEventListener('mousemove', moveArea);
});

function moveArea(event) {
    var containerPosition = cropperContainer.getBoundingClientRect();
    cropper.style.left = event.clientX - dragOffsetX - containerPosition.left + 'px';
    cropper.style.top = event.clientY - dragOffsetY - containerPosition.top + 'px';
}
