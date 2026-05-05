<script setup lang="ts"></script>
<template>
  <div class="main-layout">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/core";

  .main-layout {
    height: 100%;
    padding: core.$spacing-600;
  }
</style>
