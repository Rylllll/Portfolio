// JavaScript function to open the pop-up
let storedScrollPosition = 0;

// JavaScript function to open the pop-up
function openPopup() {
  const popupContainer = document.getElementById("popupContainer");
  
  // Store the current scroll position before opening the popup
  storedScrollPosition = window.scrollY;

  popupContainer.classList.add("show-popup");
}

// JavaScript function to close the pop-up
function closePopup() {
  const popupContainer = document.getElementById("popupContainer");
  popupContainer.classList.remove("show-popup");

  // Restore the scroll position after closing the popup
  window.scrollTo(0, storedScrollPosition);
}


  $(window).on('load', function() {
    // Simulate a progress bar by gradually increasing the width of the progress bar element
    let progress = 0;
    let progressBar = $('#progress-bar');
    let interval = setInterval(function() {
      progress += 1;
      progressBar.css('width', progress + '%');
      if (progress >= 100) {
        clearInterval(interval);
  
        // Once the progress reaches 100%, you can perform any necessary actions or redirect if needed
        // For example:
        // window.location.href = 'your_target_page.html';
      }
    }, 10); // Adjust the interval for smoother animation
  });
  
  $(window).on('load', function() {
    // Simulate a progress bar by gradually increasing the width of the progress bar element
    let progress = 0;
    let progressBar = $('#progress-bars');
    let interval = setInterval(function() {
      progress += 1;
      progressBar.css('width', progress + '%');
      if (progress >= 100) {
        clearInterval(interval);
  
        // Hide the loading screen once the progress reaches 100%
        setTimeout(function() {
          $('.Loading_screen').fadeOut();
        }, 500); // Add a slight delay before fading out
      }
    }, 10); // Adjust the interval for smoother animation
  });

// email

const contactForm = document.getElementById('contact-form');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4z6v67o', 'template_qybklur', '#contact-form', 'qun3jUiGytkf-bXaR')
    .then(() => {
        Swal.fire({
            icon: 'success',
            showConfirmButton: false, // Hide the "OK" button
            text: 'Message sent successfully',
            timer: 5000,
            
        });

        contactForm.reset();
    })
    .catch(() => {
        Swal.fire({
            icon: 'error',

            showConfirmButton: false, // Hide the "OK" button
            text: 'Message could not be sent',
           
        });
    });
};

contactForm.addEventListener('submit', sendEmail);

 