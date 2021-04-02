<template>
  <Albums :posts="loadedAlbums" />
</template>

<script>
import Albums from "@/components/Albums/Albums"

export default {
    components:{
        Albums
    },
    computed: {
    loadedAlbums() {
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