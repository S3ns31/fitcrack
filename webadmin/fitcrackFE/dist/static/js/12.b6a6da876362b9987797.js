webpackJsonp([12],{483:function(t,e,n){"use strict";function i(t){n(899)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(674),r=n(905),o=n(39),s=i,l=o(a.a,r.a,!1,s,"data-v-4b289c80",null);e.default=l.exports},506:function(t,e,n){"use strict";e.a={name:"FcTile",props:{title:String,loading:Boolean,icon:String}}},507:function(t,e,n){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en-US";return new Intl.NumberFormat(n,e).format(parseFloat(t))}},508:function(t,e,n){"use strict";var i=n(506),a=n(510),r=n(39),o=r(i.a,a.a,!1,null,null,null);e.a=o.exports},509:function(t,e,n){t.exports={default:n(515),__esModule:!0}},510:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{flat:""}},[n("v-card-title",[t.icon?n("v-icon",{attrs:{left:""}},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),n("v-card-text",{staticClass:"contentFcTile"},[t.loading?n("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"article"}}):t._t("default")],2)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},511:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=n(512),r=i(a),o=n(509),s=i(o);e.default=function(){function t(t,e){var n=[],i=!0,a=!1,r=void 0;try{for(var o,l=(0,s.default)(t);!(i=(o=l.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){a=!0,r=t}finally{try{!i&&l.return&&l.return()}finally{if(a)throw r}}return n}return function(e,n){if(Array.isArray(e))return e;if((0,r.default)(Object(e)))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},512:function(t,e,n){t.exports={default:n(513),__esModule:!0}},513:function(t,e,n){n(199),n(40),t.exports=n(514)},514:function(t,e,n){var i=n(41),a=n(3)("iterator"),r=n(8);t.exports=n(2).isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||r.hasOwnProperty(i(e))}},515:function(t,e,n){n(199),n(40),t.exports=n(516)},516:function(t,e,n){var i=n(6),a=n(42);t.exports=n(2).getIterator=function(t){var e=a(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},519:function(t,e,n){"use strict";var i=n(528),a=n.n(i),r=n(509),o=n.n(r),s=n(511),l=n.n(s);e.a={name:"FileUploader",props:{multiple:Boolean,url:{type:String,default:this.$serverAddr},noUpload:Boolean,label:{type:String,default:"Select files"},args:{type:Object,default:function(){}}},data:function(){return{selectedFiles:[],files:null,progress:0,showProgress:!1,fileUploaded:!1}},computed:{overSizeLimit:function(){return this.selectedFiles.some(function(t){return t.size>2e9})}},methods:{uploadChange:function(t){this.progress=Math.round(100*t.loaded/t.total),console.log(this.progress)},fileChange:function(t){this.files=new FormData,this.selectedFiles=[];for(var e=0;e<t.length;e++)this.selectedFiles.push({name:t[e].name,type:t[e].type||"n/a",size:t[e].size,modified:t[e].lastModifiedDate?t[e].lastModifiedDate.toLocaleDateString():"n/a"}),this.files.append("file",t[e],t[e].name);if(this.args){var n=!0,i=!1,r=void 0;try{for(var s,c=o()(a()(this.args));!(n=(s=c.next()).done);n=!0){var d=s.value,u=l()(d,2),v=u[0],f=u[1];this.files.append(v,f)}}catch(t){i=!0,r=t}finally{try{!n&&c.return&&c.return()}finally{if(i)throw r}}}this.fileUploaded=!1,this.progress=0,this.$emit("filesChanged",t)},upload:function(){var t=this;this.showProgress=!0;var e={withCredentials:!0,headers:{"Content-type":"multipart/form-data"},onUploadProgress:this.uploadChange};this.axios.post(this.url,this.files,e).then(function(e){t.fileUploaded=!0,t.$emit("uploadComplete",e.data),t.files=null}).catch(function(t){console.log(t)})}}}},523:function(t,e,n){var i=n(23),a=n(24),r=n(201).f;t.exports=function(t){return function(e){for(var n,o=a(e),s=i(o),l=s.length,c=0,d=[];l>c;)r.call(o,n=s[c++])&&d.push(t?[n,o[n]]:o[n]);return d}}},528:function(t,e,n){t.exports={default:n(529),__esModule:!0}},529:function(t,e,n){n(530),t.exports=n(2).Object.entries},530:function(t,e,n){var i=n(5),a=n(523)(!0);i(i.S,"Object",{entries:function(t){return a(t)}})},532:function(t,e,n){"use strict";function i(t){n(533)}var a=n(519),r=n(535),o=n(39),s=i,l=o(a.a,r.a,!1,s,"data-v-1c1e87be",null);e.a=l.exports},533:function(t,e,n){var i=n(534);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(471)("60faad44",i,!0,{})},534:function(t,e,n){e=t.exports=n(470)(!0),e.push([t.i,".uploadInput[data-v-1c1e87be]{max-width:250px}.form[data-v-1c1e87be]{max-width:100%;text-align:center}.uploadButton[data-v-1c1e87be]{margin-top:15px}.spacer[data-v-1c1e87be]{width:10px}","",{version:3,sources:["/home/runner/work/fitcrack/fitcrack/webadmin/fitcrackFE/src/components/fileUploader/fileUploader.vue"],names:[],mappings:"AACA,8BACE,eAAiB,CAClB,AACD,uBACE,eAAgB,AAChB,iBAAmB,CACpB,AACD,+BACE,eAAiB,CAClB,AACD,yBACE,UAAY,CACb",file:"fileUploader.vue",sourcesContent:["\n.uploadInput[data-v-1c1e87be] {\n  max-width: 250px;\n}\n.form[data-v-1c1e87be] {\n  max-width: 100%;\n  text-align: center;\n}\n.uploadButton[data-v-1c1e87be] {\n  margin-top: 15px;\n}\n.spacer[data-v-1c1e87be] {\n  width: 10px;\n}\n"],sourceRoot:""}])},535:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-0 mt-0"},[t.overSizeLimit?n("v-alert",{attrs:{type:"error",tile:""}},[t._v("\n    Maximum size of uploaded file is 2 GB.\n  ")]):t._e(),t._v(" "),n("form",{staticClass:"form pa-2",attrs:{enctype:"multipart/form-data"}},[n("v-file-input",{staticClass:"mr-2",attrs:{outlined:"",chips:"","show-size":"",label:t.label,name:"file",multiple:t.multiple},on:{change:t.fileChange}}),t._v(" "),t.noUpload?t._e():n("v-btn",{attrs:{color:"primary",outlined:"",disabled:null===t.files||t.overSizeLimit},on:{click:function(e){return t.upload()}}},[t._v("\n      Upload\n      "),n("v-icon",{attrs:{right:""}},[t._v("\n        mdi-upload\n      ")])],1)],1),t._v(" "),n("v-progress-linear",{attrs:{query:!0,active:t.showProgress,color:"primary"},model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress"}})],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},674:function(t,e,n){"use strict";var i=n(507),a=n(508),r=n(901),o=n(532);e.a={name:"DictionariesView",components:{FileUploader:o.a,"fc-tile":a.a,"server-browser":r.a},data:function(){return{loading:!1,headers:[{text:"Name",align:"start",value:"name"},{text:"Keyspace",value:"keyspace",align:"end"},{text:"Time",value:"time",align:"end"},{text:"Actions",value:"actions",align:"end",sortable:!1}],dictionaries:[],browser:!1,uploader:!1,sortUploaded:!1}},mounted:function(){this.loadDictionaries()},methods:{fmt:i.a,loadDictionaries:function(){var t=this;this.loading=!0,this.axios.get(this.$serverAddr+"/dictionary",{}).then(function(e){t.dictionaries=e.data,t.loading=!1})},deleteDictionary:function(t){var e=this;this.$root.$confirm("Delete","This will remove "+t.name+" from your dictionaries. Are you sure?").then(function(n){e.loading=!0,e.axios.delete(e.$serverAddr+"/dictionary/"+t.id).then(function(t){e.loadDictionaries()})})}}}},675:function(t,e,n){"use strict";var i=n(25),a=n.n(i),r=n(508);e.a={name:"ServerBrowser",components:{"fc-tile":r.a},props:{sort:Boolean},data:function(){return{data:null,selectedFiles:{},adding:!1}},mounted:function(){this.loadDirectory("/")},methods:{loadDirectory:function(t){var e=this;this.axios.get(this.$serverAddr+"/directory",{params:{path:t}}).then(function(t){e.data=t.data})},fileSelected:function(t,e){void 0===this.selectedFiles[e]||null===this.selectedFiles[e]?this.$set(this.selectedFiles,e,{name:t,path:e}):this.$delete(this.selectedFiles,e)},upload:function(){var t=this;this.adding=!0;var e=a()(this.selectedFiles).map(function(t){return{name:this.selectedFiles[t].name,path:this.selectedFiles[t].path}}.bind(this));this.axios.post(this.$serverAddr+"/dictionary/fromFile",{files:e,sort:this.sort}).then(function(e){t.adding=!1,t.$emit("filesuploaded",!0)}).catch(function(e){t.adding=!1,t.$emit("filesuploaded",!1)})}}}},899:function(t,e,n){var i=n(900);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(471)("c6f08334",i,!0,{})},900:function(t,e,n){e=t.exports=n(470)(!0),e.push([t.i,".noEvent[data-v-4b289c80]{pointer-events:none;display:inline-block}.dz-message[data-v-4b289c80]{cursor:pointer;text-align:right}.max500[data-v-4b289c80]{max-width:770px}","",{version:3,sources:["/home/runner/work/fitcrack/fitcrack/webadmin/fitcrackFE/src/components/dictionary/dictionariesView.vue"],names:[],mappings:"AACA,0BACE,oBAAqB,AACrB,oBAAsB,CACvB,AACD,6BACE,eAAgB,AAChB,gBAAkB,CACnB,AACD,yBACE,eAAiB,CAClB",file:"dictionariesView.vue",sourcesContent:["\n.noEvent[data-v-4b289c80] {\n  pointer-events: none;\n  display: inline-block;\n}\n.dz-message[data-v-4b289c80] {\n  cursor: pointer;\n  text-align: right;\n}\n.max500[data-v-4b289c80] {\n  max-width: 770px;\n}\n\n"],sourceRoot:""}])},901:function(t,e,n){"use strict";function i(t){n(902)}var a=n(675),r=n(904),o=n(39),s=i,l=o(a.a,r.a,!1,s,"data-v-24e78942",null);e.a=l.exports},902:function(t,e,n){var i=n(903);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(471)("abfbb618",i,!0,{})},903:function(t,e,n){e=t.exports=n(470)(!0),e.push([t.i,".selected[data-v-24e78942]{background:rgba(37,157,173,.85)!important}.selected .whiteAfterSelected[data-v-24e78942]{color:#fff!important}.dictContentContainer[data-v-24e78942]{max-width:500px}.filesCont[data-v-24e78942]{height:-webkit-max-content;height:-moz-max-content;height:max-content;max-height:500px;overflow:auto}","",{version:3,sources:["/home/runner/work/fitcrack/fitcrack/webadmin/fitcrackFE/src/components/serverBrowser/serverBrowser.vue"],names:[],mappings:"AACA,2BACE,yCAAgD,CACjD,AACD,+CACE,oBAAwB,CACzB,AACD,uCACE,eAAiB,CAClB,AACD,4BACE,2BAA4B,AAC5B,wBAAyB,AACzB,mBAAoB,AACpB,iBAAkB,AAClB,aAAe,CAChB",file:"serverBrowser.vue",sourcesContent:["\n.selected[data-v-24e78942] {\n  background: rgba(37, 157, 173, 0.85) !important;\n}\n.selected .whiteAfterSelected[data-v-24e78942] {\n  color: white !important;\n}\n.dictContentContainer[data-v-24e78942] {\n  max-width: 500px;\n}\n.filesCont[data-v-24e78942] {\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  max-height: 500px;\n  overflow: auto;\n}\n"],sourceRoot:""}])},904:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fc-tile",{staticClass:"mx-auto dictContentContainer",attrs:{title:t.data?t.data.path||"Server browser":"Connecting...",icon:"mdi-server-network"}},[null!==t.data?n("v-list",{staticClass:"filesCont",attrs:{tile:"",nav:""}},[n("v-list-item",{directives:[{name:"show",rawName:"v-show",value:""!==t.data.parent,expression:"data.parent !== ''"}],on:{click:function(e){return t.loadDirectory(t.data.parent)}}},[n("v-list-item-action",[n("v-icon",[t._v("keyboard_backspace")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("..")]),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(t.data.parent))])],1)],1),t._v(" "),n("v-list-item",{directives:[{name:"show",rawName:"v-show",value:0==t.data.folders.length&&0==t.data.files.length,expression:"data.folders.length == 0 && data.files.length == 0"}]},[n("v-list-item-action",[n("v-icon",[t._v("mdi-folder-alert")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Empty folder")]),t._v(" "),n("v-list-item-subtitle",[t._v("Go up or add files on server")])],1)],1),t._v(" "),t._l(t.data.folders,function(e){return n("v-list-item",{key:e.name,on:{click:function(n){return t.loadDirectory(e.path)}}},[n("v-list-item-action",[n("v-icon",[t._v("folder")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.name))]),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(e.path))])],1)],1)}),t._v(" "),t._l(t.data.files,function(e){return n("v-list-item",{key:e.name,class:{selected:void 0!==t.selectedFiles[e.path]&&null!==t.selectedFiles[e.path]},on:{click:function(n){return t.fileSelected(e.name,e.path)}}},[n("v-list-item-action",[n("v-icon",{staticClass:"whiteAfterSelected"},[t._v("\n          insert_drive_file\n        ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"whiteAfterSelected"},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),n("v-list-item-subtitle",{staticClass:"whiteAfterSelected"},[t._v("\n          "+t._s(e.path)+"\n        ")])],1)],1)})],2):t._e(),t._v(" "),Object.keys(t.selectedFiles).length>0?n("div",[n("v-divider"),t._v(" "),n("v-card-title",[t._v("Selected files:")]),t._v(" "),t._l(t.selectedFiles,function(e){return n("v-card-text",{key:e.name,staticClass:"my-0 py-0"},[t._v("\n      "+t._s(e.path)+"\n    ")])}),t._v(" "),n("v-btn",{staticClass:"selectBtn d-block mx-auto",attrs:{color:"primary"},on:{click:t.upload}},[t._v("\n      Select\n    ")])],2):t._e()],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},905:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"max500"},[n("fc-tile",{staticClass:"ma-2",attrs:{title:"Dictionaries",icon:t.$route.meta.icon}},[n("v-alert",{staticClass:"mb-0",attrs:{tile:"",text:"",type:"warning"}},[t._v("\n      Dictionaries must have a .txt extension.\n    ")]),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.dictionaries.items,loading:t.loading,"footer-props":{itemsPerPageOptions:[10,25,50],itemsPerPageText:"Dictionaries per page"}},scopedSlots:t._u([{key:"item.name",fn:function(e){var i=e.item;return[n("router-link",{attrs:{to:"dictionaries/"+i.id}},[t._v("\n          "+t._s(i.name)+"\n        ")])]}},{key:"item.time",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(t.$moment(n.time).format("DD.MM.YYYY HH:mm"))+"\n      ")]}},{key:"item.keyspace",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(t.fmt(n.keyspace))+"\n      ")]}},{key:"item.actions",fn:function(e){var i=e.item;return[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("a",t._g({attrs:{href:t.$serverAddr+"/dictionary/"+i.id+"/download",target:"_blank",download:""}},a),[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-file-download-outline")])],1)],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Download")])]),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({staticClass:"mx-0",attrs:{icon:""},on:{click:function(e){return t.deleteDictionary(i)}}},a),[n("v-icon",{attrs:{color:"error"}},[t._v("\n                mdi-delete-outline\n              ")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Delete dictionary")])])]}}])}),t._v(" "),t.$userCan("UPLOAD_DICTIONARIES")?n("v-card-actions",[n("v-checkbox",{attrs:{label:"Sort on upload",hint:"Sort by password length","persistent-hint":""},model:{value:t.sortUploaded,callback:function(e){t.sortUploaded=e},expression:"sortUploaded"}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",outlined:""},nativeOn:{click:function(e){e.stopPropagation(),t.browser=!0}}},[t._v("\n        Add from server\n      ")]),t._v(" "),n("v-btn",{attrs:{color:"primary",outlined:""},nativeOn:{click:function(e){e.stopPropagation(),t.uploader=!0}}},[t._v("\n        Upload new\n      ")])],1):t._e()],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.browser,callback:function(e){t.browser=e},expression:"browser"}},[n("server-browser",{attrs:{sort:t.sortUploaded},on:{filesuploaded:function(e){t.browser=!1,t.loadDictionaries()}}})],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.uploader,callback:function(e){t.uploader=e},expression:"uploader"}},[n("v-card",[n("v-card-title",[t._v("\n        Upload a dictionary file\n      ")]),t._v(" "),n("v-card-text",[n("file-uploader",{attrs:{url:this.$serverAddr+"/dictionary/add",args:{sort:t.sortUploaded}},on:{uploadComplete:function(e){t.uploader=!1,t.loadDictionaries()}}})],1)],1)],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r}});
//# sourceMappingURL=12.b6a6da876362b9987797.js.map