<template>
  <v-app id="inspire">
    <v-content>
      <template>
        <nav>
          <v-app-bar flat app color="grey darken-4" dense dark>
            <v-btn to="/home" >
              <v-icon>home</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn to="/" >
              <v-icon color="white-text">LOG OUT</v-icon>
            </v-btn>
          </v-app-bar>
        </nav>
      </template>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-14">
              <v-window v-model="step">
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h3
                          class="text-center my-4"
                        >To keep connected with us, please sign in!</h3>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--" to="/">Sign in</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">Create New Activity</h1>
                        <v-form>

<!--                          <v-select-->
<!--                            :items="['Male', 'Female']"-->
<!--                            label="Gender"-->
<!--                            prepend-icon="fas fa-venus-mars"-->
<!--                            color="teal accent-3"-->
<!--                          >-->
<!--                            <template v-slot:item="{ item, attrs, on }">-->
<!--                              <v-list-item-->
<!--                                v-bind="attrs"-->
<!--                                v-on="on"-->
<!--                                color="teal accent-3"-->
<!--                              >-->
<!--                                <v-list-item-title-->
<!--                                  :id="attrs['aria-labelledby']"-->
<!--                                  v-text="item"-->
<!--                                  color="teal accent-3"-->
<!--                                ></v-list-item-title>-->
<!--                              </v-list-item>-->
<!--                            </template>-->
<!--                          </v-select>-->

<!--                          <v-text-field-->
<!--                            label="Name"-->
<!--                            name="Name"-->
<!--                            prepend-icon="face"-->
<!--                            type="text"-->
<!--                            color="teal accent-3"-->
<!--                          />-->
<!--                          <v-text-field-->
<!--                            label="Age"-->
<!--                            name="Age"-->
<!--                            prepend-icon="accessibility"-->
<!--                            type="text"-->
<!--                            color="teal accent-3"-->
<!--                          />-->
                          <v-text-field
                            id="Weight"
                            label="Weight"
                            name="weight"
                            prepend-icon="opacity"
                            type="text"
                            color="teal accent-3"
                          />
                          <v-text-field
                            id="Height"
                            label="Height"
                            name="height"
                            prepend-icon="height"
                            type="text"
                            color="teal accent-3"
                          />
                          <v-text-field
                            id="CaloriesConsume"
                            label="Calories Consume"
                            name="calories consume"
                            prepend-icon="person"
                            type="text"
                            color="teal accent-3"
                          />
                          <v-text-field
                            id="CaloriesBurn"
                            label="Calories Burn"
                            name="calories burn"
                            prepend-icon="person"
                            type="text"
                            color="teal accent-3"
                          />
<!--                          <v-text-field-->
<!--                            id="Username"-->
<!--                            label="Username"-->
<!--                            name="username"-->
<!--                            prepend-icon="person"-->
<!--                            type="text"-->
<!--                            color="teal accent-3"-->
<!--                          />-->
<!--                          <v-text-field-->
<!--                            id="Password"-->
<!--                            label="Password"-->
<!--                            name="password"-->
<!--                            prepend-icon="lock"-->
<!--                            type="password"-->
<!--                            color="teal accent-3"-->
<!--                          />-->
                        </v-form>
                      </v-card-text>
                      <div class="text-center mb-10">
                        <v-btn rounded color="teal accent-3" dark to="/home">CREATE</v-btn>
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
export default {
  name: "Signup"
};
</script>

<style scoped>

</style>