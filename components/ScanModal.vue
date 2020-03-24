<template lang="pug">
  .modal(:class='{"is-active": active}')
    .modal-background(v-on:click='$emit("deactivate")')
    .modal-content
      <iframe width='853' height='480' :src='scanUrl' frameborder='0' allowfullscreen allow='vr'></iframe>
    button.modal-close.is-large(v-on:click='$emit("deactivate")')
</template>

<script>
export default {
  props: ['active', 'scanUrl']
}
</script>

<style lang="scss" scoped>
.modal {
  z-index: 10000;
}
</style>