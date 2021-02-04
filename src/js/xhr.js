import axios from "axios";
const xhr = axios.create({
  baseURL: "",
  timeout: 3000,
  header: {
    "Content-Type": "application/json",
  },
});

// 添加响应拦截器
xhr.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error.response.status) {
      console.log(error.response.status);
      switch (error.response.status) {
        case 401:
          alert("访问被拒绝");
          break;
        case 403:
          alert("资源不可用");
          break;
        case 404:
          alert("找不到页面");
          break;
        case 405:
          alert("不允许此方法");
          break;
        case 500:
          alert("服务内部错误");
          break;
        default:
          alert("未知错误");
      }
      return Promise.reject(error.response);
    }
  }
);

// 添加请求拦截器
xhr.interceptors.request.use(
  (config) => {
    // 在发送请求之前
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default xhr;
