<template>
  <div class="mic-server">
    <div class="server-title">微服务结构</div>
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
            v-for="(item, index) in dataList[0]"
            :key="index"
            class="server-list-bd-tr"
          >
            <div class="server-list-bd-td">{{ index+1 }}</div>
            <div class="server-list-bd-td">{{ item.name }}</div>
            <div class="server-list-bd-td">{{ item.type }}</div>
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
            v-for="(item, index) in dataList[1]"
            :key="index"
            class="server-list-bd-tr"
          >
            <div class="server-list-bd-td">{{ index+1 }}</div>
            <div class="server-list-bd-td">{{ item.name }}</div>
            <div class="server-list-bd-td">{{ item.type }}</div>
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
          style="height: 62.69vh;width: 44.95vw;min-width: 720px;min-height: 564px"
        ></highcharts>
      </div>
      <div class="server-chart-pie">
        <div class="server-chart-pie-title">
          <div class="server-chart-pie-title-line">|</div>
          <div class="server-chart-pie-title-text">服务器资源占用量</div>
        </div>
        <highcharts
          :options="pie2d"
          style="height: 37.31vh;width: 44.95vw;min-width: 720px;min-height: 336px"
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
            v-for="(item, index) in dataList[2]"
            :key="index"
            class="server-list-bd-tr"
          >
            <div class="server-list-bd-td">{{ index+1 }}</div>
            <div class="server-list-bd-td">{{ item.name }}</div>
            <div class="server-list-bd-td">{{ item.type }}</div>
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
            v-for="(item, index) in dataList[3]"
            :key="item.name"
            class="server-list-bd-tr"
          >
            <div class="server-list-bd-td">{{ index+1 }}</div>
            <div class="server-list-bd-td">{{ item.name }}</div>
            <div class="server-list-bd-td">{{ item.cpu }}</div>
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
highcharts3d(highcharts)

export default {
  name: 'gdyMicServer',
  props: {
    title: {
      type: String,
      default() {
        return '微服务结构'
      }
    },
    runIns: {
      type: Array,
      default() {
        return []
      }
    },
    destroyedIns: {
      type: Array,
      default() {
        return []
      }
    },
    closedIns: {
      type: Array,
      default() {
        return []
      }
    },
    serviceIns: {
      type: Array,
      default() {
        return []
      }
    },
    resourceOccupation: {
      type: Array,
      default() {
        return []
      }
    },
    perNum: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      pie3dConfig: {
        chart: {
          type: 'pie',
          events: {
            load: function() {
              var each = highcharts.each
              var points = this.series[0].points
              each(points, function(p, i) {
                p.graphic.attr({
                  translateY: -p.shapeArgs.ran
                })
                p.graphic.side1.attr({
                  translateY: -p.shapeArgs.ran
                })
                p.graphic.side2.attr({
                  translateY: -p.shapeArgs.ran
                })
              })
            },
            redraw: function() {
              var each = highcharts.each
              var points = this.series[0].points
              each(points, function(p, i) {
                p.graphic.attr({
                  translateY: -p.shapeArgs.ran
                })
                p.graphic.side1.attr({
                  translateY: -p.shapeArgs.ran
                })
                p.graphic.side2.attr({
                  translateY: -p.shapeArgs.ran
                })
              })
            }
          },
          options3d: {
            enabled: true,
            alpha: 60,
            beta: 0
          },
          backgroundColor: 'rgba(0,0,0,0)'
        },
        title: {
          text: null
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
              enabled: true, //是否显示饼图的线形tip
              style: {
                color: '#fff',
                fontSize: '21px',
                fontWeight: 400
              },
              distance: '1%'
            }
          }
        },
        series: []
      },
      pie2dConfig: {
        chart: {
          type: 'pie', //饼图
          backgroundColor: 'rgba(0,0,0,0)' //背景颜色
        },
        title: {
          text: null
        },
        plotOptions: {
          pie: {
            allowPointSelect: true, //每个扇块能否选中
            cursor: 'pointer', //鼠标指针
            dataLabels: {
              enabled: true, //是否显示饼图的线形tip
              style: {
                color: '#fff',
                fontSize: '21px',
                fontWeight: 400
              },
              distance: '40%'
            }
          }
        },
        series: []
      }
    }
  },
  methods: {
    //饼图3d显示配置
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
    }
  },
  created() {
    this.pieHigh()
  },
  components: {
    highcharts: Chart
  },
  computed: {
    pie3d() {
      let series = [
        {
          type: 'pie',
          data: [
            {
              name: `当前实例开启数量：${this.perNum[0]}`,
              y: this.perNum[0],
              h: this.perNum[0] * 7
            },
            {
              name: `当前实例关闭数量：${this.perNum[1]}`,
              y: this.perNum[1],
              h: this.perNum[1] * 7
            },
            {
              name: `已销毁实例数量：${this.perNum[2]}`,
              y: this.perNum[2],
              h: this.perNum[2] * 7
            },
            {
              name: `使用中服务器数量：${this.perNum[3]}`,
              y: this.perNum[3],
              h: this.perNum[3] * 7
            }
          ],
          colors: ['#E520FB', '#35CFE8', '#103DFF', '#8A4CFF'],
          size: '50%',
          center: ['50%', '60%'],
          animation: false
        }
      ]
      return {
        ...this.pie3dConfig,
        series
      }
    },
    pie2d() {
      let series = [
        {
          type: 'pie',
          data: this.resourceOccupation,
          colors: ['#046EE7', '#3AF2A8'],
          size: '65%',
          center: ['53%', '49.5%'],
          animation: false
        }
      ]
      return {
        ...this.pie2dConfig,
        series
      }
    },
    dataList() {
      return [
        this.runIns,
        this.destroyedIns,
        this.closedIns,
        this.serviceIns
      ]
    }
  }
}
</script>

