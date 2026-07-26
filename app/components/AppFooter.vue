<script setup lang="ts">
  import { AtSign, MapPin, Phone } from 'lucide-vue-next';
</script>

<template>
  <footer class="footer">
    <a class="footer__brand" href="#" aria-label="GASTROManager — strona główna">
      <span class="footer__brand-accent">GASTRO</span>Manager
    </a>

    <div class="footer__contacts">
      <div class="footer__contact">
        <MapPin class="footer__icon" :stroke-width="2" />

        <span>
          Piotrkowska Centrum<br />
          123A, 00-000 Łódź
        </span>
      </div>

      <a class="footer__contact" href="tel:+48730242142">
        <Phone class="footer__icon" :stroke-width="2" />
        <span>+48 730 242 142</span>
      </a>

      <a class="footer__contact" href="mailto:zmywak@gmail.pl">
        <AtSign class="footer__icon" :stroke-width="2" />
        <span>gastromanager91@gmail.com</span>
      </a>
    </div>

    <p class="footer__copyright">© 2026 GASTROManager</p>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    display: grid;
    width: 100%;
    height: 6.25rem; // 100px
    align-items: center;
    grid-template-columns: 1fr auto 1fr;
    padding-inline: 2.625rem; // 42px
    color: $color-white;
    background: #14110e;
    font-family: $font-roboto;

    &__brand {
      width: fit-content;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1;
      white-space: nowrap;
      transition: opacity $transition-fast;

      &:hover {
        opacity: 0.8;
      }
    }

    &__brand-accent {
      color: $color-orange-light;
    }

    &__contacts {
      display: flex;
      align-items: center;
      gap: 4rem;
    }

    &__contact {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: $color-white;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.25;
      white-space: nowrap;
      transition: color $transition-fast;

      &[href]:hover {
        color: $color-orange-light;
      }
    }

    &__icon {
      width: 1.5rem;
      height: 1.5rem;
      flex: 0 0 1.5rem;
      color: $color-orange-light;
    }

    &__copyright {
      justify-self: end;
      margin: 0;
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 1;
      white-space: nowrap;
    }
  }

  @media (max-width: 1100px) {
    .footer {
      padding-inline: 2rem;

      &__contacts {
        gap: 2rem;
      }
    }
  }

  @media (max-width: 900px) {
    .footer {
      height: auto;
      grid-template-columns: 1fr;
      justify-items: center;
      gap: 2rem;
      padding: 3rem 1.5rem;

      &__brand,
      &__copyright {
        justify-self: center;
      }

      &__contacts {
        align-items: center;
        flex-direction: column;
        gap: 1.5rem;
      }

      &__contact {
        justify-content: center;
        text-align: center;
      }
    }
  }
</style>
