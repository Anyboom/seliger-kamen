<script setup lang="ts">
  import type { Block } from "@/pages/dynamic-page/model/block.interface";
  import { BlocksRepository } from "@/pages/dynamic-page/model/blocks.repository";
  import { type Component, onMounted, shallowRef } from "vue";

  defineOptions({ inheritAttrs: false });

  interface Props {
    block: Block;
  }

  const { block } = defineProps<Props>();

  const currentComponent = shallowRef<Component>();

  onMounted(async () => {
    const currentBlock = BlocksRepository.get(block.collection);
    const componentModule = currentBlock.component();
    currentComponent.value = componentModule instanceof Promise ? (await componentModule).default : componentModule;
  });
</script>

<template>
  <component
    :is="currentComponent"
    v-bind="block"
  />
</template>
