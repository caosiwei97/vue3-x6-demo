import { NODE_TYPE } from '@/constants'

export function registerTaskNode(Graph: GraphType) {
  Graph.registerNode(NODE_TYPE.task, {})
}
