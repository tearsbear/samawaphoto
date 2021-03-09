$(document).ready(function() {
      $(document).on('click', '#myImg', function(){
          $('.navbar').hide();
          $('.bg-blur-theme').hide();
          $('#myModal').css('display', 'block')
          $('#img01').attr('src', this.src);
        })
        
        $('.closez').on('click', function(){
            $('#myModal').css('display', 'none')
            $('.navbar').show();
            $('.bg-blur-theme').show();
      })


    $('.changeTheme').on('click', function() {
        $('body').toggleClass('darkTheme');
        $('.infos').removeClass('text-dark');
        $('.infos').addClass('text-white');
    })
})