<script setup lang="ts">
  import { AppIcon } from "@/shared/ui/app-icon";
</script>

<template>
  <details class="app-accordion">
    <summary class="app-accordion__summary">
      <span class="app-accordion__title">
        <slot name="title"></slot>
      </span>
      <AppIcon
        class="app-accordion__icon"
        name="chevron-down"
        width="24"
        height="24"
      />
    </summary>
    <div class="app-accordion__content">
      <slot></slot>
    </div>
  </details>
</template>

<style scoped lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .app-accordion {
    &[open] > &__summary {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &[open] &__icon {
      transform: rotate(180deg);
    }

    &__icon {
      color: semantic.$background-secondary;
      transition: transform core.$transition-duration core.$transition-timing;
    }

    &__title {
      color: semantic.$text-default;

      @include mixins.apply-text("body-1-strong");
    }

    &__summary {
      background: semantic.$background-default;
      padding: core.$spacing-400;
      border-radius: core.$radius-200;
      list-style: none;
      cursor: pointer;
      user-select: none;
      border: 2px solid transparent;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__content {
      background: semantic.$background-default;
      padding: core.$spacing-400;
      color: semantic.$text-default;

      margin-top: -2px;
      border-radius: 0 0 core.$radius-200 core.$radius-200;

      @include mixins.apply-text("body-2");
    }
  }
</style>
