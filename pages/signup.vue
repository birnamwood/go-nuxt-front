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
        email: '',
        password: '',
        name: ''
      }
    }
  },
  methods: {
    createUser: function () {
      if (!this.user.email) return;
      axios.post('/api/signup', this.user).then((res) => {
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

