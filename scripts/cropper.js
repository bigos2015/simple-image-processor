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
    var cropperX = calculateCropperX(containerPosition, event.clientX);
    var cropperY = calculateCropperY(containerPosition, event.clientY);

    cropperX = Math.max(cropperX, 0);
    cropperY = Math.max(cropperY, 0);

    cropper.style.left = cropperX + 'px';
    cropper.style.top = cropperY + 'px';
}

function calculateCropperX(containerPosition, mouseX) {
    return mouseX - dragOffsetX - containerPosition.left;
}

function calculateCropperY(containerPosition, mouseY) {
    return mouseY - dragOffsetY - containerPosition.top;

}
