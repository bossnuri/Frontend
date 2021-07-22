<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-14">
              <v-window v-model="step">
                <v-window-item :value="2">


                  <v-row class="fill-height">
                    <v-col cols="12" md="8">

                      <v-card-text class="white--text mt-12">
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
                      </v-card-text>


                      <v-row class="fill-height">
                        <v-col>
                          <v-card-text class="mt-12">
                          <v-sheet height="400">
                            <v-calendar
                              color="primary"
                              type="day"
                            >
                              <template v-slot:day-header="{ present }">
                                <template
                                  v-if="present"
                                  class="text-center"
                                >
                                  Today
                                </template>
                              </template>

                              <template v-slot:interval="{ hour }">
                                <div
                                  class="text-center"
                                >
                                  {{ hour }} o'clock
                                </div>
                              </template>
                            </v-calendar>
                          </v-sheet>
                          </v-card-text>
                        </v-col>
                      </v-row>


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
  data: () => ({}),
}
</script>

<style scoped>

</style>