<template>
     <v-app>
       
           
      <v-container fluid><navbar /></v-container>
      <v-container fluid>
      <drawer /> 
      </v-container>
      
      <!-- <dashboard/> -->
      <VideoBoard />
      

    </v-app> 
</template>

<script>
// import VideoBoard from '../components/videoBoard.vue'
    export default {
         name: 'HomeDefault',
  components: {
    // Login,
          drawer : () => import('@/components/drawer.vue'),
          navbar : () => import('@/components/navbar.vue'),
          // dashboard : () => import('@/components/dashboard.vue'),
          
    VideoBoard : () => import("@/components/videoBoard.vue"),

  },
    }
</script>

<style lang="scss" scoped>

</style>