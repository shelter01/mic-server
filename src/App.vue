<template>
  <div id="app">
    <gdy-mic-server/>
  </div>
</template>

<script>
// import Vue from 'vue'
// import micServer from '@gdyfe/mic-server'
// import axios from 'axios'
// Vue.use(micServer)
// Vue.prototype.$http = axios

// import micServer from './components/micServer';
import micServer from './components/micServer/src/main'

export default {/**/
  components: {
    'gdyMicServer': micServer
  }
}
</script>

<style lang="less">
html,
body {
  padding: 0;
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
}
</style>
