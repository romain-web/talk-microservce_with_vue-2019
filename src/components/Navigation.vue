<template>
  <div class="navigation">
    <ArrowLeft @click.native.stop="$emit('prev')"/>
    <ArrowRight @click.native.stop="$emit('next')"/>
  </div>
</template>

<script type="text/javascript">
import ArrowRight from 'vue-material-design-icons/arrow-right.vue'
import ArrowLeft from 'vue-material-design-icons/arrow-left.vue'

export default {
  name: 'Navigation',

  components: {
    ArrowLeft,
    ArrowRight
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/variables';

.navigation {
  position: fixed;
  z-index: 9999;
  top: 0;

  .material-design-icon {
    border-radius: 15%;
    padding: 1vh;
    fill: $white;

    &:hover {
      background-color: transparentize($white, .77);
    }
  }
}
</style>
