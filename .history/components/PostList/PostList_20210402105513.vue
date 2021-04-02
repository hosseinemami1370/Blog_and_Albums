<template>
  <section class="post-list mt-4">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :previewText="post.body" />
      <infinite-loading v-if="titles.length" spinner="spiral" @infinite="infiniteScroll"></infinite-loading>
  </section>
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
  data() {
    return {
      titles: [],
      page: 1
    };
  },
  computed:{
    url() {
      return "https://jsonplaceholder.typicode.com/posts?_page=" + this.page;
    }
  },
  created() {
    this.fetchData();
  },
  methods:{
    async fetchData() {
      const response = await axios.get(this.url);
      this.titles = response.data;
    },
    infiniteScroll($state) {
      setTimeout(() => {
        this.page++;
        axios
          .get(this.url)
          .then(response => {
            if (response.data.length > 1) {
              response.data.forEach(item => this.titles.push(item));
              $state.loaded();
            } else {
              $state.complete();
            }
          })
          .catch(err => {
            console.log(err);
          });
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

