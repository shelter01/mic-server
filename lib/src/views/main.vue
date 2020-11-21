<template>
  <div class="mic-server" id="mic-server-full">
    <div class="server-title">{{ title }}</div>
    <div class="full-screen" @click="fullScreen" title="全屏">
      <img src="../assets/icons/screenfull.svg" />
    </div>
    <div class="server-left">
      <div class="server-list">
        <div class="server-list-hd">
          <div class="server-list-hd-title">
            <div class="server-list-hd-title-line">|</div>
            <div class="server-list-hd-title-text">当前运行实例</div>
          </div>
          <div class="server-list-hd-tr">
            <div class="server-list-hd-tr-td">序号</div>
            <div class="server-list-hd-tr-td">实例名称</div>
            <div class="server-list-hd-tr-td">实例类型</div>
          </div>
        </div>
        <ul>
          <li
            v-for="(item, index) in workList"
            :key="index"
            class="server-list-bd-tr"
          >
            <div class="server-list-bd-td">{{ index + 1 }}</div>
            <div class="server-list-bd-td">{{ item.name }}</div>
            <div class="server-list-bd-td">制作导播台</div>
          </li>
        </ul>
      </div>
      <div class="server-list">
        <div class="server-list-hd">
          <div class="server-list-hd-title">
            <div class="server-list-hd-title-line">|</div>
            <div class="server-list-hd-title-text">当前已销毁实例</div>
          </div>
          <div class="server-list-hd-tr">
            <div class="server-list-hd-tr-td">序号</div>
            <div class="server-list-hd-tr-td">实例名称</div>
            <div class="server-list-hd-tr-td">实例类型</div>
          </div>
        </div>
        <ul>
          <li
            v-for="(item, index) in destroyList"
            :key="index"
            class="server-list-bd-tr"
          >
            <div class="server-list-bd-td">{{ index + 1 }}</div>
            <div class="server-list-bd-td">{{ item.name }}</div>
            <div class="server-list-bd-td">1</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="server-chart">
      <div class="server-chart-pie3d">
        <div class="server-chart-pie3d-base"></div>
        <div class="server-chart-pie3d-circle"></div>
        <div class="server-chart-pie3d-circle"></div>
        <div class="server-chart-pie3d-circle"></div>
        <div class="server-chart-pie3d-circle"></div>
        <highcharts
          :options="pie3d"
          style="height: 62.69vh;width: 44.95vw;"
        ></highcharts>
      </div>
      <div class="server-chart-pie">
        <div class="server-chart-pie-title">
          <div class="server-chart-pie-title-line">|</div>
          <div class="server-chart-pie-title-text">服务器资源占用量</div>
        </div>
        <highcharts
          :options="pie2d"
          style="height: 37.31vh;width: 44.95vw;"
        ></highcharts>
      </div>
    </div>
    <div class="server-right">
      <div class="server-list">
        <div class="server-list-hd">
          <div class="server-list-hd-title">
            <div class="server-list-hd-title-line">|</div>
            <div class="server-list-hd-title-text">当前关闭实例</div>
          </div>
          <div class="server-list-hd-tr">
            <div class="server-list-hd-tr-td">序号</div>
            <div class="server-list-hd-tr-td">实例名称</div>
            <div class="server-list-hd-tr-td">实例类型</div>
          </div>
        </div>
        <ul>
          <li
            v-for="(item, index) in closeList"
            :key="index"
            class="server-list-bd-tr"
          >
            <div class="server-list-bd-td">{{ index + 1 }}</div>
            <div class="server-list-bd-td">{{ item.name }}</div>
            <div class="server-list-bd-td">2</div>
          </li>
        </ul>
      </div>
      <div class="server-list">
        <div class="server-list-hd">
          <div class="server-list-hd-title">
            <div class="server-list-hd-title-line">|</div>
            <div class="server-list-hd-title-text">服务器</div>
          </div>
          <div class="server-list-hd-tr">
            <div class="server-list-hd-tr-td">序号</div>
            <div class="server-list-hd-tr-td">IP</div>
            <div class="server-list-hd-tr-td">cpu/容器数量</div>
          </div>
        </div>
        <ul>
          <li
            v-for="(item, index) in serviceList"
            :key="item.name"
            class="server-list-bd-tr"
          >
            <div class="server-list-bd-td">{{ index + 1 }}</div>
            <div class="server-list-bd-td">{{ item.name }}</div>
            <div class="server-list-bd-td">
              {{ item.cpu }}/{{ item.dockerNum }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue'
import highcharts from 'highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
import screenfull from 'screenfull'
import { CenterMediaService } from '../service'
import CHART_CONFIG from './config.js'
import ROP from '@whzcorcd/rop-client'
highcharts3d(highcharts)

export default {
  name: 'gdyMicServer',
  components: {
    highcharts: Chart
  },
  props: {
    title: {
      type: String,
      default() {
        return '微服务结构'
      }
    },
    url: {
      type: String,
      default() {
        return 'http://ops.aodianyun.cn/admin/dbMonitor/getCenterMediaMonitor'
      }
    }
  },
  data() {
    return {
      ROP_rc: null,
      workList: [],
      closeList: [],
      destroyList: [],
      serviceList: [],
      pie3d: { ...CHART_CONFIG.pie3dConfig },
      pie2d: { ...CHART_CONFIG.pie2dConfig }
    }
  },
  methods: {
    _makeClientId() {
      this.ROP_rc.Leave()
      const clientId = 'chinaMedia' + String(Math.floor(Math.random() * 100000))
      this.ROP_rc.Enter(
        '',
        'sub_0eb0a1a4b9a8cd57609dc641eee8e8c4',
        clientId,
        true
      )
    },
    _DMSInit() {
      this.ROP_rc = new ROP({
        ICS_ADDR: 'mqttdms.aodianyun.cn',
      })
      this.ROP_rc.On('enter_suc', () => {
        console.log('服务器连接成功')
        // 实例列表
        this.ROP_rc.Subscribe('chinaMedia_log')
      })
      this.ROP_rc.On('publish_data', (res, topic) => {
        const data = JSON.parse(res)
        if (topic === 'chinaMedia_log') {
          if(data.type === 'memInfo'){
            this.use = data.data.use
            this.free = data.data.free
          } else if(data.type === 'count') {
            this.workingNum = data.data.workingNum
            this.serviceNum = data.data.serviceNum
          } else if(data.type === 'workList') {
            this.workList = data.data
          }
        }
      })
      this.ROP_rc.On('reconnect', (err) => {
        console.log('重连', err)
      })
      this.ROP_rc.On('enter_fail', (err) => {
        console.log('服务器连接失败', err)
      })
      this.ROP_rc.On('losed', () => {
        console.log('服务器断开连接')
      })
    },
    getServiceList() {
      CenterMediaService.getCenterMediaList(this.url).then(res => {
        this.workList = res.workList
        this.closeList = res.closeList
        this.destroyList = res.destroyList
        this.serviceList = res.serviceList
        this.pie3d.series[0].data = res.data3d
        this.pie2d.series[0].data = res.data2d
      })
    },
    //饼图高低显示配置
    pieHigh() {
      var each = highcharts.each
      var round = Math.round
      var cos = Math.cos
      var sin = Math.sin
      var deg2rad = Math.deg2rad
      highcharts.wrap(
        highcharts.seriesTypes.pie.prototype,
        'translate',
        function(proceed) {
          proceed.apply(this, [].slice.call(arguments, 1))
          // Do not do this if the chart is not 3D
          if (!this.chart.is3d()) {
            return
          }
          var series = this
          var chart = series.chart
          var options = chart.options
          var seriesOptions = series.options
          var depth = seriesOptions.depth || 0
          var options3d = options.chart.options3d
          var alpha = options3d.alpha
          var beta = options3d.beta
          var z = seriesOptions.stacking
            ? (seriesOptions.stack || 0) * depth
            : series._i * depth
          z += depth / 2
          if (seriesOptions.grouping !== false) {
            z = 0
          }
          each(series.data, function(point) {
            var shapeArgs = point.shapeArgs
            var angle
            point.shapeType = 'arc3d'
            var ran = point.options.h
            shapeArgs.z = z
            shapeArgs.depth = depth * 0.75 + ran
            shapeArgs.alpha = alpha
            shapeArgs.beta = beta
            shapeArgs.center = series.center
            shapeArgs.ran = ran
            angle = (shapeArgs.end + shapeArgs.start) / 2
            point.slicedTranslation = {
              translateX: round(
                cos(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)
              ),
              translateY: round(
                sin(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)
              )
            }
          })
        }
      )(
        (function(H) {
          H.wrap(highcharts.SVGRenderer.prototype, 'arc3dPath', function(
            proceed
          ) {
            // Run original proceed method
            var ret = proceed.apply(this, [].slice.call(arguments, 1))
            ret.zTop = (ret.zOut + 0.5) / 100
            return ret
          })
        })(highcharts)
      )
    },
    fullScreen() {
      const el = document.getElementById('mic-server-full')
      if (screenfull.isEnabled) {
        screenfull.toggle(el)
      }
    }
  },
  created() {
    this.pieHigh()
  },
  mounted() {
    this.getServiceList()
    this._DMSInit()
    this._makeClientId()
  },
  beforeDestroy() {
    this.ROP_rc.Leave()
  }
}
</script>

<style lang="less" scoped>
@import './main.less';
</style>
