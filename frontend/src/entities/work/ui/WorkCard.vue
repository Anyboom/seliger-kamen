<script setup lang="ts">
  import Image from "primevue/image";
  import { getImageFromDirectus } from "~/shared/lib/get-image-from-directus";

  interface Props {
    image: {
      id: string;
      title: string;
      height: number;
      width: number;
    };
  }

  defineProps<Props>();
</script>

<template>
  <div class="work-card">
    <Image
      :src="getImageFromDirectus(image.id)"
      :alt="image.title"
      :height="image.height"
      :width="image.width"
      class="work-card__image-wrapper"
      image-class="work-card__image"
      preview
    />
  </div>
</template>

<style lang="scss">
  .work-card {
    &__image-wrapper {
      height: 100%;
      width: 100%;
    }

    &__image {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
</style>
