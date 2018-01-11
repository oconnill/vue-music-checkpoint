<template>

    <div>
        <v-flex xs6>
            <h4>My Tunes</h4>
            <div class="My-Tunes text-center">
                <div v-for="mytune in myTunes">
                    <img :src="mytune.albumArt">
                    <h5>{{mytune.title}} ${{mytune.price}}</h5>
                    <h3>{{mytune.collectionName}}</h3>
                    <h3>{{mytune.artist}}</h3>
                    <audio class="audio" controls="controls" :src="mytune.preview"></audio>
                    <button class="btn btn-info" @click="removeTrack(mytune._id)">Remove</button>
                </div>
            </div>
        </v-flex>
    </div>
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
</style>