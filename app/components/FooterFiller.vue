<template>
  <div
    class="footer-filler"
    role="img"
    aria-label="Dekoracyjna kompozycja z ziołami i przyprawami"
  />
</template>

<style scoped lang="scss">
  .footer-filler {
    width: 100%;
    height: 24.125rem; // 386px
    background: $color-background url('/images/footer/footer-filler.webp') center top / cover
      no-repeat;
  }

  @media (max-width: 1028px) {
    .footer-filler {
      display: none;
    }
  }
</style>
