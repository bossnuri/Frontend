<template>
  <v-app id="inspire">
    <v-content>
      <template>
        <nav>
          <v-app-bar flat app color="teal accent-3" dense dark>
            <v-spacer></v-spacer>
            <v-btn to="/profile" color="white--text">
              <v-icon>home</v-icon>
            </v-btn>
          </v-app-bar>
        </nav>
      </template>
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
                          How much calories do you consume a day ?
                        </h1>
                        <v-form>
                          <v-text-field
                            label="Calories"
                            name="Calories"
                            prepend-icon="person"
                            type="text"
                            color="teal accent-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mb-10">
                        <v-btn rounded color="teal accent-3" dark>NEXT</v-btn>
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
<style>
main {
  background-image: url("https://images.jhtassets.com/38434b12264cf3249b6b7ee58bdc73df5bfdb655/");
  background-size: cover;
}
</style>
