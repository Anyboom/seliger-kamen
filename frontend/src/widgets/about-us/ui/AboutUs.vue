<script setup lang="ts"></script>

<template>
  <section class="about-us">
    <div class="about-us__wrapper">
      <div class="about-us__image-wrapper">
        <img
          src="/images/about_background.png"
          alt="#"
        />
      </div>
      <div class="about-us__body">
        <h2 class="about-us__title">О нас</h2>
        <div class="about-us__content">
          <p>
            Мы — «Селигер Камень». Работаем напрямую с камнем из Урала и Карелии. Сами режем, шлифуем, гравируем.
            Никаких посредников — только цена производителя.
          </p>
          <p>
            Создаём памятники любой сложности: от строгих бюджетных до эксклюзивных премиум-проектов. Используем
            алмазную гравировку, фотокерамику, имитацию гравировки. Делаем портреты на стекле.
          </p>
          <p>
            Обустраиваем места захоронений под ключ. В наличии — кресты, ограды, вазы, лампады, венки, столики и
            скамейки.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/semantic";
  @use "@/shared/assets/styles/mixins";
  @use "@/shared/assets/styles/core";

  .about-us {
    padding: core.$spacing-800 0;

    &__wrapper {
      display: grid;
      grid-template-columns: 5fr 7fr;
      gap: core.$spacing-600;
      @include mixins.container;
    }

    &__image-wrapper {
      max-height: 420px;
      overflow: hidden;
      border-radius: core.$radius-200;
    }

    &__body {
      display: flex;
      flex-direction: column;
      gap: core.$spacing-600;
    }

    &__title {
      color: semantic.$text-default;
      @include mixins.apply-text("heading-2");
    }

    &__content {
      color: semantic.$text-default;
      display: flex;
      flex-direction: column;
      gap: core.$spacing-300;

      p {
        @include mixins.apply-text("body-1");
      }
    }
  }
</style>
