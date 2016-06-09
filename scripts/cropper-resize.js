var cropper = document.querySelector('.cropping-area');
var cropperContainer = document.querySelector('.image-container');
var ltHandle = document.querySelector('.handle.lt');
var rtHandle = document.querySelector('.handle.rt');
var rbHandle = document.querySelector('.handle.rb');
var lbHandle = document.querySelector('.handle.lb');

rbHandle.addEventListener('mousedown', function (event) {
    event.preventDefault();
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

}


function resizeBottom(event) {

}


function resizeLeft(event) {

}
