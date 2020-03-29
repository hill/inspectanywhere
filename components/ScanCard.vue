<template lang="pug">
  .card
    ScanModal(:scanUrl='scanUrl' :active='isActive' v-on:deactivate='isActive = false')
    .card-image(:style="bgImage")
    .overlay
    .play-ctn
      .play-icon(v-on:click='isActive = !isActive')
        span.icon.is-large
          i.fas.fa-lg.fa-play
    .card-content
      p.address {{address}}
      p.agency(v-if='agency') For: {{agency}}
</template>

<script>
import ScanModal from "~/components/ScanModal";

export default {
  props: ["address", "agency", "img", "scanUrl"],
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    bgImage() {
      return `background-image: url('${this.img}');`;
    }
  },
  components: { ScanModal }
};
</script>

<style lang="scss" scoped>
@import "~/assets/theme.scss";

.card {
  overflow: hidden;
  border: 2px solid $primary;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.26);

  // Make all cards equal height in columns
  display: flex;
  flex-direction: column;
  height: 100%;

  transition: all 0.2s;
  &:hover {
    // transform: translateY(-4px);
    box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.44);
  }
}

$img-height: 200px;

.card-image {
  background-size: cover;
  background-position: center center;
  filter: grayscale(100%);
  height: $img-height;
}

.overlay {
  height: $img-height;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba($light-blue, 0.6);
  z-index: 1;
}

.address {
  font-weight: 800;
}

.agency {
  font-size: 12px;
}

.play-ctn {
  z-index: 50;
  height: 0px;
}

.play-icon {
  width: 48px;
  float: right;
  margin: 0 10%;
  transform: translateY(-28px);
  border: 2px solid $primary;
  border-radius: 32px;
  background: white;
  z-index: 100;
  .icon {
    color: $primary;
  }

  transition: all 0.2s;
  &:hover {
    transform: translateY(-32px);
    background-color: $primary;
    cursor: pointer;
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.26);

    .icon {
      color: white;
    }
  }
}
</style>
