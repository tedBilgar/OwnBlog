$(".card-header").parent('.card').hover(
  function() {
    $(this).children('.collapse').collapse('show');
  }, function() {
    $(this).children('.collapse').collapse('hide');
  }
);
