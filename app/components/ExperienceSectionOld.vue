<script setup lang="ts">
  const secondaryStats = [
    {
      value: '150+',
      title: 'Przeprowadzonych konsultacji',
      description: 'Indywidualne podejście do każdego biznesu',
    },
    {
      value: '50+',
      title: 'Restauracji objętych wsparciem',
      description: 'Od małych lokali po duże sieci gastronomiczne',
    },
  ];
</script>

<template>
  <section id="experience" class="experience" aria-labelledby="experience-title">
    <h2 id="experience-title" class="experience__title">Doświadczenie</h2>

    <div class="experience__cards">
      <article class="experience__card experience__card--main">
        <strong class="experience__value experience__value--main"> 20+ </strong>

        <h3 class="experience__card-title experience__card-title--main">Lat doświadczenia</h3>

        <p class="experience__description experience__description--main">
          Wspieram restauracje w optymalizacji<br />
          procesów i zwiększaniu rentowności
        </p>
      </article>

      <article
        v-for="stat in secondaryStats"
        :key="stat.value"
        class="experience__card experience__card--secondary"
      >
        <strong class="experience__value experience__value--secondary">
          {{ stat.value }}
        </strong>

        <h3 class="experience__card-title">
          {{ stat.title }}
        </h3>

        <p class="experience__description">
          {{ stat.description }}
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .experience {
    height: 49.25rem; // 788px
    overflow: hidden;
    padding-top: 7rem;
    background: $color-peach url('/images/experience/experience-background.webp') center top / cover
      no-repeat;

    &__title {
      margin: 0 0 4.5rem;
      color: $color-brown-dark;
      font-family: $font-frutiger;
      font-size: 5rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.125rem;
      text-align: center;
    }

    &__cards {
      display: grid;
      width: min(calc(100% - 4rem), 67.5rem);
      height: 30.5rem;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-rows: repeat(2, minmax(0, 1fr));
      gap: 1.5rem;
      margin-inline: auto;
      padding: 1.5rem;
      border-radius: 2rem;
      background: rgb(248 241 235 / 85%);
      box-shadow: 0 0.75rem 2rem rgb(26 11 0 / 15%);
    }

    &__card {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 1rem;
      background: $color-white;
      box-shadow: 0 0.375rem 1rem rgb(26 11 0 / 15%);
      text-align: center;

      &--main {
        grid-row: 1 / 3;
      }
    }

    &__value {
      display: block;
      font-family: $font-roboto;
      font-weight: 700;
      line-height: 1;

      &--main {
        color: $color-orange;
        font-size: 6rem;
      }

      &--secondary {
        color: $color-purple;
        font-size: 3rem;
      }
    }

    &__card-title {
      margin: 0.75rem 0 0;
      color: $color-brown;
      font-family: $font-roboto;
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.2;

      &--main {
        margin-top: 1.25rem;
        font-size: 2rem;
      }
    }

    &__description {
      max-width: 19rem;
      margin: 0.5rem 0 0;
      color: $color-gray;
      font-family: $font-roboto;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.375;

      &--main {
        max-width: 27rem;
        margin-top: 1rem;
        font-size: 1.25rem;
        line-height: 1.4;
      }
    }
  }

  @media (max-width: 768px) {
    .experience {
      height: auto;
      padding: 5rem 1rem;

      &__title {
        margin-bottom: 3rem;
        font-size: clamp(3rem, 14vw, 4rem);
        letter-spacing: -0.0625rem;
      }

      &__cards {
        display: flex;
        width: min(100%, 31.5rem);
        height: auto;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        border-radius: 1.5rem;
      }

      &__card {
        min-height: 13rem;
        padding: 2rem 1rem;

        &--main {
          min-height: 22rem;
        }
      }

      &__value {
        &--main {
          font-size: 5rem;
        }

        &--secondary {
          font-size: 3rem;
        }
      }

      &__card-title {
        &--main {
          font-size: 1.75rem;
        }
      }

      &__description {
        font-size: 1rem;

        br {
          display: none;
        }

        &--main {
          max-width: 23rem;
          font-size: 1.125rem;
        }
      }
    }
  }
</style>
