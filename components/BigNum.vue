<template lang="pug">
  h3.bignum
    slot
</template>

<style lang="scss" scoped>
@import "~/assets/theme.scss";

.bignum {
  font-size: 5rem;
  text-shadow: 3px 3px 0px $light-blue;
  color: $primary;
  display: inline;
}
</style>
