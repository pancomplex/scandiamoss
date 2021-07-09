// page change
$(document).on("scroll", function () {
  page_change();
});

let page_change = function () {
  let scroll_top = $(document).scrollTop();
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

  if (page > 1) $(".gotopBtn").addClass("on");
  else $(".gotopBtn").removeClass("on");
};

// menu list translate
let dic = {
  "Online Shop": "온라인샵",
  "About Us": "스칸디아모스",
  Product: "스칸디아모스 제품",
  "Educate Center": "교육센터",
  "Art Center": "아트센터",
  Community: "커뮤니티",
  Gallery: "갤러리",
  "Q&A": "질문과응답",
  Video: "비디오",
  News: "뉴스",
  Notice: "게시판",
  Contact: "문의하기",
};

let translate = function (input_txt) {
  for (word in dic) {
    if (input_txt == word) {
      return dic[word];
    } else if (input_txt == dic[word]) {
      return word;
    }
  }
};

$(".topMenu li, .burgerMenu li")
  .mouseenter(function () {
    let en_txt = $(this).find("span").first().text();
    $(this).find("span").first().text(translate(en_txt)).addClass("ko_txt");
  })
  .mouseleave(function () {
    let ko_txt = $(this).find("span").first().text();
    $(this).find("span").first().text(translate(ko_txt)).removeClass("ko_txt");
  });

// burger menu active
$(".main_burgerBtn").on("click", function () {
  $(".main_burgerBtn, .burger_container, .topMenu").toggleClass("act");
});
