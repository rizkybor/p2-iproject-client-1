<template>
  <div class="register">
    <!-- <h1>This is Register Page</h1> -->
    <div class="container-fluid ps-md-0">
      <div class="row g-0">
        <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div class="col-md-8 col-lg-6">
          <div class="register d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto">
                  <h3 class="register-heading mb-4">
                    <strong>Create an account for free</strong>
                  </h3>
                  <p>Free forever. No payment needed.</p>
                  <!-- Sign In Form -->
                  <form @submit.prevent="register">
                    <div class="form-floating mb-3">
                      <input
                        v-model="username"
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="input your username"
                      />
                      <label for="floatingInput">Username</label>
                    </div>
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
                    <div class="form-floating mb-3">
                      <input
                        v-model="phoneNumber"
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="input your phone number"
                      />
                      <label for="floatingInput">Phone Number</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        v-model="address"
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="input your address"
                      />
                      <label for="floatingInput">Address</label>
                    </div>
                    <div class="d-grid">
                      <button
                        @click="register"
                        class="
                          btn btn-lg btn-danger btn-register
                          text-uppercase
                          fw-bold
                          mb-2
                        "
                        type="submit"
                      >
                        Register Account
                      </button>
                      <div class="text-center">
                        <p>
                          Back to Login ?
                          <a class="small" @click="toSignIn" href="#"
                            >Click Here</a
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
export default {};
</script>

<style scoped>
.register {
  min-height: 100vh;
}

.bg-image {
  background-image: url("https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80");
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