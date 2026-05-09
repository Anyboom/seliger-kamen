<script setup lang="ts">
  const model = defineModel<string>();
</script>

<template>
  <textarea
    v-model="model"
    class="app-textarea"
    rows="10"
  ></textarea>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/core";
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/semantic";

  .app-textarea {
    background: semantic.$background-default;
    color: semantic.$text-default;
    border-radius: core.$spacing-200;
    padding: core.$spacing-200;
    border: 2px solid semantic.$background-default-secondary-hover;
    transition: border core.$transition-duration core.$transition-timing;
    resize: none;
    outline: none;
    width: 100%;

    @include mixins.apply-text("body-1");

    @include mixins.hover {
      border: 2px solid semantic.$background-disabled;
    }

    &:focus {
      border: 2px solid semantic.$background-primary;
    }

    &::placeholder {
      @include mixins.apply-text("body-1");
      color: semantic.$text-default-secondary;
    }
  }
</style>
