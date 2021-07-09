$(document).on("scroll", function () {
  let scroll_top = $(this).scrollTop();
  let win_height = $(window).height();
  let page = Math.round(scroll_top / win_height);
  console.log(page);

  switch (page) {
    case 0:
      $(".mainBg").removeClass().addClass("mainBg page_1");
      break;
    case 1:
      $(".mainBg").removeClass().addClass("mainBg page_even");
      break;
    case 2:
      $(".mainBg").removeClass().addClass("mainBg page_3");
      break;
    case 3:
      $(".mainBg").removeClass().addClass("mainBg page_even");
      break;
    case 4:
      $(".mainBg").removeClass().addClass("mainBg page_5");
      break;
    default:
    //alert("스크롤 에러!!");
  }
});
