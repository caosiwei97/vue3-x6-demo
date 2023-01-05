import { NODE_TYPE } from '@/constants'

export interface NodeGroup {
  title: string
  childNodes: NodeItem[]
}

export interface NodeItem {
  type: NODE_TYPE
  label: string
}
