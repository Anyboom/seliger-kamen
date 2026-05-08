<script setup lang="ts"></script>
<template>
  <main class="main-layout">
    <slot></slot>
  </main>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/core";

  .main-layout {
    height: 100%;
    padding: clamp(#{core.$spacing-200}, 1%, #{core.$spacing-600}) 0;
  }
</style>
