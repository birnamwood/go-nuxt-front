<template>
<ul>
  <li v-for="user in users" :key="user.ID">
    {{user.Email}}
  </li>
</ul>
  
</template>

<script>
import { axios } from '../plugins/axios/index.js';

export default {
  data: function () {
    return {
      users: '',
    }
  },
  mounted: function () {
    this.getUsers();
  },
  methods: {
    getUsers: function () {
      axios.post('/api-server/api/v1/users').then(res => {
        this.users = res.data;
      })
    },
  },
}
</script>