<script setup lang="ts">
  import { useRoute } from "vue-router";
  import { computed, VueElement } from "vue";

  const route = useRoute();

  const currentLayout = computed(() => route.meta.layoutComponent as VueElement);
</script>

<template>
  <component :is="currentLayout">
    <slot></slot>
  </component>
</template>
