<script setup lang="ts">
  import { computed } from "vue";
  import { AppIcon } from "@/shared/ui/app-icon";

  interface Props {
    currentPage: number;
    itemsPerPage?: number;
    totalItems: number;
  }

  const { currentPage, totalItems, itemsPerPage = 10 } = defineProps<Props>();

  const emit = defineEmits(["page-changed"]);

  const totalPages = computed(() => Math.ceil(totalItems / itemsPerPage));

  const visiblePagesCount = 5;

  const visiblePages = computed<number[]>(() => {
    const pages = [];
    const halfVisible = Math.floor(visiblePagesCount / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages.value, startPage + visiblePagesCount - 1);

    if (endPage - startPage + 1 < visiblePagesCount) {
      startPage = Math.max(1, endPage - visiblePagesCount + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  });

  const showFirstPage = computed(() => {
    const item = visiblePages.value[0];

    if (item) {
      return item > 1;
    }

    return false;
  });

  const showLastPage = computed(() => {
    const item = visiblePages.value[visiblePages.value.length - 1];

    if (item) {
      return item < totalPages.value;
    }

    return false;
  });

  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages.value && page !== currentPage) {
      emit("page-changed", page);
    }
  }
</script>

<template>
  <nav
    v-if="totalPages > 1"
    class="app-paginator"
  >
    <ul class="app-paginator__list">
      <li v-if="showFirstPage">
        <button
          class="app-paginator__button"
          @click="goToPage(1)"
        >
          <AppIcon
            name="chevrons-left"
            width="20"
            height="20"
          />
        </button>
      </li>

      <li>
        <button
          class="app-paginator__button"
          :class="{ disabled: currentPage === 1 }"
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
        >
          <AppIcon
            name="chevron-left"
            width="20"
            height="20"
          />
        </button>
      </li>

      <li
        v-for="page in visiblePages"
        :key="page"
      >
        <button
          class="app-paginator__button"
          :class="{ active: page === currentPage }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
      </li>

      <li>
        <button
          class="app-paginator__button"
          :class="{ disabled: currentPage === totalPages }"
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
        >
          <AppIcon
            name="chevron-right"
            width="20"
            height="20"
          />
        </button>
      </li>

      <li v-if="showLastPage">
        <button
          class="app-paginator__button"
          @click="goToPage(totalPages)"
        >
          <AppIcon
            name="chevrons-right"
            width="20"
            height="20"
          />
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";
  @use "@/shared/assets/styles/semantic";

  .app-paginator {
    margin: core.$spacing-400 0;

    &__list {
      display: flex;
      width: fit-content;

      border-radius: core.$spacing-200;
      overflow: hidden;
    }

    &__button {
      padding: core.$spacing-200 core.$spacing-400;
      background-color: white;
      color: semantic.$text-default;
      cursor: pointer;
      transition: background-color core.$transition-duration core.$transition-timing;

      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;

      &.active {
        background-color: semantic.$background-primary;
        color: semantic.$text-default-negative;
      }

      &.disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:hover:not(.disabled) {
        background-color: semantic.$background-primary;
        color: semantic.$text-default-negative;
      }
    }
  }
</style>
