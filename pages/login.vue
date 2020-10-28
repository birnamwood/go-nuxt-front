<template>
  <v-card class="login-form">
    <v-card-title>
      <h4>ログイン</h4>
    </v-card-title>
    <v-card-text>
      <v-text-field label="メールアドレス" v-model="user.Email" />
      <v-text-field label="パスワード" v-model="user.Password" />
      <v-btn @click="login">ログイン</v-btn>
    </v-card-text>
  </v-card>
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
      if (!this.user.Email || !this.user.Password) {
        alert("必須情報です");
        return;
      }
      axios.post('/api-server/login', this.user).then(res => {
        if (res.data != null) {
          this.setToken(res.data);
          this.$router.push({ path: '/' });
        } else {
          alert("ユーザー名かパスワードが違います。");
        }
      }).catch (() => {
        alert("ユーザー名かパスワードが違います。");
      }) 
      
    },
  },
}
</script>

<style>
</style>



