<template lang="pug">
  a(:href='href')
    button.button(:class="appliedStyles")
      slot
</template>

<script>
export default {
  props: ['href', 'styles', 'size'],
  data() {
    return {
      appliedStyles: {
        "is-primary": this.styles == 'primary',
        "is-info": this.styles == 'info',
        "is-outline": this.styles == 'outline',
        "is-small": this.size == 'small',
        "is-normal": this.size == 'normal',
        "is-medium": this.size == 'medium',
        "is-large": this.size == 'large'
      } 
    }
  }
}
</script>

<style lang="scss" scoped>

  @import '~/assets/theme.scss';

  button {
    margin-right: 12px;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.11);
    border-radius: 8px;
    transition: all 0.2s;
    font-weight: 800;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 9px 0 rgba(0,0,0,0.33);
    }
  }

  .is-outline {
    color: $primary;
    background: $white;
    border: 2px solid $primary;

    &:hover {
      background: $primary;
      color: white;
      border: 2px solid $primary;
    }
  }
</style>