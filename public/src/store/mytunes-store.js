import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: []
  },
  mutations: {
    setResults(state, data){
      console.log(data)
      state.results = data.results
    }
  },
  actions: {
    getMusicByArtist({commit, dispatch}, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.getJSON(apiUrl).then(data=>{
        commit('setResults', data)
      })
    },
    getMyTunes({commit, dispatch}, song){
      //this should send a get request to your server to return the list of saved tunes
      $.get(url2).then(songs => {
        commit('addToMyTunes', songs)
    })

    },
    addToMyTunes({commit, dispatch}, track){
      //this will post to your server adding a new track to your tunes
      $.post(url2).then(track => {
        commit('addToMyTunes', track)
    })
    },
    removeTrack({commit, dispatch}, track){
      //Removes track from the database with delete
        $.ajax({
            method: 'DELETE',
            url: url + '/' + i
        }).then(res => dispatch('getMusicByArtist'))
    },
    promoteTrack({commit, dispatch}, track){
      //this should increase the position / upvotes and downvotes on the track
      $.put(url2).then(track => {
        commit('addToMyTunes', track)
    })
    },
    demoteTrack({commit, dispatch}, track){
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export default store
///routes
//getmytunes get
//addsong to list post
//updateranking - put
//delete from list - delete
