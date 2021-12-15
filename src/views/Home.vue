<template>
  <div>
    <Navbar />
    <div class="container">
      <Fixture />
      <Standings />
      <League />
    </div>
    <Login />
    <Register />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Fixture from "../views/Fixture.vue";
import Standings from "../views/Standings.vue";
import League from "../views/League.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Login,
    Register,
    Fixture,
    Standings,
    League,
  },
};
</script>
