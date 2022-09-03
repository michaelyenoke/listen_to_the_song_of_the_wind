import Api from '@/services/Api'

export default {

  // 01. get - blog
  get () {
    return Api().get('blogs');
  }

};