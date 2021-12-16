<template>
  <div>
    <Navbar v-if="currentPage === 'standings' && isLogin === true" />
    <div class="container">
      <h3>Standings League</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Team</th>
            <th scope="col">Match</th>
            <th scope="col">Win</th>
            <th scope="col">Lose</th>
            <th scope="col">Draw</th>
            <th scope="col">Point</th>
          </tr>
        </thead>
        <tbody>
          <StandingsInner />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import StandingsInner from "../components/StandingsInner.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Standings",
  components: {
    StandingsInner,
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