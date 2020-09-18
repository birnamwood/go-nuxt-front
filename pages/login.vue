<template>
  <div class="login-form">
    <input placeholder="E-Mail" type="text" v-model="user.Email" required="required">
    <input placeholder="Password" type="text" v-model="user.Password" required="required">
    <button class="btn" @click="login">ログイン</button>
  </div>
</template>

<script>
import { axios } from '../plugins/axios/index.js';
import { mapActions } from 'vuex'

export default {
  data: function () {
    return {
      user: {
        Email: '',
        Password: '',
      }
    }
  },
  methods: {
    ...mapActions('auth', [
      'setToken'
    ]),
    login: function () {
      axios.post('/api-server/login', this.user).then(res => {
        this.setToken(res.data);
        this.$router.push({ path: '/' });
      })
    },
  },
}
</script>

<style>
</style>



