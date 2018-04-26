<template>
  <div class="components-user">
    <h3>{{title}}</h3>
    <router-link to="/">Back Home</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {title: 'Hello user!'}
    }
  }
</script>
