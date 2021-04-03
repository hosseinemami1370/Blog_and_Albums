<template>
<section -infinite-scroll="getMoreItems"
    infinite-scroll-disabled="isNoData"
    infinite-scroll-distance="10" class="post-list mt-4">
	
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
 data() {
    return {
      isNoData: false,
    };
  },
  
}
</script>

<style scoped>
 
.mt-4{
	margin: 4rem;

}
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>