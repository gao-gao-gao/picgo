/* eslint-disable no-undef */
window.addEventListener("load", function () {
  let phone = document.getElementById("phone");
  let pwd = document.getElementById("pwd");
  let btn = document.querySelector(".phone-btn");

  btn.onclick = function () {
    ajax({
      // 传递实参
      type: "GET",
      url: "http://localhost:3000/login/cellphone",
      params: {
        phone: phone.value,
        password: pwd.value,
      },
      success: function (res) {
        console.log(res);
      },
      error: function (res) {
        console.log(res);
      },
    });
  };
});
