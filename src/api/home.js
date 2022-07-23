import request from '@/utility/request'

// 获取部门
async function getdepartment (data) {
  const res = await request.post('/getdepartment', data)
  if (res && res.data) {
    return res.data
  }
  return null
}

export {
  getdepartment
}
