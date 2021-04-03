<template>
<div class="col-lg-3 mt">
  <div class="card" >
  
  <div class="card-body">
    <h6 class="card-title">Albume {{id}}</h6>
    <p class="card-text">{{title}}</p>
    <nuxt-link :to="postLink" class="btn btn-primary">Go To Gallery</nuxt-link>
  </div>
</div>
</div>
  <!-- <div class="col-lg-3 mt-6" >
	 <div class="card"  > 
  <img class="card-img-top" :alt="'Albume'+id">
  <div class="card-body">
    <h5 class="card-title">{{title}}</h5>  -->
    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
    <!-- <nuxt-link :to="postLink" class="btn btn-primary">Go To Gallery</nuxt-link> 
  </div>
</div> 
</div> -->
</template>

<script>
export default {
props: {
    id: {
     
      required: true
    },
    title: {
      type: String,
      required: true
    },
},
computed: {
  postLink() {
       
      return  '/Albums/' + this.id
    }
    }
}
</script>

<style>
.mt{
  margin-top: 2rem;;
}
</style>