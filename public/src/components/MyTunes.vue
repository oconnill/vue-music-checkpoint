<template>


    <div class="row">
        <div class="col-sm-12">
            <div class="card-list" v-for="mytune in myTunes">
                <div class="card-block">
                  <h4 class="card-title"><img :src="mytune.albumArt"></h4>
                  <h4 class="card-title">{{mytune.title}}</h4>
                  <h4 class="card-title">{{mytune.artist}}</h4>
                  <h4 class="card-title"><audio class="audio" controls="controls" :src="mytune.preview"></audio></h4>
                  <h4 class="card-title"><a href="#"  @click.prevent="removeTrack(mytune._id)" class="btn btn-primary">-</a></h4>

                </div>
              </div>
          </div>
        </div>
</template>

<script>
    export default {
        name: "myTunes",
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

    .card-list {
      background-color: rgba(122, 61, 173, 0.8);
    }

</style>
