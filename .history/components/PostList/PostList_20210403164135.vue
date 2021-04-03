<template>
  <div v-infinite-scroll="getMoreItems"
    infinite-scroll-disabled="isNoData"
    infinite-scroll-distance="10" class="post-list mt-4">
     <div>
   <div class="blog-card" v-for="post in posts" :key="post.id" >
    <div class="meta">
      <div class="photo" style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"></div>
      <ul class="details">
        <li class="author"><a href="#">ID Number:{{post.id}}</a></li>
        <li class="date">March. 30, 2021</li>
        <li class="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">VUE</a></li>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="description">
      <h1>{{post.title}}</h1>
      <h2>Opening a door to the future</h2>
      <p>{{post.previewText}}</p>
      <p class="read-more">
        <nuxt-link :to="postLink">Read More</nuxt-link>
      </p>
    </div>
    
  </div>
   
  </div>  
    <!-- <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :previewText="post.body" /> -->
  </div>
</template>

<script>
// import PostPreview from '@/components/PostList/PreviewPost'

export default {
  components: {
    // PostPreview,
  },
  props: {
    posts: {
      type: Array,
      required: true
    },
    loadMore: Function
  },
  data() {
    return {
      isNoData: false,
      page: 1,
      lastpage:10
    };
  },
  computed:{
    postLink() {
      return  '/Blogs/' + this.id
    }
  },
  methods:{
  getMoreItems: function() {
      this.loadMore();
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

