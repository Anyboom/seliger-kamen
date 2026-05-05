<script setup lang="ts">
  import DynamicComponent from "@/pages/dynamic-page/ui/DynamicComponent.vue";
  import type { Page } from "@/pages/dynamic-page/model/page.interface.ts";
  import { useRoute } from "vue-router";
  import { useHead } from "@unhead/vue";
  import { onMounted } from "vue";

  defineOptions({ inheritAttrs: false });

  const route = useRoute();

  const currentPage: Page | undefined = route?.["meta"]?.["currentPage"] as Page | undefined;

  onMounted(() => {
    if (currentPage) {
      useHead({
        title: currentPage.title,
      });
    }
  });
</script>

<template>
  <DynamicComponent
    v-for="(block, index) of currentPage?.blocks"
    :key="index"
    :block="block"
  />
</template>
