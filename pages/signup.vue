<template>
  <div class="signup-form">
    <input placeholder="E-Mail" type="text" v-model="user.email" required="required">
    <input placeholder="Password" type="text" v-model="user.password" required="required">
    <input placeholder="Name" type="text" v-model="user.name" required="required">
    <br>
    <button class="btn" v-on:click="createUser">ユーザー登録</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      user: {
        Email: '',
        Password: '',
        Name: '',
        Token: ''
      }
    }
  },
  methods: {
    createUser: function () {
      if (!this.user.email || !this.user.password) {
        console.log("必須情報です");
        return;
      }
      axios.post('/api-server/api/v1/signup', this.user).then((res) => {
        console.log(this.user);
        console.log(res);
        this.$router.push({ path: '/' });
      }, (error) => {
        console.log(error);
      });
    },
  }
}
</script>

<style>
.btn {
  width: 100px;
  height: 50px;
  background-color: gray;
}
</style>

