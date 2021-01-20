/* eslint-disable no-undef */
$(document).ready(function () {
  // 登录窗口
  let login = $(".login-phone");
  login.hide();
  $(".window-close").css("cursor", "pointer");
  $("#window").click(function () {
    login.show();
  });
  $(".window-close").click(function () {
    login.hide();
  });
  // 登录窗口拖动
  $(".login-bar").hover().css("cursor", "move");
  $(".login-bar").mousedown(function (event) {
    let isMove = true;
    let x = event.pageX - login.offset().left;
    let y = event.pageY - login.offset().top;
    console.log(x);
    console.log(y);
    $(document).mousemove(function (event) {
      if (isMove) {
        let login_left = event.pageX - x;
        let login_top = event.pageY - y;
        login.css({
          left: login_left,
          top: login_top,
        });
      }
    });
    login.mouseup(function () {
      isMove = false;
    });
  });
});
