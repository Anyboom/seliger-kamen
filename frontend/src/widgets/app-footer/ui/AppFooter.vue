<script setup lang="ts">
  import { AppIcon } from "@/shared/ui/app-icon";

  defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="app-footer">
    <div class="app-footer__wrapper">
      <a
        href="/"
        class="app-footer__logo"
      >
        <AppIcon
          name="logo"
          width="176px"
          height="46px"
        />
      </a>
    </div>
  </div>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .app-footer {
    @include mixins.container;

    &__wrapper {
      padding: core.$spacing-400;
      border-radius: core.$radius-200;
      background: semantic.$background-default-negative;
    }

    &__logo {
      display: flex;
      width: fit-content;
      color: semantic.$text-default-negative;
      transition: color core.$transition-duration core.$transition-timing;

      @include mixins.hover {
        color: semantic.$text-default-negative-hover;
      }
    }
  }
</style>
