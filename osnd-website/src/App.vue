<script>
  import { RouterLink, RouterView } from 'vue-router'

  import HeaderComponent from './components/layout/HeaderComponent.vue'
  import FooterComponent from './components/layout/FooterComponent.vue'
  
  export default 
  {
    name: 'App',
    components: 
    {
      HeaderComponent,
      FooterComponent
    },
  }

</script>

<template>
  <div id="app">
      <!-- Header that appears across all pages -->
      <header>
        <HeaderComponent />
      </header>

      <!-- Main content area where the router-view will display the active route's component -->
      <main>
        <router-view />
      </main>
  
      <!-- Footer that appears across all pages -->
      <footer>
        <FooterComponent />
      </footer>
  </div>
</template>

<style>
  /* Global styles can go here */
  #app {
    font-family: Arial, sans-serif;
    color: #333;
    text-align: center;
  }
  
  main {
    padding: 20px;
  }
</style>
