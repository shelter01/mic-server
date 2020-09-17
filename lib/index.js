/**
 * EXPORT COMPONENTS
 */
export { default as micServer } from './components/micServer/index';

/**
 * IMPORT COMPONENTS
 */
import micServer from './components/micServer/index';
/**
 * USE COMPONENTS
 */
export default function(Vue) {
  Vue.use(micServer);
}
