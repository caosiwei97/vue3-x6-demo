<template>
  <div class="node-group">
    <div class="group" v-for="node in NODE_GROUP">
      <div class="group-title">{{ node.title }}</div>
      <div
        class="group-item"
        v-for="item in node.childNodes"
        @mousedown="handleMouseDown(item, $event)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { NODE_GROUP } from '@/constants/index'
  import { NodeItem } from '@/types'

  const emit = defineEmits<{
    (type: 'addNode', v: NodeItem, e: MouseEvent): void
  }>()

  function handleMouseDown(item: NodeItem, e: MouseEvent) {
    emit('addNode', item, e)
  }
</script>

<style scoped lang="scss">
  .node-group {
    padding: 0 16px;
    font-size: 12px;

    .group {
      &-title {
        color: #666666;
        padding: 8px 0;
      }

      &-item {
        height: 32px;
        line-height: 32px;
        background: #fff;
        text-align: center;
        color: #142149;
        cursor: move;
      }
    }
  }
</style>
