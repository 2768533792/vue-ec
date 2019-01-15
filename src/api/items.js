import Axios from 'axios'

/* 获取商品api */

const getItems = async (data, url, method = 'GET') => {
  let res = await Axios({
    method,
    url,
    data
  })
  return res
}

export default {
  getItems
}
