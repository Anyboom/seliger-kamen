<script setup lang="ts">
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import AppCard from "~/shared/ui/app-card/AppCard.vue";
  import type { Block } from "~/pages/dynamic-page";

  interface Props extends Block {
    item: {
      title: string;
      advantages: { title: string; caption: string }[];
    };
  }

  defineProps<Props>();

  defineOptions({ inheritAttrs: false });
</script>

<template>
  <section class="our-advantages">
    <div class="our-advantages__wrapper">
      <h2 class="our-advantages__title">{{ item.title }}</h2>
      <div class="our-advantages__content">
        <swiper
          :slides-per-view="`auto`"
          :space-between="24"
          :breakpoints="{
            320: {
              spaceBetween: 12,
            },
            480: {
              spaceBetween: 18,
            },
            640: {
              spaceBetween: 24,
            },
          }"
        >
          <swiper-slide
            v-for="(element, index) of item.advantages"
            :key="index"
          >
            <AppCard class="our-advantages__card">
              <div class="our-advantages__card-title">{{ element.title }}</div>
              <div class="our-advantages__card-caption">{{ element.caption }}</div>
            </AppCard>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/semantic";
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";

  .swiper-slide {
    width: fit-content !important;
  }

  .our-advantages {
    padding: clamp(#{core.$spacing-200}, 2dvw, #{core.$spacing-800}) 0;

    &__wrapper {
      @include mixins.container;
    }

    &__title {
      color: semantic.$text-default;
      margin-bottom: clamp(#{core.$spacing-400}, 2dvw, #{core.$spacing-800});

      @include mixins.apply-text("heading-2");
    }

    &__card {
      display: flex;
      flex-direction: column;
      gap: core.$spacing-200;
      width: 350px;

      @include mixins.breakpoint-sm {
        width: 300px;
      }

      &-title {
        color: semantic.$text-default;

        @include mixins.apply-text("body-1-strong");
      }

      &-caption {
        color: semantic.$text-default-secondary;

        @include mixins.apply-text("body-2");
      }
    }
  }
</style>
