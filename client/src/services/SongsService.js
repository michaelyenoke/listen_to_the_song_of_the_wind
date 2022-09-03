import Api from '@/services/Api'

export default {

  // 01. get - songs
  get () {
    return Api().get('songs');
  },

  
  // 02. get - search
  /*
  get (search) { // 這裡的資料要送到後端 controllers/SongsController.js中, 但送過去的search沒有資料(api有觸發), 將SongSearch.vue中的 search_is 改成 search 就可以送到後端！
    return Api().get('songs',{
      params: {
        search: search
        //someRandomKey:search
      }
    })
  },
  */

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