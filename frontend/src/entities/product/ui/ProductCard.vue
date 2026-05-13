<script setup lang="ts">
  import { AppButton } from "~/shared/ui/app-button";
  import { getImageFromDirectus } from "~/shared/lib/get-image-from-directus";

  interface Props {
    productId: number;
    image: { id: string; title: string; height: number; width: number };
  }

  type Emits = {
    "order": [id: number];
  };

  const emit = defineEmits<Emits>();

  defineProps<Props>();
</script>

<template>
  <div class="product-card">
    <div class="product-card__overlay">
      <AppButton @click.stop="emit('order', productId)"> Заказать </AppButton>
    </div>
    <div class="product-card__image-wrapper">
      <img
        :src="getImageFromDirectus(image.id)"
        :height="image.height"
        :width="image.width"
        :alt="image.title"
        class="product-card__image"
      />
    </div>
  </div>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/semantic";
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";

  .product-card {
    $this: &;
    position: relative;

    &__overlay {
      position: absolute;
      inset: 0;
      display: flex;
      opacity: 0;
      transition: opacity core.$transition-duration core.$transition-timing;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.3);
      color: semantic.$text-default-negative;

      @include mixins.breakpoint-md {
        inset: unset;
        bottom: 0;
        left: 0;
        opacity: 1;
        right: 0;
        padding: 10px;

        button {
          width: 100%;
        }
      }
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
        opacity: 1;
      }
    }
  }
</style>
