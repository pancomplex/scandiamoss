// page change
$(document).on("scroll", function () {
  let scroll_top = $(this).scrollTop();
  let win_height = $(window).height();
  let page = Math.round(scroll_top / win_height) + 1;

  $(".mainBg")
    .removeClass()
    .addClass("mainBg page_" + page);
  $(".topLogo")
    .removeClass()
    .addClass("topLogo page_" + page);
  $(".topMenu")
    .removeClass()
    .addClass("topMenu page_" + page);
  $("section.page_" + page)
    .children()
    .show();
  $("section.page_" + page)
    .siblings()
    .children()
    .hide();
});

// burger menu active
$(".main_burgerBtn").on("click", function () {
  $(".main_burgerBtn, .burger_container").toggleClass("act");
});
