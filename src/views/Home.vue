<template>
  <div>
    <Navbar />
    <div class="container">
      <Fixture />
      <Standings v-if="isLogin" />
      <League v-if="isLogin" />
      <Bookmark v-if="isLogin" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Fixture from "../views/Fixture.vue";
import Standings from "../views/Standings.vue";
import League from "../views/League.vue";
import Bookmark from "../views/Bookmark.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Fixture,
    Standings,
    League,
    Bookmark,
  },
  computed: {
    isLogin: function () {
      return this.$store.state.isLogin;
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
