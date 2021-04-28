<template>
  <v-app>
    
      <!-- <router-link to="/"> Home </router-link>
      <router-link  to ="/about"> about </router-link> -->

    <router-view />


  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
