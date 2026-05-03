<script setup lang="ts">
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import AppCard from "@/shared/ui/app-card/AppCard.vue";

  defineOptions({ inheritAttrs: false });
</script>

<template>
  <section class="our-advantages">
    <div class="our-advantages__wrapper">
      <h2 class="our-advantages__title">Наши преимущества</h2>
      <div class="our-advantages__content">
        <swiper
          :slides-per-view="`auto`"
          :space-between="24"
        >
          <swiper-slide
            v-for="index in 8"
            :key="index"
          >
            <AppCard class="our-advantages__card">
              <div class="our-advantages__card-title">Бесплатное хранение на производстве</div>
              <div class="our-advantages__card-caption">
                Заказали памятник осенью, а устанавливать будете весной? Храним весь зимний сезон без наценок. Не нужно
                арендовать склад или везти на дачу.
              </div>
            </AppCard>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .swiper-slide {
    width: fit-content !important;
  }

  .our-advantages {
    padding: core.$spacing-800 0;

    &__wrapper {
      @include mixins.container;
    }

    &__title {
      color: semantic.$text-default;
      margin-bottom: core.$spacing-800;

      @include mixins.apply-text("heading-2");
    }

    &__card {
      display: flex;
      flex-direction: column;
      gap: core.$spacing-200;
      width: 350px;

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
