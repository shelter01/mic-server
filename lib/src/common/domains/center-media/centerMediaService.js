import { getCenterMediaList } from '../../data-source/center-media/requestApis'
import CenterMedia from './entities/centerMedia'

class CenterMediaService {
  static getCenterMediaList(url) {
    return getCenterMediaList(url).then(list => {
      return new CenterMedia(list)
    })
  }
}

export default CenterMediaService
