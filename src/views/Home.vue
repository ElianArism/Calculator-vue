<template>
  <div class="home">
    <h1>Calculator App</h1>
    <br>
    <router-link to="/calculator" class="link button">Go!</router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .button {
    padding: 1rem;
  }
</style>