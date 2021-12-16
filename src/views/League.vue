<template>
  <div>
    <Navbar v-if="currentPage === 'league' && isLogin === true" />
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">League Football</th>
          </tr>
        </thead>
        <tbody>
          <LeagueInner v-for="data in league" :key="data.id" :data="data" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import LeagueInner from "../components/LeagueInner.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "League",
  components: {
    LeagueInner,
    Navbar,
  },
  computed: {
    currentPage: function () {
      return this.$store.state.thisPage;
    },
    league: function () {
      return this.$store.state.league;
    },
    isLogin: function () {
      return this.$store.state.isLogin;
    },
  },
  created: function () {
    if (localStorage.getItem("token")) {
      this.$store.commit("SET_IS_LOGIN", true);
    }
    this.$store.dispatch("fetchLeague");
  },
};
</script>

<style>
</style>