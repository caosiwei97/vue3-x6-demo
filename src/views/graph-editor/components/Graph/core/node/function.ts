import { NODE_TYPE } from '@/constants'

export function registerFunctionNode(Graph: GraphType) {
  Graph.registerNode(NODE_TYPE.function, {})
}
