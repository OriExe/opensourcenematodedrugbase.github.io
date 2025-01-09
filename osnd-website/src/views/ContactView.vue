<script>
import ContactUsFormComponent from '../components/ContactUsFormComponent.vue'; // Adjust the path as needed

export default {
  components: {
    ContactUsFormComponent
  }
};
</script>

<template>
  <div class="home">
    <h1>Contact Us</h1>
    <hr class="top-line" />
    <section class="header-section">
    <p class="contacttext">Thank you for your interest in the open-source nematode drug-based project.</p>
    <p class="emailtext">For inquiries, please contact a.barr1@westminster.ac.uk</p>
    </section>
    
    <!-- <ContactUsFormComponent/> -->
  </div>
</template>

<style>

.contacttext {
  font-size: 24px;
  max-width: 900px;
  margin: 20px auto;
  line-height: 1.6;
}

.emailtext {
  font-size: 24px;
  margin-bottom: 50px;
}

.top-line {
  border: none;
  border-top: 1.5px solid #ededed;  /* Adjust thickness and color */
  margin: 0;
  margin-top: 20px;  /* Adjust top margin as needed */
}

</style>