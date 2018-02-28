<template>
  <div class="out">
    <div class="container">
      <div>
        <home></home>
      </div>
    </div>
  </div>
</template>

<script>
  import Home from './components/Home'
  export default {
    name: 'app',
    components: {
      Home
    }
  }
</script>

<style>
  .container {
    background-color: #8CFF92
  }

  .out {
    background-color: #8CFF92
  }

  body {
    background-color: #8CFF92
  }

a:hover {
    color: grey;
}
</style>
