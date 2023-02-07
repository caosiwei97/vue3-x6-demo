import { NODE_LABEL, NODE_TYPE } from '@/constants'
import Node from './Node.vue';
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
      label: NODE_LABEL[NODE_TYPE.function],
      ports: [
        {
          group: 'left',
        },
        {
          group: 'functionPort',
        },
        {
          group: 'functionPort',
        },
        {
          group: 'functionPort',
        },
        {
          group: 'functionPort',
        },
      ],
      remark: 'remark',
      configData: {
        mode: '',
        branch: [
          {
            name: '超温预警',
            leftVar: 'loc_temperature',
            right: '80',
            judge: '>='
          },
          {
            name: '常温状态',
            leftVar: 'loc_temperature',
            right: '80',
            judge: '<'
          },
          {
            name: '常温状态',
            leftVar: 'loc_temperature',
            right: '80',
            judge: '<'
          },
          {
            name: '常温状态',
            leftVar: 'loc_temperature',
            right: '80',
            judge: '<'
          },
        ]
      }
    }
  })
}
