import Api from '@/service/Api'

export default {
  get () {
    return Api().get('songs')
  },

  post (song) {
    return Api().post('songs', song)
  },

  show (songId) {
    return Api().get('songs/${songId}')
  }

}