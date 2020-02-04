<template>
  <div class="featured-components">
    <h1>
      Featured Components
    </h1>
    <highlight-code lang="javascript" v-pre>
      export default {
        name: 'ChatonComponent',
        props: {
          color: String
        },
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
        },
        template: `&lt;div class="chaton" :style="{backgroundColor: color}"&gt;
          &lt;h1&gt;Chaton {{ name }}&lt;/h1&gt;
          &lt;button @click="meow"&gt;Say Meow&lt;/button&gt;
        &lt;/div&gt;`
      }
    </highlight-code>
  </div>
</template>

<script>
export default {
  name: 'FeaturedComponents'
}
</script>
