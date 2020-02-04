<template>
  <div class="slide what-is-a-micro-frontend-schema">
    <h1>
      What's a Micro Frontend <br>
      <small>From Monolith to Micro Services to Micro Frontends</small>
    </h1>
    <p class="text-center">{{ titleDiagram }}</p>
    <div class="diagram" :class="`step-${data.step}`">
      <div class="diagram-separator separator-1">
        <p class="txt-vertical">Frontend</p>
      </div>
      <div class="diagram-separator separator-2">
        <p class="txt-vertical">Backend</p>
      </div>
      <div class="block block1">
        <h3 v-if="data.step === 0">Monolith</h3>
        <h3 v-if="data.step === 1 || data.step === 2">Frontend Monolith</h3>
      </div>
      <div class="block block2">
        <h3 v-if="data.step === 1">Backend & DevOps</h3>
        <h3 v-if="data.step === 2">Aggregation (GraphQl)</h3>
      </div>
      <div class="block block3">
        <h3 v-if="data.step === 2">Service Video</h3>
        <h3 v-if="data.step > 2">Team Video</h3>
      </div>
      <div class="block block4">
        <h3 v-if="data.step === 2">Service Channel</h3>
        <h3 v-if="data.step > 2">Team Channel</h3>
      </div>
      <div class="block block5">
        <h3 v-if="data.step === 2">Service Chat</h3>
        <h3 v-if="data.step > 2">Team Chat</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatIsAMicroFrontendSchema',

  props: {
    data: Object
  },

  computed: {
    titleDiagram () {
      const index = this.data.step
      const titles = ['Monolith', 'Frontend/Backend', 'Micro Services', 'Micro Frontends']
      return titles[index]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/variables';

  $block-padding: 5%;
  $marge-left: 20%;

  @mixin block($t: 0, $l: 0, $w: 0, $h: 0) {
    padding: $block-padding;
    top: $t - $block-padding/2;
    left: $l - $block-padding/2;
    width: $w - $block-padding;
    height: $h - $block-padding;
  }

  .what-is-a-micro-frontend-schema {
    .diagram {
      margin: auto;
      height: 60vh;
      width: 60vh;

      position: relative;
      overflow: visible;
      background-color: transparentize($white, .77);

      .diagram-separator {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 33.3%;

        p {
          transform: rotate(-90deg) translate(-18%);
          transform-origin: bottom left;
        }
      }

      .separator-2 {
        top: 33.3%;
        height: 66.6%;
        border-top: 0.2vh dashed $white;
      }

      .block {
        background-clip: content-box;
        background-color: $white;
        color: $palette-dark-grey;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        transition: ease .5s all;

        border-radius: 3.5vh;

        h3 {
          text-align: center;
        }
      }

      .block1 {
        @include block(0, 0, 100%, 100%);
      }

      .block2 {
        @include block(100%, 0, 100%);
      }

      .block3 {
        @include block(100%, 0, 33.3%, $block-padding);
      }

      .block4 {
        @include block(100%, 33.3%, 33.3%, $block-padding);
      }

      .block5 {
        @include block(100%, 66.6%, 33.3%, $block-padding);
      }

      &.step-1 {
        .block1 {
          @include block(0, 0, 100%, 33.3%);
        }

        .block2 {
          @include block(33.3%, 0, 100%, 66.6%);
        }
      }

      &.step-2 {
        .block1 {
          @include block(0, 0, 100%, 25%);
        }

        .block2 {
          @include block(25%, 0, 100%, 25%);
        }

        .block3 {
          @include block(50%, 0, 33.3%, 50%);
        }

        .block4 {
          @include block(50%, 33.3%, 33.3%, 50%);
        }

        .block5 {
          @include block(50%, 66.6%, 33.3%, 50%);
        }
      }

      &.step-3 {
        .block1 {
          @include block(0, 0, $block-padding, $block-padding);
        }

        .block2 {
          @include block(0, 0, $block-padding, $block-padding);
        }

        .block3 {
          @include block(0, 0, 33.3%, 100%);
          background-color: $palette-orange;
          color: $white;
        }

        .block4 {
          @include block(0, 33.3%, 33.3%, 100%);
          background-color: $palette-bleu;
          color: $white;
        }

        .block5 {
          @include block(0, 66.6%, 33.3%, 100%);
          background-color: $palette-green;
          color: $white;
        }
      }
    }
  }
</style>
