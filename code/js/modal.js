$(document).ready(function() {
    $('.modal-window').on('click', function(e) {
      e.preventDefault();
      $('.overlay').css('display','block');
    });

    $('.modal-close').on('click', function(e) {
      e.preventDefault();
      $('.overlay').css('display','none');
    });
});