<script setup lang="ts">
  import { AppButton } from "@/shared/ui/app-button";
  import { AppInput } from "@/shared/ui/app-input";
  import { AppTextarea } from "@/shared/ui/app-textarea";
  import Message from "primevue/message";
  import { Form, FormField, type FormSubmitEvent } from "@primevue/forms";
  import { valibotResolver } from "@primevue/forms/resolvers/valibot";
  import { inject, ref } from "vue";
  import * as v from "valibot";

  const resolver = ref(
    valibotResolver(
      v.object({
        name: v.pipe(v.string(), v.minLength(1, "Обязательное поле.")),
        phone: v.pipe(v.string(), v.minLength(1, "Обязательное поле.")),
        comment: v.pipe(v.string()),
      }),
    ),
  );

  const dialogRef = inject<any>("dialogRef");

  type Emits = {
    "submit": [data: Record<string, string>];
  };

  const emit = defineEmits<Emits>();

  function handleSubmit(data: FormSubmitEvent) {
    if (data.valid) {
      emit("submit", data.values);
      dialogRef?.value?.close();
    }
  }
</script>

<template>
  <Form
    class="feedback-form"
    :resolver="resolver"
    @submit="handleSubmit"
  >
    <div class="feedback-form__group">
      <label for="input-name">Имя:</label>
      <FormField
        v-slot="$field"
        name="name"
        initial-value=""
      >
        <AppInput
          v-model="$field.value"
          type="text"
          v-bind="$field.props"
        />
        <Message
          v-if="$field?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $field.error?.message }}
        </Message>
      </FormField>
    </div>
    <div class="feedback-form__group">
      <label for="input-phone">Телефон:</label>
      <FormField
        v-slot="$field"
        name="phone"
        initial-value=""
      >
        <AppInput
          v-model="$field.value"
          type="text"
          v-bind="$field.props"
        />
        <Message
          v-if="$field?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $field.error?.message }}
        </Message>
      </FormField>
    </div>
    <div class="feedback-form__group">
      <label for="input-comment">Комментарий:</label>
      <FormField
        v-slot="$field"
        name="comment"
        initial-value=""
      >
        <AppTextarea
          v-model="$field.value"
          type="text"
          v-bind="$field.props"
        />
        <Message
          v-if="$field?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $field.error?.message }}
        </Message>
      </FormField>
    </div>
    <AppButton variant="secondary"> Отправить </AppButton>
  </Form>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";
  @use "@/shared/assets/styles/semantic";

  .feedback-form {
    display: flex;
    flex-direction: column;
    gap: core.$spacing-300;

    &__group {
      display: flex;
      flex-direction: column;
      gap: core.$spacing-200;
    }
  }
</style>
