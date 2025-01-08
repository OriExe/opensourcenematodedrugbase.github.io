<template>
    <header class="header">
      <div class="container">
        <h1 class="logo">Open Source Nematode Project</h1>
        <nav class="nav">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
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
  }
  
  .nav ul {
    display: flex;
    gap: 20px;
    list-style: none;
  }
  
  .nav a {
    color: white;
    text-decoration: none;
  }
  
  .nav a:hover {
    text-decoration: underline;
  }
</style>  