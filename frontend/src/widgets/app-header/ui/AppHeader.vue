<script setup lang="ts">
  import { AppIcon } from "@/shared/ui/app-icon";
  import { AppButton } from "@/shared/ui/app-button";
  import { AppMenu } from "@/shared/ui/app-menu";
  import { ref } from "vue";

  interface Props {
    colored?: boolean;
  }

  defineProps<Props>();

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
    :class="{ 'app-header_colored': colored, 'app-header_container': colored }"
  >
    <div class="app-header__wrapper">
      <div class="app-header__top">
        <a
          href="/"
          class="app-header__logo"
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
        <div class="app-header__socials">
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
              name="social-max"
              width="24"
              height="24"
            />
          </AppButton>
        </div>

        <AppButton>Заказать звонок</AppButton>
      </div>
      <div class="app-header__delimiter"></div>
      <div class="app-header__bottom">
        <AppMenu :items="items" />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .app-header {
    padding: core.$spacing-400;
    border-radius: core.$radius-200;

    &_colored {
      background: semantic.$background-default-negative;
    }

    &_container {
      @include mixins.container;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: core.$spacing-300;
    }

    &__logo {
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
    }

    &__contacts {
      display: flex;
      flex-direction: column;
      gap: core.$spacing-100;
      color: semantic.$text-default-negative;

      @include mixins.apply-text("body-3-strong");

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
    }
  }
</style>
