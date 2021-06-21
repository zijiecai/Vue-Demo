import { request } from "./require";

// 获取福利页面加载数据
export function getWelfareData(page) {
  return request({
    url: `/api/data/福利/10/${page}`
  })
}

// 获取福利页面图片对应的详情数据
export function getDetailData() {
  return request({
    url: '/api/history/content/day/2017/11/6'
  })
}