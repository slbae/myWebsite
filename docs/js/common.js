 // Function to smoothly scroll back to the top of the page
 function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Show or hide the back to top button based on scroll position
  window.onscroll = function() {
    var backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };
  
  // Attach scrollToTop function to the button's click event
  document.getElementById("back-to-top").addEventListener("click", scrollToTop);