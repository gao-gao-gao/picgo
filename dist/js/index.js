/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
window.addEventListener("load", function () {
  let btn_left = document.querySelector(".btn-left");
  let btn_right = document.querySelector(".btn-right");
  let carousel_main = document.querySelector(".carousel-main");
  let img_width = carousel_main.offsetWidth;

  // 鼠标经过动态
  carousel_main.addEventListener("mouseenter", function () {
    btn_left.style.display = "block";
    btn_right.style.display = "block";
    clearInterval(timer);
    timer = null;
  });
  // 鼠标移开
  carousel_main.addEventListener("mouseleave", function () {
    btn_left.style.display = "none";
    btn_right.style.display = "none";
    timer = setInterval(function () {
      //手动调用事件
      btn_right.click();
    }, 2000);
  });

  // 动态生成小圆圈
  var ul = carousel_main.querySelector("ul");
  var ol = carousel_main.querySelector("ol");
  for (let i = 0; i < ul.children.length; i++) {
    // 创建li
    let li = document.createElement("li");
    // 自定义属性
    li.setAttribute("index", i);
    // 把里插入到ol
    ol.appendChild(li);
    // 点击-排他思想
    li.addEventListener("click", function () {
      for (let i = 0; i < ol.children.length; i++) {
        ol.childNodes[i].className = "";
      }
      this.className = "current";
      // 移动图片
      let index = this.getAttribute("index");
      // 点击某个小li，把这个li的索引号给num
      num = index;
      circle = index;
      animate(ul, -index * img_width);
    });
  }

  // 给第一个li设置样式
  ol.children[0].className = "current";
  // 克隆第一张图片,强克隆，会把节点等元素一起克隆
  let first = ul.children[0].cloneNode(true);
  ul.appendChild(first);

  // 点击按钮 图片滚动一次
  let num = 0;
  let circle = 0;
  btn_right.addEventListener("click", function () {
    if (num == ul.children.length - 1) {
      ul.style.left = 0;
      num = 0;
    }
    num++;
    animate(ul, -num * img_width);
    circle++;
    // 当点击到最后图片的情况
    if (circle == ol.children.length) {
      circle = 0;
    }
    getCircle();
  });

  // 点击左侧按钮
  btn_left.addEventListener("click", function () {
    if (num == 0) {
      num = ul.children.length - 1; //因为是索引号所有需要-1
      ul.style.left = num * img_width + "px";
    }
    num--;
    animate(ul, -num * img_width);
    circle--;
    // 当点击到最后图片的情况
    if (circle < 0) {
      circle = ol.children.length - 1;
    }
    getCircle();
  });

  function getCircle() {
    // 排他思想，小圆圈
    for (let i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "";
    }
    ol.children[circle].className = "current";
  }

  // 自动播放轮播图，定时器
  let timer = setInterval(function () {
    //手动调用事件
    btn_right.click();
  }, 2000);
});
