<template>
  <div>
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
</template>

<script>
import StandingsInner from "../components/StandingsInner.vue";

export default {
  name: "Standings",
  components: {
    StandingsInner,
  },
};
</script>

<style>
</style>