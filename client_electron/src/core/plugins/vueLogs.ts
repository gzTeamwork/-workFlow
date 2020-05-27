import { PluginFunction } from 'vue'

const ENV = process.env.NODE_ENV

const convertToArray = (nodes: any) => {
  let arr: any[]
  try {
    arr = Array.prototype.slice.call(nodes, 0)
  } catch (ex) {
    arr = []
    for (let i of Object.keys(nodes)) {
      arr.push(nodes[i])
    }
  }
  return arr
}

interface VuePluginImpl extends PluginFunction<T>{
  function log;
}

declare const VueLogs:VuePluginImpl

VueLogs.log = function() {
  console.log(convertToArray(arguments))
}

// declare module 'vue/types/vue' {
//   interface Vue {
//     $log: ;
//   }
// }

export default VueLogs
