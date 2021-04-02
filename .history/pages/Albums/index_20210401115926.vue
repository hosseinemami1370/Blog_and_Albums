<template>
  <Albums />
</template>

<script>
import Albums from "@/components/Albums/Albums"

export default {
    components:{
        Albums
    },
    computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
   mounted(){
   
    this.$store.dispatch('getPost');
  }

}
</script>

<style>

</style>