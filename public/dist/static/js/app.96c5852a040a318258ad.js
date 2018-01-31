webpackJsonp([0],[,,function(t,e,s){"use strict";var n=s(1),r=s(27),a=s(16),i=s.n(a);n.a.use(r.a);var o=new r.a.Store({state:{myTunes:[],results:[]},mutations:{setResults:function(t,e){t.results=e.results},setMyTunes:function(t,e){t.myTunes=e}},actions:{getMusicByArtist:function(t,e){var s=t.commit,n=(t.dispatch,"https://itunes.apple.com/search?term="+e);encodeURIComponent(n);i.a.getJSON(n).then(function(t){s("setMyTunes",data)})},getMyTunes:function(t){var e=t.commit;t.dispatch;i.a.getJSON("https://vue-music-oconnell.herokuapp.com/api/songs").then(function(t){console.log(t),e("setMyTunes",t)})},addToMyTunes:function(t,e){var s=(t.commit,t.dispatch);i.a.post("https://vue-music-oconnell.herokuapp.com/api/songs",e).then(function(t){s("getMyTunes")})},removeTrack:function(t,e){var s=(t.commit,t.dispatch);i.a.ajax({method:"DELETE",url:"https://vue-music-oconnell.herokuapp.com/api/songs/"+e}).then(function(t){return s("getMyTunes")})}}});e.a=o},function(t,e,s){s(12);var n=s(0)(s(5),s(22),null,null);t.exports=n.exports},,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(17),r=s.n(n);e.default={name:"app",components:{Home:r.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(20),r=s.n(n),a=s(19),i=s.n(a),o=s(18),u=s.n(o);e.default={components:{mytunes:r.a,itunes:i.a,iresults:u.a},name:"home",data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"iResults",data:function(){return{}},mounted:function(){},methods:{removeTrack:function(t){this.$store.dispatch("removeTrack",t)},addToMyTunes:function(t){var e={title:t.trackName,artist:t.artistName,albumArt:t.artworkUrl100,price:t.trackPrice,preview:t.previewUrl};this.$store.dispatch("addToMyTunes",e)}},computed:{results:function(){return this.$store.state.results}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"itunes",data:function(){return{artist:""}},methods:{getMusicByArtist:function(){this.$store.dispatch("getMusicByArtist",this.artist)},addToMyTunes:function(t){var e={title:t.trackName,artist:t.artistName,albumArt:t.artworkUrl100,price:t.trackPrice,preview:t.previewUrl};this.$store.dispatch("addToMyTunes",e)},getMyTunes:function(){this.$store.dispatch("getMyTunes")}},computed:{results:function(){return this.$store.state.results}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"myTunes",data:function(){return{}},mounted:function(){this.$store.dispatch("getMyTunes")},methods:{removeTrack:function(t){this.$store.dispatch("removeTrack",t)}},computed:{myTunes:function(){return this.$store.state.myTunes}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),r=s(3),a=s.n(r),i=s(2),o=s(4),u=s.n(o);n.a.use(u.a),new n.a({el:"#app",template:"<App/>",store:i.a,components:{App:a.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,s){s(14);var n=s(0)(s(6),s(24),null,null);t.exports=n.exports},function(t,e,s){s(15);var n=s(0)(s(7),s(25),null,null);t.exports=n.exports},function(t,e,s){s(13);var n=s(0)(s(8),s(23),null,null);t.exports=n.exports},function(t,e,s){s(11);var n=s(0)(s(9),s(21),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"white--text op",attrs:{color:"deep-purple darken-1"}},[s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"My-Tunes text-center"},t._l(t.myTunes,function(e){return s("div",[s("img",{attrs:{src:e.albumArt}}),t._v(" "),s("h5",[t._v(t._s(e.title)+" $"+t._s(e.price))]),t._v(" "),s("h3",[t._v(t._s(e.collectionName))]),t._v(" "),s("h3",[t._v(t._s(e.artist))]),t._v(" "),s("audio",{staticClass:"audio",attrs:{controls:"controls",src:e.preview}}),t._v(" "),s("div",[s("v-btn",{attrs:{color:"light-grey"},on:{click:function(s){t.removeTrack(e._id)}}},[t._v("Remove")])],1)])}))])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("div",{staticClass:"light-green accent-1",attrs:{id:"app"}},[s("home")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"itunes"},[t._m(0),t._v(" "),s("h1",[t._v("MUSIC + SELECTOR")]),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs4:""}}),t._v(" "),s("v-flex",{attrs:{xs8:""}},[s("form",{staticClass:"tbox",on:{submit:function(e){e.preventDefault(),t.getMusicByArtist()}}},[s("v-text-field",{attrs:{fab:"",dark:"",color:"white",name:"input-3",label:"Search by Artist...",value:"Input text"},model:{value:t.artist,callback:function(e){t.artist=e},expression:"artist"}})],1)])],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 head-room"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("itunes",{staticClass:"itunes"})],1),t._v(" "),s("v-flex",{attrs:{xs6:""}},[s("iresults",{staticClass:"iresults"})],1),t._v(" "),s("v-flex",{attrs:{xs6:""}},[s("mytunes",{staticClass:"my-tunes"})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"light-green accent-1"},[s("v-flex",{attrs:{xs12:""}},[s("div",[s("v-card",{staticClass:"white--text op",attrs:{color:"deep-purple darken-1"}},[s("v-container",{attrs:{fluid:"","grid-list-lg":""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs7:""}},[s("div",[s("div",{staticClass:"headline"},[t._v(t._s(t.result.trackName))]),t._v(" "),s("div",[t._v(t._s(t.result.artistName))])])]),t._v(" "),s("v-flex",{attrs:{xs5:""}},[s("v-card-media",{attrs:{src:t.result.artworkUrl100,height:"125px",contain:""}})],1),t._v(" "),s("v-btn",{attrs:{flat:"",icon:"",color:"white"},on:{click:function(e){t.addToMyTunes(t.result)}}},[s("v-icon",[t._v("favorite")])],1)],1)],1)],1),t._v(" "),s("br")],1)])],1)},staticRenderFns:[]}}],[10]);
//# sourceMappingURL=app.96c5852a040a318258ad.js.map