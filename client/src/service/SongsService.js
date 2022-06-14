import Api from '@/service/Api'

export default {
  get () {
    return Api().get('songs')
  },

  post (song) {
    return Api().post('songs', song)
  },
  
  show (songId) {
    return Api().get('songs/'+songId)
  },

  // 有兩個參數 EditSongPage.vue 要帶兩個參數
  put(song,songId) {
    //console.log('yy')
    //console.log(song)
    //console.log(songId)
    //console.log('zz')
    return Api().put('songs/'+songId+'/edit',song)
  }

}