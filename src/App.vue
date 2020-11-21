<template>
  <div id="app">
    <!-- <div style="height: 61px;"></div> -->
    <div class="test"><gdy-mic-server/></div>
  </div>
</template>

<script>
import Vue from 'vue'
// import micServer from '@gdyfe/mic-server'
import axios from 'axios'
// Vue.use(micServer)
Vue.prototype.$axios = axios

// import micServer from '../lib/components/micServer/src/main.vue'
import micServer from '../lib/src/views/main.vue'

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
/*
.test {
  width: 100%;
  height: calc(100vh - 61px);
}*/
</style>
