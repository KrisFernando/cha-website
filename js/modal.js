$(document).ready(function() {
    $('.modal-window').on('click', function(e) {
      e.preventDefault();
      $('.overlay').toggleClass('active');
    });

    $('.modal-content, .modal-close, .overlay').on('click', function(e) {
        e.preventDefault();
        $('.overlay').toggleClass('active');
      });
});