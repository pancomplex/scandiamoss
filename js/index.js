// page change
$(document).on("scroll", function () {
  let scroll_top = $(this).scrollTop();
  let win_height = $(window).height();
  let page = Math.round(scroll_top / win_height) + 1;
  console.log(page);

  switch (page) {
    case 1:
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
      break;
    case 2:
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
      break;
    case 3:
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
      break;
    case 4:
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
      break;
    case 5:
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
      break;
    default:
    //alert("스크롤 에러!!");
  }
});
