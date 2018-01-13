<template>

    <div class="light-green accent-1">
            <v-flex xs12>
                <div v-for="result in results" v-if="result[i]">
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
                    <v-card color="deep-purple darken-1" class="white--text op">
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
                                <v-btn @click="addToMyTunes(result)" flat icon color="white">
                                        <v-icon>favorite</v-icon>
                                      </v-btn>
                            </v-layout>
                        </v-container>
                    </v-card>
                    <br>
                </div>
            </v-flex>
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
            this.$store.dispatch('getMyTunes')
        },
        methods: {
            removeTrack(id) {

                this.$store.dispatch('removeTrack', id)
            },
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
    h4 {
        color: white;
        text-align: center;
    }
    .op {
        opacity: 0.8;  
    }

    
</style>