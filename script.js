// JavaScript for scrolling text and image
function scrollText() {
  var container = document.getElementById("scrollingTextContainer");
  var text = container.innerText;
  var wrapper = document.createElement("div");
  wrapper.style.whiteSpace = "nowrap";
  wrapper.innerText = text;
  container.innerHTML = "";
  container.appendChild(wrapper);

  // Calculate the width of the text
  var textWidth = wrapper.offsetWidth;

  // Set image width according to text width
  var image = document.getElementById("scrollingImage");
  image.style.width = textWidth + "px"; // Set image width

  // Start scrolling
  var position = 0;
  setInterval(function () {
    position--;
    if (position < -textWidth) {
      position = container.offsetWidth;
    }
    wrapper.style.transform = "translateX(" + position + "px)";
    image.style.transform = "translateX(" + position + "px)"; // Move image along with text
  }, 15); // Adjust speed here
}


// Section-1 Start scrolling when the page is loaded
window.onload = scrollText;
// This is for first -image sliding
window.addEventListener("load", function () {
  // Get carousel instance
  var carousel = new bootstrap.Carousel(
    document.getElementById("carouselExampleIndicators")
  );
  // Start sliding to the next image
  carousel.next();
});

