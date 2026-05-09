<script setup lang="ts">
  import type { NuxtError } from "#app";
  import { computed } from "#imports";
  import { AppButton } from "~/shared/ui/app-button";

  interface Props {
    error: NuxtError;
  }

  type Error = {
    title: string;
    caption: string;
  };

  const errors: Record<number | string, Error> = {
    404: {
      title: "Страница не найдена",
      caption:
        "К сожалению, страница, которую вы ищете, не найдена. Возможно, она была перемещена, удалена или ссылка ведет не туда.",
    },
    "default": {
      title: "Что-то пошло не так...",
      caption: "Произошла непредвиденная ошибка. Не волнуйтесь, это не ваша вина.",
    },
  };

  const { error } = defineProps<Props>();

  const currentError = computed(() => {
    if (error.status && errors?.[error.status]) {
      return errors[error.status] as Error;
    }

    return errors.default as Error;
  });
</script>

<template>
  <NuxtLayout name="error">
    <div class="error">
      <h1 class="error__title">
        {{ currentError.title }}
      </h1>
      <span class="error__caption">
        {{ currentError.caption }}
      </span>
      <AppButton
        class="error__button"
        href="/"
      >
        Вернуться на главную
      </AppButton>
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";
  @use "~/shared/assets/styles/semantic";

  .error {
    max-width: core.$spacing-5000 * 4;
    display: flex;
    flex-direction: column;
    gap: core.$spacing-200;
    padding: 0 core.$spacing-400;

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
