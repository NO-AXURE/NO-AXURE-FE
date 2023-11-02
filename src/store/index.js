import { createStore } from 'vuex'
export default createStore({
  state: { //userId, authToken null 상태
    userId: "",
    authToken: "",
    JoinPopState : false,
    LoginPopState : false,
  },
  modules: {
  }
})
 