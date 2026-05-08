<script setup lang="ts">
  import AppLayout from "@/app/layouts/AppLayout.vue";
  import DynamicDialog from "primevue/dynamicdialog";
  import Toast from "primevue/toast";
</script>

<template>
  <DynamicDialog />
  <Toast />
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";
  @use "@/shared/assets/styles/semantic";

  :root {
    --p-dialog-header-padding: #{core.$spacing-400};
    --p-dialog-content-padding: #{core.$spacing-400};
    --p-dialog-border-radius: #{core.$radius-200};
    --p-dialog-background: #{semantic.$background-default-secondary};
  }

  .p-dialog {
    color: semantic.$text-default;
  }
</style>
