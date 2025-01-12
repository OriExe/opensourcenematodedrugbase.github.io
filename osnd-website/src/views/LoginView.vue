<script>

  import LoginFormComponent from '../components/LoginFormComponent.vue'

  export default 
  {
    components:
    {
      LoginFormComponent
    },
  }

</script>

<template>
  <div class="home">
    <h1>Login</h1>
    <LoginFormComponent />
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>