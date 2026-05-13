<script setup lang="ts">
  import { AppButton } from "~/shared/ui/app-button";
  import { getImageFromDirectus } from "~/shared/lib/get-image-from-directus";
  import Image from "primevue/image";

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
    <div class="product-card__image-wrapper">
      <Image
        :src="getImageFromDirectus(image.id)"
        :height="image.height"
        :width="image.width"
        :alt="image.title"
        preview
        class="product-card__image-wrapper"
        image-class="product-card__image"
      />
    </div>
    <div class="product-card__overlay">
      <AppButton @click.stop="emit('order', productId)"> Заказать </AppButton>
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
      display: flex;
      padding: core.$spacing-200 core.$spacing-200;
      transition: opacity core.$transition-duration core.$transition-timing;
      align-items: center;
      justify-content: center;
      background: semantic.$background-default;
      color: semantic.$text-default-negative;

      @include mixins.breakpoint-md {
        button {
          width: 100%;
        }
      }
    }

    &__image-wrapper {
      height: 300px;
      object-fit: cover;
      width: 100%;
    }

    &__image {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
</style>
