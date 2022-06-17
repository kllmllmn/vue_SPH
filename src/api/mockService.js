// 对axios进行二次封装
import axios from "axios";
import nProgress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
// 用create方法创建一个axios实例
const service = axios.create({
  // 配置通用的基础路径和超时
  baseURL: "/mock", //注意URL大写
  timeout: 5000,
});
// 请求拦截器，在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
service.interceptors.request.use((config) => {
  // 进度条开始动
  nProgress.start();
  return config;
});
// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // 进度条结束
    nProgress.done();
    return res.data;
  },
  (err) => {
    return Promise.reject(new Error(err.message));
  }
);

export default service;
