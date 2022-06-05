import Api from "@/service/Api";

export default {
  get () {
    return Api().get('songs')
  }
}