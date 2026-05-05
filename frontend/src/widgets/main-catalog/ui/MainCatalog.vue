<script setup lang="ts">
  import { AppButton } from "@/shared/ui/app-button";
  import { ProductCard } from "@/entities/product";
  import { AppTabs } from "@/shared/ui/app-tabs";

  defineOptions({ inheritAttrs: false });

  const tabs = [{ title: "Вкладка 1" }, { title: "Вкладка 2" }, { title: "Вкладка 3" }];
</script>

<template>
  <section class="main-catalog">
    <div class="main-catalog__wrapper">
      <h2 class="main-catalog__title">Каталог</h2>
      <AppTabs :tabs-data="tabs">
        <template #default="{ activeIndex }">
          <div
            v-if="activeIndex == 0"
            class="main-catalog__body"
          >
            <ProductCard
              v-for="index in 4"
              :key="index"
              class="main-catalog__item"
            />
          </div>
          <div
            v-if="activeIndex == 1"
            class="main-catalog__body"
          >
            <ProductCard
              v-for="index in 8"
              :key="index"
              class="main-catalog__item"
            />
          </div>
        </template>
      </AppTabs>
      <div class="main-catalog__actions">
        <AppButton>Подробнее</AppButton>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .main-catalog {
    padding: core.$spacing-800 0;

    &__wrapper {
      @include mixins.container;
    }

    &__actions {
      display: flex;
      justify-content: end;
    }

    &__body {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: core.$spacing-600;
      margin-bottom: core.$spacing-400;
    }

    &__item {
      max-height: 300px;
      border-radius: core.$radius-200;
      overflow: hidden;
    }

    &__title {
      color: semantic.$text-default;
      margin-bottom: core.$spacing-800;

      @include mixins.apply-text("heading-2");
    }
  }
</style>
