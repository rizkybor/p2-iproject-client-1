import Vue from "vue";
import Vuex from "vuex";
import Swal from "sweetalert2";
import axiosInstances from "../../apis/server"


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    thisPage: "home",
    fixture: [],
    oddsname: [],
    league: []
  },
  mutations: {
    SET_IS_LOGIN: function(state, payload = false){
      state.isLogin = payload
    },
    SET_IS_THISPAGE: function(state, payload){
      console.log(payload,'dari mutasi')
      state.thisPage = payload
    },
    SET_IS_FIXTURE: function(state, payload){
      console.log(payload)
      state.fixture = payload
    },
    SET_IS_ODDSNAME: function(state, payload){
      state.oddsname = payload
      console.log(payload,'mutation')
    },
    SET_IS_LEAGUE: function(state, payload){
      state.league = payload
    }
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
    register: function(commit, payload){
      axiosInstances({
        url: "/register",
        method: "post",
        data: payload
      })
      .then((response)=>{
        console.log(response)
        Swal.fire(
          'Thank You',
          'Register Success!'
        )
      }).catch((err)=>{
       
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err
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
    fetchFixture: function ({commit}, data){
      axiosInstances({
        url: `/fixture/${data}`,
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": "27b1150a9emshca742ce59c4e066p1ee1cdjsnbd43412d94b3"
        },
      })
      .then((response)=>{
        commit("SET_IS_FIXTURE", response.data)
      })
      .catch((err)=>{
        console.log (err)
      })
    },
    fetchLeague: function ({commit}){
      axiosInstances({
        url: "/league",
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": "27b1150a9emshca742ce59c4e066p1ee1cdjsnbd43412d94b3"
        },
      })
      .then((response)=>{
        console.log(response)
        commit("SET_IS_LEAGUE", response.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    fetchOdds: function ({commit}){
      axiosInstances({
        url: `/odds`,
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": "27b1150a9emshca742ce59c4e066p1ee1cdjsnbd43412d94b3"
        },
      })
      .then((response)=>{   
        console.log(response.data)
        commit("SET_IS_ODDSNAME", response.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    setHighlight: function ({commit}, payload){
      let home = payload.home.name
      let away = payload.away.name
      axiosInstances({
        url: `/youtube/${home}+vs+${away}`,
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": "27b1150a9emshca742ce59c4e066p1ee1cdjsnbd43412d94b3"
        },
      })
      .then((response)=>{
        if(this.state.fixture.url){
          this.state.fixture.url = ''
        }

        let data = this.state.fixture
        let temp = []
        data.forEach((el)=>{
          if(el.id === data[0].id){
            el['url'] = response.data
            temp.push({...el})
          } else {
            temp.push({...el})
          }
        })
        console.log(temp)
        commit("SET_IS_FIXTURE", temp)
      })
      .catch((err)=>{
        console.log (err)
      })
    }
  },
  modules: {},
});
