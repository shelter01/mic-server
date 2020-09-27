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
import axios from 'axios'
Vue.use(micServer)
Vue.prototype.$http = axios

// import micServer from './components/micServer';
// import micServer from './components/micServer/src/main'

export default {/*
  components: {
    'gdyMicServer': micServer
  },*/
  name: 'App',
  data() {
    return {
      use: 35,
      free: 65,
      workingNum: 5, // 运行中实例数
      closeNum: 8,//关闭实例数
      destroyNum: 6,//已销毁实例数
      serviceNum: 0,//服务实例数
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
      serviceIns: []
    }
  },
  computed: {
    resourceOccupation() {
      return [
        ['使用中', this.use],
        ['未使用', this.free]
      ]
    },
    perNum() {
      return [ this.workingNum, this.closeNum, this.destroyNum, this.serviceNum ]
    }
  },
  methods: {
    async getDataList(){
      const { data: res } = await this.$http.get('http://ops.aodianyun.cn/admin/dbMonitor/getCenterMediaMonitor')
      // console.log(res)
      this.serviceIns = res.list.serviceList.length > 6 ? res.list.serviceList.slice(0, 6) : res.list.serviceList
      this.serviceIns.map(item => item.cpu = item.cpu.toFixed(2))
      this.serviceNum = res.list.serviceNum
      this.use = res.list.use
      this.free = res.list.free
    }
  },
  mounted() {
    this.getDataList()
    this.timer = window.setInterval(() => {
      // setTimeout(() => {
      //   this.getDataList()
      // },0)
      this.getDataList()
    },3000)
  },
  destroyed() {
    window.clearInterval(this.timer)
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
