<template>
  <div class="container">
    <h5>Watch Highlight</h5>
    <h2>{{ data }}</h2>
    <video-embed :src="data"></video-embed>
  </div>
</template>

<script>
export default {
  name: "Highlight",
  props: ["data"],
};
</script>

<style>
</style>