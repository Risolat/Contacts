<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Email address:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email..."
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Your Telephone number" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.phone"
          required
          placeholder="Enter telephone number..."
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>


<script>
import { mapActions } from 'vuex';
export default {
  methods: {
      ...mapActions(['updateUser']),
      onSubmit(e){
        e.preventDefault();
        const newUser={
          name: this.form.name,
          email: this.form.email,
          phone: this.form.phone
        }
        this.addUser(newUser);
        this.form.name= '';
        this.form.email= '';
        this.form.phone= '';
      }
      
  },
   data() {
      return {
        form: {
         name: '',
         email: '',
         phone: ''
      }
    }
  }
}
</script>

<style scoped>
  .btn-primary{
    margin-bottom: 10px;
  }
  form{
    max-width: 600px;
    margin: 0 auto;
  }
  form[data-v-34e03697]{
    padding: 20px;
    margin-bottom: 5px;
    box-shadow:
      0 6.7px 5.3px rgba(0, 0, 0, 0.017),
      0 22.3px 17.9px rgba(0, 0, 0, 0.035),
      0 100px 80px rgba(0, 0, 0, 0.07);
  }
 .form-group{
    text-align: left;
  }
</style>