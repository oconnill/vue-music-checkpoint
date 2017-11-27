<template>
    <div>

        <div>
            <form @submit.prevent="getMusicByArtist()">
                <input type="text" class="search-field" name="search" placeholder="" v-model="artist">
                <button type="submit">Search</button>
            </form>
            <div v-for="result in results">
                <img :src="result.artworkUrl100">
                <h5>{{result.trackName}} ${{result.trackPrice}}</h5>
                <h3>{{result.collectionName}}</h3>
                <h3>{{result.artistName}}</h3>
                <audio class="audio" controls="controls" :src="result.previewUrl"></audio>
                <button class="btn btn-info" @click="addToMyTunes(i)">Add to Playlist</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                artist: {}
            }
        },
        getMusicByArtist() {
            debugger
            this.$store.dispatch('getMusicByArtist', this.artist)
        },
        addToMyTunes(){
            this.$store.dispatch('addToMyTunes', i)
        },
        methods: {

        },
        computed: {
            results() {
                return this.$store.state.results
            }

        }
    }
</script>
<style></style>