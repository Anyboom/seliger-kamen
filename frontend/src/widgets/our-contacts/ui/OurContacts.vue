<script setup lang="ts">
  import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
  import "leaflet/dist/leaflet.css";
  import AppCard from "@/shared/ui/app-card/AppCard.vue";
  import { AppButton } from "@/shared/ui/app-button";
  import { AppIcon } from "@/shared/ui/app-icon";

  defineOptions({ inheritAttrs: false });
</script>

<template>
  <section class="our-contacts">
    <div class="our-contacts__wrapper">
      <div class="our-contacts__body">
        <h2 class="our-contacts__title">Наши контакты</h2>
        <div class="our-contacts__cards">
          <AppCard
            v-for="index in 2"
            :key="index"
            class="our-contacts__card"
          >
            <div class="our-contacts__card-content">
              <span class="our-contacts__card-content-title">Телефон:</span>
              <span class="our-contacts__card-content-value">8 960 716 53 53</span>
            </div>
            <div class="our-contacts__card-content">
              <span class="our-contacts__card-content-title">Адрес:</span>
              <span class="our-contacts__card-content-value">г. Осташков, Володарского. 63</span>
            </div>
            <div class="our-contacts__socials">
              <AppButton
                rounded
                icon-only
              >
                <AppIcon
                  name="social-vk"
                  width="24"
                  height="24"
                />
              </AppButton>
              <AppButton
                rounded
                icon-only
              >
                <AppIcon
                  name="social-vk"
                  width="24"
                  height="24"
                />
              </AppButton>
            </div>
          </AppCard>
        </div>
      </div>
      <div class="our-contacts__map">
        <l-map
          ref="map"
          :zoom="9"
          :center="[57.014571, 33.015289]"
        >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
          />
        </l-map>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .leaflet-control-attribution {
    display: none;
  }

  .our-contacts {
    padding: core.$spacing-800 0;

    &__cards {
      display: flex;
      flex-direction: column;
      gap: core.$spacing-400;
    }

    &__card {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    &__map {
      height: 420px;
      width: 100%;
      overflow: hidden;
      border-radius: core.$radius-200;
    }

    &__wrapper {
      display: grid;
      grid-template-columns: 7fr 5fr;
      gap: core.$spacing-600;
      @include mixins.container;
    }

    &__body {
      display: flex;
      flex-direction: column;
      gap: core.$spacing-600;
    }

    &__title {
      color: semantic.$text-default;
      @include mixins.apply-text("heading-2");
    }

    &__socials {
      display: flex;
      gap: core.$spacing-200;
      align-items: center;
      justify-content: center;
    }

    &__card-content {
      display: flex;
      flex-direction: column;
      gap: core.$spacing-300;
      color: semantic.$text-default;

      &-title {
        @include mixins.apply-text("body-1-strong");
      }

      &-value {
        @include mixins.apply-text("body-2");
      }
    }
  }
</style>
