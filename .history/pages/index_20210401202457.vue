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
      return this.$store.getters.loadedPosts
    }
  },
   mounted(){
   
    this.$store.dispatch('getPost',this.page);
  },
  methods:{
    infiniteScroll($state) {
       setTimeout(() => {
         this.page++;
              
       },2000);
    }
  }
}
</script>

<style>

</style>