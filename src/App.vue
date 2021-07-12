<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png">
      <p>
        <router-link class="link" to="/forecasting">Home</router-link>
        <router-link class="link" to="/forecasting/about">About</router-link>
      </p>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #fff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link {
  margin-right: 10px;
}
</style>
