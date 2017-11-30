<template>
    <div>

        <div>
            <form @submit.prevent="getMusicByArtist()">
                <input type="text" name="search" placeholder="Artist Search" v-model="artist">
                <button type="submit">Search</button>
            </form>
            <div v-for="result in results">
                <img :src="result.artworkUrl100">
                <h5>{{result.trackName}} ${{result.trackPrice}}</h5>
                <h3>{{result.collectionName}}</h3>
                <h3>{{result.artistName}}</h3>
                <audio class="audio" controls="controls" :src="result.previewUrl"></audio>
                <button class="btn btn-info" @click="addToMyTunes(result)">Add to Playlist</button>
            </div>
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
            getMusicByArtist() {
            this.$store.dispatch('getMusicByArtist', this.artist)
        },
        addToMyTunes(result){
            var single = {
                    title: result.trackName,
                    artist: result.artistName,
                    albumArt: result.artworkUrl100,
                    price: result.trackPrice,
                    preview: result.previewUrl
            }
            this.$store.dispatch('addToMyTunes', single)
        },
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
<style></style>