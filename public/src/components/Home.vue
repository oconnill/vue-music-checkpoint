<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <itunes class="itunes">
        </itunes>
      </v-flex>
      <v-flex xs6>
        <iresults class="iresults"></iresults>
      </v-flex>
      <v-flex xs6>
        <mytunes class="my-tunes"></mytunes>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
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

  h1 {
    font-family: 'Unica One', cursive;
    color: white;
    padding-bottom: 40px;
    font-size: 100px
  }

  .itunes {
    display: absolute;
    min-height: 500px;
    min-width: 50%;
  }

  .iresults {
    display: absolute;
  }
</style>