<script setup lang="ts">
  import Image from "primevue/image";

  interface Props {
    imageUrl: string;
    imageName: string;
  }

  defineProps<Props>();
</script>

<template>
  <div class="work-card">
    <Image
      :src="imageUrl"
      :alt="imageName"
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
