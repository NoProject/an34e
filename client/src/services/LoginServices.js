import api from '@/services/api'

export default {
  doLogin (params, callback) {
    api().post('/user/login', params)
      .then((response) => {
        callback(response)
      })
  },
  doSignIn (params) {
    api().post('/user/post', params)
  }
}
