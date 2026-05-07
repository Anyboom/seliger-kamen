<script setup lang="ts">
  import { AppIcon } from "@/shared/ui/app-icon";
  import { AppButton } from "@/shared/ui/app-button";
  import { AppMenu } from "@/shared/ui/app-menu";
  import { ref, useTemplateRef } from "vue";

  interface Props {
    colored?: boolean;
  }

  const { colored = true } = defineProps<Props>();

  defineOptions({ inheritAttrs: false });

  const menu = useTemplateRef("appMenu");

  const items = ref([
    {
      label: "Главная",
      href: "#",
      active: true,
    },
    {
      label: "Наши работы",
      href: "#",
    },
    {
      label: "Наши услуги",
      href: "#",
    },
    {
      label: "Контакты",
      href: "#",
    },
  ]);
</script>

<template>
  <header
    class="app-header"
    :class="{
      'app-header_colored': colored,
      'app-header_container': colored,
      'app-header_mobile-menu-open': menu?.isShowMobileMenu,
    }"
  >
    <div class="app-header__wrapper">
      <div class="app-header__top">
        <a
          href="/"
          class="app-header__logo"
          aria-label="Логотип"
        >
          <AppIcon
            name="logo"
            width="176px"
            height="46px"
          />
        </a>
        <div class="app-header__contacts">
          <span>г. Осташков, Володарского. 63</span>
          <a href="tel:89607165353">8 960 716 53 53</a>
        </div>
        <div class="app-header__contacts">
          <span>г. Пено, Тарасова. 2</span>
          <a href="tel:89105391969">8 910 539 19 69</a>
        </div>
        <div class="app-header__contacts">
          <a href="mailto:danilka.volkov.02@mail.ru">danilka.volkov.02@mail.ru</a>
        </div>
        <div class="app-header__socials">
          <AppButton
            rounded
            icon-only
            aria-label="Ссылка на вк"
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
            aria-label="Ссылка на макс"
          >
            <AppIcon
              name="social-max"
              width="24"
              height="24"
            />
          </AppButton>
        </div>

        <AppButton class="app-header__form-button">Заказать звонок</AppButton>
      </div>
      <div class="app-header__delimiter"></div>
      <div class="app-header__bottom">
        <AppMenu
          ref="appMenu"
          :items="items"
        />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .app-header {
    $this: &;

    &_colored {
      #{$this}__wrapper {
        background: semantic.$background-default-negative;
      }
    }

    &_container {
      @include mixins.container;
    }

    &_mobile-menu-open {
      #{$this}__logo {
        color: semantic.$text-default;
      }
    }

    &__wrapper {
      padding: core.$spacing-400;
      border-radius: core.$radius-200;
      display: flex;
      flex-direction: column;
      gap: core.$spacing-300;

      @include mixins.breakpoint-sm {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }

    &__form-button {
      @include mixins.breakpoint-md {
        display: none;
      }
    }

    &__logo {
      z-index: 1000;
      position: relative;
      display: flex;
      color: semantic.$text-default-negative;
      transition: color core.$transition-duration core.$transition-timing;

      @include mixins.hover {
        color: semantic.$text-default-negative-hover;
      }
    }

    &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__socials {
      display: flex;
      gap: core.$spacing-300;

      @include mixins.breakpoint-md {
        display: none;
      }
    }

    &__contacts {
      display: flex;
      flex-direction: column;
      gap: core.$spacing-100;
      color: semantic.$text-default-negative;

      @include mixins.apply-text("body-3-strong");

      @include mixins.breakpoint-sm {
        display: none;
      }

      a {
        color: semantic.$text-default-negative;
        transition: color core.$transition-duration core.$transition-timing;

        @include mixins.hover {
          color: semantic.$text-default-negative-hover;
        }
      }
    }

    &__delimiter {
      height: core.$spacing-50;
      width: 100%;
      background: semantic.$background-primary;
      opacity: 0.2;

      @include mixins.breakpoint-sm {
        display: none;
      }
    }
  }
</style>
