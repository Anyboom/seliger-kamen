<script setup lang="ts">
  interface Props {
    name: string;
    width: string;
    height: string;
  }

  defineProps<Props>();
</script>

<template>
  <svg
    class="icon"
    :width="width"
    :height="height"
  >
    <use :href="`/sprite.svg#${name}`" />
  </svg>
</template>
