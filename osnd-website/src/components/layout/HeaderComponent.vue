<template>
    <header class="header">
      <div class="container">
        <img class="header-logo" src="@/assets/OSNDB avatar_7.png" alt="Logo">
        <h1 class="logo">Open Nematode Drub-Based Project</h1>
        <nav class="nav">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <!-- <li><router-link to="/blog">Blog</router-link></li> -->
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #465956;
    padding: 20px;
    color: white;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 1.5em;
    font-weight: bold;
    position: absolute;
    left: 150px;
  }
  
  .nav ul {
    display: flex;
    gap: 30px;
    list-style: none;
  }
  
  .nav a {
    color: white;
    text-decoration: none;
    font-size: 24px;
    
  }
  
  .nav a:hover {
    text-decoration: underline;
  }

  .header-logo {
    width: 100px; /* Sets the width to 100px */
    height: auto; /* Maintains the aspect ratio */
  }

</style>  