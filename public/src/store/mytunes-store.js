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
      state.results = data.results
    },
    setToMyTunes(state, data){
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
      $.get('http://localhost:4000/api/songs').then(data => {
        commit('setToMyTunes', data)
      })

    },
    addToMyTunes({ commit, dispatch }, single) {
      //this will post to your server adding a new track to your tunes
      $.post('http://localhost:4000/api/songs', single)
        .then(res => {
          dispatch('getMyTunes')
        })
    },
    removeTrack({ commit, dispatch }, id) {
      //Removes track from the database with delete
      $.ajax({
        method: 'DELETE',
        url:'http://localhost:4000/api/songs' + '/' + id
        
      }).then(res => dispatch('getMyTunes'))
    }

  }
})

export default store
