
import { Graph } from '@antv/x6';

export function registerFunctionPortLayout() {
  Graph.registerPortLayout('functionPort', (portsPositionArgs) => {
    console.log(portsPositionArgs);
    
    return portsPositionArgs.map((_, index) => {
      return {
        position: {
          x: 184,
          y: index === 0 ? 52 : 44 * (index + 1),
        },
        angle: 0,
      }
    })
  }, true)
}
