<template>
  <div>
    <div class="Fixture">
      <FixtureInner />
    </div>
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

<style scoped>
</style>