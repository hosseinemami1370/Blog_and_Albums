<template>
<section class="post-list mt-4">
    <PreviewGallery
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :previewText="post.body" />
  </section>

</template>

<script>
import PreviewGallery from '@/components/Albums/PreviewGallery'
export default {
props:{
    images1:[]
  },
  components:{
	  PreviewGallery
  },
  computed: {
//    postLink() {
    //    console.log("this.id:",this.images.id);
    //   return  '/Albums/' + this.images.id
    // }
  },
}
</script>

<style scoped>
 
.row{
	margin: 4rem;

}
</style>