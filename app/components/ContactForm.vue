<script setup lang="ts">
  import { AtSign, Phone } from 'lucide-vue-next';

  interface ContactForm {
    name: string;
    email: string;
    restaurant: string;
    subject: string;
    message: string;
    website: string;
  }

  const initialForm: ContactForm = {
    name: '',
    email: '',
    restaurant: '',
    subject: '',
    message: '',
    website: '',
  };

  const form = reactive<ContactForm>({ ...initialForm });

  const isSubmitting = ref(false);
  const status = ref<'idle' | 'success' | 'error'>('idle');

  async function submitForm() {
    if (isSubmitting.value) return;

    status.value = 'idle';
    isSubmitting.value = true;

    try {
      await $fetch('/api/contact', {
        method: 'POST',
        body: { ...form },
      });

      Object.assign(form, initialForm);
      status.value = 'success';
    } catch (error) {
      console.error('Contact form error:', error);
      status.value = 'error';
    } finally {
      isSubmitting.value = false;
    }
  }
</script>

<template>
  <section class="contact-form" aria-labelledby="contact-form-title">
    <div class="contact-form__container">
      <div class="contact-form__intro">
        <h2 id="contact-form-title" class="contact-form__title">Masz lokal gastronomiczny?</h2>

        <p class="contact-form__description">
          Masz restaurację, kawiarnię, pizzerię lub inny lokal gastronomiczny i zastanawiasz się,
          jak zwiększyć sprzedaż, usprawnić pracę zespołu lub poprawić organizację?
        </p>

        <p class="contact-form__description">
          Opisz swoją sytuację, a wspólnie znajdziemy najlepsze rozwiązanie. Niezależnie od tego,
          czy planujesz otwarcie nowego lokalu, potrzebujesz wsparcia w zarządzaniu, czy chcesz
          poprawić wyniki swojej restauracji – chętnie pomogę.
        </p>

        <div class="contact-form__contacts">
          <a class="contact-form__contact" href="tel:+48730242142">
            <Phone aria-hidden="true" :stroke-width="1.75" />
            <span>+48 730 242 142</span>
          </a>

          <a class="contact-form__contact" href="mailto:gastromanager91@gmail.com">
            <AtSign aria-hidden="true" :stroke-width="1.75" />
            <span>gastromanager91@gmail.com</span>
          </a>
        </div>
      </div>

      <form class="contact-form__form" @submit.prevent="submitForm">
        <div class="contact-form__row">
          <label class="contact-form__field">
            <span>Imię i nazwisko</span>

            <input
              v-model.trim="form.name"
              type="text"
              name="name"
              autocomplete="name"
              placeholder="Jan Kowalski"
              required
            />
          </label>

          <label class="contact-form__field">
            <span>Adres e-mail</span>

            <input
              v-model.trim="form.email"
              type="email"
              name="email"
              autocomplete="email"
              placeholder="jan@restauracja.pl"
              required
            />
          </label>
        </div>

        <div class="contact-form__row">
          <label class="contact-form__field">
            <span>Nazwa restauracji</span>

            <input
              v-model.trim="form.restaurant"
              type="text"
              name="restaurant"
              autocomplete="organization"
              placeholder="Nazwa lokalu"
            />
          </label>

          <label class="contact-form__field">
            <span>Temat współpracy</span>

            <select v-model="form.subject" name="subject" required>
              <option value="" disabled>Wybierz temat</option>

              <option value="Otwarcie nowego lokalu">Otwarcie nowego lokalu</option>

              <option value="Zarządzanie restauracją">Zarządzanie restauracją</option>

              <option value="Optymalizacja kosztów">Optymalizacja kosztów</option>

              <option value="Organizacja pracy zespołu">Organizacja pracy zespołu</option>

              <option value="Zwiększenie sprzedaży">Zwiększenie sprzedaży</option>

              <option value="Marketing restauracji">Marketing restauracji</option>

              <option value="Inny temat">Inny temat</option>
            </select>
          </label>
        </div>

        <label class="contact-form__field">
          <span>Opisz swoją sytuację</span>

          <textarea
            v-model.trim="form.message"
            name="message"
            rows="7"
            minlength="10"
            placeholder="Napisz, z jakimi wyzwaniami mierzy się Twój lokal i jakiego wsparcia potrzebujesz..."
            required
          />
        </label>

        <label class="contact-form__honeypot" aria-hidden="true">
          Website

          <input
            v-model="form.website"
            type="text"
            name="website"
            tabindex="-1"
            autocomplete="off"
          />
        </label>

        <button class="contact-form__button" type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Wysyłanie...' : 'Wyślij zgłoszenie' }}
          <span aria-hidden="true">→</span>
        </button>

        <p
          v-if="status === 'success'"
          class="contact-form__status contact-form__status--success"
          role="status"
          aria-live="polite"
        >
          Wiadomość została wysłana. Dziękuję za kontakt.
        </p>

        <p
          v-else-if="status === 'error'"
          class="contact-form__status contact-form__status--error"
          role="alert"
        >
          Nie udało się wysłać wiadomości. Spróbuj ponownie później lub skontaktuj się
          telefonicznie.
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .contact-form {
    padding: 0rem 2rem 3rem;
    color: $color-brown-darkest;
    background: $color-background;
    font-family: $font-roboto;

    &__container {
      display: grid;
      width: min(100%, 67.5rem);
      grid-template-columns: 24.5rem minmax(0, 1fr);
      gap: 3rem;
      margin-inline: auto;
      padding: 3rem;
      border: 0.125rem solid $color-white-50;
      border-radius: 2rem;
      background: $color-white;
      box-shadow: 0 0.75rem 2rem rgb(26 11 0 / 15%);
    }

    &__intro {
      align-self: start;
    }

    &__title {
      margin: 0;
      color: $color-brown-dark;
      font-family: $font-frutiger;
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.0625rem;
    }

    &__description {
      margin: 1.5rem 0 0;
      color: $color-gray;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.6;

      & + & {
        margin-top: 1rem;
      }
    }

    &__contacts {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 0.125rem solid $color-light-gray;
    }

    &__contact {
      display: flex;
      max-width: 100%;
      align-items: center;
      gap: 0.75rem;
      color: $color-brown-dark;
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.4;
      transition: color $transition-fast;

      svg {
        width: 1.5rem;
        height: 1.5rem;
        flex: 0 0 1.5rem;
        color: $color-orange;
      }

      span {
        overflow-wrap: anywhere;
      }

      &:hover {
        color: $color-orange;
      }

      &:focus-visible {
        border-radius: 0.25rem;
        outline: 0.125rem solid $color-orange;
        outline-offset: 0.25rem;
      }
    }

    &__form {
      display: flex;
      min-width: 0;
      flex-direction: column;
      gap: 1.5rem;
    }

    &__row {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }

    &__field {
      display: flex;
      min-width: 0;
      flex-direction: column;
      gap: 0.5rem;

      > span {
        color: $color-brown-dark;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1.25;
      }

      input,
      select,
      textarea {
        width: 100%;
        border: 0.125rem solid $color-light-gray;
        border-radius: 0.75rem;
        outline: none;
        color: $color-brown-darkest;
        background: $color-background;
        font: inherit;
        transition:
          border-color $transition-fast,
          box-shadow $transition-fast,
          background-color $transition-fast;

        &::placeholder {
          color: $color-gray;
          opacity: 0.8;
        }

        &:hover {
          border-color: $color-peach;
        }

        &:focus {
          border-color: $color-orange;
          background: $color-white;
          box-shadow: 0 0 0 0.25rem $color-orange-50;
        }
      }

      input,
      select {
        height: 3.25rem;
        padding-inline: 1rem;
      }

      select {
        cursor: pointer;
      }

      textarea {
        min-height: 11rem;
        padding: 1rem;
        line-height: 1.5;
        resize: vertical;
      }
    }

    &__button {
      display: inline-flex;
      min-height: 3.25rem;
      align-items: center;
      align-self: flex-start;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border: 0;
      color: $color-brown-warm;
      background: $color-primary;
      box-shadow: 0 0.375rem 1rem rgb(26 11 0 / 15%);
      font-family: $font-roboto;
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1;
      text-transform: uppercase;
      cursor: pointer;
      transition:
        background-color $transition-fast,
        box-shadow $transition-fast,
        transform $transition-fast;

      &:hover:not(:disabled) {
        background: $color-orange-light;
        box-shadow: 0 0.5rem 1.25rem rgb(26 11 0 / 20%);
        transform: translateY(-0.125rem);
      }

      &:focus-visible {
        outline: 0.125rem solid $color-orange;
        outline-offset: 0.25rem;
      }

      &:disabled {
        cursor: wait;
        opacity: 0.6;
        transform: none;
      }
    }

    &__honeypot {
      position: absolute;
      left: -9999px;
      width: 0.0625rem;
      height: 0.0625rem;
      overflow: hidden;
    }

    &__status {
      margin: 0;
      padding: 0.75rem 1rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.4;

      &--success {
        color: #287a3d;
        background: rgb(40 122 61 / 15%);
      }

      &--error {
        color: #a62626;
        background: rgb(166 38 38 / 15%);
      }
    }
  }

  @media (max-width: 1000px) {
    .contact-form {
      &__container {
        grid-template-columns: 21.5rem minmax(0, 1fr);
        gap: 2rem;
        padding: 2rem;
      }

      &__row {
        grid-template-columns: 1fr;
      }
    }
  }

  @media (max-width: 768px) {
    .contact-form {
      padding: 0rem 2rem 2rem;

      &__container {
        grid-template-columns: 1fr;
        gap: 3rem;
        padding: 1.5rem;
        border-radius: 1.5rem;
      }

      &__title {
        font-size: 2rem;
        letter-spacing: 0;
      }

      &__description {
        font-size: 1rem;
        line-height: 1.5;
      }

      &__contacts {
        margin-top: 1.5rem;
        padding-top: 1.5rem;
      }

      &__row {
        grid-template-columns: 1fr;
      }

      &__field {
        textarea {
          min-height: 12rem;
        }
      }

      &__button {
        width: 100%;
        align-self: stretch;
      }
    }
  }
</style>
