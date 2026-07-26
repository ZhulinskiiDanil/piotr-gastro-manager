<script setup lang="ts">
  const services = [
    'Doradztwo gastronomiczne',
    'Marketing restauracji',
    'Rekrutacja personelu',
    'Optymalizacja procesów',
    'Kontrola kosztów',
    'Rozwój biznesu',
    'Tajemniczy klient',
    'Food Cost',
    'Tworzenie siatki delivery',
    'Rentowność lokalu',
  ];
</script>

<template>
  <section class="hero" id="home">
    <div class="hero__overlay" />

    <div class="hero__content">
      <img class="hero__logo" src="/images/logo.webp" alt="GASTROManager — Piotr Wołczyński" />

      <h1 class="hero__title">GASTROManager</h1>

      <p class="hero__subtitle">Doradztwo i optymalizacja gastronomii</p>

      <p class="hero__description">
        Pomagam restauracjom i lokalom gastronomicznym zwiększać rentowność, optymalizować procesy i
        rozwijać zespoły
      </p>

      <a class="hero__button" href="#contact">
        Kontakt z managerem
        <span aria-hidden="true">→</span>
      </a>
    </div>

    <div class="hero__pagination" aria-hidden="true">
      <span class="hero__pagination-dot" />
      <span class="hero__pagination-dot hero__pagination-dot--active" />
      <span class="hero__pagination-dot" />
      <span class="hero__pagination-dot" />
    </div>

    <div class="services-ticker">
      <div class="services-ticker__track">
        <div
          v-for="group in 2"
          :key="group"
          class="services-ticker__group"
          :aria-hidden="group === 2"
        >
          <template v-for="repeat in 3" :key="repeat">
            <span
              v-for="service in services"
              :key="`${group}-${repeat}-${service}`"
              class="services-ticker__chip"
            >
              {{ service }}
            </span>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .hero {
    position: relative;
    isolation: isolate;
    width: 100%;
    height: auto;
    min-height: 40rem;
    max-height: 51.25rem;
    aspect-ratio: 1920 / 820;

    overflow: hidden;
    color: $color-white;
    background: url('/images/hero/hero-background.webp') center 15% / cover no-repeat;
    background-size: 100%;

    // Локальное затемнение за центральным контентом
    &::after {
      content: '';
      position: absolute;
      z-index: 0;
      top: 50%;
      left: 50%;
      width: min(800px, 80vw);
      height: 400px;
      border-radius: 50%;
      background: $color-black-50;
      opacity: 0.4;
      transform: translate(-50%, -50%);

      pointer-events: none;
      filter: blur(100px);
    }

    &__overlay {
      position: absolute;
      z-index: 0;
      inset: 0;
      background: rgb(0 0 0 / 8%);
      pointer-events: none;
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      z-index: 2;
      top: 43%;
      left: 50%;
      width: min(100% - 4rem, 44rem);
      transform: translate(-50%, -50%);
    }

    &__logo {
      width: 7.5rem; // 120px
      height: 7.5rem;
      margin-bottom: 0.75rem;
      object-fit: contain;
    }

    &__title {
      margin: 0;
      font-family: $font-frutiger;
      font-size: clamp(2.5rem, 2vw, 4rem);
      font-weight: 700;
      line-height: 1;
      letter-spacing: -1.3px;
    }

    &__subtitle {
      margin-top: 1rem;
      font-family: $font-roboto;
      font-size: 24px;
      font-weight: 600;
      line-height: 1.2;
    }

    &__description {
      margin-top: 0.375rem;
      max-width: 480px;
      color: $color-white-85;
      font-family: $font-roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.4;
      text-align: center;
    }

    &__button {
      display: inline-flex;
      min-height: 42px;
      align-items: center;
      justify-content: center;
      gap: 6px;
      margin-top: 0.75rem;
      padding: 10px 15px;
      border: 0;
      color: $color-brown-warm;
      background: $color-primary;
      box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      font-family: $font-roboto;
      font-size: 16px;
      font-weight: 500;
      line-height: 1;
      text-transform: uppercase;
      transition:
        background-color $transition-fast,
        transform $transition-fast;

      &:hover {
        background: $color-orange-light;
        transform: translateY(-2px);
      }

      &:focus-visible {
        outline: 3px solid $color-white-85;
        outline-offset: 3px;
      }
    }

    &__pagination {
      position: absolute;
      z-index: 3;
      top: 50%;
      right: 17px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      transform: translateY(-50%);
    }

    &__pagination-dot {
      width: 12px;
      height: 12px;
      border: 1.5px solid $color-white;
      border-radius: 50%;

      &--active {
        background: $color-white;
      }
    }
  }

  .services-ticker {
    position: absolute;
    z-index: 4;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    padding-block: 0.5rem;
    background: $color-brown-darkest-67;
    backdrop-filter: blur(0.5rem);

    &__track {
      display: flex;
      width: max-content;
      animation: ticker-scroll 60s linear infinite;
      will-change: transform;
    }

    &__group {
      display: flex;
      flex-shrink: 0;
      gap: 0.75rem;
      padding-right: 0.75rem;
    }

    &__chip {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      padding: 0.75rem 1.25rem;
      color: $color-white-85;
      background: $color-white-15;
      box-shadow: 0 0 1.125rem rgb(0 0 0 / 30%);
      font-family: $font-frutiger;
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1;
      text-transform: uppercase;
      white-space: nowrap;
    }

    &:hover &__track {
      animation-play-state: paused;
    }
  }

  @keyframes ticker-scroll {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      transform: translate3d(-50%, 0, 0);
    }
  }

  @media (max-width: 768px) {
    .hero {
      height: 720px;
      background-position: 52% center;

      &::after {
        width: 90vw;
        height: 360px;
        filter: blur(70px);
      }

      &__content {
        top: 46%;
      }

      &__logo {
        width: 130px;
        height: 130px;
        margin-bottom: 20px;
      }

      &__title {
        font-size: clamp(40px, 11vw, 54px);
        letter-spacing: -1px;
      }

      &__subtitle {
        margin-top: 20px;
        font-size: 20px;
      }

      &__description {
        max-width: 320px;
        font-size: 15px;
      }

      &__pagination {
        display: none;
      }
    }

    .services-ticker {
      padding-block: 0.5rem;

      &__track {
        animation-duration: 50s;
      }

      &__group {
        gap: 0.5rem;
        padding-right: 0.5rem;
      }

      &__chip {
        padding: 0.5rem 1rem;
        font-size: 1rem;
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .services-ticker__track {
      animation-play-state: paused;
    }
  }
</style>
