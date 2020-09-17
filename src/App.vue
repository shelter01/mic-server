<template>
  <div id="app">
    <gdy-mic-server
      :runIns="runIns"
      :destroyedIns="destroyedIns"
      :closedIns="closedIns"
      :startingIns="startingIns"
      :resourceOccupation="resourceOccupation"
    ></gdy-mic-server>
  </div>
</template>

<script>
import Vue from 'vue'
// import micServer from './components/micServer';
import micServer from '@gdyfe/mic-server'
Vue.use(micServer)

export default {
  name: 'App',
  data() {
    return {
      used: 35,
      unused: 65,
      runIns: [
        {
          id: 1,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 2,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 3,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 4,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 5,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 6,
          name: 'xxx实例名称',
          type: '制作导播台'
        }
      ],
      destroyedIns: [
        {
          id: 1,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 2,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 3,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 4,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 5,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 6,
          name: 'xxx实例名称',
          type: '制作导播台'
        }
      ],
      closedIns: [
        {
          id: 1,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 2,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 3,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 4,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 5,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 6,
          name: 'xxx实例名称',
          type: '制作导播台'
        }
      ],
      startingIns: [
        {
          id: 1,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 2,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 3,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 4,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 5,
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          id: 6,
          name: 'xxx实例名称',
          type: '制作导播台'
        }
      ]
    }
  },
  computed: {
    resourceOccupation() {
      return [
        ['使用中', this.used],
        ['未使用', this.unused]
      ]
    }
  }
}
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
</style>
