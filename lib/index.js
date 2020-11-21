/**
 * EXPORT COMPONENTS
 */
export { default as micServer } from './src/index'

/**
 * IMPORT COMPONENTS
 */
import micServer from './src/index'
/**
 * USE COMPONENTS
 */
export default function(Vue) {
  Vue.use(micServer)
}
