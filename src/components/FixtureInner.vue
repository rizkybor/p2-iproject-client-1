<template>
  <div>
    <div class="container">
      <div class="s_bode">
        <a
          v-if="isLogin"
          href="#"
          class="bi-file-plus-fill"
          role="img"
          style="margin-top: -5%; margin-left: -3%"
        ></a>
        <div class="left_section">
          <img
            src="https://www.freepnglogos.com/uploads/manchester-united-logo-png/manchester-united-logo-football-logos-vector-eps-cdr-svg-download-7.png"
            alt=""
          />
          <h2>Manchester United<span> (win) </span></h2>
          <p>Axel Tuanzebe <span> (12') </span></p>
          <p>Edinson Cavani <span> (32') </span></p>
          <p>Edinson Cavani <span> (92') </span></p>
        </div>

        <div class="mid_section">
          <h1>3 - 2</h1>
        </div>
        <div class="right_section">
          <img
            src="https://www.freepnglogos.com/uploads/barcelona-png/barcelona-new-crest-png-sinastf-deviantart-1.png"
            alt=""
          />
          <h2>FC Barcelona <span> (Lose) </span></h2>
          <p>Leo Messi <span> (67') </span></p>
          <p>Leo Messi <span> (49') </span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FixtureInner",
  computed: {
    isLogin: function () {
      return this.$store.state.isLogin;
    },
  },
};
</script>

<style scoped>
a {
  color: #f1b44a;
  font-size: 2rem;
}

a:hover {
  color: #ffd48a;
  font-size: 1.5rem;
}

* {
  margin: 0px;
  padding: 0px;
  transition: 0.3s;
}

.container {
  width: 100%;
  height: auto;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.s_bode {
  width: 80%;
  padding: 50px;
  display: flex;
  position: relative;
  z-index: 1000;
  border-radius: 20px;
  background-image: url(https://images.unsplash.com/photo-1563299796-b729d0af54a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHN0YWRpdW18ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80);
  background-position: 0 -289px;
  background-size: cover;
  overflow: hidden;
}

.s_bode:after {
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -2;
  border-radius: 20px;
}

.s_bode:before {
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: -47%;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: -1;
  transform: skewX(-10deg);
}

.s_bode img {
  height: 100px;
  width: 100px;
}

.left_section {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mid_section {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 26px;
}

.right_section {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.s_bode h2 {
  margin-top: 10px;
  color: #f39c12;
  font-size: 26px;
  font-weight: bold;
}

.s_bode p {
  margin-top: 5px;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
}
</style>