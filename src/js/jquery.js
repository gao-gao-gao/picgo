/* eslint-disable no-undef */
$(document).ready(function () {
  $("nav>a").click(function () {
    $(this).addClass("nav-current").siblings("a").removeClass("nav-current");
    $(".content>div")
      .eq($(this).index())
      .addClass("block")
      .siblings("div")
      .removeClass("block");
  });
});
