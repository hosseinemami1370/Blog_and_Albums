<template>
  <div class="row mt-6" >
	 <div class="card" style="width: 18rem;" v-for="image in images1" :key="image.id"> 
  <img class="card-img-top" :alt="'Albume'+image.id">
  <div class="card-body">
    <h5 class="card-title">{{image.title}}</h5>
    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
    <!-- <nuxt-link :to="postLink" class="btn btn-primary">Go To Gallery</nuxt-link> -->
  </div>
</div> 
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>