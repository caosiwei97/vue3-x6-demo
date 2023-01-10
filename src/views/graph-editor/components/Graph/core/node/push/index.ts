import { NODE_TYPE } from '@/constants'
import { register } from "@antv/x6-vue-shape";
import { ports } from '../../common/ports';
import Node from '../../common/CommonNode.vue';

export function registerPushNode() {
  register({
    shape: NODE_TYPE.push,
    width: 120,
    height: 32,
    component: Node,
    ports: { ...ports },
  })
}
