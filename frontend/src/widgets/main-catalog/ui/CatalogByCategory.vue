<script setup lang="ts">
  import { computed } from "vue";
  import { getProducts, type Product, ProductCard } from "~/entities/product";
  import { useDialog, useToast } from "primevue";
  import { createFeedback, FeedbackForm } from "~/features/feedback-form";

  interface Props {
    category: number;
  }

  const { category } = defineProps<Props>();

  const options = computed(() => ({
    limit: 8,
    "filter[category]": category,
  }));

  const { data: productsData } = await getProducts(options);

  const dialogService = useDialog();
  const toastService = useToast();

  const products = computed<Product[]>(() => productsData?.value?.data || []);

  function orderProduct(id: number) {
    dialogService.open(FeedbackForm, {
      emits: {
        onSubmit: async (values: any) => {
          await createFeedback(values.name, values.phone, values.comment, id);

          toastService.add({
            severity: "success",
            summary: "Успешно",
            detail: "Заявка отправлена, ожидайте звонка.",
            life: 2000,
          });
        },
      },
      props: {
        draggable: false,
        style: {
          width: "25vw",
        },
        breakpoints: {
          "960px": "75vw",
          "640px": "90vw",
        },
        header: "Форма заказа",
        modal: true,
      },
    });
  }
</script>

<template>
  <div class="catalog-by-category">
    <ProductCard
      v-for="item of products"
      :key="item.id"
      :product-id="item.id"
      :image="item.image"
      class="catalog-by-category__item"
      @order="orderProduct"
    />
  </div>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/semantic";
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";

  .catalog-by-category {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: clamp(#{core.$spacing-300}, 2dvw, #{core.$spacing-600});
    margin-bottom: clamp(#{core.$spacing-200}, 2dvw, #{core.$spacing-400});

    @include mixins.breakpoint-lg {
      grid-template-columns: repeat(3, 1fr);
    }

    @include mixins.breakpoint-md {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mixins.breakpoint-xs {
      grid-template-columns: repeat(1, 1fr);
    }

    &__item {
      max-height: 300px;
      border-radius: core.$radius-200;
      overflow: hidden;
    }
  }
</style>
