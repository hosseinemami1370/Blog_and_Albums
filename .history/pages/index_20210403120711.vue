<template>
  <div><PostList :posts="posts" :loadMore="nextPage" />
  <!-- :posts="loadedPosts" -->
  </div>
  
</template>
    
<script>
import PostList from "@/components/PostList/PostList";

export default {
 data() {
    return {
     
     posts:[],
      page: 1,
      
    };
  },
  components:{
    PostList,    
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
    nextPage: async function() {
      const data = await this.loadData();
      this.loadedPosts = this.loadedPosts.concat(data);
    },
    loadData: function() {
      // return this.$axios.$get(
      //   `https://jsonplaceholder.typicode.com/posts?_page=${++this.page}`
      // );
     return this.$store.dispatch('getPost',++this.page);
    }
  }
  
}
</script>

<style>

</style>