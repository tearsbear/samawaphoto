$(document).ready(function() {  

  $('.navbar-toggler').on('click', function() {
     $(".navbar-home").removeClass('navbar-transparent')
      $(".navbar-home").addClass('bg-blur')
  });

  $(window).scroll(function() { // check if scroll event happened
    $('.navbar-collapse').collapse('hide');
          if ($(document).scrollTop() > 60) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar-home").removeClass('navbar-transparent')
            $(".navbar-home").addClass('bg-blur')
            // $(".navbar-home").addClass('shadow-sm')
            $(".navbar-brand").removeClass('text-white')
            $(".navbar-brand").addClass('text-primary')
            $(".navclr").removeClass('text-white')
            $(".navclr").addClass('text-primary')
          } else {
            $(".navbar-home").removeClass('bg-blur')
            $(".navbar-home").addClass('navbar-transparent')
            $(".navclr").removeClass('text-primary')
            $(".navclr").addClass('text-white')
            $(".navbar-brand").removeClass('text-primary')
            $(".navbar-brand").addClass('text-white')
            // $(".navbar-home").removeClass('shadow-sm')
          }
        });
})