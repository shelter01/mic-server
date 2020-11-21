export function centerMediaTranslator({
  use,
  free,
  workingNum,
  closeNum,
  destroyNum,
  serviceNum,
  workList,
  closeList,
  destroyList,
  serviceList
}) {
  const serviceRes =
    serviceList.length > 6 ? serviceList.slice(0, 6) : serviceList
  serviceRes.map(i => (i.cpu = i.cpu.toFixed(2)))
  const data2d = [
    [`使用中：${Number(use.toFixed(2))}%`, use],
    [`未使用：${Number(free.toFixed(2))}%`, free]
  ]
  const data3d = [
    {
      name: `当前开启实例数量：${workingNum}`,
      y: workingNum,
      h: workingNum * 7
    },
    {
      name: `当前实例关闭数量：${closeNum}`,
      y: closeNum,
      h: closeNum * 7
    },
    {
      name: `已销毁实例数量：${destroyNum}`,
      y: destroyNum,
      h: destroyNum * 7
    },
    {
      name: `启动中：${serviceNum}`,
      y: serviceNum,
      h: serviceNum * 7
    }
  ]
  return {
    workList: workList.length > 6 ? workList.slice(0, 6) : workList,
    closeList: closeList.length > 6 ? closeList.slice(0, 6) : closeList,
    destroyList: destroyList.length > 6 ? destroyList.slice(0, 6) : destroyList,
    serviceList: serviceRes,
    data2d,
    data3d
  }
}
