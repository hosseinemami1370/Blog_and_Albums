<template>
  <div v-infinite-scroll="getMoreItems"
    infinite-scroll-disabled="isNoData"
    infinite-scroll-distance="10" class="post-list mt-4">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :previewText="post.body" />
  </div>
</template>

<script>
import PostPreview from '@/components/PostList/PreviewPost'

export default {
  components: {
    PostPreview,
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

