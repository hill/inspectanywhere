<template lang="pug">
  section.section.portfolio
    .container
      .has-text-centered
        h1.title.is-1.has-text-primary.landing-title Pricing
      .columns.is-centered
        .column.is-10
          Alert
            template(v-slot:header) COVID Assistance
            template(v-slot:message) To assist real estate agencies in the Sydney region continue to operate under COVID-19 conditions, we are offering a pricing reduction from $600 to <strong> $295 per scan</strong>. Please contact us for more info.
      .columns.is-centered
        .column.is-6.has-text-centered
          BigNum $295 / scan
          .box
            .feature-box
              p <strong> Included: </strong>
              ul
                li - 1x Matterport scan
                li - 6 months free hosting of the scan
                li - Scan "flyby" video files
                li - HD photo assets
                li - Floor plan measurements
                li - Support embeding / integrating into your site or social media
            .cta-btn
              Button(styles='primary' size='large' href='/book') Book Now
</template>

<script>
import Button from "~/components/Button";
import Alert from "~/components/Alert";
import BigNum from "~/components/BigNum";

export default {
  components: { Button, Alert, BigNum }
};
</script>

<style lang="scss" scoped>
@import "~/assets/theme.scss";

.landing-title {
  text-shadow: 3px 3px 0px $light-blue;
  font-size: 50px;
  margin-bottom: 70px;
}

.portfolio {
  position: relative;
  min-height: 1000px;
  background-image: url("/bg_pattern.png");
  background-repeat: no-repeat;
  background-position: 700px 0;
}

.feature-box {
  text-align: left;
}

.cta-btn {
  margin: 20px 0;
}
</style>
