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

// scrollTop -arrow
const heroSection = document.querySelector(".section-hero");
const footerElement = document.querySelector(".section-footer");
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");
scrollElement.innerHTML = `<span class="scroll-top"><i class="fa-solid fa-arrow-up"></i></span>`;
footerElement.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);

// Function to toggle visibility of scroll-up arrow
const toggleScrollTop = () => {
  if (window.scrollY < 30) {
    scrollElement.style.display = "none";
  } else {
    scrollElement.style.display = "block";
  }
};

// Add event listener for scroll event
window.addEventListener("scroll", toggleScrollTop);

// sticky navbar code
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var sticky = navbar.offsetTop;

  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// card-pop-up javascript
window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".popup").style.display = "block";
  }, 1000);
});
document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

// Section-Datesheet.html
// Dummy data for the exam date sheet
var examSchedule = [
  {
    date: "2024-04-10",
    subject: "Mathematics",
    time: "9:00 AM",
    duration: "2 hours",
  },
  {
    date: "2024-04-12",
    subject: "English",
    time: "10:00 AM",
    duration: "1.5 hours",
  },
  {
    date: "2024-04-15",
    subject: "Science",
    time: "11:30 AM",
    duration: "2.5 hours",
  },
  // Add more exam schedules here if needed
];



