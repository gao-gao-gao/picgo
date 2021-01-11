/* eslint-disable no-unused-vars */
function animate(obj, target, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    // 匀速动画，盒子当前的位置加固定的值10
    // obj.style.left = obj.offsetLeft + 10 + "px";
    // 缓慢动画
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft == target) {
      if (callback) {
        callback();
      }
    }
    obj.style.left = obj.offsetLeft + step + "px";
  }, 15);
}
