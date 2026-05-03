<script setup lang="ts">
  interface Props {
    collection: string;
  }

  defineProps<Props>();

  defineOptions({ inheritAttrs: false });
</script>

<template>
  <section class="not-loaded">
    <div class="not-loaded__wrapper">Не удалось загрузить блок: {{ collection }}</div>
  </section>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .not-loaded {
    @include mixins.container;

    &__wrapper {
      margin: core.$spacing-400 0;
      background: semantic.$background-default;
      border-radius: core.$radius-200;
      padding: core.$spacing-400 core.$spacing-200;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @include mixins.apply-text("body-1");
    }
  }
</style>
