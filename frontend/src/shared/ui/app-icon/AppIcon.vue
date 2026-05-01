<script setup lang="ts">
  import { computed } from "vue";

  interface Props {
    name: string;
    width: string;
    height: string;
  }

  const { name } = defineProps<Props>();

  const spriteHref = computed(() => `${import.meta.env.BASE_URL}sprite.svg#${name}`);
</script>

<template>
  <svg
    class="icon"
    :width="width"
    :height="height"
  >
    <use :href="spriteHref" />
  </svg>
</template>
