<script setup lang="ts">
  const stats = [
    {
      value: '9+',
      label: 'lat w gastronomii',
    },
    {
      value: '7',
      label: 'lat na stanowiskach managerskich',
    },
    {
      value: '4',
      label: 'restauracje w jednej sieci',
    },
    {
      value: '2',
      label: 'lokale franczyzowe',
    },
  ];

  const career = [
    {
      company: 'Ganesh – Kuchnia Indyjska',
      location: 'Łódź',
      position: 'Kierowca',
      period: 'ok. 1,5 roku',
      description: '',
    },
    {
      company: 'Cochise Burger',
      location: '',
      position: 'Od kierowcy do General Managera',
      period: '',
      description:
        'Po pół roku awansowałem na pierwszego managera w firmie, a po trzech latach zostałem pierwszym General Managerem, zarządzającym siecią czterech lokali. Współtworzyłem rozwój sieci z 2 do 5 lokali własnych oraz nadzorowałem 2 lokale franczyzowe.',
    },
    {
      company: 'Współpraca z markami gastronomicznymi',
      location: '',
      position: 'Ostatnie 1,5 roku',
      period: '',
      description:
        'Współpracowałem z markami gastronomicznymi, takimi jak Da Grasso, Bar Mleczny Delicje, Bar na Króla, GOM Owczarek, a obecnie z Kuchnią Marché, gdzie odpowiadam za zarządzanie dwoma restauracjami, cateringiem oraz siecią automatów vendingowych.',
    },
  ];

  const certificates = [
    'Gastro Manager – Akademia Gastronomii',
    'Gastro Manager – Poziom II – Akademia Gastronomii',
    'Gastro Manager – Horeca Academy',
    'Catering Manager',
    'Food Cost',
    'Zarządzanie sprzedażą',
    'Sprzedaż sugerowana',
    'Skuteczny marketing',
    'Social Media Manager',
    'Komunikacja i motywowanie pracowników',
    'Zarządzanie pokoleniem Millennials',
  ];
</script>

