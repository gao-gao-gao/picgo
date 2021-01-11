/* eslint-disable no-unused-vars */
function ajax(options = {}) {
  // 存储默认值
  const requestOptions = {
    type: "GET",
    url: "",
    params: {},
    data: {},
    header: {
      "Content-Type": "application/json",
    },
    success: function () {},
    error: function () {},
    ...options,
  };

  // 创建ajax对象
  let xhr = new XMLHttpRequest();

  const search = Object.keys(requestOptions.params).reduce(
    (memo, key, index) => {
      memo += `${key}=${requestOptions.params[key]}`;
      if (index !== Object.keys(requestOptions.params).length - 1) {
        memo += "&";
      }
      return memo;
    },
    ""
  );

  requestOptions.url += `?${search}`;

  xhr.withCredentials = true;

  // 配置ajax请求
  xhr.open(requestOptions.type, requestOptions.url);

  xhr.setRequestHeader("Content-Type", requestOptions.header["Content-Type"]);

  let requestData;

  if (requestOptions.type === "POST") {
    // 如果想服务器端传递的参数类型为json
    if (requestOptions.header["Content-Type"] === "application/json") {
      // 将json对象转换为json字符串
      requestData = JSON.stringify(requestOptions.data);
    } else {
      // 发送请求
      requestData = requestOptions.data;
    }
  }

  xhr.send(requestData);

  xhr.onload = function () {
    var contentType = xhr.getResponseHeader("content-type");
    // 获取服务器端返回的响应数据
    var responseText = xhr.responseText;
    // 如果服务器端返回的数据是json数据类型
    if (contentType.includes("application/json")) {
      // 将json字符串转换为json对象
      responseText = JSON.parse(responseText);
    }
    console.log(typeof xhr.status);
    switch (xhr.status) {
      case 200:
        requestOptions.success(responseText, xhr);
        break;
      case 401:
        requestOptions.error(alert("访问被拒绝"));
        break;
      case 403:
        requestOptions.error(alert("资源不可用"));
        break;
      case 404:
        requestOptions.error(alert("找不到页面"));
        break;
      case 405:
        requestOptions.error(alert("不允许此方法"));
        break;
      case 500:
        requestOptions.error(alert("服务内部错误"));
        break;
      default:
        requestOptions.error(alert("未知错误"));
    }
  };
}
