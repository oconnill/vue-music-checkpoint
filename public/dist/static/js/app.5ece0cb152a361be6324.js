webpackJsonp([0],[,,function(t,s,e){"use strict";var a=e(1),n=e(27),i=e(16),r=e.n(i);a.a.use(n.a);var c=new n.a.Store({state:{myTunes:[],results:[]},mutations:{setResults:function(t,s){t.results=s.results},setMyTunes:function(t,s){t.myTunes=s}},actions:{getMusicByArtist:function(t,s){var e=t.commit,a=(t.dispatch,"https://itunes.apple.com/search?term="+s);encodeURIComponent(a);r.a.getJSON(a).then(function(t){e("setResults",t)})},getMyTunes:function(t){var s=t.commit;t.dispatch;r.a.getJSON("https://vue-music-oconnell.herokuapp.com/api/songs").then(function(t){s("setMyTunes",t)})},addToMyTunes:function(t,s){var e=(t.commit,t.dispatch);r.a.post("https://vue-music-oconnell.herokuapp.com/api/songs",s).then(function(t){e("getMyTunes")})},removeTrack:function(t,s){var e=(t.commit,t.dispatch);r.a.ajax({method:"DELETE",url:"https://vue-music-oconnell.herokuapp.com/api/songs/"+s}).then(function(t){return e("getMyTunes")})}}});s.a=c},function(t,s,e){e(12);var a=e(0)(e(5),e(22),null,null);t.exports=a.exports},,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(17),n=e.n(a);s.default={name:"app",components:{Home:n.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(20),n=e.n(a),i=e(19),r=e.n(i),c=e(18),o=e.n(c);s.default={components:{mytunes:n.a,itunes:r.a,iresults:o.a},name:"home",data:function(){return{}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"iResults",data:function(){return{}},mounted:function(){},methods:{removeTrack:function(t){this.$store.dispatch("removeTrack",t)},addToMyTunes:function(t){var s={title:t.trackName,artist:t.artistName,albumArt:t.artworkUrl100,price:t.trackPrice,preview:t.previewUrl};this.$store.dispatch("addToMyTunes",s)}},computed:{results:function(){return this.$store.state.results}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"itunes",data:function(){return{artist:""}},methods:{getMusicByArtist:function(){this.$store.dispatch("getMusicByArtist",this.artist),this.artist=""},addToMyTunes:function(t){var s={title:t.trackName,artist:t.artistName,albumArt:t.artworkUrl100,price:t.trackPrice,preview:t.previewUrl};this.$store.dispatch("addToMyTunes",s)},getMyTunes:function(){this.$store.dispatch("getMyTunes")}},computed:{results:function(){return this.$store.state.results}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"myTunes",mounted:function(){this.$store.dispatch("getMyTunes")},methods:{removeTrack:function(t){this.$store.dispatch("removeTrack",t)}},computed:{myTunes:function(){return this.$store.state.myTunes}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(1),n=e(3),i=e.n(n),r=e(2),c=e(4),o=e.n(c);a.a.use(o.a),new a.a({el:"#app",template:"<App/>",store:r.a,components:{App:i.a}})},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,function(t,s,e){e(14);var a=e(0)(e(6),e(24),null,null);t.exports=a.exports},function(t,s,e){e(15);var a=e(0)(e(7),e(25),null,null);t.exports=a.exports},function(t,s,e){e(13);var a=e(0)(e(8),e(23),null,null);t.exports=a.exports},function(t,s,e){e(11);var a=e(0)(e(9),e(21),null,null);t.exports=a.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},t._l(t.myTunes,function(s){return e("div",{staticClass:"card-list"},[e("div",{staticClass:"card-block"},[e("div",{staticClass:"delete"},[e("a",{staticClass:"btn-delete",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.removeTrack(s._id)}}},[t._v("-")])]),t._v(" "),e("h4",{staticClass:"card-title"},[e("img",{attrs:{src:s.albumArt}})]),t._v(" "),e("h4",{staticClass:"card-title"},[t._v(t._s(s.title))]),t._v(" "),e("h4",{staticClass:"card-title"},[t._v(t._s(s.artist))]),t._v(" "),e("div",{staticClass:"card-audio"},[e("audio",{staticClass:"audio",attrs:{controls:"controls",src:s.preview}})])])])}))])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"out"},[e("div",{staticClass:"container"},[e("div",[e("home")],1)])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row itunes"},[e("div",{staticClass:"col-sm-8 offset-sm-2"},[e("h1",[t._v("MUSIC SELECTOR +")]),t._v(" "),e("form",{staticClass:"tbox",on:{submit:function(s){s.preventDefault(),t.getMusicByArtist()}}},[e("v-text-field",{attrs:{fab:"",dark:"",color:"white",name:"input-3",label:"Search by Artist...",value:"Input text"},model:{value:t.artist,callback:function(s){t.artist=s},expression:"artist"}})],1)])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("itunes")],1),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("iresults",{staticClass:"iresults"})],1),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("mytunes",{staticClass:"my-tunes"})],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"lite"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},t._l(t.results,function(s){return e("div",{staticClass:"card-res"},[e("div",{staticClass:"card-block"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"card-art"},[e("img",{attrs:{src:s.artworkUrl100,alt:"Card image cap"}})])]),t._v(" "),e("div",{staticClass:"col-sm-8"},[e("div",{staticClass:"card-artistName"},[t._v(t._s(s.trackName))])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-8"},[e("div",{staticClass:"card-trackName"},[t._v(t._s(s.artistName))])]),t._v(" "),e("div",{staticClass:"col-sm-4"},[e("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.addToMyTunes(s)}}},[t._v("+")])])])])}))])])},staticRenderFns:[]}}],[10]);
//# sourceMappingURL=app.5ece0cb152a361be6324.js.map