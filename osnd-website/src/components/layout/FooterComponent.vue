<template>
  <footer class="footer">
    <div class="container">
      <a href="https://www.westminster.ac.uk/" target="_blank">
        <img class="UoWLogo" src="@/assets/UoW_Logo.png" alt="UoW">
      </a>
      <div class="socials">
        <a href="https://www.facebook.com/" target="_blank">
          <img class="social-logo" src="@/assets/Facebook_logo_(square).png" alt="Facebook_Logo">
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img class="social-logo" src="@/assets/Instagram_Logo.png" alt="Instagram_Logo">
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <img class="social-logo" src="@/assets/LinkedIn_Logo.png" alt="LinkedIn_Logo">
        </a>
        <a href="https://x.com/" target="_blank">
          <img class="social-logo" src="@/assets/X_logo.jpg" alt="X_Logo">
        </a>
        <a href="https://www.tiktok.com/" target="_blank">
          <img class="social-logo" src="@/assets/TikTok_Logo.png" alt="TikTok_Logo">
        </a>
        <a href="https://github.com/OpenSourceNematodeDrugbase" target="_blank">
          <img class="social-logo" src="@/assets/GitHub_Logo.png" alt="GitHub_Logo">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
.footer {
  background-color: #bad1ce;
  color: white;
  padding: 20px;
  border-radius: 20px;
}

.container {
  display: flex;
  justify-content: space-between; /* Align items at both ends */
  align-items: center;
  flex-wrap: nowrap; /* Keep everything on one line */
}

.UoWLogo {
  max-width: 350px; /* Adjust size if needed */
}

.socials {
  display: flex;
  gap: 30px; /* Space between social logos */
}

.social-logo {
  max-width: 60px; /* Adjust size of social logos */
}
</style>
