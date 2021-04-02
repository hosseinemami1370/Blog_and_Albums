<template>
<section class="post-list mt-4">
	<div class="row mt-6" >
	 <div class="card" style="width: 18rem;" > 
  <img class="card-img-top" :alt="'Albume'+id">
  <div class="card-body">
    <h5 class="card-title">{{title}}</h5>
    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
    <nuxt-link :to="postLink" class="btn btn-primary">Go To Gallery</nuxt-link>
  </div>
</div> 
</div>
    <!-- <PreviewGallery
      v-for="image in posts"
      :key="image.id"
      :id="image.id"
      :title="image.title"
       /> -->
  </section>

</template>

<script>
import PreviewGallery from '@/components/Albums/PreviewGallery'
export default {
 props: {
    posts: {
      type: Array,
      required: true
    }
  },
  components:{
	  PreviewGallery
  },
  
}
</script>

<style scoped>
 
.row{
	margin: 4rem;

}
</style>