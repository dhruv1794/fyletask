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
                    <div class="twitter-login">
                        <a class="waves-effect waves-light btn blue login-button animated bounce" @click="gotomainPage">PLEASE ENTER</a>
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
  methods:{
      gotomainPage(){
          this.$router.push({name:'mainpage'})
      }
  }
}
</script>
<style>

</style>
