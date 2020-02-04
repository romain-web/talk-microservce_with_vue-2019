<template>
  <div class="slide what-we-have-in-spa-with-vue">
    <h1>
      What we have in SPA with <span class="vuejs"/>
    </h1>
    <ul>
      <li>Featured Components</li>
      <li>Routing with Vue-router <a href="https://github.com/vuejs/vue-router"><GithubIcon /></a></li>
      <li>State Management with Vuex <a href="https://github.com/vuejs/vuex"><GithubIcon /></a></li>
      <li>Api with Vue-apollo (GraphQl) <a href="https://github.com/akryum/vue-apollo"><GithubIcon /></a></li>
      <li>Awesome-Vue <a href="https://github.com/vuejs/awesome-vue"><GithubIcon /></a> ...</li>
    </ul>
    <p>The frontend can be completely independant and CDN proof</p>
  </div>
</template>

<script>
import GithubIcon from 'vue-material-design-icons/github-circle.vue'

export default {
  name: 'WhatWeHaveInSPAWithVue',
  components: {
    GithubIcon
  },
  data () {
    return {}
  }
}
</script>
