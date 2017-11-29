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
    setResults(state, data) {
      // console.log(data)
      state.results = data.results
    },
    setToMyTunes(state, data){
      //putting the favorited song into my tunes
      state.myTunes = data 
    }
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.getJSON(apiUrl).then(data => {
        commit('setResults', data)
      })
    },
    getMyTunes({ commit, dispatch }) {
      //this should send a get request to your server to return the list of saved tunes
      $.get(localhost).then(data => {
        commit('setToMyTunes', data)
      })

    },
    addToMyTunes({ commit, dispatch }, track) {
      //this will post to your server adding a new track to your tunes
      debugger
      $.post('http://localhost:4000/api/songs', track)
        .then(res => {
          dispatch('getMyTunes')
        })
    },
    removeTrack({ commit, dispatch }, id) {
      //Removes track from the database with delete
      $.ajax({
        method: 'DELETE',
        url: url + '/' + i
      }).then(res => dispatch('getMyTunes'))
    }
  //   promoteTrack({ commit, dispatch }, track) {
  //     //this should increase the position / upvotes and downvotes on the track
  //     $.put(url2).then(track => {
  //       commit('addToMyTunes', track)
  //     })
  //   },
  //   demoteTrack({ commit, dispatch }, track) {
  //     //this should decrease the position / upvotes and downvotes on the track
  //   }

  }
})

export default store
///routes
//getmytunes get
//addsong to list post
//updateranking - put
//delete from list - delete
