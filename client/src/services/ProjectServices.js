import api from '@/services/api'

export default {
  get () {
    return api().get('/project')
  }
}
