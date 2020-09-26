<template>
  <div class="signup-form">
    <input placeholder="E-Mail" type="text" v-model="user.Email">
    <input placeholder="Password" type="text" v-model="user.Password">
    <input placeholder="Name" type="text" v-model="user.Name">
    <button class="btn" @click="createUser">ユーザー登録</button>
  </div>
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

