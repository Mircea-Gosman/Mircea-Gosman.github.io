<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    document.documentElement.setAttribute('theme', 'light');
  }
}
</script>

<style>
#app {
  font-family: Inter;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  margin: 0;
  padding: 0;
  background-color: var(--background);
  box-sizing: border-box;
  overflow: hidden;
}
</style>
