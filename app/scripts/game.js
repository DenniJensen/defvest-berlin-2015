$(document).ready(function(){
  var clicks = 3;
  var values;

  $('.card-box').flip();

  $(document).on('click', '.unclicked' ,function(){
    $(this).flip();
    console.log(this);
  });
});
