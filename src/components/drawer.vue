<template>
        <!-- <v-overlay :value="this.$store.state.drawer" z-index="4"> </v-overlay> -->
    <v-navigation-drawer v-model="drawerval"  app  clipped hide-overlay  >

            <v-list rounded>
            
            <v-list-item-group  v-model="selectedItem" color="primary" >
              <div>
              <!-- ### -->
              <v-list-item  v-for="(item, i) in items" :key="i" >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              </div>
                <!-- #### -->
              <v-list-item v-for="(item, j) in items" :key="j" >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <!-- ####  -->
            </v-list-item-group>
          </v-list>
    </v-navigation-drawer>

   
</template>

<script>
    export default {
        name :"drawer",
        data(){
            return {
                //  drawer: false,
                    selectedItem: 1,
                    items: [
                        { text: 'Real-Time', icon: 'mdi-clock' },
                        { text: 'Audience', icon: 'mdi-account' },
                        { text: 'Conversions', icon: 'mdi-flag' },
                    ],
            }
        },
        computed : {
          drawerval: {
            get () {
              return this.$store.state.drawer
            },
            set () {
              // this.$store.commit('SET_DRAWER', val)
            },

              }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>