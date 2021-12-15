<template>
  <div>
    <Navbar />
    <div class="container">
      <Fixture />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Fixture from "../views/Fixture.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Fixture,
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
