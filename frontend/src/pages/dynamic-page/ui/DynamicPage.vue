<script setup lang="ts">
  import DynamicComponent from "@/pages/dynamic-page/ui/DynamicComponent.vue";
  import type { Page } from "@/pages/dynamic-page/model/page.interface.ts";
  import { useRoute } from "vue-router";

  defineOptions({ inheritAttrs: false });

  const route = useRoute();

  const currentPage: Page | undefined = route?.["meta"]?.["currentPage"] as Page | undefined;
</script>

<template>
  <DynamicComponent
    v-for="(block, index) of currentPage?.blocks"
    :key="index"
    :block="block"
  />
</template>
