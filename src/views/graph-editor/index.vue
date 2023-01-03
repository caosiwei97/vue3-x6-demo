<script setup lang="ts" name="GraphEditor">
  import { NodeItem } from '@/types'
  import Graph from './components/Graph/index.vue'

  const graph = $ref<InstanceType<typeof Graph> | null>(null)

  function addNode(item: NodeItem, e: MouseEvent) {
    graph?.addNode(item, e)
  }
</script>

<template>
  <div class="graph-editor">
    <el-container>
      <el-header class="header">工具栏</el-header>
      <el-container>
        <el-aside class="aside">
          <node-group @add-node="addNode" />
        </el-aside>
        <el-main class="main">
          <graph ref="graph" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
  .header {
    text-align: center;
    height: 54px;
    line-height: 54px;
    background: #f7f8fa;
    box-shadow: inset -1px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }

  .main {
    padding: 0;
  }

  .aside {
    width: 220px;
    height: calc(100vh - 54px);
    background: #f7f8fa;
    box-shadow: inset -1px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
</style>
