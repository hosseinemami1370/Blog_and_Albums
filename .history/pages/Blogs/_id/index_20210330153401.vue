<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <!-- <div class="post-detail">Last updated on {{ loadedPost.updatedDate }}</div> -->
        <div class="post-detail">ID: {{ loadedPost.id }}</div>
      </div>
      <p class="post-content">{{ loadedPost.body }}</p>
      <button @click="showComment(loadedPost.id)">Show Comment</button>
    </section>
    <section  v-if="showComments" class="post-feedback">
      <Comments
      v-for=" comment of loadedComments"
      :key="comment.id"
      :name="comment.name"
      :email="comment.email"
      :body="comment.body"
       />
      <p>Let me know what you think about the post, send a mail to <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>.</p>
    </section>
    
  </div>
</template>

<script>
import axios from 'axios'
import Comments from "@/components/PostList/Comments/comments";

export default {
  data(){
    return{
      loadedComments:[],
      showComments:false
    }
  },
  components:{
    Comments
  },
  asyncData(context) {
    return axios.get('https://jsonplaceholder.typicode.com/posts/' + context.params.id)
      .then(res => {
        return {
          loadedPost: res.data,
          
        }
        
      })
      .catch(e => context.error(e))
     
  },
  methods:{
    showComment(id){
      this.showComments=!this.showComments;
      console.log("postId:",id);
      this.
    //   if(this.showComments===true){
    //   axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + id)
    //   .then(res => {
    //    console.log("response:",res);
    //     this.loadedComments=res.data;
    //   })
    //   .catch(e => context.error(e))
    // }
    // }
  }
};
</script>


<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
