<template>
  <v-card class="signup-form">
    <v-card-title>
      <h4>サインアップ</h4>
    </v-card-title>
    <v-card-text>
      <v-text-field label="メールアドレス" v-model="user.Email" />
      <v-text-field label="パスワード" v-model="user.Password" />
      <v-text-field label="名前" v-model="user.Name" />
      <v-btn @click="createUser">ユーザー登録</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { axios } from '../plugins/axios/index.js';
import { mapActions } from 'vuex'

export default {
  data: function() {
    return {
      user: {
        Email: '',
        Password: '',
        Name: '',
      }
    }
  },
  methods: {
    ...mapActions('auth', [
      'setToken'
    ]),
    createUser: function () {
      if (!this.user.Email || !this.user.Password || !this.user.Name) {
        alert("必須情報です");
        return;
      }
      axios.post('/api-server/signup', this.user).then((res) => {
        this.setToken(res.data);
        this.$router.push({ path: '/' });
      }, (error) => {
        console.log(error);
      });
    },
  }
}
</script>

<style>
</style>

