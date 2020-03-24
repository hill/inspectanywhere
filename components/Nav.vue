<template lang="pug">
  nav.navbar.is-fixed-top.is-transparent
    .container
      .navbar-brand
        a.navbar-item(href='/')
          img(src='/logo.svg')
          h1.title.logo-title InspectAnywhere
        a.navbar-burger(role='button')
          span
          span
          span
      .navbar-menu(:class='{"is-active": false}')
        .navbar-end
          a.navbar-item(href='/portfolio') Portfolio
          a.navbar-item(href='/pricing') Pricing
          .navbar-item
            .buttons
              Button(styles='outline' size='normal' href='/book') Book a scan
      
</template>

<script>
import Button from '~/components/Button';

export default {
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>

  @import '~/assets/main.scss';

  nav {
    box-shadow: 0 4px 13px 2px rgba(0,0,0,0.06);
  }

  .navbar {
    z-index: 1000 !important;
  }

  .navbar-end {
    a {
      font-family: $family-secondary;
      font-size: 14px;
    }
  }

  .logo-title {
    margin-left: 15px;
  }

</style>