var cropper = document.querySelector('.cropping-area');
var cropperContainer = document.querySelector('.image-container');
var dragOffsetX;
var drafOffsetY;
cropper.addEventListener('mousedown', function (event) {
    event.preventDefault();
    var cropperPosition = cropper.getBoundingClientRect();
    dragOffsetX = event.clientX - cropperPosition.left;
    dragOffsetY = event.clientY - cropperPosition.top;
    document.addEventListener('mousemove', moveArea);
});
document.addEventListener('mouseup', function (event) {
    event.preventDefault;
    document.removeEventListener('mousemove', moveArea);
});

function moveArea() {
    var containerPosition = cropperContainer.getBoundingClientRect();
    cropper.style.left = event.clientX - dragOffsetX - containerPosition.left + 'px';
    cropper.style.top = event.clientY - dragOffsetY - containerPosition.top + 'px';
}
