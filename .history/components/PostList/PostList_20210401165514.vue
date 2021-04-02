<template>
<div>
   <div class="blog-card" >
    <div class="meta">
      <div class="photo" style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"></div>
      <ul class="details">
        <li class="author"><a href="#">ID Number:{{id}}</a></li>
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
      <h1>{{title}}</h1>
      <h2>Opening a door to the future</h2>
      <p>{{previewText}}</p>
      <p class="read-more">
        <nuxt-link :to="postLink">Read More</nuxt-link>
      </p>
    </div>
    
  </div>
   
  </div>  
  <!-- <section class="post-list mt-4">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :previewText="post.body" />
  </section> -->
</template>

<script>
import PostPreview from '@/components/PostList/PreviewPost'

export default {
  components: {
    PostPreview
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
   
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

