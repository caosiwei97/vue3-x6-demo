import { initDndPlugin } from './dnd'
import { initSnaplinePlugin } from './snapline'

export const initPlugin = (graph: InstanceType<GraphType>) => {
  const plugins = [initSnaplinePlugin]

  plugins.forEach((plugin) => {
    graph.use(plugin())
  })

  // dnd 插件和其他插件使用规范不一致需要特殊处理
  const dnd = initDndPlugin(graph)

  graph.dnd = dnd
}
