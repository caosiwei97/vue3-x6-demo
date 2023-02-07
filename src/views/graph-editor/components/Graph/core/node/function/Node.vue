<template>
  <div class="container">
    <div class="parent-node">
      <span>{{ data?.label }}</span>
    </div>
    <div class="child-node-container" v-if="hasBranches">
      <div class="child-node-item" v-for="branch in branches" :key="branch.name">
        <span>{{ branch.name }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { NodeItem } from '@/types'

  const getNode = inject('getNode')
  const node = getNode()
  let data = $ref<Nullable<NodeItem>>(null)
  const branches = computed(() => data?.configData?.branch ?? [])
  const hasBranches = computed(() => !!data?.configData?.branch?.length)

  onMounted(() => {
    data = node.getData()
    console.log(data);
    
  })
</script>

<style lang="scss" scoped>
  .container {
    width: 188px;
    border-radius: 4px;
    background: #fff;
    box-sizing: border-box;
    font-size: 12px;
    text-align: center;

    .parent-node {
      width: 100%;
      height: 32px;
      line-height: 32px;
      background: #00a870;
      color: #fff;
      border-radius: 4px;
    }

    .child-node-container {
      padding: 4px;
      color: #666666;

      .child-node-item {
        width: 100%;
        height: 32px;
        line-height: 32px;
        border-radius: 2px;
        background: rgba(0, 181, 120, 0.1);
        box-sizing: border-box;
        border: 1px solid rgba(0, 181, 120, 0.2);
        margin-bottom: 4px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

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
