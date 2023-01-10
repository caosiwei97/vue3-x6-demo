import { NODE_TYPE } from '@/constants'

export interface NodeGroup {
  title: string
  childNodes: NodeItem[]
}

export interface NodeItem {
  type: NODE_TYPE
  label: string
}

export interface NodeData {
  /** 节点类型 */
  type: NODE_TYPE;

  /** 节点标签文本 */
  label: string;

  /** 节点 icon */
  icon: string;
}