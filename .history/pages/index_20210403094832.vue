<template>
  <div><PostList :posts="loadedPosts" />
  <!-- :posts="loadedPosts" -->
  </div>
  
</template>
    
<script>
import PostList from "@/components/PostList/PostList";

export default {
 
  components:{
    PostList,    
  },
  computed: {    
    // loadedPosts() { 
    //    return this.$store.getters.loadedPosts   
    // }
  },
  //  mounted(){  
  //   this.$store.dispatch('getPost');
  // },
}
</script>

<style>

</style>