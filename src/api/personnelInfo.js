import request from '../utility/request'

// 获取人员列表信息
async function getUser (params) {
  const res = await request.get(`/getUser/${params}`)
  if (res && res.data) {
    return res.data
  }
  return null
}

export {
  getUser
}
