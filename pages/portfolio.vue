<template lang="pug">
  section.section.portfolio
    .container
      .has-text-centered
        h1.title.is-1.has-text-primary.landing-title Our Portfolio
      .columns.is-multiline
        .column.is-4
          ScanCard(
            address='36 Oxley Drive, Bowral' 
            agency='Duncan Hill Property' 
            img='/scans/scan1.png' 
            scanUrl='https://my.matterport.com/show/?m=5ogPbKSzMoi&brand=0'
          )
        .column.is-4
          ScanCard(
            address='36 Oxley Drive, Bowral' 
            agency='Duncan Hill Property' 
            img='/scans/scan1.png' 
            scanUrl='https://my.matterport.com/show/?m=5ogPbKSzMoi&brand=0'
          )
        .column.is-4
          ScanCard(
            address='36 Oxley Drive, Bowral' 
            agency='Duncan Hill Property' 
            img='/scans/scan1.png' 
            scanUrl='https://my.matterport.com/show/?m=5ogPbKSzMoi&brand=0'
          )
        .column.is-4
          ScanCard(
            address='36 Oxley Drive, Bowral' 
            agency='Duncan Hill Property' 
            img='/scans/scan1.png' 
            scanUrl='https://my.matterport.com/show/?m=5ogPbKSzMoi&brand=0'
          )
</template>

<script>
import Button from '~/components/Button'
import ScanCard from '~/components/ScanCard'

export default {
  components: {Button, ScanCard}
}
</script>

<style lang="scss" scoped>
@import '~/assets/theme.scss';

.landing-title {
  text-shadow: 3px 3px 0px $light-blue;
  font-size: 50px;
  margin-bottom: 70px;
}

.portfolio {
  position: relative;
  min-height: 1000px;
  background-image: url('/bg_pattern.png');
  background-repeat: no-repeat;
  background-position: 500px 0;
}
</style>