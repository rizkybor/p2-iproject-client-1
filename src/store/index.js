import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    SET_IS_LOGIN: function(state, payload = false){
      state.isLogin = payload
    },
  },
  actions: {
    login: function({commit}, {email, password}){
      axiosInstances({
        url: "/customer/login",
        method: "post",
        data: {
          email,
          password
        }
      }).then(({data})=>{
        router.push("/");
        Swal.fire(
          'Login Success!',
          'welcome to Moviesku'
        )
        localStorage.setItem("token", data.token);
        commit("SET_IS_LOGIN", true)
      }).catch((err)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data ? err.response.data.message:"Something Wrong" ,
        })
      })
    },
  },
  modules: {},
});
