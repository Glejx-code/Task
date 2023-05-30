$(document).ready(function() {
    const button = $('.button');
    const subheading = $('.subheading');
    const imageHeading = $('.image-heading');
    const imageContainer = $('.image-container');
    let firstClick = true;

    button.click(function() {
      imageContainer.empty(); 
      const randomParam = new Date().getTime(); 
      $.ajax({
        type: 'POST',
        url: 'backend.php',
        data: {
          request: 'generate_image',
          random: randomParam
        },
        dataType: 'json',
        success: function(response) {
          if (firstClick) {
            button.after('<p class="image-heading">Here is your image:</p>');
            firstClick = false;
          }
        
          const img = new Image();
          img.src = response.url;
          img.onload = function() {
            imageContainer.append(img);
            imageHeading.addClass('animated');
          };
        },
        error: function() {
          alert('Wystąpił błąd.');
        }
      });
    });
  });
