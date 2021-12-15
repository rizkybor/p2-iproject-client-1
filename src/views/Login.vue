<template>
  <div class="login">
    <!-- <h1>This is Login Page</h1> -->
    <div class="container-fluid ps-md-0">
      <div class="row g-0">
        <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div class="col-md-8 col-lg-6">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto">
                  <h3 class="login-heading mb-4"><strong>Login</strong></h3>
                  <p>Welcome Back!</p>

                  <!-- Sign In Form -->
                  <form @submit.prevent="login">
                    <div class="form-floating mb-3">
                      <input
                        v-model="email"
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        v-model="password"
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label for="floatingPassword">Password</label>
                    </div>

                    <div class="d-grid">
                      <button
                        class="
                          btn btn-lg btn-primary btn-login
                          text-uppercase
                          fw-bold
                          mb-2
                        "
                        type="submit"
                      >
                        Sign in
                      </button>
                      <div class="d-grid mb-2">
                        <center>
                          <p>or SignIn with your Google Account :</p>
                          <GoogleLogin
                            :params="params"
                            :renderParams="renderParams"
                            :onSuccess="onSuccess"
                            :onFailure="onFailure"
                          ></GoogleLogin>
                        </center>
                      </div>
                      <div class="text-center">
                        <p>
                          Don't have an account?
                          <a class="small" @click="toSignUp" href="#"
                            >Register here</a
                          >
                        </p>
                      </div>

                      <br />
                      <div class="text-center">
                        <p>
                          Want to search the accommodation first?
                          <a class="small" @click="toHomeUnregister" href="#"
                            >Back to Home</a
                          >
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
import Swal from "sweetalert2";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      params: {
        client_id:
          "807016483713-irp30trcufnlda83l10cmale4ov7ut26.apps.googleusercontent.com",
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitlte: true,
      },
    };
  },
  components: {
    GoogleLogin,
  },
  methods: {
    async login() {
      await this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      this.$router.push("/");
    },
    toSignUp() {
      this.$router.push("/register");
    },
    toHomeUnregister() {
      this.$router.push("/");
    },
    async onSuccess(googleUser) {
      let token = googleUser.getAuthResponse().id_token;
      const payload = token;
      await this.$store.dispatch("googleSignin", payload);
      this.$router.push("/");
    },
    onFailure(error) {
      Swal.fire({
        icon: "error",
        title: "Check your account Google...",
        text: error,
      });
    },
  },
};
</script>

<style scoped>
.login {
  min-height: 100vh;
}

.bg-image {
  background-image: url("https://i.pinimg.com/originals/26/73/86/2673865b70331e174ddfc5350ade8a01.jpg");
  background-size: cover;
  background-position: center;
}

.login-heading {
  font-weight: 300;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}
</style>