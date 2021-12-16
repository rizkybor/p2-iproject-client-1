<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="d-flex justify-content-center mt-5">
        <input
          type="date"
          name="dateFixture"
          id="dateFixture"
          v-model="dateFixture"
        />
      </div>
      <FixtureInner v-for="data in fixture" :key="data.id" :data="data" />
      <Standings v-if="currentPage === 'standings'" />
      <League v-if="currentPage === 'league'" />
      <Bookmark v-if="currentPage === 'bookmark'" />
      {{ fixture }}
    </div>
    <HFooter></HFooter>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import HFooter from "vue-hacktiv8-footer";
import FixtureInner from "../components/FixtureInner.vue";
import Standings from "../views/Standings.vue";
import League from "../views/League.vue";
import Bookmark from "../views/Bookmark.vue";

export default {
  name: "Home",
  data() {
    return {
      dateFixture: "2021-01-29",
    };
  },
  components: {
    Navbar,
    HFooter,
    FixtureInner,
    Standings,
    League,
    Bookmark,
  },
  computed: {
    currentPage: function () {
      return this.$store.state.thisPage;
    },
    fixture: function () {
      return this.$store.state.fixture;
    },
  },
  created: function () {
    if (localStorage.getItem("token")) {
      this.$store.commit("SET_IS_LOGIN", true);
    }
    let data = this.dateFixture;
    this.$store.dispatch("fetchFixture", data);
  },
};
</script>
