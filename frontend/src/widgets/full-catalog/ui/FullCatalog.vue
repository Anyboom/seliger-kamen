<script setup lang="ts">
  import { ProductCard } from "@/entities/product";
  import { AppTabs } from "@/shared/ui/app-tabs";
  import { AppPaginator } from "@/shared/ui/app-paginator";

  defineOptions({ inheritAttrs: false });

  const tabs = [{ title: "Вкладка 1" }, { title: "Вкладка 2" }, { title: "Вкладка 3" }];
</script>

<template>
  <section class="full-catalog">
    <div class="full-catalog__wrapper">
      <h2 class="full-catalog__title">Каталог</h2>
      <AppTabs :tabs-data="tabs">
        <template #default="{ activeIndex }">
          <div
            v-if="activeIndex == 0"
            class="full-catalog__body"
          >
            <ProductCard
              v-for="index in 16"
              :key="index"
              class="full-catalog__item"
            />
          </div>
          <div
            v-if="activeIndex == 1"
            class="full-catalog__body"
          >
            <ProductCard
              v-for="index in 8"
              :key="index"
              class="full-catalog__item"
            />
          </div>
        </template>
      </AppTabs>
      <div class="full-catalog__paginator">
        <AppPaginator
          :current-page="1"
          :total-items="100"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .full-catalog {
    padding: core.$spacing-800 0;

    &__wrapper {
      @include mixins.container;
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
