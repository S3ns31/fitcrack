webpackJsonp([23],{488:function(t,e,n){"use strict";function a(t){n(856)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(630),i=n(858),r=n(39),o=a,l=r(s.a,i.a,!1,o,"data-v-0db41fb0",null);e.default=l.exports},630:function(t,e,n){"use strict";var a=n(44),s=n.n(a),i=n(23),r=n.n(i),o=n(24),l=n.n(o);e.a={name:"Settings",data:function(){return{appearance:localStorage.getItem("appearance")||"auto",testmode:"true"==localStorage.getItem("testmode")||!1,settings:{},loading:!0,saving:!1}},computed:{appearanceHint:function(){switch(this.appearance){case"auto":return"Webadmin will change appearance dynamically based on your system theme";case"light":return"Webadmin will retain light appearance regardless of your system theme";case"dark":return"Webadmin will retain dark appearance regardless of your system theme";default:return}}},watch:{appearance:function(t){localStorage.setItem("appearance",t),"dark"==t&&(this.$vuetify.theme.dark=!0),"light"==t&&(this.$vuetify.theme.dark=!1),"auto"==t&&(this.$vuetify.theme.dark=window.matchMedia("(prefers-color-scheme: dark)").matches)},testmode:function(t){localStorage.setItem("testmode",t)}},mounted:function(){this.loadSettings()},methods:{loadSettings:function(){var t=this;return l()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.axios.get(t.$serverAddr+"/settings").then(function(t){return t.data});case 3:t.settings=e.sent,t.loading=!1;case 5:case"end":return e.stop()}},e,t)}))()},saveSettings:function(){var t=this;this.saving=!0,this.axios.post(this.$serverAddr+"/settings",s()({},this.settings)).then(function(){t.saving=!1,t.$store.state.jobForm.timeForJob=t.settings.default_seconds_per_workunit})}}}},856:function(t,e,n){var a=n(857);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(461)("5ff6614c",a,!0,{})},857:function(t,e,n){e=t.exports=n(460)(!0),e.push([t.i,".neutral[data-v-0db41fb0]{color:unset!important}","",{version:3,sources:["/home/runner/work/fitcrack/fitcrack/webadmin/fitcrackFE/src/components/settings/settingsView.vue"],names:[],mappings:"AACA,0BACE,qBAAuB,CACxB",file:"settingsView.vue",sourcesContent:["\n.neutral[data-v-0db41fb0] {\n  color: unset !important\n}\n"],sourceRoot:""}])},858:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",[n("v-card",{attrs:{flat:""}},[n("v-card-title",[n("v-icon",{attrs:{left:""}},[t._v("\n            mdi-palette\n          ")]),t._v(" "),n("span",[t._v("Appearance")])],1),t._v(" "),n("v-card-text",[n("v-btn-toggle",{attrs:{mandatory:"",color:"primary"},model:{value:t.appearance,callback:function(e){t.appearance=e},expression:"appearance"}},[n("v-btn",{attrs:{value:"auto"}},[n("v-icon",{staticClass:"neutral ml-0",attrs:{left:"",small:""}},[t._v("\n                mdi-creation\n              ")]),t._v(" "),n("span",[t._v("Automatic")])],1),t._v(" "),n("v-btn",{attrs:{value:"light"}},[n("v-icon",{staticClass:"neutral ml-0",attrs:{left:"",small:""}},[t._v("\n                mdi-brightness-5\n              ")]),t._v(" "),n("span",[t._v("Light")])],1),t._v(" "),n("v-btn",{attrs:{value:"dark"}},[n("v-icon",{staticClass:"neutral ml-0",attrs:{left:"",small:""}},[t._v("\n                mdi-brightness-2\n              ")]),t._v(" "),n("span",[t._v("Dark")])],1)],1),t._v(" "),n("div",{staticClass:"mt-2 ml-1"},[t._v("\n            "+t._s(t.appearanceHint)+"\n          ")])],1)],1),t._v(" "),n("v-card",{staticClass:"mt-6",attrs:{flat:""}},[n("v-card-title",[n("v-icon",{attrs:{left:""}},[t._v("\n            mdi-test-tube\n          ")]),t._v(" "),n("span",[t._v("Development")])],1),t._v(" "),n("v-card-text",[n("v-switch",{attrs:{label:"Developer mode",hint:"Enables useful utilities throughout the app when developing Fitcrack.","persistent-hint":""},model:{value:t.testmode,callback:function(e){t.testmode=e},expression:"testmode"}})],1)],1)],1),t._v(" "),n("v-col",[n("v-card",{attrs:{flat:"","min-width":"300"}},[n("v-card-title",[n("v-icon",{attrs:{left:""}},[t._v("\n            mdi-settings-box\n          ")]),t._v(" "),n("span",[t._v("System preferences")])],1),t._v(" "),n("v-card-text",[n("v-text-field",{staticClass:"mb-4",attrs:{loading:t.loading,outlined:"",type:"number",label:"Default time per workunit",hint:"The time per workunit preference used for new jobs. You can change it on a per-job basis in the additional settings step when creating a job or via the edit job dialog.","persistent-hint":"",suffix:"seconds"},model:{value:t.settings.default_seconds_per_workunit,callback:function(e){t.$set(t.settings,"default_seconds_per_workunit",e)},expression:"settings.default_seconds_per_workunit"}}),t._v(" "),n("v-text-field",{attrs:{loading:t.loading,outlined:"",type:"number",step:"0.1",label:"Workunit timeout factor",hint:"Multiplying factor for workunit timeout — the time after which a workunit is considered failed.","persistent-hint":""},model:{value:t.settings.default_workunit_timeout_factor,callback:function(e){t.$set(t.settings,"default_workunit_timeout_factor",e)},expression:"settings.default_workunit_timeout_factor"}}),t._v(" "),n("v-switch",{attrs:{loading:t.loading,label:"Run full benchmark on join",hint:"When enabled, new hosts connected to the system will run a complete first-time benchmark.","persistent-hint":""},model:{value:t.settings.default_bench_all,callback:function(e){t.$set(t.settings,"default_bench_all",e)},expression:"settings.default_bench_all"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:"",loading:t.saving},on:{click:t.saveSettings}},[n("v-icon",{attrs:{left:""}},[t._v("\n              mdi-content-save\n            ")]),t._v("\n            Save\n          ")],1)],1)],1)],1)],1)],1)},s=[],i={render:a,staticRenderFns:s};e.a=i}});
//# sourceMappingURL=23.67f4a7c506a6bf0fe519.js.map