<script setup lang="ts">
  import { useRoute } from "vue-router";
  import { computed, VueElement } from "vue";

  const route = useRoute();

  const layout = computed(() => route.meta.layoutComponent as VueElement);
</script>

<template>
  <component :is="layout">
    <slot></slot>
  </component>
</template>
