<template>
  <section class="post-list mt-4">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :previewText="post.body" />
              <!-- <infinite-loading @distance="1" @infinite="infiniteHandler"/> -->

      <infinite-loading  spinner="spiral" @infinite="infiniteScroll"></infinite-loading>
  </section>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import PostPreview from '@/components/PostList/PreviewPost'
// import axios from 'axios'

export default {
  components: {
    PostPreview,
    InfiniteLoading,
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // titles: [],
      page: 1,
      lastpage:10
    };
  },
  computed:{
    // loadedPosts() { 
    //    return this.$store.getters.loadedPosts   
    // }
  
  },
  mounted(){  
    // this.$store.dispatch('getPost',this.page);
    // this.infiniteScroll();
  },
  methods:{
  

  infiniteScroll() {
      setTimeout(() => {
    const temp=[]
    for (let i = this.posts.length+1; i < this.posts.length+20; i++){
     temp.push(i)    
    }
    this.posts=this.posts.concat(temp)
    this.
        
// 20onsoletestttttt");
// this.$store.dispatch('getPost',this.page);
//             //  this.$store.commit({ type:'setPosts' });
//                 // console.log(this.last_page);
//                     if (this.page<=this.lastpage) {
// console.log("$state",$state);
//                         // $state.loaded();
//                           this.page +=1;
//                        }
//                         if(this.page > this.lastpage){
//                             $state.complete();
//                     } 
                
          
      }, 500);
    }
  }
}
</script>


<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

