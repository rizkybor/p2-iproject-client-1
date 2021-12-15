<template>
  <div class="Fixture">
    <FixtureInner />
  </div>
</template>

<script>
import FixtureInner from "../components/FixtureInner.vue";
export default {
  name: "Fixture",
  components: {
    FixtureInner,
  },
  computed: {
    isLogin: function () {
      return this.$store.state.isLogin;
    },
  },
};
</script>

<style scoped>
</style>