<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <input type="text" v-model="name" placeholder="Name" required />
      <input type="text" v-model="email" placeholder="Email" required />
      <textarea v-model="userMessage" placeholder="Message" required></textarea>
    </div>
    <div class="form-group">
      <button type="submit">Send Message</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        userMessage: 'Empty',
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.name, this.email, this.userMessage);
      this.name = '';
      this.email = '';
      this.userMessage = '';
    },

    submitForm(){
      this.handleSubmit();
    }
  },
};
</script>

<style scoped>

.form-group{
    margin-bottom: 10px;
    padding: 10px;
}

.form-group label{
    margin-right: 20px;
    margin-left: 20px;
    font-size: 18px;
}

.form-group button{
  padding: 15px;
  width: 25%;
  margin-top: 0px;
}

input[type=text] {
  width: 25%;
  padding: 20px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  box-sizing: border-box;
  font-size: 15px;
}

textarea {
  width: 52%;
  height: 300px;
  padding: 12px 20px;
  margin-top: 20px;
  box-sizing: border-box;
  resize: none;
  color:rgb(125, 125, 125);
}

</style>