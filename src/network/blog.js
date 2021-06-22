import { request } from './require';

// 获取博文数据，包括安卓、iOS、前端页面数据
export function getBlogData(type, page) {
  return request({
    url: `/api/data/${type}/10/${page}`
  })
}