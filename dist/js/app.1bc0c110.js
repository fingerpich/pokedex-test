(function(e){function t(t){for(var o,a,l=t[0],r=t[1],c=t[2],u=0,k=[];u<l.length;u++)a=l[u],s[a]&&k.push(s[a][0]),s[a]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);m&&m(t);while(k.length)k.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,l=1;l<n.length;l++){var r=n[l];0!==s[r]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},s={1:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var m=r;i.push([7,0]),n()})({7:function(e,t,n){e.exports=n("Vtdi")},EDI0:function(e,t,n){},L4G5:function(e,t,n){},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var o=n("Kw5r"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("container")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",class:{hasSelected:e.apiPokDetailVisiblity}},[n("el-tabs",{model:{value:e.chosenTab,callback:function(t){e.chosenTab=t},expression:"chosenTab"}},[n("el-tab-pane",{attrs:{label:"all pokemons",name:"all"}},[n("div",{staticClass:"listdetail",class:{hasSelected:e.apiPokDetailVisiblity}},[e.apiPokDetailVisiblity?n("el-button",{staticClass:"backtoList",on:{click:function(t){e.apiPokDetailVisiblity=!1}}},[e._v("back to the list")]):e._e(),n("pokemon-list",{attrs:{list:e.apiPokemons.results},on:{selectPokemon:e.loadPokemon}}),e.apiPokDetailVisiblity?n("pokemon-details",{attrs:{"selected-pokemon":e.selectedApiPokemon}}):e._e()],1)]),n("el-tab-pane",{attrs:{label:"my pokemons",name:"mine"}},[n("el-button",{attrs:{icon:"el-icon-edit"},on:{click:function(t){e.newPokemonVisibility=!0}}},[e._v("add new")]),e.selectInMyPokemon?n("el-button",{attrs:{icon:"el-icon-delete"},on:{click:function(t){e.removeSelectedPokemon()}}},[e._v("remove selected")]):e._e(),e.selectInMyPokemon?n("el-button",{staticClass:"backtoList",on:{click:function(t){e.selectMinePokemons(null)}}},[e._v("back to the list")]):e._e(),n("el-dialog",{attrs:{title:"new pokemon",visible:e.newPokemonVisibility,center:""},on:{"update:visible":function(t){e.newPokemonVisibility=t}}},[n("new-pokemon-form",{on:{newPokemon:e.addNewPokemon}})],1),n("div",{staticClass:"listdetail",class:{hasSelected:e.selectInMyPokemon}},[e.myPokemons?n("pokemon-list",{attrs:{list:e.myPokemons.results},on:{selectPokemon:function(t){e.selectMinePokemons(t)}}}):e._e(),e.selectInMyPokemon?n("pokemon-details",{attrs:{"selected-pokemon":e.selectInMyPokemon}}):e._e()],1)],1)],1)],1)},l=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pokemonList"},[e.tableData?n("div",[n("el-input",{attrs:{placeholder:"name"},model:{value:e.filterName,callback:function(t){e.filterName=t},expression:"filterName"}}),n("div",{staticClass:"table"},e._l(e.tableData.results,function(t){return n("div",{key:t.name,staticClass:"item",class:{selected:t===e.selectedPok},on:{click:function(n){e.handleCurrentPokemonChange(t)}}},[n("a",{attrs:{href:t.url}},[e._v(e._s(t.name))])])})),n("div",{staticClass:"paginationBlock"},[n("el-pagination",{attrs:{"page-size":e.itemsPerPge,layout:"prev, pager, next",total:e.tableData.count},on:{"current-change":e.handleCurrentPageChange}})],1)],1):n("div",{staticClass:"loader"})])},c=[],m=(n("f3/d"),{name:"pokemonList",props:{list:{}},computed:{tableData:{get:function(){var e=this;if(this.list){var t=this.list.slice();this.filterName&&(t=t.filter(function(t){return t.name.indexOf(e.filterName)>-1}));var n=this.itemsPerPge*(this.currentPage-1),o=this.itemsPerPge;return{count:t.length,results:t.slice(n,n+o)}}}}},created:function(){},data:function(){return{currentPage:1,itemsPerPge:7,filterName:"",selectedPok:null}},methods:{handleCurrentPokemonChange:function(e){this.selectedPok=e,this.$emit("selectPokemon",e)},handleCurrentPageChange:function(e){this.currentPage=e}}}),u=m,k=(n("iPYi"),n("KHd+")),d=Object(k["a"])(u,r,c,!1,null,"7eaab370",null),p=d.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pokemonDetails"},[e.selectedPokemon?n("div",[n("h3",[e._v(e._s(e.selectedPokemon.name))]),n("div",{staticClass:"base sec"},[n("div",[n("b",[e._v("base exprience: ")]),n("span",[e._v(e._s(e.selectedPokemon.base_experience))])]),n("div",[n("b",[e._v("height: ")]),n("span",[e._v(e._s(e.selectedPokemon.height))])]),n("div",[n("b",[e._v("order: ")]),n("span",[e._v(e._s(e.selectedPokemon.order))])]),n("div",[n("b",[e._v("weight: ")]),n("span",[e._v(e._s(e.selectedPokemon.weight))])])]),e.selectedPokemon.moves?n("div",{staticClass:"moves sec"},[n("h4",[e._v("moves")]),n("ul",e._l(e.selectedPokemon.moves,function(t){return n("li",{key:t.move.name},[n("a",{attrs:{href:t.move.url}},[e._v(e._s(t.move.name))])])}))]):e._e(),e.selectedPokemon.stats?n("div",{staticClass:"stats sec"},[n("h4",[e._v("stats")]),n("ul",e._l(e.selectedPokemon.stats,function(t){return n("li",{key:t.stat.name},[n("a",{attrs:{href:t.stat.url}},[e._v(e._s(t.stat.name))]),n("span",[e._v("base_stat: "+e._s(t.base_stat))]),n("span",[e._v("effort: "+e._s(t.effort))])])}))]):e._e(),e.selectedPokemon.types?n("div",{staticClass:"types sec"},[n("h4",[e._v("types")]),n("ul",e._l(e.selectedPokemon.types,function(t){return n("li",{key:t.type.name},[n("a",{attrs:{href:t.type.url}},[e._v(e._s(t.type.name))]),n("span",[e._v("type: "+e._s(t.slot))])])}))]):e._e()]):n("div",{staticClass:"loader"})])},f=[],h={name:"pokemonDetails",props:{selectedPokemon:{type:Object}},computed:{},created:function(){},data:function(){return{}},methods:{}},v=h,b=(n("cX4x"),Object(k["a"])(v,P,f,!1,null,"4dab8aea",null)),y=b.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"newPokemonForm"},[n("el-form",{ref:"newPokemonForm",attrs:{model:e.newPokemon,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"name"}},[n("el-input",{model:{value:e.newPokemon.name,callback:function(t){e.$set(e.newPokemon,"name",t)},expression:"newPokemon.name"}})],1),n("el-form-item",{attrs:{label:"base experience"}},[n("el-input",{model:{value:e.newPokemon.base_experience,callback:function(t){e.$set(e.newPokemon,"base_experience",t)},expression:"newPokemon.base_experience"}})],1),n("el-form-item",{attrs:{label:"height"}},[n("el-input",{model:{value:e.newPokemon.height,callback:function(t){e.$set(e.newPokemon,"height",t)},expression:"newPokemon.height"}})],1),n("el-form-item",{attrs:{label:"weight"}},[n("el-input",{model:{value:e.newPokemon.weight,callback:function(t){e.$set(e.newPokemon,"weight",t)},expression:"newPokemon.weight"}})],1),n("el-form-item",{attrs:{label:"order"}},[n("el-input",{model:{value:e.newPokemon.order,callback:function(t){e.$set(e.newPokemon,"order",t)},expression:"newPokemon.order"}})],1),n("div",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Create")]),n("el-button",[e._v("Cancel")])],1)],1)],1)},g=[],w={name:"newPokemonForm",props:{},computed:{},created:function(){},data:function(){return{newPokemon:{}}},methods:{onSubmit:function(){this.$emit("newPokemon",this.newPokemon),this.newPokemon={}}}},x=w,C=(n("rL+V"),Object(k["a"])(x,_,g,!1,null,"09e56862",null)),M=C.exports,O={name:"container",components:{NewPokemonForm:M,PokemonDetails:y,PokemonList:p},props:{},computed:{myPokemons:{get:function(){return this.$store.getters.myPokemons}},apiPokemons:{get:function(){return this.$store.getters.apiPokemons}},selectedApiPokemon:{get:function(){return this.$store.getters.selectedPokemon}},selectInMyPokemon:{get:function(){return this.$store.getters.selectInMyPokemon}}},created:function(){this.$store.dispatch("loadApiPokemons"),this.$store.dispatch("loadMyPokemons")},data:function(){return{chosenTab:"all",apiPokDetailVisiblity:!1,newPokemonVisibility:!1}},methods:{addNewPokemon:function(e){this.$store.dispatch("addNewPokemon",e),this.newPokemonVisibility=!1},removeSelectedPokemon:function(){this.$store.dispatch("removePokemons",this.selec)},selectMinePokemons:function(e){this.$store.commit("selectInMyPokemon",e)},loadPokemon:function(e){this.$store.dispatch("loadPokemon",e),this.apiPokDetailVisiblity=!0}}},$=O,j=(n("j96Y"),Object(k["a"])($,a,l,!1,null,null,null)),S=j.exports,I={name:"app",components:{Container:S}},D=I,V=(n("ZL7j"),Object(k["a"])(D,s,i,!1,null,null,null)),L=V.exports,N=n("L2JU"),A=n("xmWZ"),T=n("qpph"),E=n("vDqi"),J=n.n(E),Y=function(){function e(){Object(A["a"])(this,e),this.baseUrl="https://pokeapi.co/api/v2/"}return Object(T["a"])(e,[{key:"getPokemonsList",value:function(e){return J.a.get(this.baseUrl+"pokemon/",{params:e,headers:{"Access-Control-Allow-Origin":"*"}})}},{key:"getPokemonByName",value:function(e){return J.a.get(this.baseUrl+"pokemon/"+e,{headers:{"Access-Control-Allow-Origin":"*"}})}}]),e}(),B=new Y,F={apiPokemons:[],selectedPokemon:null},U={apiPokemons:function(e){return e.apiPokemons},selectedPokemon:function(e){return e.selectedPokemon}},X={loadApiPokemons:function(e){var t=e.commit;B.getPokemonsList({limit:1e4}).then(function(e){t("loadPokemons",e.data)})},loadPokemon:function(e,t){var n=e.commit;n("setSelectedPokemon",null),B.getPokemonByName(t.name).then(function(e){n("setSelectedPokemon",e.data)})}},Z={loadPokemons:function(e,t){e.apiPokemons=t},setSelectedPokemon:function(e,t){e.selectedPokemon=t}},q={state:F,mutations:Z,actions:X,getters:U},z=n("yT7P"),G={myPokemons:{count:0,results:[]},selectInMyPokemon:null},K={myPokemons:function(e){return e.myPokemons},selectInMyPokemon:function(e){return e.selectInMyPokemon}},H={loadMyPokemons:function(e){var t=e.commit,n=localStorage.getItem("mypokemons");t("loadMyPokemons",n&&JSON.parse(n))},addNewPokemon:function(e,t){var n=e.commit;G.myPokemons.results.filter(function(e){return e.name===t.name}).length||(n("add",t),localStorage.setItem("mypokemons",JSON.stringify(G.myPokemons)))},removePokemons:function(e,t){var n=e.commit;n("remove",t)}},Q={loadMyPokemons:function(e,t){t&&(e.myPokemons=t)},selectInMyPokemon:function(e,t){e.selectInMyPokemon=t},remove:function(e,t){e.myPokemons.results=e.myPokemons.results.filter(function(e){return e.name!==t.name}),e.myPokemons.count--},add:function(e,t){e.myPokemons.results.push(Object(z["a"])({},t)),e.myPokemons.count++}},R={state:G,mutations:Q,actions:H,getters:K};o["default"].use(N["a"]);var W=new N["a"].Store({modules:{pokemon:q,myPokemon:R}}),ee=W,te=n("XJYT"),ne=n.n(te),oe=(n("D66Q"),n("stYL")),se=n.n(oe);n("fxB9");o["default"].use(ne.a,{locale:se.a}),o["default"].config.productionTip=!1,new o["default"]({store:ee,render:function(e){return e(L)}}).$mount("#app")},ZL7j:function(e,t,n){"use strict";var o=n("EDI0"),s=n.n(o);s.a},cX4x:function(e,t,n){"use strict";var o=n("rAuu"),s=n.n(o);s.a},"e+7i":function(e,t,n){},iPYi:function(e,t,n){"use strict";var o=n("L4G5"),s=n.n(o);s.a},j96Y:function(e,t,n){"use strict";var o=n("tuIl"),s=n.n(o);s.a},rAuu:function(e,t,n){},"rL+V":function(e,t,n){"use strict";var o=n("e+7i"),s=n.n(o);s.a},tuIl:function(e,t,n){}});
//# sourceMappingURL=app.1bc0c110.js.map