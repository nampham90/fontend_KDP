"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[3534],{3534:(w,m,a)=>{a.r(m),a.d(m,{EditorModule:()=>I});var e=a(6083),n=a(4650),u=a(4006),_=a(4968),f=a(6895);const M=["editorContainer"],h=new n.OlP("NGX_MONACO_EDITOR_CONFIG");let E,C=!1,O=(()=>{class t{constructor(o){this.config=o,this.onInit=new n.vpe}ngAfterViewInit(){C?E.then(()=>{this.initMonaco(this._options)}):(C=!0,E=new Promise(o=>{const d=(this.config.baseUrl||"./assets")+"/monaco-editor/min/vs";if("object"==typeof window.monaco)return void o();const l=()=>{window.require.config({paths:{vs:`${d}`}}),window.require(["vs/editor/editor.main"],()=>{"function"==typeof this.config.onMonacoLoad&&this.config.onMonacoLoad(),this.initMonaco(this._options),o()})};if(window.require)l();else{const g=document.createElement("script");g.type="text/javascript",g.src=`${d}/loader.js`,g.addEventListener("load",l),document.body.appendChild(g)}}))}ngOnDestroy(){this._windowResizeSubscription&&this._windowResizeSubscription.unsubscribe(),this._editor&&(this._editor.dispose(),this._editor=void 0)}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(h))},t.\u0275cmp=n.Xpm({type:t,selectors:[["ng-component"]],viewQuery:function(o,d){if(1&o&&n.Gf(M,7),2&o){let l;n.iGM(l=n.CRH())&&(d._editorContainer=l.first)}},outputs:{onInit:"onInit"},decls:0,vars:0,template:function(o,d){},encapsulation:2}),t})(),b=(()=>{class t extends O{constructor(o,d){super(d),this.zone=o,this.editorConfig=d,this._value="",this.propagateChange=l=>{},this.onTouched=()=>{}}set options(o){this._options=Object.assign({},this.config.defaultOptions,o),this._editor&&(this._editor.dispose(),this.initMonaco(o))}get options(){return this._options}set model(o){this.options.model=o,this._editor&&(this._editor.dispose(),this.initMonaco(this.options))}writeValue(o){this._value=o||"",setTimeout(()=>{this._editor&&!this.options.model&&this._editor.setValue(this._value)})}registerOnChange(o){this.propagateChange=o}registerOnTouched(o){this.onTouched=o}initMonaco(o){const d=!!o.model;if(d){const l=monaco.editor.getModel(o.model.uri||"");l?(o.model=l,o.model.setValue(this._value)):o.model=monaco.editor.createModel(o.model.value,o.model.language,o.model.uri)}this._editor=monaco.editor.create(this._editorContainer.nativeElement,o),d||this._editor.setValue(this._value),this._editor.onDidChangeModelContent(l=>{const g=this._editor.getValue();this.zone.run(()=>{this.propagateChange(g),this._value=g})}),this._editor.onDidBlurEditorWidget(()=>{this.onTouched()}),this._windowResizeSubscription&&this._windowResizeSubscription.unsubscribe(),this._windowResizeSubscription=(0,_.R)(window,"resize").subscribe(()=>this._editor.layout()),this.onInit.emit(this._editor)}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(n.R0b),n.Y36(h))},t.\u0275cmp=n.Xpm({type:t,selectors:[["ngx-monaco-editor"]],inputs:{options:"options",model:"model"},features:[n._Bn([{provide:u.JU,useExisting:(0,n.Gpc)(()=>t),multi:!0}]),n.qOj],decls:2,vars:0,consts:[[1,"editor-container"],["editorContainer",""]],template:function(o,d){1&o&&n._UZ(0,"div",0,1)},styles:["[_nghost-%COMP%] {\n          display: block;\n          height: 200px;\n      }\n\n      .editor-container[_ngcontent-%COMP%] {\n          width: 100%;\n          height: 98%;\n      }"]}),t})(),z=(()=>{class t{static forRoot(o={}){return{ngModule:t,providers:[{provide:h,useValue:o}]}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[f.ez]]}),t})();var v=a(9116),i=a(2802);const r=[{path:"",component:(()=>{class t{constructor(){this.pageHeaderInfo={title:"\u4ee3\u7801\u7f16\u8f91\u5668\uff0cvscode\u7684\u8d77\u6e90",breadcrumb:["\u9996\u9875","\u6269\u5c55\u529f\u80fd","\u4ee3\u7801\u7f16\u8f91\u5668"]},this.editorOptions={theme:"vs-dark",language:"javascript"},this.code='function x() {\n\tconsole.log("Hello world!");\n}'}initEditor(){}ngOnInit(){this.initEditor()}ngOnDestroy(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-editor"]],decls:3,vars:3,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],[2,"height","500px",3,"options","ngModel","ngModelChange"]],template:function(o,d){1&o&&(n._UZ(0,"app-page-header",0),n.TgZ(1,"div",1)(2,"ngx-monaco-editor",2),n.NdJ("ngModelChange",function(g){return d.code=g}),n.qZA()()),2&o&&(n.Q6J("pageHeaderInfo",d.pageHeaderInfo),n.xp6(2),n.Q6J("options",d.editorOptions)("ngModel",d.code))},dependencies:[u.JJ,u.On,i.q,b],encapsulation:2,changeDetection:0}),t})(),data:{title:"bi\xean t\u1eadp m\xe3",key:"editor"}}];let c=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[v.Bz.forChild(r),v.Bz]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[e.m,c,z.forRoot()]}),t})()},2802:(w,m,a)=>{a.d(m,{q:()=>v});var e=a(4650),n=a(9576),u=a(9116),_=a(6895),f=a(5655),M=a(4963),h=a(6287);function C(i,p){if(1&i&&(e.TgZ(0,"nz-breadcrumb-item")(1,"a"),e._uU(2),e.qZA()()),2&i){const r=p.$implicit;e.xp6(2),e.Oqu(r)}}function E(i,p){if(1&i&&(e.ynx(0),e._uU(1),e.BQk()),2&i){const r=e.oxw();e.xp6(1),e.Oqu(r.pageHeaderInfo.extra)}}function O(i,p){if(1&i&&(e.ynx(0),e._uU(1),e.BQk()),2&i){const r=e.oxw(2);e.xp6(1),e.Oqu(r.pageHeaderInfo.desc)}}function b(i,p){if(1&i&&(e.TgZ(0,"nz-page-header-content"),e.YNc(1,O,2,1,"ng-container",3),e.qZA()),2&i){const r=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",r.pageHeaderInfo.desc)}}function T(i,p){if(1&i&&(e.ynx(0),e._uU(1),e.BQk()),2&i){const r=e.oxw(2);e.xp6(1),e.Oqu(r.pageHeaderInfo.footer)}}function z(i,p){if(1&i&&(e.TgZ(0,"nz-page-header-footer"),e.YNc(1,T,2,1,"ng-container",3),e.qZA()),2&i){const r=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",r.pageHeaderInfo.footer)}}let v=(()=>{class i{constructor(r,c){this.themesService=r,this.router=c,this.pageHeaderInfo={},this.backUrl="",this.themesOptions$=this.themesService.getThemesMode()}back(){this.router.navigateByUrl(this.backUrl)}ngOnInit(){}}return i.\u0275fac=function(r){return new(r||i)(e.Y36(n.f),e.Y36(u.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-page-header"]],inputs:{backTpl:"backTpl",pageHeaderInfo:"pageHeaderInfo",backUrl:"backUrl"},decls:7,vars:7,consts:[[1,"site-page-header",3,"nzTitle","nzBackIcon","nzGhost","nzBack"],["nz-page-header-breadcrumb",""],[4,"ngFor","ngForOf"],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(r,c){1&r&&(e.TgZ(0,"nz-page-header",0),e.NdJ("nzBack",function(){return c.back()}),e.TgZ(1,"nz-breadcrumb",1),e.YNc(2,C,3,1,"nz-breadcrumb-item",2),e.qZA(),e.TgZ(3,"nz-page-header-extra"),e.YNc(4,E,2,1,"ng-container",3),e.qZA(),e.YNc(5,b,2,1,"nz-page-header-content",4),e.YNc(6,z,2,1,"nz-page-header-footer",4),e.qZA()),2&r&&(e.Q6J("nzTitle",c.pageHeaderInfo.title)("nzBackIcon",c.backTpl?c.backTpl:null)("nzGhost",!1),e.xp6(2),e.Q6J("ngForOf",c.pageHeaderInfo.breadcrumb),e.xp6(2),e.Q6J("nzStringTemplateOutlet",c.pageHeaderInfo.extra),e.xp6(1),e.Q6J("ngIf",c.pageHeaderInfo.desc),e.xp6(1),e.Q6J("ngIf",c.pageHeaderInfo.footer))},dependencies:[_.sg,_.O5,f.$O,f.u5,f.Jp,f.$,f.A2,M.Dg,M.MO,h.f],styles:[".site-page-header[_ngcontent-%COMP%]{width:100%}.ant-advanced-search-form[_ngcontent-%COMP%]{padding:24px 24px 0;background:#fff;margin:10px auto}[nz-form-label][_ngcontent-%COMP%]{overflow:visible}.save[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),i})()}}]);