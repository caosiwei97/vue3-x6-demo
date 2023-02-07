import { Dnd } from '@antv/x6-plugin-dnd'

export const initDndPlugin = (target: GraphType) => {
  const dnd = new Dnd({
    target,
  })

  return dnd
}
