<template>
  <Albums :images="loadedAlbums" />
</template>

<script>
import Albums from "@/components/Albums/Albums"

export default {
    components:{
        Albums
    },
    computed: {
    loadedPosts() {
      return this.$store.getters.loadedAlbums
    }
  },
   mounted(){
   
    this.$store.dispatch('getAlbums');
  }

}
</script>

<style>

</style>