export default class CenterMedia {
  constructor(centerMedia = {}) {
    this.workList = centerMedia.workList || []
    this.closeList = centerMedia.closeList || []
    this.destroyList = centerMedia.destroyList || []
    this.serviceList = centerMedia.serviceList || []
    this.data2d = centerMedia.data2d || []
    this.data3d = centerMedia.data3d || []
  }
}
