<template>
  <div><PostList   />
  </div>
  <!-- :posts="loadedPosts" -->
</template>
    
<script>
import PostList from "@/components/PostList/PostList";

export default {
  data(){
    return{
      page:1,
     
    } 
  },
  components:{
    PostList,
    
  },
  computed: {
    // ...mapGetters({
    //   loadedPosts: 'loadedPosts',
      
    // })
    loadedPosts() {
      
       return this.$store.getters.loadedPosts
      
    }
  },
   mounted(){
    this.scroll()
    this.$store.dispatch('getPost',this.page);
  },
  
  
   
  
}
</script>

<style>

</style>