<template>
  <div>
    <h3>Bookmark Match</h3>
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
        <BookmarkInner />
      </tbody>
    </table>
  </div>
</template>

<script>
import BookmarkInner from "../components/BookmarkInner.vue";
export default {
  name: "Bookmark",
  components: {
    BookmarkInner,
  },
};
</script>

<style>
</style>