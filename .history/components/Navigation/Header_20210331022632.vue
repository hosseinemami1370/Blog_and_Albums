<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Iranicard Blog</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item nav-link active">
            <nuxt-link  to="/">Home
              
            </nuxt-link>
          </li>
          <li class="nav-item nav-link">
            <nuxt-link  to="/Blogs">Blog</nuxt-link>
          </li>
          <li class="nav-item nav-link">
            <nuxt-link to:"/" >Albums</nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>