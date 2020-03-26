<template lang="pug">

.pullout
  h3.title.is-3
    slot

</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/theme.scss";

.pullout {
  padding: 5%;
  background-color: $primary;
  box-shadow: 15px 15px 0px $light-blue;
  text-align: center;
}

.title {
  color: white;
}
</style>