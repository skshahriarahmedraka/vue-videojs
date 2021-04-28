<template>
  <div >
    <h1>Raka</h1>
    <v-app id="app">
      <v-card width="400" class="mx-auto ">
        <v-card-title>
          <h1 class="display">Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Username"  prepend-icon="mdi-account-circle"/>
            <v-text-field   label="Password" :type="showPassword ? 'text' : 'password'"  prepend-icon="mdi-lock" :append-icon="showPassword ?  'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" />
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn color="success"> Register </v-btn>
          <v-btn color="info"> Login </v-btn>
        </v-card-actions>


      </v-card>


    </v-app>
    
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return {
      showPassword: false,
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
