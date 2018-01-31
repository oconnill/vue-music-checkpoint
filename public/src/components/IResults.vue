<template>

    <div class="light-green accent-1">
            <v-flex xs12>
                <div>
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
    h4 {
        color: white;
        text-align: center;
    }
    .op {
        opacity: 0.8;  
    }
</style>