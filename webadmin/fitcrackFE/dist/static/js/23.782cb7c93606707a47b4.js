webpackJsonp([23],{496:function(t,a,n){"use strict";function e(t){n(950)}Object.defineProperty(a,"__esModule",{value:!0});var i=n(688),s=n(952),d=n(39),o=e,r=d(i.a,s.a,!1,o,"data-v-2dfd2f86",null);a.default=r.exports},506:function(t,a,n){"use strict";a.a={name:"FcTile",props:{title:String,loading:Boolean,icon:String}}},508:function(t,a,n){"use strict";var e=n(506),i=n(510),s=n(39),d=s(e.a,i.a,!1,null,null,null);a.a=d.exports},510:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-card",{staticClass:"mx-auto",attrs:{flat:""}},[n("v-card-title",[t.icon?n("v-icon",{attrs:{left:""}},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),n("v-card-text",{staticClass:"contentFcTile"},[t.loading?n("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"article"}}):t._t("default")],2)],1)},i=[],s={render:e,staticRenderFns:i};a.a=s},688:function(t,a,n){"use strict";var e=n(508);a.a={name:"MaskDetailView",components:{"fc-tile":e.a},data:function(){return{data:null,edit:!1,newData:""}},mounted:function(){this.loadData()},methods:{loadData:function(t){var a=this;this.axios.get(this.$serverAddr+"/masks/"+this.$route.params.id).then(function(t){a.data=t.data})},update:function(t){console.log("text updated"),this.newData=t.target.innerText},saveMask:function(){var t=this;""!==this.newData&&this.axios.post(this.$serverAddr+"/masks/"+this.data.id+"/update",{newMaskSet:this.newData}).then(function(a){console.log(a.data),t.edit=!1})}}}},950:function(t,a,n){var e=n(951);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n(471)("8148fd48",e,!0,{})},951:function(t,a,n){a=t.exports=n(470)(!0),a.push([t.i,".dictContentContainer[data-v-2dfd2f86]{max-width:800px}.dictContent[data-v-2dfd2f86]{overflow:auto;background:#eee}.code[data-v-2dfd2f86]:before{display:none}.code[data-v-2dfd2f86]{width:100%;background:transparent;color:#000}.width100[data-v-2dfd2f86]{width:100%}.margintop5[data-v-2dfd2f86]{margin-top:10px}","",{version:3,sources:["/home/runner/work/fitcrack/fitcrack/webadmin/fitcrackFE/src/components/mask/maskDetailView.vue"],names:[],mappings:"AACA,uCACE,eAAiB,CAClB,AACD,8BACE,cAAe,AACf,eAAiB,CAClB,AAGD,8BACE,YAAc,CACf,AACD,uBACE,WAAY,AACZ,uBAAwB,AACxB,UAAY,CACb,AACD,2BACE,UAAY,CACb,AACD,6BACE,eAAiB,CAClB",file:"maskDetailView.vue",sourcesContent:["\n.dictContentContainer[data-v-2dfd2f86] {\n  max-width: 800px;\n}\n.dictContent[data-v-2dfd2f86] {\n  overflow: auto;\n  background: #eee;\n}\n.dictContent.editing[data-v-2dfd2f86] {\n}\n.code[data-v-2dfd2f86]::before {\n  display: none;\n}\n.code[data-v-2dfd2f86] {\n  width: 100%;\n  background: transparent;\n  color: #000;\n}\n.width100[data-v-2dfd2f86] {\n  width: 100%;\n}\n.margintop5[data-v-2dfd2f86] {\n  margin-top: 10px;\n}\n"],sourceRoot:""}])},952:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[null!=t.data?n("v-breadcrumbs",{attrs:{items:[{text:"Masks",to:{name:"masks"},exact:!0},{text:t.data.name}],divider:"/"}}):t._e(),t._v(" "),n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("fc-tile",{staticClass:"mx-2 dictContentContainer mb-4",attrs:{title:"Mask set",loading:null==t.data}},[null!=t.data?n("v-list",[n("v-list-item",[n("v-list-item-action",[t._v("\n              Name:\n            ")]),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-right"},[t._v("\n                "+t._s(t.data.name)+"\n              ")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list-item",[n("v-list-item-action",[t._v("\n              Added:\n            ")]),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-right"},[t._v("\n                "+t._s(t.$moment(t.data.time).format("DD.MM.YYYY HH:mm"))+"\n              ")])],1)],1)],1):t._e(),t._v(" "),n("v-row",{staticClass:"mx-2"},[n("v-col",[t.edit?n("v-btn",{staticClass:"ma-0",attrs:{outlined:"",color:"primary"},on:{click:t.saveMask}},[t._v("\n              Save "),n("v-icon",{staticClass:"ml-2"},[t._v("\n                mdi-save\n              ")])],1):n("v-btn",{staticClass:"ma-0",attrs:{outlined:"",color:"primary"},on:{click:function(a){t.edit=!0}}},[t._v("\n              Edit "),n("v-icon",{staticClass:"ml-2"},[t._v("\n                mdi-pencil\n              ")])],1),t._v(" "),n("v-btn",{staticClass:"ma-0",attrs:{outlined:"",color:"primary",href:t.$serverAddr+"/masks/"+t.data.id+"/download",target:"_blank"}},[t._v("\n              Download "),n("v-icon",{staticClass:"ml-2"},[t._v("mdi-download")])],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),null!=t.data?n("div",{staticClass:"dictContent pa-2",class:{editing:t.edit}},[n("code",{staticClass:"code elevation-0",attrs:{contenteditable:t.edit},on:{input:t.update}},[t._v(t._s(t.data.data))])]):t._e()],1)],1)],1)],1)},i=[],s={render:e,staticRenderFns:i};a.a=s}});
//# sourceMappingURL=23.782cb7c93606707a47b4.js.map