<template>
  <section id="experience" class="experience" aria-labelledby="experience-title">
    <div class="experience__container">
      <h2 id="experience-title" class="experience__title">Doświadczenie</h2>

      <p class="experience__introduction">
        Posiadam ponad
        <strong>9 lat doświadczenia</strong>
        w branży gastronomicznej, w tym
        <strong>7 lat na stanowiskach managerskich</strong>. W tym czasie odpowiadałem zarówno za
        zarządzanie pojedynczym lokalem gastronomicznym, jak i za nadzór nad siecią restauracji oraz
        lokalami franczyzowymi.
      </p>

      <div class="experience__stats">
        <article v-for="stat in stats" :key="stat.label" class="experience__stat">
          <strong class="experience__stat-value">
            {{ stat.value }}
          </strong>

          <span class="experience__stat-label">
            {{ stat.label }}
          </span>
        </article>
      </div>

      <section class="experience__panel experience__career" aria-labelledby="career-title">
        <h3 id="career-title" class="experience__section-title">Moja droga zawodowa</h3>

        <div class="experience__timeline">
          <article v-for="item in career" :key="item.company" class="experience__timeline-item">
            <div class="experience__timeline-marker" />

            <div class="experience__timeline-content">
              <div class="experience__timeline-header">
                <div>
                  <h4 class="experience__company">
                    {{ item.company }}
                  </h4>

                  <span v-if="item.location" class="experience__location">
                    {{ item.location }}
                  </span>
                </div>

                <span v-if="item.period" class="experience__period">
                  {{ item.period }}
                </span>
              </div>

              <p class="experience__position">
                {{ item.position }}
              </p>

              <p v-if="item.description" class="experience__timeline-description">
                {{ item.description }}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section class="experience__panel experience__training" aria-labelledby="training-title">
        <h3 id="training-title" class="experience__section-title">Rozwój i szkolenia</h3>

        <p class="experience__training-introduction">
          Ukończone szkolenia branżowe, zdobyte doświadczenie oraz nieustanny rozwój pozwalają mi
          być na bieżąco z trendami i skutecznie odpowiadać na wyzwania współczesnej gastronomii.
        </p>

        <h4 class="experience__certificates-title">Ukończone szkolenia i certyfikaty</h4>

        <ul class="experience__certificates">
          <li
            v-for="certificate in certificates"
            :key="certificate"
            class="experience__certificate"
          >
            <span class="experience__certificate-marker" aria-hidden="true"> ✓ </span>

            <span>{{ certificate }}</span>
          </li>
        </ul>
      </section>

      <blockquote class="experience__quote">
        Certyfikaty potwierdzają wiedzę, ale to codzienna praca z ludźmi, gośćmi i zespołami uczy
        najwięcej. Wierzę, że najlepsze rozwiązania powstają tam, gdzie teoria spotyka się z
        praktyką.
      </blockquote>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .experience {
    padding-block: 7rem;
    color: $color-brown-darkest;
    background: $color-peach url('/images/experience/experience-background.webp') center top / cover
      no-repeat;
    background-attachment: fixed;
    font-family: $font-roboto;

    &__container {
      width: min(calc(100% - 4rem), 67.5rem);
      margin-inline: auto;
    }

    &__title {
      margin: 0;
      color: $color-brown-dark;
      font-family: $font-frutiger;
      font-size: 5rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.125rem;
      text-align: center;
    }

    &__introduction {
      max-width: 57.5rem;
      margin: 3rem auto 0;
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.6;
      text-align: center;

      strong {
        color: $color-orange;
        font-weight: 700;
      }
    }

    &__stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      margin-top: 3rem;
    }

    &__stat {
      display: flex;
      min-height: 10rem;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 1.5rem;
      border-radius: 1rem;
      background: $color-white;
      box-shadow: 0 0.5rem 1.5rem $color-white-15;
      text-align: center;
    }

    &__stat-value {
      color: $color-orange;
      font-size: 3rem;
      font-weight: 700;
      line-height: 1;
    }

    &__stat:nth-child(even) &__stat-value {
      color: $color-purple;
    }

    &__stat-label {
      margin-top: 0.75rem;
      color: $color-brown;
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.25;
    }

    &__panel {
      margin-top: 3rem;
      padding: 3rem;
      border: 0.125rem solid $color-white-50;
      border-radius: 2rem;
      background: rgb(255 255 255 / 85%);
      box-shadow: 0 0.75rem 2rem rgb(26 11 0 / 15%);
      backdrop-filter: blur(0.75rem);
    }

    &__section-title {
      margin: 0;
      color: $color-brown-dark;
      font-family: $font-frutiger;
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.1;
    }

    &__timeline {
      position: relative;
      margin-top: 2.5rem;
      padding-left: 2.5rem;

      &::before {
        position: absolute;
        top: 0.75rem;
        bottom: 0.75rem;
        left: 0.5rem;
        width: 0.125rem;
        background: linear-gradient($color-orange, $color-purple);
        content: '';
      }
    }

    &__timeline-item {
      position: relative;

      & + & {
        margin-top: 2.5rem;
      }
    }

    &__timeline-marker {
      position: absolute;
      top: 0.25rem;
      left: -2.5rem;
      width: 1rem;
      height: 1rem;
      border: 0.25rem solid $color-white;
      border-radius: 50%;
      background: $color-orange;
      box-shadow: 0 0 0 0.125rem $color-orange;
    }

    &__timeline-item:nth-child(even) &__timeline-marker {
      background: $color-purple;
      box-shadow: 0 0 0 0.125rem $color-purple;
    }

    &__timeline-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 2rem;
    }

    &__company {
      margin: 0;
      color: $color-brown-darkest;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.25;
    }

    &__location {
      display: block;
      margin-top: 0.25rem;
      color: $color-gray;
      font-size: 1rem;
    }

    &__period {
      flex-shrink: 0;
      padding: 0.5rem 0.75rem;
      border-radius: 2rem;
      color: $color-brown-warm;
      background: $color-primary;
      font-size: 0.875rem;
      font-weight: 700;
      white-space: nowrap;
    }

    &__position {
      margin: 0.75rem 0 0;
      color: $color-orange;
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.4;
    }

    &__timeline-description {
      max-width: 56rem;
      margin: 0.75rem 0 0;
      color: $color-brown;
      font-size: 1rem;
      line-height: 1.6;
    }

    &__training-introduction {
      max-width: 58rem;
      margin: 1.5rem 0 0;
      color: $color-brown;
      font-size: 1.125rem;
      line-height: 1.6;
    }

    &__certificates-title {
      margin: 2.5rem 0 0;
      color: $color-brown-darkest;
      font-size: 1.5rem;
      font-weight: 700;
    }

    &__certificates {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.75rem;
      margin: 1.5rem 0 0;
      padding: 0;
      list-style: none;
    }

    &__certificate {
      display: flex;
      min-height: 3.5rem;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      border-radius: 0.75rem;
      background: $color-background;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.4;
    }

    &__certificate-marker {
      display: grid;
      width: 1.75rem;
      height: 1.75rem;
      flex: 0 0 1.75rem;
      border-radius: 50%;
      color: $color-white;
      background: $color-orange;
      font-size: 0.875rem;
      font-weight: 700;
      place-items: center;
    }

    &__certificate:nth-child(even) &__certificate-marker {
      background: $color-purple;
    }

    &__quote {
      position: relative;
      margin: 3rem 0 0;
      padding: 2rem 3rem;
      border-left: 0.375rem solid $color-orange;
      border-radius: 0 1rem 1rem 0;
      color: $color-brown;
      background: rgb(255 255 255 / 85%);
      box-shadow: 0 0.5rem 1.5rem rgb(26 11 0 / 15%);
      font-size: 1.25rem;
      font-style: italic;
      font-weight: 500;
      line-height: 1.6;
    }
  }

  @media (max-width: 900px) {
    .experience {
      &__stats {
        grid-template-columns: repeat(2, 1fr);
      }

      &__certificates {
        grid-template-columns: 1fr;
      }
    }
  }

  @media (max-width: 768px) {
    .experience {
      padding-block: 5rem;
      background-attachment: scroll;

      &__container {
        width: min(calc(100% - 2rem), 31.5rem);
      }

      &__title {
        font-size: clamp(3rem, 14vw, 4rem);
        letter-spacing: -0.0625rem;
      }

      &__introduction {
        margin-top: 2rem;
        font-size: 1.125rem;
        line-height: 1.5;
        text-align: left;
      }

      &__stats {
        gap: 0.75rem;
        margin-top: 2rem;
      }

      &__stat {
        min-height: 9rem;
        padding: 1rem;
      }

      &__stat-value {
        font-size: 2.5rem;
      }

      &__stat-label {
        font-size: 0.875rem;
      }

      &__panel {
        margin-top: 2rem;
        padding: 1.5rem;
        border-radius: 1.5rem;
      }

      &__section-title {
        font-size: 2rem;
      }

      &__timeline {
        margin-top: 2rem;
        padding-left: 2rem;

        &::before {
          left: 0.375rem;
        }
      }

      &__timeline-marker {
        left: -2rem;
      }

      &__timeline-header {
        flex-direction: column;
        gap: 0.75rem;
      }

      &__company {
        font-size: 1.25rem;
      }

      &__position {
        font-size: 1rem;
      }

      &__timeline-description,
      &__training-introduction {
        font-size: 1rem;
        line-height: 1.5;
      }

      &__certificates-title {
        margin-top: 2rem;
        font-size: 1.25rem;
      }

      &__certificate {
        align-items: flex-start;
        font-size: 0.875rem;
      }

      &__quote {
        margin-top: 2rem;
        padding: 1.5rem;
        font-size: 1rem;
        line-height: 1.5;
      }
    }
  }
</style>
