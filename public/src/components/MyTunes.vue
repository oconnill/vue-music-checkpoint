<template>
    <div>

        <div>
            <h4>My Tunes</h4>
            <div class="My-Tunes text-center">
                <!-- <img :src="result.artworkUrl100">
                <h5>{{.trackName}} ${{result.trackPrice}}</h5>
                <h3>{{.collectionName}}</h3>
                <h3>{{.artistName}}</h3>
                <audio class="audio" controls="controls" :src="result.previewUrl"></audio> -->
                <button class="btn btn-info" @click="removeTrack(id)">Remove</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "myTunes",
        data() {
            return {
                artist: {}
            }
        },
        mounted() {
            this.$store.dispatch('getMyTunes')
        },
        methods: {
            removeTrack(id) {
        this.$store.dispatch('removeTrack', id)
      }

        },
        computed: {

        }
    }
</script>
<style>
  h4 {
color: white;
text-align: center;
  }
</style>