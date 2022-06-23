<template>
  <HomeComponent/>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'

export default {
  name: 'App',
  components: {
    HomeComponent
  },
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
