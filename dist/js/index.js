/* eslint-disable no-undef */
window.addEventListener("load", function () {
  ajax({
    type: "GET",
    url: "http://localhost:3000/banner",
    success: function (res) {
      console.log(res);
      let urll = res.banners[1].imageUrl;
      console.log(urll);
      // $("#img").attr("src", urll);
      let length = res.banners.length;
      console.log(length);
      $(".carousel").css(
        "background-image",
        "url(" + res.banners[0].imageUrl + ")"
      );
      for (let i = 0; i < length; i++) {
        let li = document.createElement("li");
        li.innerHTML = "<img src='" + res.banners[i].imageUrl + "'>";
        $(".slider .list").append(li);
        var oli = document.createElement("li");
        $(".slider .circle").append(oli);
      }

      // 箭头、小圆点
      let lis = $(".slider .list li");
      let circle = $(".slider .circle li");
      let count = 0;
      circle.eq(0).addClass("current");

      function common(set) {
        lis.eq(set).show().siblings().hide();
        circle.eq(set).addClass("current").siblings().removeClass("current"); //eq()为筛选第几个
        $(".carousel").css(
          "background-image",
          "url(" + res.banners[set].imageUrl + ")"
        );
      }

      // 小圆点
      circle.hover(function () {
        $(this).addClass("current").siblings().removeClass("current");
      });
      circle.click(function () {
        var index = $(this).prevAll().length;
        // console.log(index);
        common(index);
        $(this).addClass("current").siblings().removeClass("current");
      });

      // 箭头
      $(".arrow-right").click(function () {
        auto();
      });
      $(".arrow-left").on("click", function () {
        count--;
        count = count >= 0 ? count : length - 1;
        common(count);
      });

      // 自动播放
      var timer = setInterval(auto, 3000);
      function auto() {
        count++;
        count = count < length ? count : 0;
        common(count);
      }
      //鼠标悬停停止播放
      $(".carousel-main").mouseenter(function () {
        clearInterval(timer);
      });
      $(".carousel-main").mouseleave(function () {
        timer = setInterval(auto, 3000);
      });
    },
  });

  // 推荐歌单
  ajax({
    type: "GET",
    url: "http://localhost:3000/personalized",
    params: {
      limit: "8",
      param: "140y140",
    },
    success: function (res) {
      let recommend = res.result[0].picUrl;
      console.log(recommend);
      console.log(res.result.length);
      let length = res.result.length;
      let add = "<a></a>" + "<em></em>" + "<i></i>" + "<li></li>";
      for (let i = 0; i < length; i++) {
        let span = document.createElement("span");
        span.innerHTML =
          "<img src='" +
          res.result[i].picUrl +
          "'>" +
          "<p>" +
          res.result[i].name +
          "</p>" +
          add;
        $(".record .record-img").append(span);
      }
    },
  });
});
