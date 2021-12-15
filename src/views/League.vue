<template>
  <div>
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
</template>

<script>
import LeagueInner from "../components/LeagueInner.vue";
export default {
  name: "League",
  components: {
    LeagueInner,
  },
};
</script>

<style>
</style>