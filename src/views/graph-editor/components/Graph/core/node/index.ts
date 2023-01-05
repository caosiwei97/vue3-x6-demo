import { registerTaskNode } from './task'
import { registerFunctionNode } from './function'
import { registerPushNode } from './push'

export const registerNode = (Graph: GraphType) => {
  registerTaskNode(Graph)
  registerFunctionNode(Graph)
  registerPushNode(Graph)
}
