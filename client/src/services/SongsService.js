import Api from '@/services/Api'

export default {

  // 01. get - songs
  get () {
    return Api().get('songs');
  },

  
  // 02. get - search
  index (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  },


  // 03. post - song
  post (song) {
    return Api().post('songs',song);
  },
  
  // 04. show - shongId
  show (songId) {
    return Api().get('songs/'+songId);
  },

  // 05. put - song, songId
  // 有兩個參數 EditSongPage.vue 要帶兩個參數
  put(song,songId) {
    return Api().put('songs/'+songId+'/edit',song);
  }

};