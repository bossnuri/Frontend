<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-14">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-5">
                        <h1
                          class="
                            text-center
                            display-2
                            teal--text
                            text--accent-3
                          "
                        >
                          Sign in to WeFit
                        </h1>
                        <v-form ref="form" v-model="valid" lazy-validation>
                          <v-text-field
                            v-model="username"
                            :rules="usernameRules"
                            label="Username"
                            name="username"
                            prepend-icon="person"
                            type="text"
                            color="teal accent-3"
                            required
                          />

                          <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                            required
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mb-10">
                        <v-btn
                          :disabled="!valid"
                          rounded
                          color="teal accent-3"
                          dark
                          @click="submit"
                          >SIGN IN</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">New User?</h1>
                        <h3 class="text-center my-4">
                          Enter your personal details and become healthy with
                          us!
                        </h3>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn
                          rounded
                          outlined
                          dark
                          @click="step++"
                          to="/signup"
                          >SIGN UP</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Vue from "vue";

export default {
  data: () => ({
    step: 1,
    valid: true,
    username: "",
    password: "",
    usernameRules: [(v) => !!v || "Username is required"],
    passwordRules: [(v) => !!v || "Password is required"],
  }),
  methods: {
    async submit() {
      if(this.$refs.form.validate()) {
        // submit to backend to authenticate
        let formData = new FormData();
        formData.append("username", this.username);
        formData.append("password", this.password);

        let response = await Vue.axios.post("/api/login", formData);

        if (response.data.success) {
          this.$router.push({ name: "/" });
        }
      }
    },
    // reset() {
    //   this.$refs.form.reset();
    // },
  },
  props: {
    source: String,
  },
};
</script>

<!--<style scoped>-->
<!--.fill-height {-->
<!--  background: url('../assets/logo.png');-->
<!--  background-size: cover;-->
<!--}-->
<!--</style>-->
