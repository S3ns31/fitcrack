webpackJsonp([20],{463:function(t,e,n){"use strict";function a(t){n(640)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(572),s=n(642),r=n(39),o=a,c=r(i.a,s.a,!1,o,"data-v-1bc0877d",null);e.default=c.exports},513:function(t,e,n){"use strict";function a(t){var e={stateKey:"instances",instanceKey:"id"};return"function"==typeof t[0]?{callback:t[0],config:e}:{callback:t[1],config:Object.assign({},e,t[0])}}function i(t,e,n){return Array.isArray(e[t.stateKey])?"object"===(void 0===n?"undefined":p(n))&&void 0!==n[t.instanceKey]||(console.error('Mutation payloads must be an object with an "'+t.instanceKey+'" property.'),!1):(console.error('State does not contain an "'+t.stateKey+'" array.'),!1)}function s(t){return Object.keys(t).map(function(e){return[e,t[e]]})}function r(t,e){var n=h(e,2),a=n[0],i=n[1];return t[a]=i,t}function o(t){return s(t).map(g).reduce(r,{})}function c(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";return(Array.isArray(e)?e:e.split(n)).reduce(function(t,e){return t&&t[e]},t)}function l(t){for(var e=arguments.length,n=Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];throw new(Function.prototype.bind.apply(Error,[null].concat(["[spyfu-vuex-helpers]: "+t],n)))}function d(){var t=u(arguments),e=t.namespace,n=t.mappings,a=m(n),i={};return Object.keys(a).forEach(function(t){i[t]={get:v(e,a[t]),set:b(e,a[t])}}),i}function u(t){var e=t[0],n=t[1];return"string"==typeof e?{namespace:e,mappings:n}:{namespace:null,mappings:e}}function m(t){var e={};return Array.isArray(t)&&l("Invalid arguments for mapTwoWayState. State mapping must be an object in { 'path.to.state': 'mutationName' } format."),Object.keys(t).forEach(function(n){var a=t[n],i=n.slice(n.lastIndexOf(".")+1);e[i]="string"==typeof a?{key:n,mutation:a}:{key:a.key,mutation:a.mutation}}),e}function v(t,e){return t?function(){return c(c(this.$store.state,t,"/"),e.key,".")}:function(){return c(this.$store.state,e.key,".")}}function b(t,e){var n=e.mutation;return t&&(n=t+"/"+n),function(t){this.$store.commit(n,t)}}n.d(e,"a",function(){return d});var f=n(189),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=(Object.assign,function(){function t(t,e){var n=[],a=!0,i=!1,s=void 0;try{for(var r,o=t[Symbol.iterator]();!(a=(r=o.next()).done)&&(n.push(r.value),!e||n.length!==e);a=!0);}catch(t){i=!0,s=t}finally{try{!a&&o.return&&o.return()}finally{if(i)throw s}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),A=function(){var t=a(arguments),e=t.config,n=t.callback;return function(t,a){if(i(e,t,a)){var s=t[e.stateKey].find(function(t){return t[e.instanceKey]===a[e.instanceKey]});s&&n(s,a,t)}}};A.config=function(t){return A.bind(null,t)};var g=function(t){var e=h(t,2),n=e[0],a=e[1];return[n,function(){var t=a.apply(this,arguments);if("function"!=typeof t)throw"The getter "+n+" does not return a function. Try using the 'mapGetter' helper instead";return t(this.id)}]};f.c},518:function(t,e,n){"use strict";function a(t){return{ready:"mdi-play-circle-outline",running:"mdi-dots-vertical-circle-outline",finished:"mdi-checkbox-marked-circle-outline",exhausted:"mdi-close-circle-outline",malformed:"mdi-alert-circle-outline",finishing:"mdi-progress-clock"}[t]||"mdi-help-circle-outline"}function i(t){switch(t){case"dictionary":return"mdi-dictionary";case"combinator":return"mdi-vector-combine";case"maskattack":case"mask":return"mdi-nuke";case"hybridWordlistMask":case"hybrid (Wordlist + Mask)":return"mdi-vector-difference-ba";case"hybridMaskWordlist":case"hybrid (Mask + Wordlist)":return"mdi-vector-difference-ab";case"pcfgAttack":case"pcfg":return"mdi-ray-start-end";case"princeAttack":case"prince":return"mdi-crown";default:return"mdi-checkbox-blank-outline"}}e.b=a,e.a=i},572:function(t,e,n){"use strict";var a=n(23),i=n.n(a),s=n(24),r=n.n(s),o=n(44),c=n.n(o),l=n(518),d=n(513),u=n(14),m=n(189);e.a={name:"JobsView",data:function(){return{interval:null,renamingBin:!1,newBinName:null,status:null,attackType:null,search:"",totalItems:0,pagination:{},loading:!0,headers:[{text:"Name",align:"start",value:"name"},{text:"Attack type",value:"attack",align:"end",sortable:!1},{text:"Status",value:"status",align:"end"},{text:"Progress",value:"progress",align:"end"},{text:"Added",value:"time",align:"end"},{text:"Actions",value:"actions",sortable:!1,align:"end"}],jobs_statuses:[{text:"ready",code:0},{text:"finished",code:1},{text:"exhausted",code:2},{text:"malformed",code:3},{text:"timeout",code:4},{text:"running",code:10},{text:"finishing",code:12}],jobs_types:[{text:"dictionary",code:0},{text:"mask",code:1},{text:"combinator",code:2},{text:"pcfg",code:3}],jobs:[]}},computed:c()({},Object(d.a)("binInterface",Object(u.c)(["selectedJobs"])),{isTrash:function(){return"trash"===this.$route.params.id},isBin:function(){return"bins"===this.$route.name&&!this.isTrash},binId:function(){return parseInt(this.$route.params.id)},binName:function(){var t=this,e=this.$store.state.binInterface.bins.find(function(e){return e.id==t.binId});return e?e.name:void 0},binTitle:function(){return this.binName?this.binName:this.isTrash?"Discarded Jobs":"All Jobs"}}),watch:{pagination:{handler:"updateList",deep:!0},$route:"updateList"},mounted:function(){this.interval=setInterval(function(){this.loadJobs()}.bind(this),15e3)},beforeDestroy:function(){clearInterval(this.interval),this.selectedJobs=[]},methods:c()({},Object(m.b)("binInterface",{renameBin:"rename",deleteBin:"delete"}),{loadJobs:function(){var t=this;return r()(i.a.mark(function e(){var n,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.isBin?"/bins/"+t.binId:"/job",e.next=3,t.axios.get(t.$serverAddr+n,{params:{page:t.pagination.page,per_page:t.pagination.itemsPerPage,order_by:t.pagination.sortBy[0],descending:t.pagination.sortDesc[0],name:t.search,status:t.status,attack_mode:t.attackType,showDeleted:t.isTrash}}).then(function(t){return t.data});case 3:a=e.sent,t.jobs=t.isBin?a.jobs:a.items,t.totalItems=t.isBin?a.jobs.length:a.total,t.loading=!1;case 7:case"end":return e.stop()}},e,t)}))()},updateList:function(){this.selectedJobs=[],this.loading=!0,this.loadJobs()},updateStatus:function(t){this.status=t,this.$refs.table.updatePagination({page:1,totalItems:this.totalItems})},progressToPercentage:function(t){return t>100&&(t=100),t.toFixed()+"%"},operateJob:function(t,e){var n=this;this.axios.get(this.$serverAddr+"/job/"+t+"/action",{params:{operation:e}}).then(function(t){console.log(t.data),n.loadJobs()})},hideJob:function(t){var e=this;this.loading=!0,this.axios.delete(this.$serverAddr+"/job/"+t).then(function(t){e.loadJobs()})},focusRenameInput:function(){this.renamingBin&&this.$refs.binRenameField.focus()},renameBinExec:function(){var t=this;this.renameBin({id:this.binId,newName:this.newBinName}).then(function(){t.renamingBin=!1})},renameBinKeyHandler:function(t){switch(t.keyCode){case 13:this.renameBinExec();break;case 27:this.renamingBin=!1}},deleteBinConfirm:function(){var t=this;this.$root.$confirm("Delete","This will remove "+this.binName+". Jobs will be unassigned from the deleted bin, but will not be discarded. Are you sure?").then(function(e){t.deleteBin(t.binId)})},jobIcon:l.b,attackIcon:l.a})}},640:function(t,e,n){var a=n(641);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(461)("a79ea5d2",a,!0,{})},641:function(t,e,n){e=t.exports=n(460)(!0),e.push([t.i,".back-margin[data-v-1bc0877d]{margin:0 -.3em}.toolbar-cont[data-v-1bc0877d]{position:relative;height:4.15em}.toolbar-module[data-v-1bc0877d]{position:absolute;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;width:100%}@media screen and (max-width:60em){.toolbar-cont[data-v-1bc0877d]{height:auto}.toolbar-module[data-v-1bc0877d]{position:static}}.search-field[data-v-1bc0877d]{min-width:15em}.cont[data-v-1bc0877d]{height:100%}.actionsBtns[data-v-1bc0877d]{text-align:right}.table-link[data-v-1bc0877d]{font-weight:700}.swap-pad[data-v-1bc0877d]{padding:1.05em}.swap-enter-active[data-v-1bc0877d],.swap-leave-active[data-v-1bc0877d]{-webkit-transition:-webkit-transform .2s cubic-bezier(.785,.135,.15,.86);transition:-webkit-transform .2s cubic-bezier(.785,.135,.15,.86);transition:transform .2s cubic-bezier(.785,.135,.15,.86);transition:transform .2s cubic-bezier(.785,.135,.15,.86),-webkit-transform .2s cubic-bezier(.785,.135,.15,.86)}.swap-leave-to[data-v-1bc0877d]{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.swap-enter[data-v-1bc0877d]{-webkit-transform:translateY(100%);transform:translateY(100%)}.fade-enter-active[data-v-1bc0877d],.fade-leave-active[data-v-1bc0877d]{-webkit-transition:opacity .1s,-webkit-transform .2s cubic-bezier(.16,1,.3,1);transition:opacity .1s,-webkit-transform .2s cubic-bezier(.16,1,.3,1);transition:opacity .1s,transform .2s cubic-bezier(.16,1,.3,1);transition:opacity .1s,transform .2s cubic-bezier(.16,1,.3,1),-webkit-transform .2s cubic-bezier(.16,1,.3,1)}.fade-leave-to[data-v-1bc0877d]{opacity:0}.fade-enter[data-v-1bc0877d]{-webkit-transform:translateX(10%);transform:translateX(10%)}","",{version:3,sources:["/home/runner/work/fitcrack/fitcrack/webadmin/fitcrackFE/src/components/job/jobsView.vue"],names:[],mappings:"AACA,8BACE,cAAgB,CACjB,AACD,+BACE,kBAAmB,AACnB,aAAc,CACf,AACD,iCACE,kBAAmB,AACnB,2BAA4B,AACxB,uBAAwB,AAC5B,UAAW,CACZ,AACD,mCACA,+BACI,WAAa,CAChB,AACD,iCACI,eAAiB,CACpB,CACA,AACD,+BACE,cAAgB,CACjB,AACD,uBACE,WAAa,CACd,AACD,8BACE,gBAAkB,CACnB,AACD,6BACE,eAAkB,CACnB,AACD,2BACE,cAAgB,CACjB,AACD,wEACE,yEAAiF,AACjF,iEAAyE,AACzE,yDAAiE,AACjE,8GAA+H,CAChI,AACD,gCACE,oCAAqC,AAC7B,2BAA4B,CACrC,AACD,6BACE,mCAAoC,AAC5B,0BAA2B,CACpC,AACD,wEACE,8EAAqF,AACrF,sEAA6E,AAC7E,8DAAqE,AACrE,4GAA0H,CAC3H,AACD,gCACE,SAAW,CACZ,AACD,6BACE,kCAAmC,AAC3B,yBAA0B,CACnC",file:"jobsView.vue",sourcesContent:["\n.back-margin[data-v-1bc0877d] {\n  margin: 0 -.3em;\n}\n.toolbar-cont[data-v-1bc0877d] {\n  position: relative;\n  height:4.15em;\n}\n.toolbar-module[data-v-1bc0877d] {\n  position: absolute;\n  -ms-flex-wrap: wrap-reverse;\n      flex-wrap: wrap-reverse;\n  width:100%;\n}\n@media screen and (max-width: 60em) {\n.toolbar-cont[data-v-1bc0877d] {\n    height: auto;\n}\n.toolbar-module[data-v-1bc0877d] {\n    position: static;\n}\n}\n.search-field[data-v-1bc0877d] {\n  min-width: 15em;\n}\n.cont[data-v-1bc0877d] {\n  height: 100%;\n}\n.actionsBtns[data-v-1bc0877d]{\n  text-align: right;\n}\n.table-link[data-v-1bc0877d] {\n  font-weight: bold;\n}\n.swap-pad[data-v-1bc0877d] {\n  padding: 1.05em;\n}\n.swap-enter-active[data-v-1bc0877d], .swap-leave-active[data-v-1bc0877d] {\n  -webkit-transition: -webkit-transform .2s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: -webkit-transform .2s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: transform .2s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: transform .2s cubic-bezier(0.785, 0.135, 0.15, 0.86), -webkit-transform .2s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n.swap-leave-to[data-v-1bc0877d] {\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%)\n}\n.swap-enter[data-v-1bc0877d] {\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%)\n}\n.fade-enter-active[data-v-1bc0877d], .fade-leave-active[data-v-1bc0877d] {\n  -webkit-transition: opacity .1s, -webkit-transform .2s cubic-bezier(0.16, 1, 0.3, 1);\n  transition: opacity .1s, -webkit-transform .2s cubic-bezier(0.16, 1, 0.3, 1);\n  transition: opacity .1s, transform .2s cubic-bezier(0.16, 1, 0.3, 1);\n  transition: opacity .1s, transform .2s cubic-bezier(0.16, 1, 0.3, 1), -webkit-transform .2s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.fade-leave-to[data-v-1bc0877d] {\n  opacity: 0;\n}\n.fade-enter[data-v-1bc0877d] {\n  -webkit-transform: translateX(10%);\n          transform: translateX(10%)\n}\n\n"],sourceRoot:""}])},642:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-toolbar",{attrs:{flat:""}},[n("v-chip",[n("v-fade-transition",{attrs:{mode:"out-in"}},[t.loading?n("v-progress-circular",{staticClass:"back-margin",attrs:{size:"16",width:"2",indeterminate:""}}):n("span",[t._v("\n          "+t._s(t.totalItems)+"\n        ")])],1)],1),t._v(" "),n("h2",{staticClass:"ml-4"},[t._v("\n      "+t._s(t.binTitle)+"\n      "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.lgAndUp,expression:"$vuetify.breakpoint.lgAndUp"}],staticClass:"text--secondary"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.status||t.attackType,expression:"status || attackType"}]},[t._v("that")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}]},[t._v("are "+t._s(t.status))]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.status&&t.attackType,expression:"status && attackType"}]},[t._v("and")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.attackType,expression:"attackType"}]},[t._v("use "+t._s(t.attackType)+" attack")])])]),t._v(" "),n("v-spacer"),t._v(" "),t.isBin?n("div",[n("transition",{attrs:{name:"fade",mode:"out-in"},on:{enter:t.focusRenameInput}},[t.renamingBin?n("div",{key:"renameBinPanel",staticClass:"d-flex align-center"},[n("v-text-field",{ref:"binRenameField",staticClass:"mr-2",attrs:{placeholder:t.binName,"hide-details":""},on:{keydown:t.renameBinKeyHandler},model:{value:t.newBinName,callback:function(e){t.newBinName=e},expression:"newBinName"}}),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:t.renameBinExec}},[n("v-icon",{attrs:{left:""}},[t._v("\n              mdi-content-save\n            ")]),t._v("\n            Save\n          ")],1),t._v(" "),n("v-btn",{attrs:{text:"",ripple:!1},on:{click:function(e){t.renamingBin=!1}}},[n("v-icon",{attrs:{left:""}},[t._v("\n              mdi-undo-variant\n            ")]),t._v("\n            Cancel\n          ")],1)],1):n("div",{key:"binActionsPanel"},[n("v-btn",{attrs:{text:"",ripple:!1},on:{click:function(e){t.renamingBin=!0}}},[n("v-icon",{attrs:{left:""}},[t._v("\n              mdi-pencil\n            ")]),t._v("\n            Rename Bin\n          ")],1),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:t.deleteBinConfirm}},[n("v-icon",{attrs:{left:""}},[t._v("\n              mdi-delete\n            ")]),t._v("\n            Delete Bin\n          ")],1)],1)])],1):t._e()],1),t._v(" "),n("div",{staticClass:"overflow-hidden toolbar-cont"},[n("transition",{attrs:{name:"swap"}},[0==t.selectedJobs.length?n("div",{key:"filtersToolbar",staticClass:"toolbar-module d-flex justify-space-between align-center px-2"},[n("v-text-field",{staticClass:"mx-2 search-field",attrs:{clearable:"","prepend-icon":"mdi-table-search",label:"Search","single-line":""},on:{input:t.updateList},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-select",{staticClass:"mx-2",attrs:{items:t.jobs_statuses,label:"Status","single-line":"","item-text":"text","item-value":"text","prepend-icon":"mdi-timelapse",clearable:""},on:{change:t.updateList},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}}),t._v(" "),n("v-select",{staticClass:"mx-2",attrs:{items:t.jobs_types,label:"Attack type","single-line":"","item-text":"text","item-value":"text","prepend-icon":"mdi-crosshairs-gps",clearable:""},on:{change:t.updateList},model:{value:t.attackType,callback:function(e){t.attackType=e},expression:"attackType"}})],1):n("div",{key:"selectionToolbar",staticClass:"toolbar-module d-flex align-center swap-pad"},[n("v-btn",{staticClass:"mr-2",attrs:{text:"",color:"success",disabled:t.selectedJobs.length<2}},[n("v-icon",{attrs:{left:""}},[t._v("\n            mdi-tray-plus\n          ")]),t._v("\n          Batch Run\n        ")],1),t._v(" "),n("v-btn",{staticClass:"mr-2",attrs:{text:"",color:"warning"}},[n("v-icon",{attrs:{left:""}},[t._v("\n            mdi-desktop-classic\n          ")]),t._v("\n          Hosts\n        ")],1),t._v(" "),n("v-btn",{staticClass:"mr-2",attrs:{text:""}},[n("v-icon",{attrs:{left:""}},[t._v("\n            "+t._s(t.isTrash?"mdi-delete-restore":"mdi-delete")+"\n          ")]),t._v("\n          "+t._s(t.isTrash?"Restore":"Discard")+"\n        ")],1)],1)])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"mx-auto",attrs:{type:"table-thead, table-tbody, table-tfoot"}}),t._v(" "),n("v-data-table",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],ref:"table",attrs:{headers:t.headers,items:t.jobs,search:t.search,options:t.pagination,"server-items-length":t.totalItems,"footer-props":{itemsPerPageOptions:[25,10,50,100],itemsPerPageText:"Jobs per page"},"show-select":"","fixed-header":""},on:{"update:options":function(e){t.pagination=e}},scopedSlots:t._u([{key:"item.name",fn:function(e){var a=e.item;return[n("router-link",{staticClass:"table-link",attrs:{to:{name:"jobDetail",params:{id:a.id}}}},[t._v("\n        "+t._s(a.name)+"\n      ")])]}},{key:"item.attack",fn:function(e){var a=e.item;return[n("span",{staticClass:"text-capitalize"},[t._v("\n        "+t._s(a.attack)+"\n        "),n("v-icon",{attrs:{right:""}},[t._v("\n          "+t._s(t.attackIcon(a.attack))+"\n        ")])],1)]}},{key:"item.status",fn:function(e){var a=e.item;return[a.host_count>0?n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("span",t._g({class:[a.status_type+"--text","text-capitalize"]},i),[t._v("\n            "+t._s(a.status_text)+"\n            "),n("v-icon",{attrs:{right:"",color:a.status_type}},[t._v("\n              "+t._s(t.jobIcon(a.status_text))+"\n            ")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(a.status_tooltip))])]):n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("span",t._g({staticClass:"text-capitalize"},a),[t._v("\n            no hosts\n            "),n("v-icon",{attrs:{right:""}},[t._v("\n              mdi-alert\n            ")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("No hosts, open job detail and assign them!")])])]}},{key:"item.progress",fn:function(e){var a=e.item;return[n("div",{staticClass:"d-flex align-center justify-end"},[n("span",{staticClass:"mr-2"},[t._v(t._s(t.progressToPercentage(a.progress)))]),t._v(" "),n("v-progress-circular",{staticClass:"jobProgress",attrs:{size:"18",width:3,rotate:270,color:"primary",value:a.progress}})],1)]}},{key:"item.time",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.$moment(n.time).format("D.M.YYYY H:mm:ss"))+"\n    ")]}},{key:"item.actions",fn:function(e){var a=e.item;return[n("div",{staticClass:"actionsBtns"},["0"===a.status?n("v-btn",{attrs:{disabled:0==a.host_count,text:"",color:"success"},on:{click:function(e){return t.operateJob(a.id,"start")}}},[t._v("\n          Start\n          "),n("v-icon",{attrs:{right:""}},[t._v("\n            mdi-play\n          ")])],1):a.status<10?n("v-btn",{attrs:{text:"",color:"info"},on:{click:function(e){return t.operateJob(a.id,"restart")}}},[t._v("\n          Restart\n          "),n("v-icon",{attrs:{right:""}},[t._v("\n            mdi-restart\n          ")])],1):n("v-btn",{attrs:{text:"",color:"error"},on:{click:function(e){return t.operateJob(a.id,"stop")}}},[t._v("\n          Stop\n          "),n("v-icon",{attrs:{right:""}},[t._v("\n            mdi-stop\n          ")])],1),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({staticClass:"mx-0",attrs:{icon:""},on:{click:function(e){return t.hideJob(a.id)}}},i),[n("v-icon",[t._v("\n                "+t._s(t.isTrash?"mdi-delete-restore":"mdi-delete")+"\n              ")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(t.isTrash?"Restore":"Discard"))])])],1)]}}]),model:{value:t.selectedJobs,callback:function(e){t.selectedJobs=e},expression:"selectedJobs"}})],1)},i=[],s={render:a,staticRenderFns:i};e.a=s}});
//# sourceMappingURL=20.59cb44a3e6ca174d1c59.js.map