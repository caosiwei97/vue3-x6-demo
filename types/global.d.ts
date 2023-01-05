import type { Options } from '@antv/x6/lib/graph/options'
import { Graph } from '@antv/x6'

declare global {
  type GraphType = typeof Graph
  type GraphOptions = Partial<Options.Manual>
  type Nullable<T> = null | T
}
