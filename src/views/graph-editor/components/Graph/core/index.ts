import { createInstance } from './instance'
import { initEvents } from './events'
import { initPlugin } from './plugin'
import { registerNode } from './node'
import { registerEdge } from './edge'

registerNode()
registerEdge()

export const initGraph = (options: GraphOptions = {}) => {
  const graph = createInstance(options)

  initPlugin(graph)
  initEvents(graph)

  return graph
}