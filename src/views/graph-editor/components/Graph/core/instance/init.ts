import { Graph } from '@antv/x6'
import { registerNode } from '../node'
import { initPlugin } from '../plugin'

const data = {
  nodes: [
    {
      id: 'node1',
      shape: 'rect',
      x: 40,
      y: 40,
      width: 100,
      height: 40,
      label: 'hello',
      attrs: {
        // body 是选择器名称，选中的是 rect 元素
        body: {
          stroke: 'red',
          strokeWidth: 2,
          fill: 'orange',
          rx: 6,
          ry: 6,
        },
      },
    },
    {
      id: 'node2',
      shape: 'rect',
      x: 160,
      y: 180,
      width: 100,
      height: 40,
      label: 'world',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    },
  ],
  edges: [
    {
      shape: 'edge',
      source: 'node1',
      target: 'node2',
      label: 'x6',
      attrs: {
        // line 是选择器名称，选中的边的 path 元素
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
        },
      },
    },
  ],
}

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
  registerNode(Graph)

  const graph = createGraphInstance(options)
  initPlugin(graph)

  // todo: 交给消费方处理
  graph.fromJSON(data) // 渲染元素
  graph.centerContent() // 居中显示

  return graph
}
