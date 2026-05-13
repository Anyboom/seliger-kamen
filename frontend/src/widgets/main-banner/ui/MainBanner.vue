<script setup lang="ts">
  import { AppHeader } from "~/widgets/app-header";
  import type { Block } from "~/pages/dynamic-page";
  import { getImageFromDirectus } from "~/shared/lib/get-image-from-directus";

  interface Props extends Block {
    item: {
      title: string;
      caption: string;
      background: {
        id: string;
        title: string;
        height: number;
        width: number;
      };
    };
  }

  defineProps<Props>();

  defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="app-banner">
    <div class="app-banner__wrapper">
      <img
        class="app-banner__background"
        :src="getImageFromDirectus(item.background.id)"
        :height="item.background.height"
        :width="item.background.width"
        :alt="item.background.title"
      />
      <AppHeader :colored="false" />
      <div class="app-banner__body">
        <h1 class="app-banner__title">{{ item.title }}</h1>
        <span class="app-banner__caption">
          {{ item.caption }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/semantic";
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";

  .app-banner {
    @include mixins.container;

    &__background {
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__wrapper {
      border-radius: core.$radius-200;
      overflow: hidden;
      position: relative;
    }

    &__body {
      padding: core.$spacing-5000 core.$spacing-400;
      color: semantic.$text-default-negative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: core.$spacing-300;
      justify-content: center;
    }

    &__title {
      text-transform: uppercase;
      text-align: center;

      @include mixins.apply-text("display-1");
    }

    &__caption {
      display: block;
      max-width: 500px;
      text-align: center;

      @include mixins.apply-text("body-1-strong");
    }
  }
</style>
