<template>
  
      <div>
        <h3>name: {{name}}</h3>
        <h4>email: {{email}}</h4>
        <p>{{body}}</p>
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