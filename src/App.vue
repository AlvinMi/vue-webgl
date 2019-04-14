<template>
  <div id="app">
    <!-- v-model -->
    show: <input type="checkbox" v-model="show">

    <!-- template -->
    <template v-if="show">
      <!-- Editor -->
      <Editor/>
    </template>
  </div>
</template>

<script>
import Editor from './components/Editor'

export default {
  name: 'app',
  data() {
    return {
      show: true,
    }
  },
  components: {
    Editor,
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
