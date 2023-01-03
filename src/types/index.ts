import { NODE_GROUP } from '@/constants'

export type NodeGroup = typeof NODE_GROUP[number]
export type NodeItem = NodeGroup['childNodes'][number]
