<template>
    <div>
        <v-container fluid>

            <div >
        <video-player ref="videoPlayer"  class="video-js vjs-custom-skin vjs-big-play-centered" :options="playerOptions" :playsinline="true"></video-player>

        </div>
        </v-container>
        
        <v-container fluid>
        <h1>One Piece episode 1000</h1>

        </v-container>

    </div>
</template>

<script>
import videofile from "/media/ssar/programming/vscode_web/vue/video1.mp4"
import picfile from "/media/ssar/programming/vscode_web/vue/pic1.jpg"
    export default {
       data() {
      return {
        player: null,
        playerOptions: {
          // videojs options
          muted: true,
          
        

          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{ type: "video/mp4", src: videofile,}],
          poster: picfile,
          controls : true,
          height : 720,
          auto : true,
          // aspectRatio :"4:3",
          // fluid : true,
        }
      }
    }, 
    
   
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>

<style lang="scss" scoped>

</style>