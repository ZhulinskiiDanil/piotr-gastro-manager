<template>
  <section class="about-content">
    <div class="about-content__lead">
      <div class="about-content__container">
        <div class="about-content__intro">
          <p>
            Od ponad
            <strong>9 lat</strong>
            rozwijam swoją karierę w gastronomii – od stanowiska kierowcy, kasjera, przez managera
            restauracji, aż po funkcję General Managera. Nadzorowałem pracę 4 restauracji oraz 2
            lokali franczyzowych. Obecnie zarządzam dwoma restauracjami, cateringiem oraz siecią
            automatów vendingowych, stale zdobywając nowe doświadczenia i rozwijając swoje
            kompetencje.
          </p>
        </div>

        <div class="about-content__visual" aria-hidden="true">
          <div class="about-content__circle" />

          <NuxtImg
            class="about-content__person"
            src="/images/about/person.webp"
            alt=""
            width="400"
            height="566"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div class="about-content__body">
      <p>
        Zdobyte przez lata doświadczenie pokazało mi, że skuteczne zarządzanie opiera się przede
        wszystkim na jasno określonych zasadach, odpowiedzialności i współpracy całego zespołu.
        Takie podejście towarzyszy mi od wielu lat – również poza gastronomią. Przez 12 lat
        trenowałem piłkę nożną, dlatego budowanie zespołu wzoruję na dobrze funkcjonującej drużynie
        sportowej. Wierzę, że każdy członek zespołu ma swoją rolę, a wspólny cel, wzajemny szacunek
        i zaangażowanie są fundamentem osiągania najlepszych wyników.
      </p>

      <p>
        Moim celem jest wspólne zmierzenie się z wyzwaniami, przed którymi stoi Twoja restauracja.
        Niezależnie od tego, czy potrzebujesz wsparcia dla swojego zespołu, usprawnienia procesów,
        optymalizacji kosztów czy po prostu świeżego spojrzenia na funkcjonowanie lokalu – chętnie
        podzielę się swoim doświadczeniem i pomogę znaleźć najlepsze rozwiązania.
      </p>

      <p>
        Zapraszam do współpracy. Zbudujmy razem miejsce, w którym silny zespół, wysokie standardy i
        jakość pracy przełożą się na zadowolenie gości oraz sukces Twojej restauracji.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .about-content {
    color: $color-brown-darkest;
    font-family: $font-roboto;
    padding-bottom: 4rem;
    background: $color-background;

    &__lead {
      background: linear-gradient(
        100deg,
        $color-background 0%,
        $color-peach-light 45%,
        $color-lilac 73%,
        $color-background 100%
      );

      height: 28.125rem; // 450px
      overflow: hidden;
    }

    &__container {
      position: relative;
      width: min(calc(100% - 4rem), 67.5rem);
      height: 100%;
      margin-inline: auto;
    }

    &__intro {
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 0;
      width: 35rem;
      transform: translateY(-50%);

      p {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.5;
      }

      strong {
        color: $color-orange;
        font-weight: 700;
      }
    }

    &__visual {
      position: absolute;
      top: 0;
      right: -10.125rem;
      width: 31rem;
      height: 100%;
    }

    &__circle {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 31rem; // 496px
      height: 32.875rem; // 526px
      border-radius: 50%;
      background: $color-primary;
      transform: translate(-50%, -7%);
    }

    &__person {
      position: absolute;
      z-index: 1;
      top: 50%;
      left: 50%;
      width: 25rem; // 400px
      height: 35.375rem; // 566px
      object-fit: contain;
      transform: translate(-55%, -38%);
    }

    &__body {
      width: min(calc(100% - 4rem), 67.5rem);
      margin: 4rem auto 0;
      padding: 2.5rem;
      border: 0.125rem solid $color-white-50;
      border-radius: 2rem;
      background: rgb(255 255 255 / 50%);
      box-shadow: 0 0.75rem 2rem rgb(26 11 0 / 15%);
      backdrop-filter: blur(0.75rem);

      p {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.5;

        & + p {
          margin-top: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 1100px) {
    .about-content {
      &__container,
      &__body {
        width: min(calc(100% - 4rem), 56.25rem);
      }

      &__intro {
        width: 31.5rem;
      }

      &__visual {
        right: -6.25rem;
      }
    }
  }

  @media (max-width: 768px) {
    .about-content {
      &__lead {
        height: auto;
        min-height: 40rem;
      }

      &__container {
        display: flex;
        width: min(calc(100% - 2rem), 31.5rem);
        align-items: center;
        flex-direction: column;
        padding-top: 4rem;
      }

      &__intro {
        position: relative;
        top: auto;
        left: auto;
        width: 100%;
        text-align: left;
        transform: none;

        p {
          font-size: 1.125rem;
          line-height: 1.5;
        }
      }

      &__visual {
        position: relative;
        top: auto;
        right: auto;
        width: 100%;
        height: 28rem;
        margin-top: 2rem;
      }

      &__circle {
        // top: 50%;
        width: 22.5rem;
        height: 23.75rem;
      }

      &__person {
        // top: 50%;
        width: 18.75rem;
        height: auto;
      }

      &__body {
        width: min(calc(100% - 2rem), 31.5rem);
        margin-bottom: 4rem;
        padding: 1.5rem;
        border-radius: 1.5rem;

        p {
          font-size: 1.125rem;
          line-height: 1.5;

          & + p {
            margin-top: 1.5rem;
          }
        }
      }
    }
  }
</style>
