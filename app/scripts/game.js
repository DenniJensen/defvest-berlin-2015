angular.element(document).ready(function () {
  var clicks = 3;
  var clicked = [];

  $('.card-box').flip();

  $(document).on('click', '.unclicked' ,function(){
    $(this).flip();
  });
});
