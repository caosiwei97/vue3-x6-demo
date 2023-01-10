import { NODE_LABEL, NODE_TYPE } from '@/constants'
import { register } from '@antv/x6-vue-shape'
import { ports } from '../../common/ports'
import Node from '../../common/CommonNode.vue'

export function registerTaskNode() {
  register({
    shape: NODE_TYPE.task,
    width: 120,
    height: 32,
    component: Node,
    ports: { ...ports },
    data: {
      type: NODE_TYPE.task,
      label: NODE_LABEL[NODE_TYPE.task]
    },
  })
}
