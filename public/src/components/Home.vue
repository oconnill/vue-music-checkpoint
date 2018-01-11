<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>


   
    <v-flex xs12>
      <itunes class="itunes"></itunes>
    </v-flex>

    <v-flex xs6>
      <iresults class="iresults"></iresults>
    </v-flex>

    <v-flex xs6>
      <mytunes class="my-tunes"></mytunes>
    </v-flex>
  </v-layout>
  </v-container>
 



</template>

<script>
  import mytunes from './mytunes'
  import itunes from './itunes'
  import iresults from './iresults'

  export default {
    components: {
      mytunes,
      itunes,
      iresults
    },
    name: 'home',
    data() {
      return {

      }
    }
  }
</script>


<style>
  .my-tunes {
    /* display: absolute;
    min-height: 500px;
    min-width: 50%; */
    background: rgb(240, 89, 96);
  }

  .itunes {
    display: absolute;
    background: rgb(196, 211, 230);
    min-height: 500px;
    min-width: 50%;
  }

  .iresults {
    display: absolute;
    background: rgb(240, 89, 96);
    /* min-height: 500px;
    min-width: 50%; */
  }
</style>