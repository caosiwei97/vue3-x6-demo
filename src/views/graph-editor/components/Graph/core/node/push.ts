import { NODE_TYPE } from '@/constants'

export function registerPushNode(Graph: GraphType) {
  Graph.registerNode(NODE_TYPE.push, {})
}
