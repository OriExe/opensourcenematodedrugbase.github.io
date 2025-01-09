<template>
    <footer class="footer">
      <div class="container">
        <img class="UoWLogo" src="@/assets/UoW_Logo.png" alt="Logo">

        <div class="links">
          <li><router-link to="/login">Login</router-link></li>
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
  list-style-type: none
}

.links a {
  color: rgb(0, 0, 0);
  margin: 0 10px;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}

.UoWLogo {
  width: 150px; /* Sets the width to 100px */
  height: auto; /* Maintains the aspect ratio */
}

.funding {
  position:absolute;
  left: 200px;
  color: rgb(0, 0, 0);
}

</style>
  