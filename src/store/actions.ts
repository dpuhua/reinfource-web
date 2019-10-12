import { ActionTree } from 'vuex'
import axios from 'axios'
interface State {}
const actions: ActionTree<State, any> = {
  login ({ commit }, data) {
    return axios.post('user/login', data)
  }
}

export default actions
