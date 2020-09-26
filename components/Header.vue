<template>
  <div class="header">
    <nuxt-link to="/">TOP</nuxt-link>
    <template v-if="token == null">
      <nuxt-link to="/login">LOGIN</nuxt-link>
      <nuxt-link to="/signup">SIGNUP</nuxt-link>
    </template>
    <template v-else>
      <a @click="logout()">LOGOUT</a>
      <nuxt-link to="/users">USERS</nuxt-link>
      <span>ログイン中です:{{ userName }}</span>
    </template>
  </div>
</template>

<script>
import { axios } from '../plugins/axios/index.js';
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Header',
  data: function () {
    return {
      userName: '',
    }
  },
  computed: {
    ...mapState({
      token: state => state.auth.token
    })
  },
  watch: {
    token: function () {
      if (this.token != null ) {
        axios.post('/api-server/restricted').then(res => {
          this.userName = res.data;
        }).catch (() => {
          console.error("ユーザー名が取得できませんでした。");
        }) 
      }
    }
  },
  methods: {
    ...mapActions('auth', [
      'resetToken'
    ]),
    logout () {
      this.resetToken();
      this.$router.push({ path: '/' });
    }
  }
}
</script>

<style>
.header {
  width: 100%;
  background-color: green;
}
</style>

