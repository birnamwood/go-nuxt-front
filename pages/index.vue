<template>
  <section class="container">
    <p>TOPページです</p>
    <p>ようこそ{{ currentUser.Name}}さん！</p>
  </section>
</template>

<script>
import { axios } from '../plugins/axios/index.js';
import { mapState } from 'vuex'

export default {
  data: function () {
    return {
      currentUser: '',
    }
  },
  computed: {
    ...mapState({
      token: state => state.auth.token
    })
  },
  mounted: function () {
    if (this.token != null) {
      this.getCurrentUser();
    }
  },
  methods: {
    getCurrentUser: function () {
      axios.post('/api-server/api/v1/current-user').then(res => {
        this.currentUser = res.data;
        console.log(this.currentUser);
      })
    },
  },
}
</script>

<style>
</style>

