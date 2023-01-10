<script setup lang="ts" name="Graph">
  import { NodeItem } from '@/types'
  import { initGraph } from './core'

  const containerRef = $ref<Nullable<HTMLDivElement>>(null)
  let graph: Nullable<InstanceType<GraphType>> = null

  onMounted(() => {
    // todo 加载画布数据
    graph = initGraph({
      container: containerRef!,
    })
  })

  function addNode(item: NodeItem, e: MouseEvent) {
    const node = graph?.createNode({
      shape: item.type,
    })

    graph?.dnd?.start(node!, e)
  }

  function addPorts() {}

  defineExpose({
    addNode,
  })
</script>

<template>
  <div ref="containerRef" id="container"></div>
</template>

<style>
  #container {
    width: 100%;
    height: 100%;
  }
</style>
