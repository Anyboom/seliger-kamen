<script setup lang="ts">
  type MenuItem = {
    label: string;
    href: string;
    active?: boolean;
  };

  interface Props {
    items: MenuItem[];
  }

  defineProps<Props>();
</script>

<template>
  <nav class="app-menu">
    <ul class="app-menu__list">
      <li
        v-for="(item, index) of items"
        :key="index"
        class="app-menu__item"
      >
        <a
          class="app-menu__link"
          :class="{ 'app-menu__link_active': item.active }"
          :href="item.href"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .app-menu {
    &__list {
      display: flex;
      gap: core.$spacing-200;
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
