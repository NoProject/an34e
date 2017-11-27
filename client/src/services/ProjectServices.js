import api from '@/services/api'

export default {
  get (callback) {
    api().get('/project')
      .then((res) => {
        callback(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
