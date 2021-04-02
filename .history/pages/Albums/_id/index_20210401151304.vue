<template>
  <div class="gallery-page">
    <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
    <!-- <Gallery /> -->
    <h1>This is my absolutely fantastic "About Me" Page!</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit, numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt aspernatur commodi?</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit, numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt aspernatur commodi?</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit, numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt aspernatur commodi?</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit, numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt aspernatur commodi?</p>
  </div>
</template>
<script>
import VueGallery from 'vue-gallery';
// import Gallery from "@/components/UI/gallery";
export default {
 data: function () {
      return {
        images: [
          'https://dummyimage.com/800/ffffff/000000',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
          'https://dummyimage.com/800/ffffff/000000',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
          'https://dummyimage.com/800/ffffff/000000',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
        ],
        index: null
      };
    },
 
    components: {
      'gallery': VueGallery
    },
}
</script>
<style scoped>
.about-page {
  text-align: center;
  padding: 30px;
}
.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>
