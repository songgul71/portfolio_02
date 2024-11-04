//**  Art Concept --개인 작업 추가 Tap menu
$(".concept").eq(0)
$(".concept").eq(1)
$(".concept").eq(2)
$(".concept").eq(3)
$(".concept").eq(4)

$(".concept").not(":first").hide();

$(".concept_tap li").click(function () {
  // $(".concept_tap li").css({ "color": "#0b9bef" })
  let num = $(this).index();
  $(".concept").eq(num).show().siblings().hide();

});


// //** 탭 메뉴
// $(".col-lg-8").not(":first").hide();

// $(".services-list a").click(function () {
//   let num = $(this).index();
//   $(".col-lg-8").eq(num).show().siblings().hide();

// });
