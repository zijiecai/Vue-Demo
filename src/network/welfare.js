import { request } from "./require";

// 获取加载数据
export function getWelfareData(page) {
  return request({
    url: `/api/data/福利/10/${page}`
  })
}