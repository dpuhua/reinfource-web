import { ActionTree } from 'vuex'
import axios from 'axios'
interface State {}
const actions: ActionTree<State, any> = {
  login ({ commit }, data) {
    return axios.post('user/login', data)
  },
  register ({ commit }, data) {
    return axios.post('user/register', data)
  },
  forget ({ commit }, data) {
    return axios.post('user/forget', data)
  }
}

export default actions
