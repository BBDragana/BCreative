function filterGallery(category) {
    var gallery = document.getElementById('gallery');
    switch (category) {
        case 'all':
            gallery.style.gridTemplateAreas =
                `'i1 i2 i3 i3'
                'i1 i5 i6 i7'
                'i4 i5 i6 i8'`;
            hideImages([]);
            break;
        case 'logo':
            gallery.style.gridTemplateAreas =
                `'i1 i2'
                'i1 i7'`;
            hideImages(['i3', 'i3', 'i4', 'i5', 'i6', 'i8']);
            break;

        case 'web':
            gallery.style.gridTemplateAreas =
                `'i3 i3'
                'i6 i4'
                'i6 i4'`;
            hideImages(['i1', 'i2', 'i5', 'i7', 'i8']);
            break;

        case 'dev':
            gallery.style.gridTemplateAreas =
                `'i5 i8'`;
            hideImages(['i1', 'i2', 'i3', 'i4', 'i6', 'i7']);
            break;    // 

    }


    console.log(gallery.style, gallery.style.gridTemplateAreas);
}

function hideImages(images) {
    var allImages = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8'];
    for (var i = 0; i < allImages.length; i++) {
        var image = allImages[i];
        var imageElement = document.getElementById(image);
        console.log(image, imageElement);
        if (images.indexOf(image) > -1) {
            imageElement.style.visibility = 'hidden';
        } else {
            imageElement.style.visibility = 'visible';
        }
    }
}

setCounter(document.getElementById('project-count'), 256);
setCounter(document.getElementById('client-count'), 355);
setCounter(document.getElementById('coffe-count'), 825);
setCounter(document.getElementById('recognition-count'), 75);


function setCounter(element, endValue) {
    let startValue = 0;
    let duration = (3000 / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        element.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
}
