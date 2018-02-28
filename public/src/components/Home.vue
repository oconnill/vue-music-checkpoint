<template>
  <div class="row">
    <div class="col-sm-12">
      <itunes>
      </itunes>
    </div>
    <div class="col-sm-6">
      <iresults class="iresults"></iresults>
    </div>
    <div class="col-sm-6">
      <mytunes class="my-tunes"></mytunes>
    </div>
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
