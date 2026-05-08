<script setup lang="ts">
  import type { Block } from "~/pages/dynamic-page";
  import { getImageFromDirectus } from "~/shared/lib/get-image-from-directus";

  interface Props extends Block {
    item: {
      title: string;
      content: string;
      background: {
        id: string;
        title: string;
      };
    };
  }

  defineProps<Props>();

  defineOptions({ inheritAttrs: false });
</script>

<template>
  <section class="about-us">
    <div class="about-us__wrapper">
      <div
        v-if="item.background"
        class="about-us__image-wrapper"
      >
        <img
          :src="getImageFromDirectus(item.background.id)"
          :alt="item.background.title"
          class="about-us__image"
        />
      </div>
      <div class="about-us__body">
        <h2 class="about-us__title">{{ item.title }}</h2>
        <div
          class="about-us__content"
          v-html="item.content"
        ></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/semantic";
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";

  .about-us {
    padding: clamp(#{core.$spacing-200}, 2dvw, #{core.$spacing-800}) 0;

    &__wrapper {
      display: grid;
      grid-template-columns: 5fr 7fr;
      gap: clamp(#{core.$spacing-400}, 2dvw, #{core.$spacing-800});

      @include mixins.container;

      @include mixins.breakpoint-sm {
        display: flex;
        flex-direction: column;
      }
    }

    &__image-wrapper {
      max-height: 420px;
      overflow: hidden;
      border-radius: core.$radius-200;

      @include mixins.breakpoint-sm {
        max-height: 250px;
      }
    }

    &__image {
      width: 100%;
    }

    &__body {
      display: flex;
      flex-direction: column;
      gap: clamp(#{core.$spacing-200}, 2dvw, #{core.$spacing-600});
    }

    &__title {
      color: semantic.$text-default;

      @include mixins.apply-text("heading-2");
    }

    &__content {
      color: semantic.$text-default;
      display: flex;
      flex-direction: column;
      gap: core.$spacing-300;

      p {
        @include mixins.apply-text("body-1");
      }
    }
  }
</style>
