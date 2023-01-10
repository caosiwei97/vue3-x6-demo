import { registerNode } from './node'
import { initEvents } from './events'
import { createInstance } from './instance'
import { initPlugin } from './plugin'

registerNode()

export const initGraph = (options: GraphOptions = {}) => {
  const graph = createInstance(options)

  initPlugin(graph)
  initEvents(graph)

  return graph
}