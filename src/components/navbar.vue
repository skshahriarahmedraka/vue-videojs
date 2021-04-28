<template>
    

<v-app-bar app clipped-left   color="dark accent-4" dark flat height="56">

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" @click="drawerval" rounded v-bind="attrs" v-on="on" color="dark " >
          <v-icon    >
            mdi-format-list-bulleted-square
          </v-icon>
        </v-btn>
      </template>
      <span>Drawer</span>
    </v-tooltip>

        
        
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="pink" v-on="on" v-bind="attrs">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
      </template>
      <span>home</span>
    </v-tooltip>
    <v-toolbar-title large >LOGO</v-toolbar-title>
    

    <v-autocomplete    cache-items class="mx-4" flat hide-no-data hide-details label="Search Anything ..." solo-inverted ></v-autocomplete>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>



    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" icon  dark color="dark " v-on="on" v-bind="attrs">

          <v-icon large color="white " >
            mdi-dialpad
          </v-icon>
        </v-btn>
           </template>
      <span>apps</span>
    </v-tooltip>


  <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" icon  dark color="dark " v-on="on" v-binc="attrs">
            <v-avatar>
            <img src="@/assets/ace.jpg" alt="ace" >
            </v-avatar>
        </v-btn>
            </template>
      <span>Profile</span>
    </v-tooltip>

</v-app-bar> 

    
</template>

<script>
    export default {
      name :"navbar",
      data(){
        return {

        }
      },
      methods: {
        // drawerval(){
        //   this.$store.state.drawer = !this.$store.state.drawer 
        //   return this.$store.state.drawer
        // }
        drawerval(){
          this.$store.commit("DrawerValueChange")
        }
      },

        
    }
</script>

<style lang="scss" scoped>

</style>


