<template>

    <div class="itunes">
        <div class="row">
            <div class="col-sm-12 head-room"></div>
        </div>
        <h1>MUSIC + SELECTOR</h1>
        <v-layout row>
            <v-flex xs4>
            </v-flex>
            <v-flex xs8>
                <form @submit.prevent="getMusicByArtist()" class="tbox">
                    <v-text-field fab dark color="white" v-model="artist" name="input-3" label="Search by Artist..." value="Input text"></v-text-field>
                </form>
            </v-flex>
        </v-layout>
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
    .head-room {
        height: 200px
    }

    .itunes {
        background-image: url("../universepurp.jpg");
        image-rendering: auto;
    }

    .leg-room {
        height: 100px
    }

    .tbox {
        width: 350px;
        color: white
    }
</style>