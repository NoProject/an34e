import api from '@/services/api'

export default {
  doLogin (params) {
    api.post('/user/login', params)
  }

  doSignIn (params) {
  	api.post('/user/post', params)
  }
}
