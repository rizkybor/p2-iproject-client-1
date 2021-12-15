<template>
  <div>
    <Navbar />
    <div class="container">
      <Fixture v-if="currentPage === 'home' || currentPage === 'fixture'" />
      <Standings v-if="currentPage === 'standings'" />
      <League v-if="currentPage === 'league'" />
      <Bookmark v-if="currentPage === 'bookmark'" />
    </div>
    <HFooter></HFooter>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import HFooter from "vue-hacktiv8-footer";
import Fixture from "../views/Fixture.vue";
import Standings from "../views/Standings.vue";
import League from "../views/League.vue";
import Bookmark from "../views/Bookmark.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    HFooter,
    Fixture,
    Standings,
    League,
    Bookmark,
  },
  computed: {
    currentPage: function () {
      return this.$store.state.thisPage;
    },
  },
  created: function () {
    if (localStorage.getItem("token")) {
      this.$store.commit("SET_IS_LOGIN", true);
    }
    this.$store.dispatch("fetchFixture");
  },
};
</script>
