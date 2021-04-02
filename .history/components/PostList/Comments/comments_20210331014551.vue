<template>
  
  <!-- Single Comment -->
  <div class="col-lg-8">
        <div class="media mb-4">
          <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
          <div class="media-body">
            <h5 class="mt-0">{{name}}</h5>
            {{body}}
          </div>
        </div>
  </div>
      <!-- <div>
        <h3>name: {{name}}</h3>
        <h4>email: {{email}}</h4>
        <p>{{body}}</p>
      </div> -->
      
    
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