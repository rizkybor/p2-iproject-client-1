<template>
  <div>
    <h3>Standings League</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
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