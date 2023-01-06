import { NODE_TYPE } from '@/constants'
import { register } from "@antv/x6-vue-shape";
import Node from '../Node.vue';

export function registerPushShape() {
  register({
    shape: NODE_TYPE.push,
    component: Node
  })
}
