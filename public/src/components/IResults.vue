<template>

    <div>
            <v-flex xs6>
            <h4>IResults</h4>
        
            <div v-for="result in results" v-if="result.length % 2 === 0">
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
</style>