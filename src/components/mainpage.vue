// dhruvinity
// this page is the first of the application; Entry point to the FYLE SPA;
//CSS framework used is materialize
//JS framework used Vuejs
//hope you like it !!
<template>
  <div class="login">
       <div class="container">
         <div class="row">


           <div class="inner-container">
              <div class="col s12  card-panel blue lighten-4">

                  <p>
                    <div class="chip animated bounceInLeft">
                        BANK BRANCHES
                    </div>
                    <div class="chip right-move animated bounceInRight" @click="goback">
                        GO BACK
                    </div>
                  </p>

              <div class="clearfix">

              </div>

                <div class="input-field col s4">


              <multiselect
                  v-model='city'



                 placeholder="Select one"
                 :options="options"
                 @input="showcity"
                >
               </multiselect>

                </div>
                 <div class="input-field col s4">
                  <input id="bankname" type="text" v-model="bankname" @input="startfilter">
                  <label for="bankname">Enter Bank Name</label>
                </div>

                <table class="responsive-table">
       <thead>
         <tr>
             <th>IFSC</th>
             <th>BANK ID</th>
             <th>BANK NAME</th>
             <th>ADDRESS</th>
             <th>CITY</th>
             <th>DISTRICT</th>
             <th>STATE</th>

         </tr>
       </thead>

       <tbody>
         <tr v-for="(item,index) in filteredResult" @click="gotoindi(index)">
           <td>{{item.ifsc}}</td>
           <td>{{item.bank_id}}</td>
           <td>{{item.bank_name}}</td>
           <td>{{item.address}}</td>
           <td>{{item.city}}</td>
           <td>{{item.district}}</td>
           <td>{{item.state}}</td>

         </tr>

       </tbody>
     </table>

              </div>
           </div>
            </div>
      </div>

  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {

  data () {
    return {
      city:'',
      bankname:'',
      options:['BANGALORE','HYDERABAD','MUMBAI','PUNE','CHENNAI'],
      banks:[]

    }
  },
  methods: {
    goback() {
      this.$router.push({name:'login'})
    },
    gotoindi(index){
      this.$store.state.individual = this.banks[index];
      this.$router.push({name:'individual'})
    },
    startfilter(){

      console.log(this.bankname)
      if(this.bankname.length != 0){
        for(var a=0;a<this.banks.length;a++){
            this.banks[a].bank_name
        }
      }else{

      }

    },
    showcity(){
      console.log(this.city);
      var url1 = 'https://app.fyle.in/api/bank_branches?city=';
      var url2 = this.city;
      var url3='&offset=0&limit=50'
      var url = url1 + url2 + url3;
      console.log(url)
      this.$http.get(url)
      .then(response=>{
        return response.json();
      },error=>{
        return error.json();
      })
      .then(data=>{
        console.log(data);
        this.banks = data;
      })
    }
  },
  mounted(){
    //do something after mounting vue instance
    $(document).ready(function() {
   $('select').material_select();
 });



  },
  computed:{
    filteredResult()
              {
     var self=this;
     return this.banks.filter(function(bank){return bank.bank_name.toLowerCase().indexOf(self.bankname.toLowerCase())>=0;});

        }
},

  components:{
    Multiselect
  }
}
</script>
<style>
.right-move{
  float: right;
  cursor: pointer;
}
</style>
