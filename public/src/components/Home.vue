<template>
  <div class="container">
  <div class="row">
    <div class="col-sm-12">
      <itunes class="itunes"></itunes>
    </div>
    <div class="col-sm-6">
      <mytunes class="my-tunes"></mytunes>
    </div>
  </div>
</div>

</template>

<script>
  import mytunes from './mytunes'
  import itunes from './itunes'

  export default {
    components: {
      mytunes,
      itunes
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
    display: absolute;
    min-height: 500px;
    min-width: 50%;
    background: rgb(240, 89, 96);
  }

  .itunes {
    display: absolute;
    background: rgb(196, 211, 230);
    min-height: 500px;
    min-width: 50%;
  }
</style>