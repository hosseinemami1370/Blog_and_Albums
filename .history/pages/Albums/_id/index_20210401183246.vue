<template>
  <div class="gallery-page">
    
   <div class="gallery-text">
     <h1>This is my absolutely fantastic "Gallery" Page!</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit, numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt aspernatur commodi?</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit, numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt aspernatur commodi?</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit, numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt aspernatur commodi?</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit, numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt aspernatur commodi?</p>
   </div>
    <div id="infinite-list">
    <gallery :images="loadedAlbums" :index="index" @close="index = null"></gallery>
    
    <div
      class="image"
      v-for="(image, imageIndex) in loadedAlbums"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image.url + ')', width: '300px', height: '200px' }"
    ></div>
    <!-- <infinite-loading v-if="titles.length" spinner="spiral" @infinite="infiniteScroll"></infinite-loading> -->
  </div>
    <!-- <Gallery /> -->
    
  </div>
</template>
<script>
import axios from 'axios'
import VueGallery from 'vue-gallery';
// import Gallery from "@/components/UI/gallery";
export default {
 data: function () {
      return {
        images: [
         
        ],
        index: null,
         loading: false,
    nextItem: 1,
      };
    },
 
    components: {
      'gallery': VueGallery
    },
    asyncData(context) {
      // const self=this;
    return axios.get('https://jsonplaceholder.typicode.com/albums/' + context.params.id+'/photos')
      .then(res => {
        return {
         loadedAlbums : res.data,
          setTimeout(e => {
        for (var i = 0; i < 20; i++) {
          this.items.push('Item ' + this.nextItem++);
        }
        this.loading = false;
      }, 2000);
        }
        
      })
      .catch(e => context.error(e))
     
  },
  mounted () {

    // Detect when scrolled to bottom.
    const listElm = document.querySelector('#infinite-list');
    listElm.addEventListener('scroll', e => {
      if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.loadMore();
      }
    });

    // Initially load some items.
    this.loadMore();

  },
  methods: {
    loadMore () {
      
      /** This is only for this demo, you could 
        * replace the following with code to hit 
        * an endpoint to pull in more data. **/
      this.loading = true;
      setTimeout(e => {
        for (var i = 0; i < 20; i++) {
          this.items.push('Item ' + this.nextItem++);
        }
        this.loading = false;
      }, 2000);
      /**************************************/
      
    }
  }
}
</script>
<style scoped>
.gallery-page {
  text-align: center;
  padding: 30px;
}
.gallery-text{
  margin-top: 3rem;
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
