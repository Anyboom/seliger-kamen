<script setup lang="ts">
  import { AppHeader } from "@/widgets/app-header";

  defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="app-banner">
    <div class="app-banner__wrapper">
      <AppHeader />
      <div class="app-banner__body">
        <h1 class="app-banner__title">Селигер Камень</h1>
        <span class="app-banner__caption">
          Изготовление памятников, оград, крестов. Гранит Урал и Карелия. Благоустройство. Рассрочка
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
      background-image: url("/images/banner_background.png");
      background-repeat: no-repeat;
      background-size: cover;
    }

    &__body {
      padding: core.$spacing-5000 0;
      color: semantic.$text-default-negative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: core.$spacing-300;
      justify-content: center;
    }

    &__title {
      text-transform: uppercase;

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
