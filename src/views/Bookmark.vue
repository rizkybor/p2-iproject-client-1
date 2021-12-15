<template>
  <div>
    <Navbar v-if="currentPage === 'bookmark' && isLogin === true" />
    <div class="container">
      <h3>Bookmark Match</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Type Match</th>
            <th scope="col">Match</th>
            <th scope="col">Date/Time</th>
            <th scope="col">Venue</th>
          </tr>
        </thead>
        <tbody>
          <BookmarkInner />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import BookmarkInner from "../components/BookmarkInner.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "Bookmark",
  components: {
    BookmarkInner,
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