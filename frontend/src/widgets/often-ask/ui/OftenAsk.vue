<script setup lang="ts">
  import { AppAccordion } from "~/shared/ui/app-accordion";
  import type { Block } from "~/pages/dynamic-page";

  interface Props extends Block {
    item: {
      title: string;
      questions: { question: string; answer: string }[];
    };
  }

  defineProps<Props>();

  defineOptions({ inheritAttrs: false });
</script>

<template>
  <section class="often-ask">
    <div class="often-ask__wrapper">
      <h2 class="often-ask__title">{{ item.title }}</h2>
      <div class="often-ask__content">
        <AppAccordion
          v-for="(element, index) of item.questions"
          :key="index"
        >
          <template #title> {{ element.question }} </template>
          <template #default> {{ element.answer }} </template>
        </AppAccordion>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/semantic";
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";

  .often-ask {
    padding: clamp(#{core.$spacing-200}, 2dvw, #{core.$spacing-800}) 0;

    &__wrapper {
      @include mixins.container;
    }

    &__title {
      color: semantic.$text-default;
      margin-bottom: clamp(#{core.$spacing-400}, 2dvw, #{core.$spacing-800});

      @include mixins.apply-text("heading-2");
    }

    &__content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: core.$spacing-600;
      grid-row-gap: core.$spacing-300;

      @include mixins.breakpoint-sm {
        display: flex;
        flex-direction: column;
        gap: core.$spacing-200;
      }
    }
  }
</style>
