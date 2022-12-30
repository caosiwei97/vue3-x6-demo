export const nodes = [
  {
    title: '触发节点',
    childNodes: [
      {
        type: 'task',
        label: '定时任务',
      },
    ],
  },
  {
    title: '条件节点',
    childNodes: [
      {
        type: 'function',
        label: '函数',
      },
    ],
  },
  {
    title: '输出节点',
    childNodes: [
      {
        type: 'push',
        label: '推送MQTT',
      },
    ],
  },
]