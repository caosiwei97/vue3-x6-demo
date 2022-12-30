<script setup lang="ts">
  import { Graph } from '@antv/x6'
  import { Snapline } from '@antv/x6-plugin-snapline'
  import { onMounted, ref } from 'vue'
  import { NodeItem } from './NodeGroup.vue'
  import { Dnd } from '@antv/x6-plugin-dnd'

  const data = {
    nodes: [
      {
        id: 'node1',
        shape: 'rect',
        x: 40,
        y: 40,
        width: 100,
        height: 40,
        label: 'hello',
        attrs: {
          // body 是选择器名称，选中的是 rect 元素
          body: {
            stroke: 'red',
            strokeWidth: 2,
            fill: 'orange',
            rx: 6,
            ry: 6,
          },
        },
      },
      {
        id: 'node2',
        shape: 'rect',
        x: 160,
        y: 180,
        width: 100,
        height: 40,
        label: 'world',
        attrs: {
          body: {
            stroke: '#8f8f8f',
            strokeWidth: 1,
            fill: '#fff',
            rx: 6,
            ry: 6,
          },
        },
      },
    ],
    edges: [
      {
        shape: 'edge',
        source: 'node1',
        target: 'node2',
        label: 'x6',
        attrs: {
          // line 是选择器名称，选中的边的 path 元素
          line: {
            stroke: '#8f8f8f',
            strokeWidth: 1,
          },
        },
      },
    ],
  }
  const container = ref<HTMLDivElement | null>()
  let graph: null | Graph = null
  let dnd: null | Dnd = null

  const pos = ref({
    x: 0,
    y: 0,
  })

  onMounted(() => {
    initGraph()
  })

  function initGraph() {
    graph = new Graph({
      container: container.value!,
      panning: true,
      mousewheel: true,
      background: {
        color: '#ddd',
      },
      grid: {
        visible: true,
        type: 'fixedDot',
        args: [
          {
            color: 'orange', // 主网格线颜色
            thickness: 2, // 主网格线宽度
          },
          {
            color: 'yellow', // 次网格线颜色
            thickness: 1, // 次网格线宽度
            factor: 4, // 主次网格线间隔
          },
        ],
      },
    })
    // 插件
    graph.use(
      // 对齐线
      new Snapline({
        enabled: true,
      }),
    )
    graph.fromJSON(data) // 渲染元素
    graph.centerContent() // 居中显示

    dnd = new Dnd({
      target: graph,
    })
  }

  function addNode(item: NodeItem, e: MouseEvent) {
    const node = graph?.createNode({
      shape: 'rect',
      width: 100,
      height: 40,
      label: item.label,
    })

    dnd?.start(node!, e)
  }

  defineExpose({
    addNode,
  })
</script>

<template>
  <div ref="container" id="container"></div>
</template>

<style>
  #container {
    width: 100%;
    height: 100%;
  }
</style>
