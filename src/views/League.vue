<template>
  <div>
    <Navbar v-if="currentPage === 'league' && isLogin === true" />
    <div class="container">
      <h3>League</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">League Type</th>
          </tr>
        </thead>
        <tbody>
          <LeagueInner />
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
    isLogin: function () {
      return this.$store.state.isLogin;
    },
  },
};
</script>

<style>
</style>