$(function() {
  const header = $(".my-header");

  $(window).scroll(function() {
    const scroll = $(window).scrollTop();
    if (scroll >= 10) {
      header.addClass("shadow fixed");
    } else {
      header.removeClass("shadow  fixed");
    }
  });

});
