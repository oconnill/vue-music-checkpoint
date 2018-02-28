<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card-list" v-for="mytune in myTunes">
        <div class="card-block">
          <div class="delete">
          <a href="#" @click.prevent="removeTrack(mytune._id)" class="btn-delete">-</a>
        </div>
          <h4 class="card-title">
            <img :src="mytune.albumArt">
          </h4>
          <h4 class="card-title">{{mytune.title}}</h4>
          <h4 class="card-title">{{mytune.artist}}</h4>
          <div class="card-audio">
            <audio class="audio" controls="controls" :src="mytune.preview"></audio>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "myTunes",
    mounted() {
      this.$store.dispatch('getMyTunes')
    },
    methods: {
      removeTrack(id) {
        this.$store.dispatch('removeTrack', id)
      }
    },
    computed: {
      myTunes() {
        return this.$store.state.myTunes
      }
    }
  }
</script>
<style>
  h4 {
    color: white;
    text-align: center;
  }

  #op {
    opacity: 0.95;
  }

  .card-list {
    background-color: rgba(122, 61, 173, 0.4);
    margin: 8px;
  }

  .card-audio {
    padding-bottom: 8px;
    text-align: center
  }

  .btn-delete {
    color: white;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    width: 40px;

  }

  .delete {
    text-align: right;
    padding-right: 8px;
    padding-top: 8px;
  }
</style>
