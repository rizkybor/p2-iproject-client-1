<template>
  <div>
    <div id="navbar">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="container navbar-brand" href="#"
          ><strong>I-Football</strong></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#" v-if="!isLogin">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-if="!isLogin" @click="toSignIn"
                >Login</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-if="!isLogin" @click="toSignUp"
                >Register</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                v-if="isLogin"
                @click.prevent="toFixture('fixture')"
                >Fixture</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                v-if="isLogin"
                @click.prevent="toStandings('standings')"
                >Standings</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                v-if="isLogin"
                @click.prevent="toLeague('league')"
                >League</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                v-if="isLogin"
                @click.prevent="toBookmark('bookmark')"
                >Bookmark</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                @click.prevent="toLogout"
                v-if="isLogin"
                ><strong>Logout</strong></a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Navbar",
  computed: {
    isLogin: function () {
      return this.$store.state.isLogin;
    },
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    toSignIn() {
      this.$router.push("/login");
    },
    toSignUp() {
      this.$router.push("/register");
    },
    toFixture(payload) {
      this.$store.commit("SET_IS_THISPAGE", payload);
    },
    toStandings(payload) {
      this.$store.commit("SET_IS_THISPAGE", payload);
    },
    toLeague(payload) {
      this.$store.commit("SET_IS_THISPAGE", payload);
    },
    toBookmark(payload) {
      this.$store.commit("SET_IS_THISPAGE", payload);
    },
    toLogout() {
      this.$store.state.isLogin = false;
      localStorage.clear();
      this.$router.push("/login");
      Swal.fire("Thank You! Logout Success!");
    },
  },
};
</script>

<style scoped>
</style>