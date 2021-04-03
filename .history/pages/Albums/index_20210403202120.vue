<template>
  <Albums :posts="posts" :loadMore="nextPage"/>
</template>

<script>
import Albums from "@/components/Albums/Albums"

export default {
    components:{
        Albums
    },
    data() {
    return {
     
     posts:[],
      page: 1,
      
    };
  },
    computed: {
    // loadedAlbums() {
    //   return this.$store.getters.loadedAlbums
    // }
  },
   mounted(){
   
    // this.$store.dispatch('getAlbums');
  },
   async asyncData({ app }) {
    const posts = await app.$axios.$get(
      "https://jsonplaceholder.typicode.com/albums?_page=1"
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