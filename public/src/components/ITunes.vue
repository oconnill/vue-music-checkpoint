<template>

  <div class="row itunes">
    <div class="col-sm-8 offset-sm-2">
    <h1>MUSIC SELECTOR +</h1>
            <form @submit.prevent="getMusicByArtist()" class="tbox">
                <v-text-field fab dark color="white" v-model="artist" name="input-3" label="Search by Artist..." value="Input text"></v-text-field>
            </form>
          </div>
  </div>
</template>

<script>
    export default {
        name: 'itunes',
        data() {
            return {
                artist: ''
            }
        },
        methods: {

            // Search By Artist
            getMusicByArtist() {
                this.$store.dispatch('getMusicByArtist', this.artist)
                this.artist = "";
            },

            // Adds to MyTunes DB
            addToMyTunes(result) {
                var single = {
                    title: result.trackName,
                    artist: result.artistName,
                    albumArt: result.artworkUrl100,
                    price: result.trackPrice,
                    preview: result.previewUrl
                }
                this.$store.dispatch('addToMyTunes', single)
            },

            // Recovers Saved Songs
            getMyTunes() {
                this.$store.dispatch('getMyTunes')
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
    .itunes {
        background-image: url("../universepurp.jpg");
        width: auto;
        overflow: hidden;

    }

    .leg-room {
        height: 100px
    }

    .tbox {
        width: 350px;
        font-size: 60px;
        color: white
    }
</style>
