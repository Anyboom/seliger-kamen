<script setup lang="ts">
  import { Image } from "primevue";
</script>

<template>
  <div class="work-card">
    <Image
      src="/images/about_background.png"
      alt="Image"
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
