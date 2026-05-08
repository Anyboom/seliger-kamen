<script setup lang="ts">
  import { AppButton } from "~/shared/ui/app-button";
  import { ProductCard } from "~/entities/product";
  import { AppTabs } from "~/shared/ui/app-tabs";
  import { type Category, getAllCategories } from "~/entities/category";
  import { onMounted, ref } from "vue";
  import type { Block } from "~/pages/dynamic-page";

  interface Props extends Block {
    item: {
      title: string;
      button_href: string;
    };
  }

  defineProps<Props>();

  defineOptions({ inheritAttrs: false });

  const categories = ref<Category[]>([]);

  onMounted(async () => {
    categories.value = await getAllCategories();
  });
</script>

<template>
  <section class="main-catalog">
    <div class="main-catalog__wrapper">
      <h2 class="main-catalog__title">{{ item.title }}</h2>
      <AppTabs :tabs-data="categories">
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
        <AppButton :href="item.button_href">Подробнее</AppButton>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/semantic";
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";

  .main-catalog {
    padding: clamp(#{core.$spacing-200}, 2dvw, #{core.$spacing-800}) 0;

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
      gap: clamp(#{core.$spacing-300}, 2dvw, #{core.$spacing-600});
      margin-bottom: clamp(#{core.$spacing-200}, 2dvw, #{core.$spacing-400});

      @include mixins.breakpoint-lg {
        grid-template-columns: repeat(3, 1fr);
      }

      @include mixins.breakpoint-md {
        grid-template-columns: repeat(2, 1fr);
      }

      @include mixins.breakpoint-xs {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    &__item {
      max-height: 300px;
      border-radius: core.$radius-200;
      overflow: hidden;
    }

    &__title {
      color: semantic.$text-default;
      margin-bottom: clamp(#{core.$spacing-400}, 2dvw, #{core.$spacing-800});

      @include mixins.apply-text("heading-2");
    }
  }
</style>
