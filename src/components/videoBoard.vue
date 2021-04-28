<template>
  <v-app id="inspire">
    

        <v-layout class="ma-2" app row wrap justify-space-around  >

          <v-flex xs12 sm6 md4 lg3 xl2   v-for="i in 25" :key="i"  >

               
              <v-card  class="ma-2" max-width="380" width="284" max-height="360" >
                <!-- <template slot="progress">
                  <v-progress-linear color="deep-purple" height="10" indeterminate >
                  </v-progress-linear>
                </template> -->

                <v-img width="284" height="160" src="@/assets/brothers.jpg" >
                </v-img>
                
                <v-card-title>ONE PIECE DEMON SLAYER DRAGON BALL SUPER HERO ACADEMIA </v-card-title>



                  <v-list           >
                    <v-list-item >
                      <v-btn class="mr-2" icon  dark color="dark ">
                          <v-avatar>
                          <img src="@/assets/ace.jpg" alt="ace" >
                          </v-avatar>
                      </v-btn>


                      <v-list-item-content>
                        <!-- <span > <v-btn text icon round> <v-text> Prothon Alo </v-text> </v-btn>  </span> -->
                        <span > <v-text> Prothon Alo </v-text>   </span>
                                        
                        <span >10.2M • 2 years ago • 9<v-icon>mdi-star</v-icon> </span>

                      </v-list-item-content>
                    </v-list-item>
                  </v-list>

            </v-card>
          </v-flex>
        </v-layout>
    
  </v-app>
</template>

<script>
  export default {
    name : "videoBoard",
    data (){
      return {

      }
    }
  }
</script>





