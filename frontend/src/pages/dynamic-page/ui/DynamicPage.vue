<script setup lang="ts">
  import DynamicComponent from "@/pages/dynamic-page/ui/DynamicComponent.vue";
  import type { Page } from "@/pages/dynamic-page/model/page.interface.ts";
  import { useRoute } from "vue-router";
  import { useHead } from "@unhead/vue";
  import { onMounted } from "vue";
  import { Error } from "@/widgets/error";

  defineOptions({ inheritAttrs: false });

  const route = useRoute();

  const currentPage: Page | undefined = route?.["meta"]?.["currentPage"] as Page | undefined;

  onMounted(() => {
    if (currentPage) {
      useHead({
        title: currentPage.title,
        meta: [{ name: "description", content: currentPage.description }],
      });
    }
  });
</script>

<template>
  <template v-if="currentPage?.matched">
    <DynamicComponent
      v-for="(block, index) of currentPage?.blocks"
      :key="index"
      :block="block"
    />
  </template>

  <Error v-else />
</template>
