<template>
  <div>
    <h3>All Match</h3>
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