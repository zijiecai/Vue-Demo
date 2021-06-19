import axios from 'axios';

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    timeout: 5000
  })
  // anxios的拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.error(err);
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.error(err);
  })

  // 发送真正的网络请求
  return instance(config);
} 