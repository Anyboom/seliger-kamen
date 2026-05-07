<script setup lang="ts"></script>

<template>
  <div class="app-card">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .app-card {
    border-radius: core.$radius-200;
    padding: clamp(#{core.$spacing-200}, 2dvw, #{core.$spacing-400});
    background: semantic.$background-default;
  }
</style>
