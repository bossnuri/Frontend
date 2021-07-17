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

                        <v-icon
                          :color="'indigo'"
                          class="mr-12"
                          size="64"
                        >
                          mdi-heart-pulse
                        </v-icon>

                        <v-row align="start">
                          <div class="text-caption grey--text text-uppercase">
                            BMI
                          </div>
                          <div>
                          <span
                            class="text-h3 font-weight-black"
                            v-text="'69'"
                          ></span>
                          </div>
                        </v-row>
<!--                        <h1-->
<!--                          class="text-center display-2 teal&#45;&#45;text text&#45;&#45;accent-3"-->
<!--                        >Your BMI</h1>-->
                        <v-sparkline
                          :value="value"
                          :gradient="gradient"
                          :smooth="radius || false"
                          :padding="padding"
                          :line-width="width"
                          :stroke-linecap="lineCap"
                          :gradient-direction="gradientDirection"
                          :fill="fill"
                          :type="type"
                          :auto-line-width="autoLineWidth"
                          auto-draw
                        ></v-sparkline>
                      </v-card-text>

                      <div class="text-center mb-10 text-h4 ">
                          Overweight
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Your Goal</h1>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">GAIN WEIGHT</v-btn>
                      </div>
                      <div class="text-center my-5">
                        <v-btn rounded outlined dark @click="step++">STAY HEALTHY</v-btn>
                      </div>
                      <div class="text-center my-5">
                        <v-btn rounded outlined dark @click="step++">LOSE WEIGHT</v-btn>
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
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]
export default {
  name: "UserStat",
  data: () => ({
    step: 1,
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
  }),
  props: {
    source: String
  }
}
</script>

