import { PluginFunction } from 'vue'
export interface VuePluginImpl extends PluginFunction<any>{
  name: symbol | undefined
  props: object | undefined;
}
