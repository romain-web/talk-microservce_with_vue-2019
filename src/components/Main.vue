<template>
  <div class="main">
    <Navigation @prev="prevSlide" @next="nextSlide"/>
    <transition :name="transitionName">
      <component :is="slideName" :data="slideData"></component>
    </transition>
  </div>
</template>

<script>
import forEach from 'lodash/forEach'
import kebabCase from 'lodash/kebabCase'

import Navigation from './Navigation'
import slides from './slides'

function getComponents () {
  let components = {}
  forEach(slides, slide => {
    components[slide.component.name] = slide.component
  })

  return components
}

export default {
  name: 'Main',

  components: {
    ...getComponents(),
    Navigation
  },

  props: {
    slideUid: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      slides
    }
  },

  mounted () {
    window.addEventListener('keydown', e => {
      const key = e.key
      if (key === 'ArrowRight') {
        this.nextSlide()
      }
      if (key === 'ArrowLeft') {
        this.prevSlide()
      }
    })
  },

  computed: {
    slideData (nextProps, props) {
      if (nextProps !== props) {
        return this.slides[nextProps.slideUid].data
      }
    },
    slideName (nextProps, props) {
      if (nextProps !== props) {
        return this.slides[nextProps.slideUid].component.name
      }
    },
    transitionName (nextProps, props) {
      if (nextProps !== props) {
        return this.slides[nextProps.slideUid].transition
      }
    }
  },

  methods: {
    nextSlide () {
      const nextUid = this.slideUid + 1
      if (nextUid >= 0 && nextUid !== slides.length) {
        const nextName = kebabCase(this.slides[nextUid].component.name)
        this.$router.push(`${nextUid}-${nextName}`)
      }
    },

    prevSlide () {
      const prevUid = this.slideUid - 1
      if (prevUid >= 0 && prevUid !== slides.length) {
        const nextName = kebabCase(this.slides[prevUid].component.name)
        this.$router.push(`${prevUid}-${nextName}`)
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/style/variables';

  .main {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;

    @include flex-center;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .slide-enter-active {
    transition: all .3s ease;
  }
  .slide-leave-active {
    transition: all .3s ease;
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(20vh);
    opacity: 0;
  }
</style>
