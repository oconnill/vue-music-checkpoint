<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <mytunes class="my-tunes"></mytunes>
    <itunes class="itunes"></itunes>
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
    display: inline-block;
    min-height: 500px;
    min-width: 100%;
    background: rgb(240, 89, 96);
  }

  .itunes {
    display: absolute;
    background: rgb(196, 211, 230);
    min-height: 500px;
    min-width: 100%;
  }
</style>