<script setup lang="ts">
  import { AppButton } from "~/shared/ui/app-button";
  import { AppTabs } from "~/shared/ui/app-tabs";
  import { getAllCategories } from "~/entities/category";
  import { computed } from "vue";
  import type { Block } from "~/pages/dynamic-page";
  import CatalogByCategory from "~/widgets/main-catalog/ui/CatalogByCategory.vue";

  interface Props extends Block {
    item: {
      title: string;
      button_href: string;
    };
  }

  defineProps<Props>();

  defineOptions({ inheritAttrs: false });

  const { data: categoryData } = await getAllCategories();

  const categories = computed(() => categoryData?.value?.data);
</script>

<template>
  <section class="main-catalog">
    <div class="main-catalog__wrapper">
      <h2 class="main-catalog__title">{{ item.title }}</h2>
      <AppTabs
        v-if="categories"
        :tabs-data="categories"
      >
        <template #default="{ activeIndex }">
          <catalog-by-category
            v-if="categories[activeIndex]"
            :category="categories[activeIndex].id"
          />
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

    &__title {
      color: semantic.$text-default;
      margin-bottom: clamp(#{core.$spacing-400}, 2dvw, #{core.$spacing-800});

      @include mixins.apply-text("heading-2");
    }
  }
</style>
