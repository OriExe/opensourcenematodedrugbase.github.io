<template>
  <form @submit.prevent="submitForm">
    <div class="text-area">
      <textarea v-model="formData.message" placeholder="Enter your message here"></textarea>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log(this.formData.message);
    },
  },
};
</script>