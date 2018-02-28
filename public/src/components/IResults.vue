<template>
  <div class="lite">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-res" v-for="result in results">
          <div class="card-block">
            <div class="row">
              <div class="col-sm-4">
                <div class="card-art">
                  <img :src="result.artworkUrl100" alt="Card image cap">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="card-artistName">{{result.trackName}}</div>
              </div>
            </div>
          </div>

          <!-- bottom card -->
          <div class="row">
            <div class="col-sm-8">
              <div class="card-trackName">{{result.artistName}}</div>
            </div>
            <div class="col-sm-4">
              <a href="#" @click.prevent="addToMyTunes(result)" class="btn">+</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "iResults",
    data() {
      return {
      }
    },
    mounted() {
      // this.$store.dispatch('getMyTunes')
    },
    methods: {
      // Removes Track from DB on ID
      removeTrack(id) {
        this.$store.dispatch('removeTrack', id)
      },
      // Adds Song to DB
      addToMyTunes(result) {
        var single = {
          title: result.trackName,
          artist: result.artistName,
          albumArt: result.artworkUrl100,
          price: result.trackPrice,
          preview: result.previewUrl
        }
        this.$store.dispatch('addToMyTunes', single)
      }
    },
    computed: {
      results() {
        return this.$store.state.results
      }
    }
  }

</script>
<style>
  * {
    border-radius: 0 !important;
  }

  h4 {
    color: white;
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }

  .op {
    opacity: 0.8;
  }

  .lite {
    background-color: #8CFF92
  }

  .card-res {
    background-color: rgba(122, 61, 173, 0.7);
    margin: 8px
  }

  .card-trackName {
    font-family: 'Roboto', sans-serif;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
    color: white;
    font-size: 16px;
    font-weight: 500;
  }

  .card-artistName {
    font-family: 'Roboto', sans-serif;
    padding-top: 35px;
    padding-right: 8px;
    padding-left: 8px;
    padding-bottom: 8px;
    width: 100%;
    font-size: 20px;
    color: white;
    font-weight: 400;
    text-align: left;
    /* -moz-text-align-last: center;
    text-align-last: center; */
  }

  .card-block {
    background-color: rgba(122, 61, 173, 0.5);
  }

  .card-art {
    text-align: left;
    padding-left: 8px;
    padding-bottom: 8px;
  }

  img {
    padding-top: 10px;

  }

  .btn {
    background-color: rgba(122, 61, 173, 0.7);
    color:  #8CFF92;
    font-size: 20px;
  }
</style>
