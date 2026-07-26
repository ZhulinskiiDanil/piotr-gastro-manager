<template>
  <section id="about" class="about-heading" aria-labelledby="about-heading-title">
    <h2 id="about-heading-title" class="about-heading__title">O mnie</h2>
  </section>
</template>

<style scoped lang="scss">
  .about-heading {
    display: grid;
    width: 100%;
    height: 240px;
    place-items: center;
    background: $color-background url('/images/about/about-heading-background.webp') center / cover
      no-repeat;

    &__title {
      margin: 0;
      color: $color-brown-dark;
      font-family: $font-frutiger;
      font-size: 80px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -1.6px;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    .about-heading {
      height: 160px;

      &__title {
        font-size: clamp(52px, 15vw, 64px);
        letter-spacing: -1px;
      }
    }
  }
</style>
