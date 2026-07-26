<script setup lang="ts">
  import { Menu, X } from 'lucide-vue-next';

  const isMenuOpen = ref(false);

  const navigation = [
    {
      label: 'Strona główna',
      href: '#home',
    },
    {
      label: 'O mnie',
      href: '#about',
    },
    {
      label: 'Doświadczenie',
      href: '#experience',
    },
    {
      label: 'Kontakt',
      href: '#contact',
    },
  ];

  function closeMenu() {
    isMenuOpen.value = false;
  }
</script>

<template>
  <header class="header">
    <div class="header__container">
      <a
        class="header__brand"
        href="#home"
        aria-label="GASTROManager — strona główna"
        @click="closeMenu"
      >
        <span class="header__brand-accent">GASTRO</span>Manager
      </a>

      <nav
        class="header__nav"
        :class="{ 'header__nav--open': isMenuOpen }"
        aria-label="Główna nawigacja"
      >
        <a
          v-for="item in navigation"
          :key="item.href"
          class="header__link"
          :href="item.href"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
      </nav>

      <button
        class="header__menu-button"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="Otwórz menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <X v-if="isMenuOpen" class="header__menu-icon" aria-hidden="true" />

        <Menu v-else class="header__menu-icon" aria-hidden="true" />
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    left: 0;
    height: 4.5rem;
    border-bottom: 0.0625rem solid $color-white-15;
    color: $color-white;
    background: rgb(20 17 14 / 67%);
    backdrop-filter: blur(0.75rem);
    box-shadow: 0 0.25rem 1rem rgb(0 0 0 / 15%);

    &__container {
      display: flex;
      width: min(calc(100% - 4rem), 90rem);
      height: 100%;
      align-items: center;
      justify-content: space-between;
      margin-inline: auto;
    }

    &__brand {
      font-family: $font-roboto;
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

    &__nav {
      display: flex;
      height: 100%;
      align-items: center;
      gap: 2.5rem;
    }

    &__link {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      font-family: $font-roboto;
      font-size: 1rem;
      font-weight: 500;
      white-space: nowrap;
      transition: color $transition-fast;

      &::after {
        position: absolute;
        right: 0;
        bottom: 1rem;
        left: 0;
        height: 0.125rem;
        background: $color-orange-light;
        content: '';
        transform: scaleX(0);
        transform-origin: center;
        transition: transform $transition-fast;
      }

      &:hover,
      &:focus-visible {
        color: $color-orange-light;

        &::after {
          transform: scaleX(1);
        }
      }
    }

    &__menu-button {
      display: none;
      width: 2.75rem;
      height: 2.75rem;
      align-items: center;
      justify-content: center;
      padding: 0;
      border: 0;
      color: $color-white;
      background: transparent;
      cursor: pointer;
    }

    &__menu-icon {
      width: 1.75rem;
      height: 1.75rem;
    }
  }

  @media (max-width: 768px) {
    .header {
      &__container {
        width: calc(100% - 2rem);
      }

      &__menu-button {
        display: flex;
      }

      &__nav {
        position: absolute;
        top: 4.5rem;
        right: 0;
        left: 0;
        display: flex;
        height: auto;
        align-items: stretch;
        flex-direction: column;
        gap: 0;
        padding: 0.75rem 1rem 1rem;
        border-top: 0.0625rem solid $color-white-15;
        background: rgb(20 17 14 / 95%);
        box-shadow: 0 0.75rem 1.5rem rgb(0 0 0 / 30%);
        opacity: 0;
        pointer-events: none;
        transform: translateY(-0.5rem);
        transition:
          opacity $transition-fast,
          transform $transition-fast;
        visibility: hidden;

        &--open {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
          visibility: visible;
        }
      }

      &__link {
        height: 3.5rem;
        justify-content: center;
        border-bottom: 0.0625rem solid $color-white-15;

        &:last-child {
          border-bottom: 0;
        }

        &::after {
          display: none;
        }
      }
    }
  }
</style>
