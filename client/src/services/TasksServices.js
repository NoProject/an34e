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
     .then((res) => {
       callback(res)
     })
     .catch((err) => {
       console.log(err)
     })
  },
  deleteTask (params, callback) {
    api().delete('/task/delete' + params.id)
      .then((res) => {
        callback(res.data.deleted)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
