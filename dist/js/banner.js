/* eslint-disable no-undef */
$(document).ready(function () {
  $("window").click(function () {
    ajax({
      type: "GET",
      url: "http://localhost:3000/banner",
      params: {
        type: 0,
      },
      success: function () {
        alert("chengg");
        console.log(banners[0]);
      },
      error: function (es) {
        console.log(es);
      },
    });
  });
});
