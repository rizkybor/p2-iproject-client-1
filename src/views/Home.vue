<template>
  <div>
    <Navbar />
    <div class="container">
      <center>
        <div
          @click.prevent="isDate"
          class="d-flex justify-content-center mt-5"
          style="width: 20%; height: auto"
        >
          <date-pick v-model="date" :hasInputElement="false"></date-pick>
        </div>
      </center>
      <FixtureInner v-for="data in dataSchedule" :key="data" :data="data" />
      <Standings v-if="currentPage === 'standings'" />
      <League v-if="currentPage === 'league'" />
      <Bookmark v-if="currentPage === 'bookmark'" />
    </div>
    <HFooter></HFooter>
  </div>
</template>

<script>
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";
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
      date: "2021-01-29",
    };
  },
  components: {
    Navbar,
    HFooter,
    FixtureInner,
    Standings,
    League,
    Bookmark,
    DatePick,
  },
  computed: {
    currentPage: function () {
      return this.$store.state.thisPage;
    },
    dataSchedule: function () {
      return this.$store.state.fixture;
    },
  },
  methods: {
    isDate: function () {
      const payload = this.date;
      this.$store.dispatch("fetchFixture", payload);
    },
  },
  created: function () {
    if (localStorage.getItem("token")) {
      this.$store.commit("SET_IS_LOGIN", true);
    }
    let data = this.date;
    this.$store.dispatch("fetchFixture", data);
    this.$store.dispatch("fetchOdds");
  },
};
</script>

<style scoped>
.hay {
  z-index: 100;
}
</style>
