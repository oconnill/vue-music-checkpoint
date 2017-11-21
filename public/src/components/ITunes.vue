<template>
    <div>

        <div>
            <form @submit="getMusicByArtist(artist)">
                <input type="text" class="search-field" name="search" placeholder="Search Posts">
                <button type="onsubmit">Search</button>
            </form>
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
        mounted() {
            this.$store.dispatch('getMusicByArtist')
        },
        methods: {

        },
        computed: {

        }
    }
</script>
<style></style>