<template>
    <footer class="footer">
      <div class="container">

        <a href="https://www.westminster.ac.uk/" target="_blank">
        <img class="UoWLogo" src="@/assets/UoW_Logo.png" alt="UoW">
        </a>

        

        <div class="links">
          <!-- <li><router-link to="/login">Login</router-link></li> -->
          <a href="https://github.com/OpenSourceNematodeDrugbase" target="_blank">GitHub</a>
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
  text-align: center;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.links {
  display: flex;
  align-items: center;
  list-style-type: none;
}

.links a {
  color: rgb(0, 0, 0);
  margin: 0 22px;
  text-decoration: none;
  font-weight: 450;
  font-size: 36px;
}

.links a:hover {
  text-decoration: underline;
}

.UoWLogo {
  max-width: 500px;
}

</style>
  