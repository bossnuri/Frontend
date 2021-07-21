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
                        <h1 class="text-center display-1 my-7">CHOOSE DATE</h1>
                        <div class="text-md-center ">
                          <date-picker v-model="time2" type="datetime"></date-picker>
                        </div>
                      </v-card-text>

                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3 mb-10">Create New Activity</h1>
                        <v-form class="my-10">



<!--                          <v-text-field-->

<!--                            id="Weight"-->
<!--                            label="Weight"-->
<!--                            name="weight"-->
<!--                            prepend-icon="opacity"-->
<!--                            type="text"-->
<!--                            color="teal accent-3"-->
<!--                          />-->
                          <v-text-field
                            id="Food"
                            label="Food"
                            name="food"
                            prepend-icon="beer"
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
                        </v-form>
                      </v-card-text>
                      <div class="text-center mb-10 ">
                        <v-btn rounded color="teal accent-3" dark to="/exercise">NEXT</v-btn>
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

<style scoped>

</style>
<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  components: { DatePicker },
  data() {
    return {
      time1: null,
      time2: null,
      time3: null,
    };
  },
};
</script>