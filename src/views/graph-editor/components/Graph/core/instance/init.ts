import { Graph } from '@antv/x6'
import '@antv/x6-vue-shape'
import { registerShape } from '../node'
import { initPlugin } from '../plugin'

export const createGraphInstance = (options: GraphOptions = {}) => {
  const defaultGraphOptions: GraphOptions = {
    panning: true,
    mousewheel: true,
    background: {
      color: '#ddd',
    },
    grid: {
      visible: true,
      type: 'fixedDot',
      args: [
        {
          color: 'orange', // 主网格线颜色
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

export const initGraph = (options: GraphOptions = {}) => {
  registerShape(Graph)

  const graph = createGraphInstance(options)
  initPlugin(graph)

  return graph
}
