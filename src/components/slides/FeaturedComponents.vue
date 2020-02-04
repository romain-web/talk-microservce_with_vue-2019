<template>
  <div class="featured-components">
    <h1>
      Featured Components
    </h1>
    <highlight-code lang="vue" v-pre>
      &lt;!-- A template --&gt;
      &lt;template&gt;
        &lt;div class="chaton"&gt;
          &lt;h1&gt;Chaton {{ name }}&lt;/h1&gt;
          &lt;button @click="meow"&gt;Say Meow&lt;/button&gt;
        &lt;/div&gt;
      &lt;/template&gt;

      &lt;!-- The Component description --&gt;
      &lt;script&gt;
      export default {
        name: 'ChatonComponent',
        data () {
          return {
            name: 'Lucky'
            meowStr: 'Meooow'
          }
        },
        methods: {
          meow () {
            const m = this.meowStr
            console.log(`${m} !`)
          }
        }
      }
      &lt;/script&gt;

      &lt;!-- The style --&gt;
      &lt;style&gt;
      .chaton {
        background-color: orange;
        color: brown;
      }
      &lt;/style&gt;
    </highlight-code>
  </div>
</template>

<script>
export default {
  name: 'FeaturedComponents'
}
</script>
