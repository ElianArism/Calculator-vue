<template>
  <div class="container">
    <ul id="nav">
      <li class="link">
        <router-link to="/">Home</router-link> 
      </li>
      <li class="link">
        <router-link to="/calculator">Calculator</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<style>
  /* General */
  :root {
    --bg-calc: #26292f;
    --bg-calc-results: #202c44;
    --bg-calc-hover: #242629;
    --bg-calc-operations: #2d4a86;
    --bg-calc-operations-hover: #3a5892;
    --bg-body: #333;
    --text-color: #fefefefe;
    --hover-color: rgb(42, 40, 40);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    user-select: none;
  }

  body, #app, .container {
    background-color: var(--bg-body);
    color: var(--text-color);
    height: 100vh;
    width: 100%;
  }

  p, a {
    font-size: 1rem;
    color: inherit;
  }

  /* Header */
  #nav {
    align-items: center;
    color: inherit;
    display: flex;
    justify-content: center;
    height: 50px;
    padding: 5px;
    width: 100%;
  }

  .link {
    border-radius: 10px;
    font-size: 1.2rem;
    transition: background-color 300ms;
    padding: 10px;
  }

  .link:hover {
    background-color: var(--hover-color);
    transition: background-color 300ms;
  }
  
</style>
