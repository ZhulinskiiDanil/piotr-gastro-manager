<script setup lang="ts">
  import { AtSign, MapPin, Phone, Store } from 'lucide-vue-next';

  const contacts = [
    {
      title: 'Adres',
      lines: ['Piotrkowska Centrum 123A', '00-000 Łódź'],
      icon: MapPin,
    },
    {
      title: 'Telefon',
      lines: ['+48 999 999 999', 'Pn–Pt: 9:00–17:00'],
      icon: Phone,
    },
    {
      title: 'Email',
      lines: ['zmywak@gmail.pl', 'Odpowiem w ciągu 24h'],
      icon: AtSign,
    },
  ];
</script>

<template>
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <h2 id="contact-title" class="contact__title">Kontakt</h2>

    <div class="contact__divider" aria-hidden="true">
      <span class="contact__divider-line" />
      <span class="contact__divider-dot" />

      <Store class="contact__divider-icon" :stroke-width="1.75" />

      <span class="contact__divider-dot" />
      <span class="contact__divider-line" />
    </div>

    <!-- <div class="contact__card">
      <div class="contact__intro">
        <h3 class="contact__card-title">Kontakt z managerem</h3>

        <p class="contact__card-description">
          Porozmawiajmy o tym, jak mogę pomóc<br />
          rozwinąć Twój biznes
        </p>
      </div>

      <div class="contact__items">
        <article v-for="item in contacts" :key="item.title" class="contact__item">
          <div class="contact__icon-wrapper" aria-hidden="true">
            <component :is="item.icon" class="contact__icon" :stroke-width="1.75" />
          </div>

          <div class="contact__item-content">
            <h4 class="contact__item-title">
              {{ item.title }}
            </h4>

            <p class="contact__item-description">
              <span v-for="line in item.lines" :key="line" class="contact__item-line">
                {{ line }}
              </span>
            </p>
          </div>
        </article>
      </div>
    </div> -->
  </section>
</template>

<style scoped lang="scss">
  .contact {
    // min-height: 34.375rem; // 550px
    overflow: hidden;
    padding: 4rem 0 2rem;
    background: $color-background;

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

    &__divider {
      display: flex;
      width: 21.5rem;
      height: 2.5rem;
      align-items: center;
      justify-content: center;
      margin: 1.25rem auto 0;
      color: $color-peach;
    }

    &__divider-line {
      width: 8rem;
      height: 0.125rem;
      background: linear-gradient(90deg, transparent, $color-peach);

      &:last-child {
        background: linear-gradient(90deg, $color-peach, transparent);
      }
    }

    &__divider-dot {
      width: 0.5rem;
      height: 0.5rem;
      flex-shrink: 0;
      border-radius: 50%;
      background: $color-peach;
    }

    &__divider-icon {
      width: 2.5rem;
      height: 2.5rem;
      flex-shrink: 0;
      margin-inline: 0.75rem;
    }

    &__card {
      width: min(calc(100% - 4rem), 67.5rem);
      height: 16rem;
      margin: 2.25rem auto 0;
      padding: 2rem 3rem;
      border-radius: 2rem;
      color: $color-white;
      background: $color-black-warm url('/images/contact/contact-background.webp') center / cover
        no-repeat;
      box-shadow: 0 0.75rem 2rem rgb(26 11 0 / 15%);
    }

    &__card-title {
      margin: 0;
      font-family: $font-roboto;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.25;
    }

    &__card-description {
      margin: 0.375rem 0 0;
      color: $color-gray;
      font-family: $font-roboto;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
    }

    &__items {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 3rem;
      margin-top: 2rem;
    }

    &__item {
      display: flex;
      min-width: 0;
      align-items: center;
      gap: 1rem;
    }

    &__icon-wrapper {
      display: grid;
      width: 4rem;
      height: 4rem;
      flex: 0 0 4rem;
      border: 0.125rem solid $color-orange-light;
      border-radius: 50%;
      color: $color-orange-light;
      place-items: center;
    }

    &__icon {
      width: 2rem;
      height: 2rem;
    }

    &__item-title {
      margin: 0 0 0.375rem;
      font-family: $font-roboto;
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.25;
    }

    &__item-description {
      margin: 0;
      color: $color-white-85;
      font-family: $font-roboto;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
    }

    &__item-line {
      display: block;
      white-space: nowrap;
    }
  }

  @media (max-width: 900px) {
    .contact {
      &__card {
        height: auto;
      }

      &__items {
        gap: 1.5rem;
      }

      &__item {
        align-items: flex-start;
        flex-direction: column;
      }
    }
  }

  @media (max-width: 768px) {
    .contact {
      &__title {
        font-size: clamp(3rem, 14vw, 4rem);
        letter-spacing: -0.0625rem;
      }

      &__divider {
        width: min(100%, 19rem);
        margin-top: 1.5rem;
      }

      &__divider-line {
        flex: 1;
        width: auto;
      }

      &__card {
        width: min(100%, 31.5rem);
        margin-top: 2.5rem;
        padding: 2rem 1.5rem;
        border-radius: 1.5rem;
        background-position: 60% center;
      }

      &__card-description {
        br {
          display: none;
        }
      }

      &__items {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 2.5rem;
      }

      &__item {
        align-items: center;
        flex-direction: row;
      }

      &__item-description {
        font-size: 0.875rem;
      }
    }
  }
</style>
