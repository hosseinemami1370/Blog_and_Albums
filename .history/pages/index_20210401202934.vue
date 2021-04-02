<template>
  <PostList  :posts="loadedPosts" />
</template>
    
<script>
import PostList from "@/components/PostList/PostList";
export default {
  data(){
    return{
      page:1
    } 
  },
  components:{
    PostList
  },
  computed: {
    loadedPosts() {
      
      const ttt= this.$store.getters.loadedPosts
      if(ttt.lenght)
    }
  },
   mounted(){
   
    this.$store.dispatch('getPost',this.page);
  },
  
    infiniteScroll($state) {
       setTimeout(() => {
         this.page++;
            this.$store.dispatch('getPost',this.page)
            $state.loaded();
       },2000);
    }
  
}
</script>

<style>

</style>