<template>
    <div>

        <div>
            <h4>My Tunes</h4>
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
<style>
  h4 {
color: white;
text-align: center;
  }
</style>