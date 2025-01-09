<template>
    <footer class="footer">
      <div class="container">

        <a href="https://www.westminster.ac.uk/" target="_blank">
        <img class="UoWLogo" src="@/assets/UoW_Logo.png" alt="UoW">
        </a>
      </div>

      <div class ="socials">

        <a href="https://github.com/OpenSourceNematodeDrugbase" target="_blank">
        <img class="socials" src="@/assets/GitHub_Logo.png" alt="GitHub_Logo">
        </a>

        <a href="https://github.com/OpenSourceNematodeDrugbase" target="_blank">
        <img class="socials" src="@/assets/GitHub_Logo.png" alt="GitHub_Logo">
        </a>

        <a href="https://github.com/OpenSourceNematodeDrugbase" target="_blank">
        <img class="socials" src="@/assets/GitHub_Logo.png" alt="GitHub_Logo">
        </a>

        <a href="https://github.com/OpenSourceNematodeDrugbase" target="_blank">
        <img class="socials" src="@/assets/GitHub_Logo.png" alt="GitHub_Logo">
        </a>

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
  text-align: center;
}

.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.socials {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 60px;
  padding-right: 10px;
}

.links a:hover {
  text-decoration: underline;
}

.UoWLogo {
  max-width: 500px;
}
</style>
  