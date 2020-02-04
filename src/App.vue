<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/style/main.scss';

#app {
  font-family: rubik, sans-serif;
  font-size: 1rem;

  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
