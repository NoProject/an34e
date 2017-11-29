import api from '@/services/api'

export default {
  doLogin (params, callback) {
    api().post('/user/login', params)
      .then((response) => {
        callback(response)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  doSignIn (params, callback) {
    api().post('/user/post', params)
      .then((response) => {
        callback(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
