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

        <!-- <v-flex xs12>
            <div v-for="result in results" v-if="result[i].length % 2 === 0">
                <v-card color="cyan darken-2" class="white--text">
                    <v-container fluid grid-list-lg>
                        <v-layout row>
                            <v-flex xs7>
                                <div>
                                    <div class="headline">{{result.trackName}}</div>
                                    <div>{{result.artistName}}</div>
                                </div>
                            </v-flex>
                            <v-flex xs5>
                                <v-card-media :src="result.artworkUrl100" height="125px" contain></v-card-media>

                            </v-flex>
                            <v-btn fab dark color="indigo">
                                    <v-icon dark>add</v-icon>
                                </v-btn>
                        </v-layout>
                    </v-container>
                </v-card>
            </div>
                <div v-else>
                        <v-card color="blue-grey lighten-4" class="white--text">
                                <v-container fluid grid-list-lg>
                                    <v-layout row>
                                        <v-flex xs7>
                                            <div>
                                                <div class="headline">{{result.trackName}}</div>
                                                <div>{{result.artistName}}</div>
                                                <audio class="audio" controls="controls" :src="result.previewUrl" contain></audio>
                                                
                                            </div>
                                        </v-flex>
                                        <v-flex xs5>
                                            <v-card-media :src="result.artworkUrl100" height="125px" contain></v-card-media>
            
                                        </v-flex>
                                        <v-btn small fab dark color="#b2dfdb teal lighten-4">
                                                <v-icon dark>add</v-icon>
                                            </v-btn>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        
                </div>
            
        </v-flex>
 -->

        <!-- <div class="col-sm-12 leg-room"></div>
        <div v-for="result in results">
            <img :src="result.artworkUrl100">
            <h5>{{result.trackName}} ${{result.trackPrice}}</h5>
            <h3>{{result.collectionName}}</h3>
            <h3>{{result.artistName}}</h3>
            <audio class="audio" controls="controls" :src="result.previewUrl"></audio>
            <button type="button" class="btn btn-danger" @click="addToMyTunes(result)">Add to Playlist</button>
        </div> -->
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