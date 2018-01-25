<template>

    <v-card color="deep-purple darken-1" class="white--text op">
            <v-flex xs12>
                <div class="My-Tunes text-center">
                    <div v-for="mytune in myTunes">
                        <img :src="mytune.albumArt">
                        <h5>{{mytune.title}} ${{mytune.price}}</h5>
                        <h3>{{mytune.collectionName}}</h3>
                        <h3>{{mytune.artist}}</h3>
                        <audio class="audio" controls="controls" :src="mytune.preview"></audio>
                        <div>
                            <v-btn color="light-grey" @click="removeTrack(mytune._id)">Remove</v-btn>
                        </div>
                    </div>
                </div>
            </v-flex>
        </v-card>
</template>

<script>
    export default {
        name: "myTunes",
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
</style>