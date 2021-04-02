<template>
  <div class="single-post-page">
    <div class="container text-left">

    <div class="row">

      <!-- Post Content Column -->
      <div class="col-lg-8">

        <!-- Title -->
        <h1 class="mt-4">{{ loadedPost.title }}</h1>

        <!-- Author -->
        <p class="lead">
          by Id
          <a href="#">{{ loadedPost.id }}</a>
        </p>

        <hr>

        <!-- Date/Time -->
        <p>Posted on march 31, 2021 at 01:39 AM</p>

        <hr>

        <!-- Preview Image -->
        <img class="img-fluid rounded" src="https://files.virgool.io/upload/users/1084/posts/nr3vyya1akx8/ireq1pwiwdaw.jpeg" alt="">

        <hr>

        <!-- Post Content -->
        <p class="lead">{{ loadedPost.body }}</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>

        <blockquote class="blockquote">
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer class="blockquote-footer">Someone famous in
            <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>

        <hr>
<button class="btn btn-primary" @click="showComment(loadedPost.id)">Show Comment</button>
      <hr>
       
        <!-- Comments Form -->
        <!-- <div class="card my-4">
          <h5 class="card-header">Leave a Comment:</h5>
          <div class="card-body">
            <form>
              <div class="form-group">
                <textarea class="form-control" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div> -->

        

        

      </div>

      <!-- Sidebar Widgets Column -->
      <div class="col-md-4 mt-4">

        <!-- Search Widget -->
        <div class="card my-4">
          <h5 class="card-header">Search</h5>
          <div class="card-body">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-append">
                <button class="btn btn-secondary" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>

        <!-- Categories Widget -->
        <div class="card my-4">
          <h5 class="card-header">Categories</h5>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6">
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">Freebies</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">Tutorials</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Side Widget -->
        <div class="card my-4">
          <h5 class="card-header">Side Widget</h5>
          <div class="card-body">
            You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
          </div>
        </div>
        <div class="card my-4">
          <h5 class="card-header">Side Widget</h5>
          <div class="card-body">
            You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
          </div>
        </div>
        <div class="card my-4">
          <h5 class="card-header">Side Widget</h5>
          <div class="card-body">
            You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
          </div>
        </div>

      </div>

    </div>
    <!-- /.row -->

  </div>
    <section  v-if="showComments" class="post-feedback">
      <Comments
      v-for=" comment of loadedComments"
      :key="comment.id"
      :name="comment.name"
      :email="comment.email"
      :body="comment.body"
       />
      <p class="col-lg-8">Let me know what you think about the post, send a mail to <br> <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>.</p>
    </section>
    
  </div>
</template>

<script>
import axios from 'axios'
import Comments from "@/components/PostList/Comments/comments";

export default {
  data(){
    return{
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
  computed: {
    loadedComments() {
      return this.$store.getters.loadedComments
    }
  },
  methods:{
    showComment(id){
      this.showComments=!this.showComments;
      console.log("postId:",id);
      //--------------------get data from store
      if(this.showComments===true){
     this.$store.dispatch('getComment',id);
      }
    //----------------------get data directly
    //   if(this.showComments===true){
    //   axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + id)
    //   .then(res => {
    //    console.log("response:",res);
    //     this.loadedComments=res.data;
    //   })
    //   .catch(e => context.error(e))
    // }
    },
    
  }
};
</script>


<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}


</style>
