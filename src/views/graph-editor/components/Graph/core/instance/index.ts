import { Graph } from '@antv/x6'
import '@antv/x6-vue-shape'

export const createInstance = (options: GraphOptions = {}) => {
  const defaultGraphOptions: GraphOptions = {
    panning: true,
    mousewheel: true,
    background: {
      color: '#e0e0e0',
    },
    grid: {
      visible: true,
      type: 'fixedDot',
      args: [
        {
          color: '#fff', // 主网格线颜色
          thickness: 2, // 主网格线宽度
        },
        {
          color: 'yellow', // 次网格线颜色
          thickness: 1, // 次网格线宽度
          factor: 4, // 主次网格线间隔
        },
      ],
    },
  }

  const graphInstance = new Graph({
    ...defaultGraphOptions,
    ...options,
  })

  return graphInstance
}


