<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; University of Westminster</p>

        <div class="links">
          <li><router-link to="/login">Login</router-link></li>
          <a href="https://github.com" target="_blank">GitHub</a>
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
  background-color: #465956;
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
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}
</style>
  