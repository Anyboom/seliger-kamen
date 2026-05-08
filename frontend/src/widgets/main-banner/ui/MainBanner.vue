<script setup lang="ts">
  import { AppHeader } from "@/widgets/app-header";
  import type { Block } from "@/pages/dynamic-page";
  import { getImageFromDirectus } from "@/shared/lib/get-image-from-directus.ts";

  interface Props extends Block {
    item: {
      title: string;
      caption: string;
      background: {
        id: string;
      };
    };
  }

  defineProps<Props>();

  defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="app-banner">
    <div
      class="app-banner__wrapper"
      :style="{ 'background-image': `url(${getImageFromDirectus(item.background.id)})` }"
    >
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

<style scoped lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .app-banner {
    @include mixins.container;

    &__wrapper {
      border-radius: core.$radius-200;
      background-repeat: no-repeat;
      background-size: cover;
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
