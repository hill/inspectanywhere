<template>
  <div>
    <Nav />
    <div class="buffer"></div>
    <nuxt />
  </div>
</template>

<script>
import Nav from '~/components/Nav'

export default {
  components: {Nav}
}

</script>

<style lang='scss'>
@import '~/assets/main.scss';

.buffer {
  height: $navbar-height + 1rem;
}
</style>
