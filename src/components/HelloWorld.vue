<template>
  <div class="hello">
    <button v-on:click="doesNotWork">DOES NOT WORK</button>
    <button v-on:click="works">WORKS</button>

    {{ v }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as TestModule from "../store/TestState";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  doesNotWork() {
    TestModule.updateSearchTerm(this.$store, "new value, (also works)");
  }
  works() {
    this.$store.commit("test/mutateTestVal", "new value (works)");
  }
  get v(): string {
    return TestModule.testValGetter(this.$store);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
