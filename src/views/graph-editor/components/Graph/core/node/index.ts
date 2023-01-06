import { registerTaskShape } from './task'
import { registerFunctionShape } from './function'
import { registerPushShape } from './push'

export const registerShape = () => {
  registerTaskShape()
  registerFunctionShape()
  registerPushShape()
}
