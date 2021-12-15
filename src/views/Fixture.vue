<template>
  <div>
    <h3>All Match</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Action</th>
          <th scope="col">Type Match</th>
          <th scope="col">Match</th>
          <th scope="col">Date/Time</th>
          <th scope="col">Venue</th>
        </tr>
      </thead>
      <tbody>
        <FixtureInner />
      </tbody>
    </table>
  </div>
</template>

<script>
import FixtureInner from "../components/FixtureInner.vue";
export default {
  name: "Fixture",
  components: {
    FixtureInner,
  },
};
</script>

<style>
</style>