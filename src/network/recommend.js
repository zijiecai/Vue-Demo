import { request } from './require';

export function getRecommendData() {
  return request({
    url: '/api/history/content/day/2017/11/10'
  })
}