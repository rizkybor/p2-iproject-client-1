import Vue from "vue";
import Vuex from "vuex";
import Swal from "sweetalert2";
import axiosInstances from "../../apis/server"


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    thisPage: "home"
  },
  mutations: {
    SET_IS_LOGIN: function(state, payload = false){
      state.isLogin = payload
    },
    SET_IS_THISPAGE: function(state, payload){
      state.thisPage = payload
    },
  },
  actions: {
    login: function({commit}, {email, password}){
      axiosInstances({
        url: "/login",
        method: "post",
        data: {
          email,
          password
        }
      }).then(({data})=>{
        
        Swal.fire(
          'Login Success!',
          'welcome to I-Football'
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
    googleSignin: function (commit,payload){
      axiosInstances({
        url: "/authGoogle",
        method: "post",
        data: {
          idToken: payload
        }
      }).then(({data})=>{
        console.log(data)
        Swal.fire(
          'Login Success!',
          'welcome to I-Football'
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
