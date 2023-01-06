import { NODE_TYPE } from '@/constants'
import Node from '../Node.vue';
import { register } from "@antv/x6-vue-shape";

export function registerFunctionShape() {
  register({
    shape: NODE_TYPE.function,
    component: Node
  })
}
