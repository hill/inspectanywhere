<template lang='pug'>
div
  .landing-bg-img.is-hidden-mobile
    img(src='/bgImg.png')
  .container
    section.section.is-normal.columns
      .column.is-half.is-8-tablet.is-12-mobile
        h1.title.is-1.has-text-primary.landing-title Let buyers inspect your properties anywhere, anytime.
        p.has-text-black We offer 3d scanning services for the Sydney and adjacent regions, allowing you to let potential buyers into your properties, whenever (or wherever) they want!
        .cta.buttons
          Button(styles='outline' size='medium') See our scans
          Button(styles='primary' size='medium') Book a scan
    .columns.is-centered
      .column.is-10
        article.message.is-danger
          .message-header
            p COVID-19 Assistance
          .message-body
            p To assist real estate agencies in the Sydney region continue to operate under COVID-19 conditions, we are offering a pricing reduction from $600 to <strong> $295 per scan</strong>. Please contact us for more info.
    
    section.section.is-normal
      .has-text-centered
        h1.title.is-2 Some of our scans
      br
      .columns
        .column.is-4
          ScanCard(
            address='36 Oxley Drive, Bowral' 
            agency='Duncan Hill Property' 
            img='/scans/scan1.png' 
            scanUrl='https://my.matterport.com/show/?m=5ogPbKSzMoi&brand=0'
          )
        .column.is-4
          ScanCard(
            address='42 Universe St, Mars' 
            agency='Duncan Hill Property' 
            img='/scans/scan1.png' 
            scanUrl='https://my.matterport.com/show/?m=5ogPbKSzMoi&brand=0'
          )
        .column.is-4
          ScanCard(
            address='206 Devonshire St, Surry Hills' 
            agency='Duncan Hill Property' 
            img='/scans/scan1.png' 
            scanUrl='https://my.matterport.com/show/?m=5ogPbKSzMoi&brand=0'
          )
      .btn-ctn
        Button(styles='outline' size='medium' href='/portfolio') See our portfolio
  section.section.why-go-3d
    .container
      .has-text-centered
        h1.title.is-2.why-title Why go 3d?
      .columns
        .column.is-6.bignum-ctn
          BigNum Unlock.
          p <strong>Unlock anytime</strong> &mdash; let potential buyers view properties on their own schedule and provide a more flexible viewing experience
        .column.is-6.is-hidden-mobile
      .columns
        .column.is-6.is-hidden-mobile
        .column.is-6.bignum-ctn
          BigNum Inspect.
          p <strong>Inspect from anywhere</strong> &mdash; don't limit your customer base to a 10km radius - anyone with an internet connection can view your properties. Reduce the 1/2 hour commute (or perhaps 5 hour flight) to a 10 second load time!
      .columns
        .column.is-6.bignum-ctn
          BigNum Embed.
          p <strong>Embed your properties everywhere</strong> &mdash; Seamlessly share whitebranded scans on your website, social media and listing sites such as realestate.com.au or domain.com.au.
        .column.is-6.is-hidden-mobile
      .columns.is-centered
        .column.is-6
          PullOut Give your clients a more flexible real estate experience.
      .btn-ctn.cta
        Button(styles='outline' size='medium' href='/book') Book a scan with us
  footer.has-text-centered
    p &copy; 2020 InspectAnywhere
</template>

<script>
import Button from "~/components/Button";
import ScanCard from "~/components/ScanCard";
import PullOut from "~/components/PullOut";
import BigNum from "~/components/BigNum";

export default {
  components: { Button, ScanCard, PullOut, BigNum }
};
</script>

<style lang='scss' scoped>
@import "~/assets/theme.scss";

.landing-title {
  text-shadow: 3px 3px 0px $light-blue;
  font-size: 50px;
}

.landing-bg-img {
  position: absolute;
  right: 0;
  top: $navbar-height;
  width: 60vw;
  img {
    float: right;
    opacity: 0.6;
  }
}

.cta {
  margin: 20px 0;
}

.btn-ctn {
  text-align: center;
}

.why-go-3d {
  position: relative;
  min-height: 1000px;
  background-image: url("/bg_pattern.png");
  background-repeat: no-repeat;
  background-position: -300px 0;
}

.why-title {
  margin: 0 0 20px 0;
}

.bignum-ctn {
  p,
  h3 {
    display: inline-block;
  }
}

footer {
  color: #222;
  padding: 20px;
}
</style>
