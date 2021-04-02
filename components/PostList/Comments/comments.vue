<template>
  
  <!-- Single Comment -->
  <div class="col-lg-8 text-left">
        <div class="media mb-4">
          <img class="d-flex mr-3 rounded-circle" src="~/assets/download.png" alt="">
          <div class="media-body">
            <h5 class="mt-0">{{name}}</h5>
            {{body}}
          </div>
        </div>
  </div>            
</template>

<script>
export default {
    props:{
        name:null,
        email:null,
        body:null
    }
}
</script>

<style>

</style>