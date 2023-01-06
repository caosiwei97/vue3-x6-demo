<template>
  <div class="node">
    <span>{{ data?.label }}</span>
  </div>
</template>
<script lang="ts" setup>
  import { NodeItem } from '@/types'

  const getNode = inject('getNode')
  const node = getNode()
  let data = $ref<Nullable<NodeItem>>(null)

  onMounted(() => {
    data = node.getData()
  })
</script>

<style lang="scss" scoped>
  .node {
    box-sizing: border-box;
    width: 120px;
    height: 32px;
    line-height: 32px;
    border-radius: 110px;
    border: 1px solid rgba(54, 98, 236, 0.15);
    background: rgba(240, 246, 255, 0.6);
    font-size: 12px;
    text-align: center;
  }
</style>
