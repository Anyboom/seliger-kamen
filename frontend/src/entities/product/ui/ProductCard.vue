<script setup lang="ts">
  import { AppButton } from "@/shared/ui/app-button";
</script>

<template>
  <div class="product-card">
    <div class="product-card__overlay">
      <AppButton> Заказать </AppButton>
    </div>
    <div class="product-card__image-wrapper">
      <img
        src="/images/about_background.png"
        alt="Image"
        class="product-card__image"
      />
    </div>
  </div>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .product-card {
    $this: &;
    position: relative;

    &__overlay {
      position: absolute;
      inset: 0;
      display: none;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.3);
      color: semantic.$text-default-negative;
    }

    &__image-wrapper {
      height: 100%;
      width: 100%;
    }

    &__image {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    @include mixins.hover {
      #{$this}__overlay {
        display: flex;
      }
    }
  }
</style>
