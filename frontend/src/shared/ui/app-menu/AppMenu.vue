<script setup lang="ts">
  import { AppIcon } from "~/shared/ui/app-icon";
  import { AppButton } from "~/shared/ui/app-button";
  import { ref } from "vue";
  import { useRoute } from "vue-router";

  type MenuItem = {
    title: string;
    href: string;
  };

  interface Props {
    items: MenuItem[];
  }

  const isShowMobileMenu = ref<boolean>(false);

  function toggleMobileMenu(): void {
    isShowMobileMenu.value = !isShowMobileMenu.value;
  }

  defineProps<Props>();

  const route = useRoute();

  function isActiveItem(item: MenuItem): boolean {
    let normalizedCurrentPath = route.path;
    let itemPath = item.href;

    if (normalizedCurrentPath !== "/") {
      normalizedCurrentPath = normalizedCurrentPath.replace(/\/$/, "");
    }

    normalizedCurrentPath = normalizedCurrentPath.toLowerCase();

    if (itemPath !== "/") {
      itemPath = itemPath?.replace(/\/$/, "");
    }

    itemPath = itemPath?.toLowerCase();

    if (itemPath === "/") {
      return normalizedCurrentPath === "/" || normalizedCurrentPath === "";
    }

    return normalizedCurrentPath === itemPath || normalizedCurrentPath.startsWith(itemPath + "/");
  }

  defineExpose({ isShowMobileMenu });
</script>

<template>
  <nav class="app-menu">
    <ul
      class="app-menu__list"
      :class="{ 'app-menu__list--mobile': isShowMobileMenu }"
    >
      <li
        v-for="(item, index) of items"
        :key="index"
        class="app-menu__item"
      >
        <a
          class="app-menu__link"
          :class="{ 'app-menu__link_active': isActiveItem(item) }"
          :href="item.href"
        >
          {{ item.title }}
        </a>
      </li>
    </ul>
    <AppButton
      icon-only
      class="app-menu__mobile-button"
      @click="toggleMobileMenu"
    >
      <AppIcon
        name="menu"
        class="app-menu__mobile-icon"
        width="24"
        height="24"
      />
    </AppButton>
  </nav>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/semantic";
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";

  .app-menu {
    $this: &;

    &__list {
      display: flex;
      gap: core.$spacing-200;

      @include mixins.breakpoint-sm {
        display: none;
      }

      &--mobile {
        position: absolute;
        background: semantic.$background-default-secondary;
        inset: 0;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        z-index: 900;

        #{$this}__link {
          color: semantic.$text-default;

          &_active {
            color: semantic.$text-default-negative;
          }
        }
      }
    }

    &__mobile-button {
      z-index: 1000;
      position: relative;
      display: none;
      opacity: 0;

      @include mixins.breakpoint-sm {
        display: block;
        opacity: 1;
      }
    }

    &__mobile-icon {
      color: semantic.$text-default-negative;
    }

    &__link {
      display: inline-block;
      padding: core.$spacing-200 core.$spacing-600;
      color: semantic.$text-default-negative;
      border-radius: core.$radius-200;
      transition: background-color core.$transition-duration core.$transition-timing;

      &_active {
        background: semantic.$background-primary;
      }

      @include mixins.hover {
        background: semantic.$background-primary;
      }
    }
  }
</style>
