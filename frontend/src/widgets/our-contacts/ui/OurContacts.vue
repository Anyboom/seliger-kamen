<script setup lang="ts">
  import "leaflet/dist/leaflet.css";
  import AppCard from "~/shared/ui/app-card/AppCard.vue";
  import { AppButton } from "~/shared/ui/app-button";
  import { AppIcon } from "~/shared/ui/app-icon";
  import { getPlaceShops } from "~/entities/place-shop";
  import { computed } from "vue";
  import type { Block } from "~/pages/dynamic-page";
  import { cleanPhoneNumber } from "~/shared/lib/clean-phone-number";

  interface Props extends Block {
    item: {
      title: string;
    };
  }

  defineProps<Props>();

  defineOptions({ inheritAttrs: false });

  const { data: placeShopData } = await getPlaceShops();

  const places = computed(() => placeShopData?.value?.data);
</script>

<template>
  <section class="our-contacts">
    <div class="our-contacts__wrapper">
      <div class="our-contacts__body">
        <h2 class="our-contacts__title">{{ item.title }}</h2>
        <div class="our-contacts__cards">
          <AppCard
            v-for="(element, index) in places"
            :key="index"
            class="our-contacts__card"
          >
            <div class="our-contacts__card-content">
              <span class="our-contacts__card-content-title">Телефон:</span>
              <a
                :href="`tel:${cleanPhoneNumber(element.phone)}`"
                class="our-contacts__card-content-value"
              >
                {{ element.phone }}
              </a>
            </div>
            <div class="our-contacts__card-content">
              <span class="our-contacts__card-content-title">Адрес:</span>
              <span class="our-contacts__card-content-value">{{ element.address }}</span>
            </div>
            <div
              v-if="element.socials"
              class="our-contacts__socials"
            >
              <AppButton
                v-for="(icon, key) of element.socials"
                :key="key"
                rounded
                icon-only
                aria-label="Ссылка на вк"
                :href="icon.href"
              >
                <AppIcon
                  :name="icon.icon"
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
          :options="{}"
          :zoom="9"
          :center="[57.014571, 33.015289]"
        >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
          />
          <l-marker
            v-for="(element, index) of places"
            :key="index"
            :lat-lng="[Number(element.latitude), Number(element.longitude)]"
          />
        </l-map>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/semantic";
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";

  .leaflet-control-attribution {
    display: none;
  }

  .our-contacts {
    padding: clamp(#{core.$spacing-200}, 2dvw, #{core.$spacing-800}) 0;

    &__cards {
      display: flex;
      flex-direction: column;
      gap: clamp(#{core.$spacing-200}, 2dvw, #{core.$spacing-400});
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
      gap: clamp(#{core.$spacing-300}, 2dvw, #{core.$spacing-600});

      @include mixins.container;
      @include mixins.breakpoint-sm {
        display: flex;
        flex-direction: column;
      }
    }

    &__body {
      display: flex;
      flex-direction: column;
      gap: clamp(#{core.$spacing-300}, 2dvw, #{core.$spacing-600});
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

      &-title {
        color: semantic.$text-default;
        @include mixins.apply-text("body-1-strong");
      }

      &-value {
        color: semantic.$text-default;

        &[href] {
          @include mixins.hover {
            text-decoration: underline;
          }
        }

        @include mixins.apply-text("body-2");
      }
    }
  }
</style>
