/* eslint-disable no-undef */
window.addEventListener("load", function () {
  // nav-tab栏
  $("nav a").click(function () {
    $("nav a").removeClass("current").removeClass("nav-current");
    $(this).addClass("current");
    $(".content div,nav sub").removeClass("block");
    $("." + $(this).attr("title")).addClass("block");
  });

  $("nav a").hover(
    function () {
      if (!$(this).hasClass("nav-current")) {
        $(this).addClass("nav-current");
      }
    },
    function () {
      $(this).removeClass("nav-current");
    }
  );

  // 轮播图
  ajax({
    type: "GET",
    url: "http://localhost:3000/banner",
    success: function (res) {
      let length = res.banners.length;
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
    },
    success: function (res) {
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

  // 入驻歌手
  let singer = function (id) {
    ajax({
      type: "POST",
      url: "http://localhost:3000/user/detail",
      params: {
        uid: id,
      },
      success: function (res) {
        addSinger(res);
      },
    });
  };
  function addSinger(res) {
    let a = document.createElement("a");
    let div = document.createElement("div");
    $(".singer-content").append(a);
    a.innerHTML = "<img src='" + res.profile.avatarUrl + "'>";
    a.append(div);
    div.innerHTML =
      "<span>" +
      res.profile.nickname +
      "</span>" +
      "<p>" +
      res.profile.description +
      "</p>";
  }
  singer(29879272);
  singer(100167517);
  singer(58426904);
  singer(93504818);
  singer(46998208);

  // 热门主播
  let anchor = function (id) {
    ajax({
      type: "POST",
      url: "http://localhost:3000/user/detail",
      params: {
        uid: id,
      },
      success: function (res) {
        addAnchor(res);
      },
    });
  };

  function addAnchor(res) {
    let a = document.createElement("a");
    let div = document.createElement("div");
    $(".singer-anchor").append(a);
    a.innerHTML = "<img src='" + res.profile.avatarUrl + "'>";
    a.append(div);
    div.innerHTML =
      "<span>" +
      res.profile.nickname +
      "</span>" +
      "<p>" +
      res.profile.description +
      "</p>";
  }
  anchor(278438485);
  anchor(91239965);
  anchor(324314596);
  anchor(1611157);
  anchor(2313954);

  // 新碟上架
  // ajax({
  //   type: "POST",
  //   url: "http://localhost:3000/album",
  //   params: {
  //     id: 121480001,
  //   },
  //   success: function () {},
  // });

  // 榜单

  ajax({
    type: "POST",
    url: "http://localhost:3000/toplist/detail",
    success: function (res) {
      let img = document.createElement("img");
      let a = document.createElement("a");
      // console.log(res.list[0].tracks[0].first);
      $(".list-img").append(img, a);
      $(img).attr("src", res.list[0].coverImgUrl);
      $(".list-font h3").text(res.list[0].name);
      for (let i = 0; i < 3; i++) {
        let li = document.createElement("li");
        $(".list-sing").append(li);
      }
      $("dl").clone().appendTo(".list");
    },
  });
});
