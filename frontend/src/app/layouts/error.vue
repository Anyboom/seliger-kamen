<script setup lang="ts"></script>

<template>
  <div class="error-layout">
    <div class="error-layout__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/core";
  @use "~/shared/assets/styles/mixins";

  .error-layout {
    height: 100dvh;
    padding: core.$spacing-200;

    &__wrapper {
      border-radius: core.$spacing-300;
      padding: 0 core.$spacing-300;
      overflow: auto;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      @include mixins.breakpoint-sm {
        border-radius: 0;
        padding: 0 core.$spacing-100;
      }
    }

    @include mixins.breakpoint-sm {
      padding: 0;
    }
  }
</style>
