<template>
  <div>
    <Nav />
    <div class="buffer"></div>
    <nuxt />
    <footer class="has-text-centered">
      <p>&copy; 2020 InspectAnywhere</p>
    </footer>
  </div>
</template>

<script>
import Nav from "~/components/Nav";

export default {
  components: { Nav }
};
</script>

<style lang="scss">
@import "~/assets/main.scss";

.buffer {
  height: $navbar-height + 1rem;
}

footer {
  color: #222;
  padding: 20px;
}
</style>
