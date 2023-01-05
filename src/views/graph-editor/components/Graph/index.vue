<script setup lang="ts" name="Graph">
  import { NodeItem } from '@/types'
  import { initGraph } from './core/instance/init'

  const containerRef = $ref<Nullable<HTMLDivElement>>(null)
  let graph: Nullable<InstanceType<GraphType>> = null

  onMounted(() => {
    graph = initGraph({
      container: containerRef!,
    })
  })

  function addNode(item: NodeItem, e: MouseEvent) {
    const node = graph?.createNode({
      shape: 'rect',
      width: 100,
      height: 40,
      label: item.label,
    })

    graph?.dnd?.start(node!, e)
  }

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
