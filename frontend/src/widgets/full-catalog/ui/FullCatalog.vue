<script setup lang="ts">
  import { AppTabs } from "~/shared/ui/app-tabs";
  import { getAllCategories } from "~/entities/category";
  import { computed } from "vue";
  import CatalogByCategory from "~/widgets/full-catalog/ui/CatalogByCategory.vue";
  import type { Block } from "~/pages/dynamic-page";

  interface Props extends Block {
    item: {
      title: string;
    };
  }

  defineProps<Props>();

  defineOptions({ inheritAttrs: false });

  const { data: categoryData } = await getAllCategories();

  const categories = computed(() => categoryData?.value?.data);
</script>

<template>
  <section class="full-catalog">
    <div class="full-catalog__wrapper">
      <h2 class="full-catalog__title">{{ item.title }}</h2>
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
    </div>
  </section>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/semantic";
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";

  .full-catalog {
    padding: clamp(#{core.$spacing-200}, 2dvw, #{core.$spacing-800}) 0;

    &__wrapper {
      @include mixins.container;
    }

    &__title {
      color: semantic.$text-default;
      margin-bottom: clamp(#{core.$spacing-400}, 2dvw, #{core.$spacing-800});

      @include mixins.apply-text("heading-2");
    }
  }
</style>
