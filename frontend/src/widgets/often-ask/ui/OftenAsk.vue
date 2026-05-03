<script setup lang="ts">
  import { AppAccordion } from "@/shared/ui/app-accordion";

  defineOptions({ inheritAttrs: false });
</script>

<template>
  <section class="often-ask">
    <div class="often-ask__wrapper">
      <h2 class="often-ask__title">Часто задаваемые вопросы</h2>
      <div class="often-ask__content">
        <AppAccordion
          v-for="index in 6"
          :key="index"
        >
          <template #title> Есть ли скидки ? </template>
          <template #default> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, illo. </template>
        </AppAccordion>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .often-ask {
    padding: core.$spacing-800 0;

    &__wrapper {
      @include mixins.container;
    }

    &__title {
      color: semantic.$text-default;
      margin-bottom: core.$spacing-800;

      @include mixins.apply-text("heading-2");
    }

    &__content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: core.$spacing-600;
      grid-row-gap: core.$spacing-300;
    }
  }
</style>
