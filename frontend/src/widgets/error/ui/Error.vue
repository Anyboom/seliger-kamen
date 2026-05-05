<script setup lang="ts">
  import { AppButton } from "@/shared/ui/app-button";
</script>

<template>
  <div class="error__wrapper">
    <div class="error">
      <h1 class="error__title">Страница не найдена</h1>
      <span class="error__caption">
        К сожалению, страница, которую вы ищете, не найдена. Возможно, она была перемещена, удалена или ссылка ведет не
        туда.
      </span>
      <AppButton
        class="error__button"
        href="/"
      >
        Вернуться на главную
      </AppButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";
  @use "@/shared/assets/styles/semantic";

  .error {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: core.$spacing-400;

    &__wrapper {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__title {
      color: semantic.$text-default;

      @include mixins.apply-text("heading-1");
    }

    &__caption {
      color: semantic.$text-default-secondary;

      @include mixins.apply-text("body-1");
    }

    &__button {
      width: fit-content;
    }
  }
</style>
