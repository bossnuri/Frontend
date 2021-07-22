<template xmlns:color="http://www.w3.org/1999/xhtml">
  <v-app id="inspire">
    <v-content>
      <template>
        <nav>
          <v-app-bar flat app color="grey darken-4" dense dark>
            <v-btn to="/home">
              <v-icon>home</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn to="/">
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
                        <h1 class="text-center display-2 my-7">Your BMI</h1>
                        <div class="text-center display-1 my-10 "  >{{BMI}}</div>
                        <div class="text-center display-1 my-7 " style="color:yellow" > {{status}}</div>
                        <div class="text-center mb-10 ">
                          <v-btn @click="Caluclator"  rounded color="teal accent-3" dark to="/exercise">calculate</v-btn>
                        </div>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3 mb-10">Create New Activity</h1>
                        <v-form class="my-10">

                          <v-text-field
                            v-model = weight
                            id="Weight"
                            label="Weight (kg)"
                            name="weight"
                            prepend-icon="accessibility"
                            type="number"
                            color="teal accent-3"

                          />
                          <v-text-field
                            v-model = height
                            id="Height"
                            label="Height (metre)"
                            name="height"
                            prepend-icon="height"
                            type="number"
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

<script>
export default{
  data(){
    return{
      weight: "" , height: "",BMI:"Enter Your Weight And Height",status:""
    }
  },
  methods:{
    Caluclator(){

      if(this.weight != "" && this.height != "") {
        if(this.weight < 20 && this.height<5){
          this.BMI = ""
          this.status ="Enter Weight in Kg"
        }else if(this.height > 5 && this.weight >19 ){
          this.BMI = ""
          this.status = "Enter Height in Metre"
        }else if(this.height >5 && this.weight<20){
          this.BMI = ""
          this.status = "Your Input Is Wrong"
        }else {
          this.BMI = (this.weight / this.height ** 2).toFixed(2)
          if (this.BMI < 18.5) {
            this.status = "Underweight"
          } else if (this.BMI >= 18.5 && this.BMI < 25) {
            this.status = "Normal Weight"
          } else if (this.BMI >= 25 && this.BMI < 30) {
            this.status = "Overweight"
          } else {
            this.status = "Obesity"
          }
        }
      }

      else if(this.weight == "" && this.height == ""){
        this.BMI = "Enter Your Weight And Height"
        this.status =""
      }else if(this.weight =="" && this.height != ""){
        this.BMI = "Enter Your Weight"
        this.status =""
      }else{
        this.BMI = "Enter Your Height"
        this.status =""
      }
    }
  }
}
</script>

<style scoped>

</style>
