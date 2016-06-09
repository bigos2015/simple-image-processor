var cropper = document.querySelector('.cropping-area');
var cropperContainer = document.querySelector('.image-container');
var ltHandle = document.querySelector('.handle.lt');
var rtHandle = document.querySelector('.handle.rt');
var rbHandle = document.querySelector('.handle.rb');
var lbHandle = document.querySelector('.handle.lb');

rbHandle.addEventListener('mousedown', function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    document.addEventListener('mousemove', resizeRight);
    document.addEventListener('mousemove', resizeBottom);
});

document.addEventListener('mouseup', function () {
    document.removeEventListener('mousemove', resizeRight);
    document.removeEventListener('mousemove', resizeBottom);
    document.removeEventListener('mousemove', resizeTop);
    document.removeEventListener('mousemove', resizeLeft);
});

function resizeTop(event) {

}

function resizeRight(event) {
    var cropperPosition = cropper.getBoundingClientRect();
    var newWidht = event.clientX - cropperPosition.left;
    cropper.style.width = newWidht + 'px';
}


function resizeBottom(event) {
    var cropperPosition = cropper.getBoundingClientRect();
    var newHeight = event.clientY - cropperPosition.top;
    cropper.style.height = newHeight + 'px';
}


function resizeLeft(event) {

}
