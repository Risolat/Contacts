<template>
  <div class="users">
    <b-card @dblclick="onDblClick(user)" v-for="user in allUsers" :key="user.id">
      <h2>Name: {{user.name}} </h2>
      <p>Tel: {{user.phone}}</p>
      <p>Email: {{user.email}}</p>
      <!-- <b-button href="#" variant="primary">Update</b-button> -->
    <b-button @click="deleteUser(user.id)" href="#" variant="primary">Delete</b-button>
    </b-card>
</div> 
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "UsersTable",
  methods: {
    ...mapActions(['fetchUsers', 'deleteUser', 'updateUser']),
    onDblClick(user){
      const updUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone
      }
      this.updateUser(updUser);
    }
  },
  computed: mapGetters(['allUsers']),
  created(){
    this.fetchUsers();
  }
};
</script>

<style scoped>
  a{
    color: #fff;
  }
  .users{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .card{
    width: 300px;
    margin-bottom: 10px;
  }
  .btn-primary{
    margin: 3px;
  }
</style>