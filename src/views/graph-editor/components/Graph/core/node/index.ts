import { registerTaskNode } from './task'
import { registerFunctionNode } from './function'
import { registerPushNode } from './push'

export const registerNode = () => {
  registerTaskNode()
  registerFunctionNode()
  registerPushNode()
}
