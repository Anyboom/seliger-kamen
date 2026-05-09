<script setup lang="ts">
  import { getTotalWorks, getWorks, WorkCard } from "~/entities/work";
  import type { Block } from "~/pages/dynamic-page";
  import { computed, ref } from "vue";
  import { getImageFromDirectus } from "~/shared/lib/get-image-from-directus";
  import { AppPaginator } from "~/shared/ui/app-paginator";

  interface Props extends Block {
    item: {
      title: string;
    };
  }

  defineProps<Props>();

  const options = computed(() => ({
    limit: 16,
    page: currentPage.value,
  }));

  const currentPage = ref(1);

  const { data: workData } = await getWorks(options);

  const { data: totalWorksData } = await getTotalWorks();

  const totalWorks = computed(() => totalWorksData?.value?.data?.[0]?.count);

  const works = computed(() => workData?.value?.data);

  function changePage(page: number) {
    currentPage.value = page;
  }

  defineOptions({ inheritAttrs: false });
</script>

<template>
  <section class="full-our-works">
    <div class="full-our-works__wrapper">
      <div class="full-our-works__header">
        <h2 class="full-our-works__title">{{ item.title }}</h2>
      </div>
      <div class="full-our-works__body">
        <WorkCard
          v-for="(element, index) of works"
          :key="index"
          :image-url="getImageFromDirectus(element.image)"
          :image-name="element.title"
          class="full-our-works__item"
        />
      </div>
      <AppPaginator
        v-if="totalWorks != undefined"
        :current-page="currentPage"
        :total-items="totalWorks"
        :items-per-page="16"
        @page-changed="changePage"
      />
    </div>
  </section>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/semantic";
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";

  .full-our-works {
    padding: clamp(#{core.$spacing-200}, 2dvw, #{core.$spacing-800}) 0;

    &__wrapper {
      @include mixins.container;
    }

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: clamp(#{core.$spacing-200}, 2dvw, #{core.$spacing-800});
    }

    &__body {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: clamp(#{core.$spacing-300}, 2dvw, #{core.$spacing-600});

      @include mixins.breakpoint-lg {
        grid-template-columns: repeat(3, 1fr);
      }

      @include mixins.breakpoint-md {
        grid-template-columns: repeat(2, 1fr);
      }

      @include mixins.breakpoint-xs {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    &__item {
      max-height: 300px;
      border-radius: core.$radius-200;
      overflow: hidden;
    }

    &__title {
      color: semantic.$text-default;

      @include mixins.apply-text("heading-2");
    }
  }
</style>
