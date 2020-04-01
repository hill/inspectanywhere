<template lang="pug">
  section.section.portfolio
    .container
      .has-text-centered
        h1.title.is-1.has-text-primary.landing-title Our Portfolio
      .columns.is-multiline
        .column.is-4
          ScanCard(
            address='1 Phillip St, Burradoo' 
            agency='Duncan Hill Property' 
            img='/scans/1Phillip.png' 
            scanUrl='https://my.matterport.com/show/?m=wMR31rrXZDS&brand=0'
          )
        //- .column.is-4 // BAD SCAN
          ScanCard(
            address='88 Bendooley St, Bowral' 
            agency='Duncan Hill Property' 
            img='/scans/88Bendooley.png' 
            scanUrl='https://my.matterport.com/show/?m=BQaA3bJGZWe&brand=0'
          )
        .column.is-4
          ScanCard(
            address='32 Kingsbury Cct, Bowral' 
            agency='Duncan Hill Property' 
            img='/scans/32Kingsbury.png' 
            scanUrl='https://my.matterport.com/show/?m=AoQs3W5xoEY&brand=0'
          )
        .column.is-4
          ScanCard(
            address='184 Old South Road, Alpine' 
            agency='Duncan Hill Property' 
            img='/scans/184Old.png' 
            scanUrl='https://my.matterport.com/show/?m=6unczcWtcxo&brand=0'
          )
</template>

<script>
import Button from "~/components/Button";
import ScanCard from "~/components/ScanCard";

export default {
  components: { Button, ScanCard }
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
  background-position: 500px 0;
}
</style>
