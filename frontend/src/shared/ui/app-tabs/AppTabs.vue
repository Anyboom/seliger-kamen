<script setup lang="ts">
  import { ref } from "vue";
  import { AppButton } from "@/shared/ui/app-button/index.ts";

  interface Props {
    tabsData: { title: string }[];
  }

  defineProps<Props>();

  const activeIndex = ref(0);

  function hasActiveIndex(index: number) {
    if (index === activeIndex.value) {
      return "primary";
    }

    return "secondary";
  }
</script>

<template>
  <div class="app-tabs">
    <div class="app-tabs__buttons">
      <AppButton
        v-for="(tab, index) in tabsData"
        :key="index"
        :variant="hasActiveIndex(index)"
        @click="activeIndex = index"
      >
        {{ tab.title }}
      </AppButton>
    </div>
    <div class="app-tabs__body">
      <slot :active-index="activeIndex"></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .app-tabs {
    &__buttons {
      margin-bottom: core.$spacing-400;
      display: flex;
      gap: core.$spacing-200;
    }
  }
</style>
