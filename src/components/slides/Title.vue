<template>
  <div class="slide title">
    <h1>
      Micros Services and <span class="vuejs"/>
    </h1>

    <div class="align-row">
      <figure class="logo">
        <SeizeLogo />
      </figure>

      <figure class="avatar">
        <img src="@/assets/avatar_2018_romain.png">
        <figcaption>
          Romain Lienard<br>
          <a href="https://twitter.com/romain_web"><TwitterIcon/>@romain_web</a><br>
          <a href="https://github.com/romain-web"><GithubCircleIcon/>@romain-web</a>
        </figcaption>
      </figure>

      <figure class="logo">
        <VueLogo />
      </figure>
    </div>
  </div>
</template>

<script>
import TwitterIcon from 'vue-material-design-icons/twitter.vue'
import GithubCircleIcon from 'vue-material-design-icons/github-circle.vue'

import SeizeLogo from '@/components/utils/SeizeLogo'
import VueLogo from '@/components/utils/VueLogo'

export default {
  name: 'Title',

  components: {
    TwitterIcon,
    GithubCircleIcon,
    SeizeLogo,
    VueLogo
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/variables';

.avatar {
  position: relative;
  text-align: center;
  margin: 0;

  img {
    border-radius: 50%;
    overflow: hidden;
    width: 18vh;
    height: 18vh;
    margin-bottom: $gutter;
  }

  figcaption {
    font-size: $text-size-3;
    @include text-shadow(1);
  }
}

.logo {
  position: relative;

  text-align: center;
  margin: 0;

  width: 15vh;
  height: 15vh;
}

.align-row {
  display: flex;
  justify-content: center;
  flex: 1;
}
</style>
