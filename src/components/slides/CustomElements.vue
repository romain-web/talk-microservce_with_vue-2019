<template>
  <div class="slide custom-elements">
    <h1>
      Custom Elements
    </h1>

    <highlight-code lang="javascript" v-pre>
      class Chaton extends HTMLElement {
        static get observedAttributes () { // props
          return ['color']
        }
        constructor () { // created
          super()
          this.render()
        }
        meow () { // method
          console.log('Meooooow !')
        }
        attributeChangedCallback (attr, oldValue, newValue) { // watch
          this.render();
        }
        connectedCallback () { // unmout
          this.getElementsByTag('button')[0].addEventListener('click', this.meow)
        }
        render () {
          const color = this.getAttribute('color')
          this.innerHTML = `&lt;div style="background-color:${color}"&gt;
            &lt;button type="button" onClick=""&gt;Say Meow&lt;/button&gt;
          &lt;/div&gt;`
        }
      }

      window.customElements.define('chaton', Chaton)
    </highlight-code>
  </div>
</template>

<script>
export default {
  name: 'CustomElements',

  data () {
    return {}
  }
}
</script>

<style lang="scss">
  .custom-elements {

  }
</style>
