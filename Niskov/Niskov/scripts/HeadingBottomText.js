$(function() {
    $(".headings").click(function() {
      $(this).nextAll('.row').toggleClass('visible');
    });
});
