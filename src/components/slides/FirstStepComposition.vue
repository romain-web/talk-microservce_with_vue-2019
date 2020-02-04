<template>
  <div class="slide first-step-composition">
    <h1>
      First Step: Compose your Application
      <br/><small>My Channel Page</small>
    </h1>
    <div class="content">
      <div class="diagram" :class="`step-${data.step}`">
        <ChannelAsset/>
      </div>
      <div class="blocks">
        <transition name="slide">
          <div v-if="data.step > 0" class="block channel-block">
            Team Channel
          </div>
        </transition>
        <transition name="slide">
          <div v-if="data.step > 1" class="block player-block">
            Team Player
          </div>
        </transition>
        <transition name="slide">
          <div v-if="data.step > 2" class="block chat-block">
            Team Chat
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import ChannelAsset from '@/components/utils/ChannelAsset'

export default {
  name: 'FirstStepComposition',

  components: {
    ChannelAsset
  },

  props: {
    data: Object
  },

  data () {
    return {}
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/variables';

.first-step-composition {
  .content {
    display: flex;
  }

  .blocks {
    position: relative;
    width: 25vh;
    height: 60vh;

    .block {
      width: 100%;
      height: 15vh;
      margin-bottom: 5vh;
      border-radius: 1.3vh;

      display: flex;
      @include flex-center;
      color: $white;

      &.chat-block {
        background-color: $palette-green;
      }
      &.channel-block {
        background-color: $palette-bleu;
      }
      &.player-block {
        background-color: $palette-orange;
      }

      font-size: 3vh;
    }
  }

  .diagram {
    margin: auto;
    width: 85vh;

    #player-team,
    #player-team-content,
    #chat-team,
    #chat-team-content,
    #channel-team {
      transition: fill ease .5s;
    }

    &.step-0 {
      #player-team {
        fill: $white !important;
      }
      #player-team-content * {
        fill: #8393a7 !important;
      }

      #channel-team {
        fill: #3d4d65 !important;
      }

      #chat-team {
        fill: $white !important;
      }
      #chat-team-content * {
        fill: #8393a7 !important;
      }
    }

    &.step-1 {
      #player-team {
        fill: $white !important;
      }
      #player-team-content * {
        fill: #8393a7 !important;
      }

      #chat-team {
        fill: $white !important;
      }
      #chat-team-content * {
        fill: #8393a7 !important;
      }
    }

    &.step-2 {
      #chat-team {
        fill: $white !important;
      }
      #chat-team-content * {
        fill: #8393a7 !important;
      }
    }
  }
}
</style>
