<script setup lang="ts">
  import { AppIcon } from "~/shared/ui/app-icon";
</script>

<template>
  <div class="app-logo">
    <AppIcon
      name="logo"
      class="app-logo_desktop"
      width="176px"
      height="46px"
    />
    <AppIcon
      name="logo-mobile"
      class="app-logo_mobile"
      width="46px"
      height="46px"
    />
  </div>
</template>

<style scoped lang="scss">
  @use "~/shared/assets/styles/mixins";

  .app-logo {
    display: flex;

    &_desktop {
      @include mixins.breakpoint-md {
        display: none;
      }
    }

    &_mobile {
      display: none;

      @include mixins.breakpoint-md {
        display: block;
      }
    }
  }
</style>
