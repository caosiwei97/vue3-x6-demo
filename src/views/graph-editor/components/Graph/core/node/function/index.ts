import { NODE_LABEL, NODE_TYPE } from '@/constants'
import Node from '../../common/CommonNode.vue';
import { register } from "@antv/x6-vue-shape";
import { ports } from '../../common/ports';

export function registerFunctionNode() {
  register({
    shape: NODE_TYPE.function,
    width: 120,
    height: 32,
    component: Node,
    ports: { ...ports },
    data: {
      type: NODE_TYPE.function,
      label: NODE_LABEL[NODE_TYPE.function]
    }
  })
}
