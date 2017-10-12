// dhruvinity
// this page is the first of the application; Entry point to the FYLE SPA;
//CSS framework used is materialize
//JS framework used Vuejs
//hope you like it !!
<template>
  <div class="login">
       <div class="container  ">
           <div class="inner-container">
              <div class="col s6 offset-s3 card-panel blue lighten-4">
                <div class="chip right-move animated bounceInRight" @click="goback">
                    GO BACK
                </div>
                <p>
                  INFORMATION
                </p>
                <div class="row">
                    <p class="col s3">IFSC</p>
                    <p class="col s9">
                      {{ifsc}}
                    </p>
                    <p class="col s3">BANK ID</p>
                    <p class="col s9">
                      {{bank_id}}
                    </p>
                    <p class="col s3">BANK NAME</p>
                    <p class="col s9">
                      {{bank_name}}
                    </p>
                    <p class="col s3">ADDRESS</p>
                    <p class="col s9">
                        {{address}}
                    </p>
                    <p class="col s3">CITY</p>
                    <p class="col s9">
                      {{city}}
                    </p>
                    <p class="col s3">DISTRICT</p>
                    <p class="col s9">
                        {{district}}
                    </p>
                    <p class="col s3">STATE</p>
                    <p class="col s9">
                        {{state}}
                    </p>

                </div>

              </div>
           </div>
      </div>

  </div>

</template>
<script>
export default {

  data () {
    return {

    }
  },
  methods: {
    goback() {
      this.$router.push({name:'mainpage'});
    }
  },
  computed:{
    ifsc(){
      return this.$store.state.individual.ifsc;
    },
    bank_name(){
        return this.$store.state.individual.bank_name;
    },
    bank_id(){
      return this.$store.state.individual.bank_id;
    },
    address(){
      return this.$store.state.individual.address;
    },
    city(){
      return this.$store.state.individual.city;
    },
    district(){
      return this.$store.state.individual.district;
    },
    state(){
      return this.$store.state.individual.state;
    }
  }
}
</script>
<style>

</style>
