<template lang="pug">
  section.section.book
    .container
      .has-text-centered
        h1.title.is-1.has-text-primary.landing-title Book a scan
      .columns.is-centered
        .column.is-8
          form.form.box
            .field
              label.label Agency
              .control.has-icons-left
                input.input(type='text' v-model='agency') 
                span.icon.is-small.is-left
                  i.fas.fa-sign
            .field
              label.label Email
              .control.has-icons-left
                input.input(type='email' v-model='email') 
                span.icon.is-small.is-left
                  i.fas.fa-envelope
            .field
              label.label Property Address
              .control.has-icons-left
                input.input(type='text' v-model='address')
                span.icon.is-small.is-left
                  i.fas.fa-map-marker-alt
            .field
              label.label Preferred Scan Date
              .control
                input.input(type='date' v-model='scanDate')
            .field
              label.label Other notes
              .control
                textarea.textarea(v-model='notes')
            .field
              .control
                Button(styles='primary' v-on:click='sendBooking') Book Scan


        
</template>

<script>
import Button from "~/components/Button";
import ScanCard from "~/components/ScanCard";

export default {
  components: { Button, ScanCard },
  data() {
    return {
      agency: "",
      email: "",
      address: "",
      scanDate: "",
      notes: ""
    };
  },
  methods: {
    sendBooking() {
      console.log("Sending Booking to /api/book");
      fetch("/api/book", {
        method: "POST",
        body: JSON.stringify({
          agency: this.agency,
          email: this.email,
          address: this.address,
          scanDate: this.scanDate,
          notes: this.notes
        })
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/theme.scss";

.landing-title {
  text-shadow: 3px 3px 0px $light-blue;
  font-size: 50px;
  margin-bottom: 70px;
}

.book {
  position: relative;
  min-height: 1000px;
  background-image: url("/bg_pattern.png");
  background-repeat: no-repeat;
  background-position: -500px 0;
}

.label {
  font-family: $family-secondary;
}

.box {
  border: 2px solid $primary;
  border-radius: 8px;
}
</style>