import type { Options } from '@antv/x6/lib/graph/options'
import { Graph } from '@antv/x6'
import { Dnd } from '@antv/x6-plugin-dnd'

declare global {
  class GraphType extends Graph {
    dnd?: Dnd
  }
  type GraphOptions = Partial<Options.Manual>
  type Nullable<T> = null | T
}
