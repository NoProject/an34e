import api from '@/services/api'

export default {
  getTasks (params, callback) {
    api().get('/task/' + params.name)
      .then((res) => {
        callback(res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  postTasks (params, callback) {
    api().post('/task/post', params)
      .then((res) => {
        callback(res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateTask (params, callback) {
    api().put('/task/put', params)
     .then(() => {
       callback()
     })
     .catch((err) => {
       console.log(err)
     })
  }
}
