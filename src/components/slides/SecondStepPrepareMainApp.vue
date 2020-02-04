<template>
  <div class="slide second-step-prepare-main-app">
    <h1>
      Second step: Prepare your main App
      <br/><small v-if="data.step === 0">I am Routes 🌱</small>
    </h1>
    <div class="slide-container">
      <transition name="slide">
        <div v-if="data.step === 0">
          <highlight-code lang="bash" v-pre>
            # Use vue-cli to prepare the app
            vue init webpack microservices-example
          </highlight-code>

          <highlight-code lang="javascript" v-pre>
            // main.js

            import Vue from 'vue'
            import App from './App'
            import Router from 'vue-router'

            Vue.config.productionTip = false
            Vue.config.ignoredElements = [
              'fragment-player',
              'fragment-chat'
            ]

            new Vue({
              el: '#app',
              router: new Router({
                routes: [{
                  path: '/',
                  name: 'channel',
                  component: Channel
                }]
              }),
              components: { App },
              template: '<App/>'
            })
          </highlight-code>
        </div>
      </transition>

      <transition name="slide">
        <div v-if="data.step === 1">
          <highlight-code lang="vue" v-pre>
            &lt;!-- Channel.vue --&gt;
            &lt;template&gt;
              &lt;div&gt;
                &lt;fragment-player props1="Hello World"&gt;
                &lt;link rel="import" href="cdn.domain.tld/fragment/player.html"&gt;
              &lt;/div&gt;
            &lt;/template&gt;

            &lt;script&gt;
            export default {
              name: 'Channel'
            }
            &lt;/script&gt;
          </highlight-code>
        </div>
      </transition>
      <transition name="slide">
        <div v-if="data.step === 2">
          <highlight-code lang="html" v-pre>
            &lt;!-- player.html --&gt;
            &lt;template id="my-component-template"&gt;
              &lt;div&gt;
                &lt;p&gt; -- Player Stuff here -- &lt;/p&gt;
              &lt;/div&gt;
            &lt;/template&gt;

            &lt;script id="my-component-template"&gt;
            (function (window, parentDoc) {
              "use strict"
              const thisDoc = parentDoc.currentScript.ownerDocument

              class Player extends HTMLElement {
                constructor () {
                  shadow = this.createShadowRoot()
                  const template = thisDoc.querySelector('#template-player')
                  const instance = parentDoc.importNode(template.content, true)
                  shadow.appendChild(instance)
                }
              }

              window.customElements.define('fragment-player', Player)
            })(window, document)
            &lt;/script&gt;
          </highlight-code>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondStepPrepareMainApp',

  props: {
    data: Object
  }
}
</script>

<style lang="scss">
  .second-step-prepare-main-app {
    .slide-container {
      height: 70vh;

      > * {
        position: absolute;
        width: 100%;
      }
    }
  }
</style>
