import highcharts from 'highcharts'

const pie3dConfig = {
  chart: {
    type: 'pie',
    events: {
      load: function() {
        var each = highcharts.each
        var points = this.series[0].points
        each(points, function(p, i) {// eslint-disable-line no-unused-vars
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
        each(points, function(p, i) {// eslint-disable-line no-unused-vars
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
      allowPointSelect: false,
      enableMouseTracking: false,
      cursor: 'pointer',
      depth: 35,
      dataLabels: {
        enabled: true, //是否显示饼图的线形tip
        style: {
          color: '#fff',
          fontSize: '1.09vw',
          fontWeight: 400
        },
        distance: '1%'
      }
    }
  },
  credits: {
    enabled: false
  },
  series: [
    {
      type: 'pie',
      data: [],
      colors: ['#E520FB', '#35CFE8', '#103DFF', '#8A4CFF'],
      size: '50%',
      center: ['50%', '60%'],
      animation: false
    }
  ]
}
const pie2dConfig = {
  chart: {
    type: 'pie', //饼图
    backgroundColor: 'rgba(0,0,0,0)' //背景颜色
  },
  title: {
    text: null
  },
  plotOptions: {
    pie: {
      allowPointSelect: false, //每个扇块能否选中
      enableMouseTracking: false,
      cursor: 'pointer', //鼠标指针
      dataLabels: {
        enabled: true, //是否显示饼图的线形tip
        style: {
          color: '#fff',
          fontSize: '1.09vw',
          fontWeight: 400
        },
        distance: '40%'
      }
    }
  },
  credits: {
    enabled: false
  },
  series: [
    {
      type: 'pie',
      data: [],
      colors: ['#046EE7', '#3AF2A8'],
      size: '65%',
      center: ['53%', '49.5%'],
      animation: false
    }
  ]
}
export default { pie2dConfig, pie3dConfig }