<style lang="less">
@listBgc: #232428;
@bgc: #1b1c20;
@textWhite: #efefef;
@textGreen: #2ec2b8;

.box() {
  .server-list {
    position: absolute;
    background-color: @listBgc;
    width: 25.52vw;
    min-width: 408px;
    border-radius: 0.625vw;
    overflow: hidden;
    right: 0;
    font-size: 14px;
    &:nth-child(1) {
      top: 6.67%;
    }
    &:nth-child(2) {
      top: 57.6%;
    }
    .server-list-hd {
      display: grid;
      grid-template-rows: 52.17% 47.83%;
      min-height: 10.74vh;
      min-height: 96px;
      .server-list-hd-title {
        display: grid;
        grid-template-columns: 7.6% 92.4%;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        color: @textGreen;
        .server-list-hd-title-line {
          text-align: center;
        }
      }
      .server-list-hd-tr {
        display: grid;
        grid-template-columns: 19.2% 54% 26.8%;
        justify-items: center;
        align-items: center;
        color: @textGreen;
        font-size: 14px;
      }
    }
    .server-list-bd-tr {
      display: grid;
      grid-template-columns: 19.2% 54% 26.8%;
      justify-items: center;
      align-items: center;
      height: 4.16vh;
      min-height: 37px;
      font-size: 14px;
      color: @textWhite;
      &:nth-child(odd) {
        background: #2c2d31;
      }
      &:nth-child(1) {
        background: linear-gradient(
          270deg,
          rgba(46, 194, 184, 0) 0%,
          rgba(46, 194, 184, 0.51) 82%,
          rgba(46, 194, 184, 0.6) 100%
        );
      }
      &:nth-child(2) {
        background: linear-gradient(
          270deg,
          rgba(39, 180, 232, 0) 0%,
          rgba(39, 180, 232, 0.25) 38%,
          rgba(39, 180, 232, 0.4) 66%,
          rgba(39, 180, 232, 0.49) 89%,
          rgba(39, 180, 232, 0.6) 100%
        );
      }
      &:nth-child(3) {
        background: linear-gradient(
          270deg,
          rgba(19, 50, 160, 0) 0%,
          rgba(18, 50, 163, 0.45) 76%,
          rgba(16, 49, 166, 0.6) 100%
        );
      }
    }
  }
}

.mic-server {
  position: relative;
  width: 100vw;
  height: 100vh;
  min-width: 1600px;
  min-height: 900px;
  display: grid;
  grid-template-columns: 27.5% 45% 27.5%;
  font-family: Helvetica;
  background-color: @bgc;
  .server-left {
    position: relative;
    min-height: 900px;
    .box;
  }
  .server-right {
    position: relative;
    min-height: 900px;
    .box;
    .server-list {
      left: 0;
    }
  }
  .server-chart {
    display: grid;
    grid-template-rows: 62.68% 37.32%;
    min-width: 720px;
    min-height: 900px;
    .server-chart-pie3d {
      position: relative;
      overflow: hidden;
      min-width: 720px;
      min-height: 564px;
      .server-chart-pie3d-base {
        position: absolute;
        bottom: -26%;
        left: 6%;
        width: 40vw;
        height: 80vh;
        min-width: 640px;
        min-height: 720px;
        border-radius: 50%;
        transform: scale(1, 0.5);
        background-image: radial-gradient(
          #112c71,
          #122556,
          #0e2147,
          #1b1c20,
          #1b1c20
        );
      }
      .server-chart-pie3d-circle {
        position: absolute;
        bottom: -26%;
        left: 6%;
        width: 40vw;
        height: 80vh;
        min-width: 640px;
        min-height: 720px;
        border-radius: 50%;
        animation: spread 4s infinite;
        background-color: #2ec2b8;
        opacity: 0;
        &:nth-child(2) {
          animation-delay: 1s;
        }
        &:nth-child(3) {
          animation-delay: 2s;
        }
        &:nth-child(4) {
          animation-delay: 3s;
        }
      }
    }
    .server-chart-pie {
      position: relative;
      overflow: hidden;
      min-width: 720px;
      min-height: 336px;
      .server-chart-pie-title {
        position: absolute;
        top: 12%;
        left: 6.7%;
        display: grid;
        grid-template-columns: 7.6% 92.4%;
        align-items: center;
        width: 20vw;
        min-width: 320px;
        font-size: 20px;
        font-weight: bold;
        color: @textGreen;
        .server-chart-pie-title-line {
          padding: 0 0.57vw;
          text-align: center;
        }
      }
    }
  }
  .server-title {
    position: absolute;
    top: 1.2%;
    left: 1%;
    font-size: 24px;
    min-width: 320px;
    color: #fff;
  }
}

@keyframes spread {
  from {
    opacity: 1;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(1, 0.5);
  }
}

.highcharts-credits {
  visibility: hidden;
}
</style>
