<script setup lang="ts">
  import { AppButton } from "@/shared/ui/app-button";
  import { WorkCard } from "@/entities/work";

  defineOptions({ inheritAttrs: false });
</script>

<template>
  <section class="our-works">
    <div class="our-works__wrapper">
      <div class="our-works__header">
        <h2 class="our-works__title">Наши работы</h2>
        <AppButton>Подробнее</AppButton>
      </div>
      <div class="our-works__body">
        <WorkCard
          v-for="index in 8"
          :key="index"
          class="our-works__item"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .our-works {
    padding: core.$spacing-800 0;

    &__wrapper {
      @include mixins.container;
    }

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: core.$spacing-800;
    }

    &__body {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: core.$spacing-600;
    }

    &__item {
      max-height: 300px;
      border-radius: core.$radius-200;
      overflow: hidden;
    }

    &__title {
      color: semantic.$text-default;

      @include mixins.apply-text("heading-2");
    }
  }
</style>
