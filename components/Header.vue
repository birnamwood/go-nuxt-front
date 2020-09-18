<template>
  <div class="header">
    <nuxt-link to="/">TOP</nuxt-link>
    <nuxt-link to="/login">LOGIN</nuxt-link>
    <nuxt-link to="/signup">SIGNUP</nuxt-link>
    <nuxt-link to="/users">USERS</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.header {
  height: 5%;
  width: 100%;
  background-color: green;
}
</style>

