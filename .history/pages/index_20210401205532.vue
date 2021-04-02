<template>
  <div><PostList  :posts="loadedPosts" />
  <infinite-loading v-if="loadedPosts.length" spinner="spiral" @infinite="infiniteScroll"></infinite-loading>
</div>
</template>
    
<script>
import PostList from "@/components/PostList/PostList";
import infiniteScroll  from "vue-infinite-loading"
export default {
  data(){
    return{
      page:1
    } 
  },
  components:{
    PostList,
    infiniteScroll
  },
  computed: {
    loadedPosts() {
      
       return this.$store.getters.loadedPosts
      
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