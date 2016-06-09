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
    var cropperPosition = cropper.getBoundingClientRect();

    cropperX = Math.max(cropperX, 0);
    cropperY = Math.max(cropperY, 0);
    cropperX = Math.min(containerPosition.width - cropperPosition.width, cropperX);
    cropperY = Math.min(containerPosition.height - cropperPosition.height, cropperY);

    cropper.style.left = cropperX + 'px';
    cropper.style.top = cropperY + 'px';
}

function calculateCropperX(containerPosition, mouseX) {
    return mouseX - dragOffsetX - containerPosition.left;
}

function calculateCropperY(containerPosition, mouseY) {
    return mouseY - dragOffsetY - containerPosition.top;
}
