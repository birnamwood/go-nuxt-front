<template>
  <v-app-bar light class="header" app>
    <v-btn text><nuxt-link to="/">TOP</nuxt-link></v-btn>
    <template v-if="token == null">
      <v-btn text><nuxt-link to="/login">LOGIN</nuxt-link></v-btn>
      <v-btn text><nuxt-link to="/signup">SIGNUP</nuxt-link></v-btn>
    </template>
    <template v-else>
      <v-btn text><nuxt-link to="/users">ユーザー一覧</nuxt-link></v-btn>
      <v-spacer></v-spacer>
      <span>ログイン中です:{{ userName }}</span>
      <v-btn text><a @click="logout()">LOGOUT</a></v-btn>
    </template>
  </v-app-bar>
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
</style>

