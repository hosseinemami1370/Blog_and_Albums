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
   
  },
  //  mounted(){  
  //   this.$store.dispatch('getPost',this.page);
  // },
   async asyncData({ app }) {
    const posts = await app.$axios.$get(
      "https://jsonplaceholder.typicode.com/posts?_page=1"
    );
    return {
      posts
    };
  },
  methods:{
    nextPage: async function() {
      const data = await this.loadData();
    },
    loadData: function() {
     return this.$store.dispatch('getPost',++this.page).then((res)=>{      
         this.posts= this.posts.concat(res);
     })
    }
  }
  
}
</script>

<style>

</style>