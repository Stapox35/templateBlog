document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    let rozwiniete = false;
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
        if(!rozwiniete)
        {
            document.getElementById('sc').style.backgroundColor = "rgba(0, 0, 0, 0.9)";
            document.getElementsByTagName('html')[0].style.overflow = "hidden";
        }
        else
        {
            document.getElementById('sc').style.backgroundColor = "rgba(0, 0, 0, 0)";
            document.getElementsByTagName('html')[0].style.overflow = "visible";
        }
        rozwiniete = !rozwiniete;

    });
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var images = document.querySelectorAll(".gallery-item img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var currentIndex = 0;

function showImage(index) {
    modal.style.display = "block";
    modalImg.src = images[index].src;
    captionText.innerHTML = images[index].alt;
    currentIndex = index;
}

images.forEach((image, index) => {
    image.onclick = function() {
        showImage(index);
    }
});

// Get the <span> elements that close the modal and navigate images
var span = document.getElementsByClassName("close")[0];
var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks on <span> (prev), show the previous image
prev.onclick = function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

// When the user clicks on <span> (next), show the next image
next.onclick = function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}

// When the user clicks anywhere outside of the modal image, close it
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}