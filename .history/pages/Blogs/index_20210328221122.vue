<template>
  <PostList :posts="loadedPosts" />
</template>
    
<script>
import PostList from "@/components/PostList/PostList";
export default {
  components:{
    PostList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style>

</style>