<template>
<section class="post-list mt-4">
    <PreviewGallery
      v-for="image in posts"
      :key="image.id"
      :id="image.id"
      :title="image.title"
       />
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