<template>
  <section class="post-feedback">
      <div>
        <h3>name: {{name}}</h3>
        <h4>email: {{email}}</h4>
        <p>{{body}}</p>
      </div>
      <p>Let me know what you think about the post, send a mail to <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>.</p>
    </section>
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