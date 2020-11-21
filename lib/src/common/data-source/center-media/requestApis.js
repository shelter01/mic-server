import axios from '../../util/http.js'
import { centerMediaTranslator } from './translators'

export async function getCenterMediaList(url) {
  return await axios(url).then(v => {
    return centerMediaTranslator(v)
  })
}
