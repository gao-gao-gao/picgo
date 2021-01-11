/* eslint-disable no-undef */
window.addEventListener("load", function () {
  let phone = document.getElementById("phone");
  let password = document.getElementById("password");
  let btn = document.querySelector(".click");

  btn.onclick = function () {
    ajax({
      // 传递实参
      type: "GET",
      url: "http://localhost:3000/login/cellphone",
      params: {
        phone: phone.value,
        password: password.value,
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
