function filterGallery(category) {
    7
    var gallery = document.getElementById('gallery');
    switch (category) {
        case 'all':
            gallery.style.gridTemplateAreas =
                `'i1 i2 i3 i3'
                'i1 i5 i6 i7'
                'i4 i5 i6 i8'`;
            // gallery.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
            // gallery.style.gridTemplateRows = '1fr 1fr 1fr';
            hideImages([]);
            break;
        case 'logo':
            gallery.style.gridTemplateAreas =
                `'i1 i2'
                'i1 i7'`;
                // gallery.style.gridTemplateColumns = '1fr 1fr';
                // gallery.style.gridTemplateRows = '1fr 1fr';
                hideImages(['i3', 'i3', 'i4', 'i5', 'i6', 'i8']);
            break;

    }

    
    console.log(gallery.style, gallery.style.gridTemplateAreas);
}

function hideImages(images){
    var allImages = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8'];
    allImages.forEach(image => {
        var imageElement = document.getElementById(image);
        console.log(image, imageElement);
       if(images.indexOf(image) > -1){
            imageElement.style.visibility = 'hidden';
       } else{
            imageElement.style.visibility = 'visible';
       }
    });
}

// grid-template-columns: 1fr 1fr 1fr 1fr;
// grid-template-rows: 1fr 1fr 1fr;