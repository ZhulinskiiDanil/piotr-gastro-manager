<template>
  <section class="about-content">
    <div class="about-content__container">
      <div class="about-content__text">
        <h3 class="about-content__title">
          Pomagam restauracjom rozwijać<br />
          się skuteczniej
        </h3>

        <p class="about-content__description">
          Od ponad <strong>20 lat</strong> wspieram właścicieli restauracji w<br />
          optymalizacji procesów, rekrutacji pracowników i<br />
          zwiększaniu rentowności lokali
        </p>
      </div>

      <div class="about-content__visual" aria-hidden="true">
        <div class="about-content__circle" />

        <NuxtImg
          class="about-content__person"
          src="/images/about/person.webp"
          alt=""
          width="400"
          height="565"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .about-content {
    height: 450px;
    overflow: hidden;
    background: linear-gradient(
      100deg,
      $color-background 0%,
      $color-peach-light 45%,
      $color-lilac 73%,
      $color-background 100%
    );

    &__container {
      position: relative;
      width: min(100% - 40px, 1080px);
      height: 100%;
      margin-inline: auto;
    }

    &__text {
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }

    &__title {
      margin: 0;
      color: $color-brown-darkest;
      font-family: $font-roboto;
      font-size: 40px;
      font-weight: 700;
      line-height: 1.15;
    }

    &__description {
      margin-top: 12px;
      color: $color-brown-darkest;
      font-family: $font-roboto;
      font-size: 20px;
      font-weight: 400;
      line-height: 1.15;

      strong {
        color: $color-orange;
        font-weight: 700;
      }
    }

    &__visual {
      position: absolute;
      top: 0;
      right: -162px;
      width: 496px;
      height: 100%;
    }

    &__circle {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 496px;
      height: 526px;
      border-radius: 50%;
      background: $color-primary;
      transform: translate(-50%, -7%);
    }

    &__person {
      position: absolute;
      z-index: 1;
      top: 60%;
      left: 50%;
      width: 400px;
      height: 565px;
      object-fit: contain;
      transform: translate(-50%, -50%);
    }
  }

  @media (max-width: 1100px) {
    .about-content {
      &__container {
        width: min(100% - 64px, 900px);
      }

      &__visual {
        right: -100px;
      }

      &__text {
        max-width: 500px;
      }
    }
  }

  @media (max-width: 768px) {
    .about-content {
      height: auto;
      min-height: 700px;

      &__container {
        display: flex;
        width: min(100% - 32px, 500px);
        align-items: center;
        flex-direction: column;
        padding-top: 64px;
      }

      &__text {
        position: relative;
        top: auto;
        left: auto;
        width: 100%;
        text-align: center;
        transform: none;
      }

      &__title {
        font-size: clamp(32px, 9vw, 40px);

        br {
          display: none;
        }
      }

      &__description {
        max-width: 440px;
        margin: 16px auto 0;
        font-size: 18px;
        line-height: 1.3;

        br {
          display: none;
        }
      }

      &__visual {
        position: relative;
        right: auto;
        bottom: auto;
        width: 100%;
        height: 390px;
        margin-top: 32px;
      }

      &__circle {
        top: 55%;
        width: 360px;
        height: 380px;
      }

      &__person {
        top: 55%;
        width: 300px;
        height: auto;
      }
    }
  }
</style>
