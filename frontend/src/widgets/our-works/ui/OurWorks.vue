<script setup lang="ts">
  import { AppButton } from "~/shared/ui/app-button";
  import { getWorks, WorkCard } from "~/entities/work";
  import type { Block } from "~/pages/dynamic-page";
  import { computed } from "vue";
  import { getImageFromDirectus } from "~/shared/lib/get-image-from-directus";

  interface Props extends Block {
    item: {
      title: string;
      button_href: string;
    };
  }

  defineProps<Props>();

  const { data: workData } = await getWorks({ limit: 8 });

  const works = computed(() => workData?.value?.data);

  defineOptions({ inheritAttrs: false });
</script>

<template>
  <section class="our-works">
    <div class="our-works__wrapper">
      <div class="our-works__header">
        <h2 class="our-works__title">{{ item.title }}</h2>
        <AppButton :href="item.button_href">Подробнее</AppButton>
      </div>
      <div class="our-works__body">
        <WorkCard
          v-for="(element, index) of works"
          :key="index"
          :image-url="getImageFromDirectus(element.image)"
          :image-name="element.title"
          class="our-works__item"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/semantic";
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";

  .our-works {
    padding: clamp(#{core.$spacing-200}, 2dvw, #{core.$spacing-800}) 0;

    &__wrapper {
      @include mixins.container;
    }

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: clamp(#{core.$spacing-200}, 2dvw, #{core.$spacing-800});
    }

    &__body {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: clamp(#{core.$spacing-300}, 2dvw, #{core.$spacing-600});

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

      @include mixins.apply-text("heading-2");
    }
  }
</style>
