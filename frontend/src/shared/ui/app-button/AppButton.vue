<script setup lang="ts">
  import { computed } from "vue";

  interface Props {
    variant?: "primary" | "secondary";
    rounded?: boolean;
    iconOnly?: boolean;
    size?: "small" | "medium";
    disabled?: boolean;
    href?: string;
  }

  const {
    variant = "primary",
    rounded = false,
    iconOnly = false,
    size = "medium",
    disabled = false,
    href = undefined,
  } = defineProps<Props>();

  const isLink = computed(() => href && !disabled);
  const component = isLink.value ? "a" : "button";
</script>

<template>
  <component
    :is="component"
    class="app-button"
    :class="{
      'app-button_variant_primary': variant == 'primary',
      'app-button_variant_secondary': variant == 'secondary',
      'app-button_rounded': rounded,
      'app-button_icon-only': iconOnly,
      'app-button_size_small': size === 'small',
      'app-button_size_medium': size === 'medium',
      'app-button_disabled': disabled,
    }"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .app-button {
    $this: &;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: core.$spacing-200;
    border: none;
    cursor: pointer;
    transition-timing-function: core.$transition-timing;
    transition-duration: core.$transition-duration;
    border-radius: core.$radius-200;

    @include mixins.apply-text("body-2");

    &_rounded {
      border-radius: core.$radius-full;
    }

    &_size {
      &_medium {
        padding: core.$spacing-200 core.$spacing-600;

        &#{$this}_icon-only {
          width: core.$spacing-1000;
          height: core.$spacing-1000;
          padding: core.$spacing-200;
        }
      }
      &_small {
        padding: core.$spacing-200 core.$spacing-600;

        &#{$this}_icon-only {
          width: core.$spacing-800;
          height: core.$spacing-800;
          padding: core.$spacing-200;
        }
      }
    }

    &_variant {
      &_primary {
        background: semantic.$background-primary;
        color: semantic.$text-default-negative;

        @include mixins.hover {
          &:not(:disabled) {
            background: semantic.$background-primary-hover;
            color: semantic.$text-default-negative;
          }
        }

        @include mixins.active {
          &:not(:disabled) {
            background: semantic.$background-primary-active;
            color: semantic.$text-default-negative;
          }
        }
      }

      &_secondary {
        background: semantic.$background-secondary;
        color: semantic.$text-default;

        @include mixins.hover {
          &:not(:disabled) {
            background: semantic.$background-secondary-hover;
          }
        }
      }
    }

    &:disabled,
    &_disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }
  }
</style>
