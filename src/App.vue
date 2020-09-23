<template>
  <div id="app">
    <gdy-mic-server
      :runIns="runIns"
      :destroyedIns="destroyedIns"
      :closedIns="closedIns"
      :serviceIns="serviceIns"
      :resourceOccupation="resourceOccupation"
      :perNum="perNum"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import micServer from '@gdyfe/mic-server'
Vue.use(micServer)

// import micServer from './components/micServer';
// import micServer from './components/micServer/src/main'

export default {/*
  components: {
    'gdyMicServer': micServer
  },*/
  name: 'App',
  data() {
    return {
      used: 35,
      unused: 65,
      workingNum: 5, // 运行中实例数
      closeNum: 8,//关闭实例数
      destroyNum: 3,//已销毁实例数
      serviceNum: 4,//服务实例数
      runIns: [
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        }
      ],
      destroyedIns: [
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        }
      ],
      closedIns: [
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        }
      ],
      serviceIns: [
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
          name: 'xxx实例名称',
          type: '制作导播台'
        },
        {
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
    },
    perNum() {
      return [ this.workingNum, this.closeNum, this.destroyNum, this.serviceNum ]
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
