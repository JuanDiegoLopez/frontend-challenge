webpackJsonp([1],{0:function(t,e,n){n("j1ja"),t.exports=n("NHnr")},"7zck":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i=n("Xxa5"),s=n.n(i),a=n("exGp"),c=n.n(a),o=n("/bd4"),p={apiUrl:"https://api.nestoria.co.uk"},l=n.n(o).a.create({baseUrl:p.apiUrl}),u={};u.get=c()(s.a.mark(function t(){var e,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={encoding:"json",pretty:1,action:"search_listings",country:"uk",listing_type:"buy",place_name:"brighton"},t.next=3,l.get("/api",{params:e});case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}},t,this)}));var m=u,d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("v-card",{staticClass:"elevation-0"},[n("v-card-media",{attrs:{src:t.item.img_url,height:t.item.img_height,width:t.item.img_width}},[n("v-btn",{staticClass:"btn-fav",attrs:{icon:"icon"}},[n("v-icon",{attrs:{color:"white"}},[t._v("favorite_border")])],1)],1),n("v-card-text",{staticClass:"px-0"},[n("h3",{staticClass:"type"},[t._v(t._s(t._f("toUppercase")(t.item.property_type))+" - "+t._s(t.item.bedroom_number)+" BED")]),n("h3",[t._v(t._s(t.item.title))]),n("p",[t._v(t._s(t.item.summary))]),n("h4",[t._v("From "+t._s(t.item.price_formatted)+" per night")]),t._l(5,function(e,r){return n("v-icon",{key:r,staticClass:"star",attrs:{small:"small",color:"teal darken-1"}},[t._v("star_rate")])})],2)],1):t._e()},staticRenderFns:[]};var _={components:{HItem:n("VU/8")({props:["item"],filters:{toUppercase:function(t){return t.toUpperCase()}}},d,!1,function(t){n("nCbG")},"data-v-4bc6e70a",null).exports},data:function(){return{listings:[]}},created:function(){this.getListings()},methods:{getListings:function(){var t=this;return c()(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get();case 2:n=e.sent,t.listings=JSON.parse(n).response.listings;case 4:case"end":return e.stop()}},e,t)}))()}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{"grid-list-lg":"grid-list-lg"}},[e("v-layout",{attrs:{row:"row",wrap:"wrap"}},this._l(this.listings,function(t,n){return e("v-flex",{key:n,attrs:{md4:"md4",sm6:"sm6",xs12:"xs12"}},[e("h-item",{attrs:{item:t}})],1)}))],1)},staticRenderFns:[]},v={data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"bubble_chart",title:"Inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},name:"App",components:{HMain:n("VU/8")(_,f,!1,null,null,null).exports}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-content",[e("h-main")],1)],1)},staticRenderFns:[]},g=n("VU/8")(v,h,!1,null,null,null).exports,b=n("3EgV"),x=n.n(b);n("7zck");r.a.use(x.a),r.a.config.productionTip=!1,new r.a({el:"#app",components:{App:g},template:"<App/>"})},nCbG:function(t,e){}},[0]);
//# sourceMappingURL=app.dc9420fa5620dc05ba3f.js.map