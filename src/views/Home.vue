<template>
  <div >
    <!-- <Login v-if="false"/> -->
    <v-app>
       
           
      <v-container fluid><navbar /></v-container>
      <v-container fluid>
      <drawer /> 
      </v-container>
      <v-container>
      <!-- <dashboard/> -->
      <Player/>
      </v-container>

    </v-app> 

    
  </div>
</template>

<script>
// @ is an alias to /src

// import Login from "@/components/login.vue"

export default {
  name: 'Home',
  components: {
    // Login,
          drawer : () => import('@/components/drawer.vue'),
          navbar : () => import('@/components/navbar.vue'),
          // dashboard : () => import('@/components/dashboard.vue'),
          Player : () => import("@/components/player.vue"),

  },
  data (){
      return {
        
      //    drawer: false,
      // selectedItem: 1,
      // items: [
      //   { text: 'Real-Time', icon: 'mdi-clock' },
      //   { text: 'Audience', icon: 'mdi-account' },
      //   { text: 'Conversions', icon: 'mdi-flag' },
      // ],
      }
  }
}
</script>
