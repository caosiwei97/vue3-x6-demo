// 节点类型
export enum NODE_TYPE {
  task = 'task',
  function = 'function',
  push = 'push',
}

// 节点分组类型
export enum NODE_GROUP_TYPE {
  trigger = 'trigger-node',
  condition = 'condition-node',
  output = 'output-node',
}

// 节点分组标题
export const NODE_GROUP_TITLE = {
  [NODE_GROUP_TYPE.trigger]: '触发节点',
  [NODE_GROUP_TYPE.condition]: '条件节点',
  [NODE_GROUP_TYPE.output]: '输出节点',
}

// 节点对应的 icon
export const NODE_ICON = {
  [NODE_TYPE.task]: 'ep:d-alarm-clock',
  [NODE_TYPE.function]: 'ep:d-set-up',
  [NODE_TYPE.push]: 'ep:d-arrow-right',
}

// 节点对应的 label
export const NODE_LABEL = {
  [NODE_TYPE.task]: '定时任务',
  [NODE_TYPE.function]: '函数',
  [NODE_TYPE.push]: '推送MQTT',
}

// 组合数据
export const NODE_GROUP = [
  {
    title: NODE_GROUP_TITLE[NODE_GROUP_TYPE.trigger],
    childNodes: [{ type: NODE_TYPE.task, label: NODE_LABEL[NODE_TYPE.task] }],
  },
  {
    title: NODE_GROUP_TITLE[NODE_GROUP_TYPE.condition],
    childNodes: [
      { type: NODE_TYPE.function, label: NODE_LABEL[NODE_TYPE.function] },
    ],
  },
  {
    title: NODE_GROUP_TITLE[NODE_GROUP_TYPE.output],
    childNodes: [{ type: NODE_TYPE.push, label: NODE_LABEL[NODE_TYPE.push] }],
  },
]
