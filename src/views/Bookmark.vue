<template>
  <div>
    <h3>Bookmark Match</h3>
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