"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[2495],{2495:(B,_,t)=>{t.r(_),t.d(_,{UploadModule:()=>P});var e=t(5316),f=t(9116),d=t(24006),g=t(92340),c=t(49523),n=t(94650),T=t(49651),F=t(36895),C=t(32802),U=t(80433),v=t(21102),h=t(73679),s=t(36704),x=t(66616),E=t(47044),o=t(21811),u=t(51971);function i(a,m){if(1&a&&(n.ynx(0),n._uU(1),n.BQk()),2&a){const r=n.oxw().$implicit;n.xp6(1),n.Oqu(r.errors.message)}}function l(a,m){1&a&&(n.ynx(0),n._uU(1,"\u5fc5\u586b\u9879"),n.BQk())}function O(a,m){if(1&a&&(n.YNc(0,i,2,1,"ng-container",18),n.YNc(1,l,2,0,"ng-container",18)),2&a){const r=m.$implicit;n.Q6J("ngIf",r.hasError("message")),n.xp6(1),n.Q6J("ngIf",r.hasError("required"))}}const I=[{path:"",component:(()=>{class a{constructor(r,p){this.message=r,this.fb=p,this.pageHeaderInfo={title:"\u6587\u4ef6\u4e0a\u4f20",breadcrumb:["\u9996\u9875","\u529f\u80fd","\u6587\u4ef6\u4e0a\u4f20"],desc:"\u7b80\u5355\u5f04\u4e00\u4e0b\uff0c\u8fd4\u56de\u7684\u90fd\u662f\u670d\u52a1\u5668\u7edf\u4e00\u8fd4\u56de\u7684\u6587\u4ef6"},this.uploadUrl=g.NZ.production?"/api/file/test/upload/document/":"/site/api/file/test/upload/document/",this.fileList=[],this.fileFormList=[]}handleChange(r){"success"===r.type&&0===r.file.response.code&&this.message.success(`\u670d\u52a1\u5668\u4e0a\u8fd4\u56de\u7684\u6587\u4ef6\u8def\u5f84\uff1a${r.file.response.data.data}`)}uploadFn(r){"success"===r.type&&0===r.file.response.code&&this.validateForm.get("file")?.setValue(r.file.response.data.data)}resetForm(){this.validateForm.reset(),this.fileFormList=[]}submitForm(){(0,c.r7)(this.validateForm)}initForm(){this.validateForm=this.fb.group({file:[null,[d.kI.required]]})}ngOnInit(){this.initForm()}}return a.\u0275fac=function(r){return new(r||a)(n.Y36(T.dD),n.Y36(d.qu))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-upload"]],decls:27,vars:22,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nzTitle","\u7b80\u5355\u5b9e\u4f8b\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6587\u4ef6\u5730\u5740\u7edf\u4e00\uff0c\u6f14\u793a\u529f\u80fd\u4e0d\u4f1a\u4fdd\u5b58\u4e0a\u4f20\u7684\u6587\u4ef6"],[3,"nzName","nzShowButton","nzAction","nzLimit","nzSize","nzFileList","nzChange"],["nz-button",""],["nz-icon","","nzType","upload"],["nzTitle","\u5d4c\u5165\u8868\u5355\uff0c\u52a0\u5165\u8868\u5355\u9a8c\u8bc1",1,"m-t-20"],["nz-form","","nzLayout","vertical",3,"formGroup"],["nz-col","","nzSpan","24"],[3,"nzSm","nzXs","nzErrorTip"],[3,"nzSm","nzXs"],[3,"nzName","nzAction","nzSize","nzFileList","nzLimit","nzChange"],["formControlName","file",3,"hidden"],["nz-row","",1,"m-t-20"],[3,"nzSpan"],["nz-button","","nzType","primary",3,"click"],["nz-button","","nzType","default",1,"m-l-10",3,"click"],["combineTpl",""],[4,"ngIf"]],template:function(r,p){if(1&r&&(n._UZ(0,"app-page-header",0),n.TgZ(1,"div",1)(2,"nz-card",2)(3,"nz-upload",3),n.NdJ("nzChange",function(A){return p.handleChange(A)}),n.TgZ(4,"button",4),n._UZ(5,"i",5),n._uU(6," \u5bfc\u5165\u6750\u6599(\u6700\u5927\u6d4b\u8bd5\u4e0a\u4f205M) "),n.qZA()()(),n.TgZ(7,"nz-card",6)(8,"form",7)(9,"nz-form-item",8)(10,"nz-form-control",9)(11,"nz-form-label",10),n._uU(12,"\u9644\u4ef6\uff1a"),n.qZA(),n.TgZ(13,"nz-form-control",10)(14,"nz-upload",11),n.NdJ("nzChange",function(A){return p.uploadFn(A)}),n.TgZ(15,"button",4),n._UZ(16,"i",5),n._uU(17," \u4e0a\u4f20\u9644\u4ef6(\u6700\u5927\u6d4b\u8bd5\u4e0a\u4f205M) "),n.qZA(),n._UZ(18,"input",12),n.qZA()()(),n.TgZ(19,"nz-form-item",13)(20,"nz-form-control",14)(21,"button",15),n.NdJ("click",function(){return p.submitForm()}),n._uU(22,"\u63d0\u4ea4"),n.qZA(),n.TgZ(23,"button",16),n.NdJ("click",function(){return p.resetForm()}),n._uU(24,"\u91cd\u7f6e"),n.qZA()()()()()()(),n.YNc(25,O,2,2,"ng-template",null,17,n.W1O)),2&r){const z=n.MAs(26);n.Q6J("pageHeaderInfo",p.pageHeaderInfo),n.xp6(3),n.Q6J("nzName","document")("nzShowButton",!0)("nzAction",p.uploadUrl)("nzLimit",1)("nzSize",5120)("nzFileList",p.fileList),n.xp6(5),n.Q6J("formGroup",p.validateForm),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24)("nzErrorTip",z),n.xp6(1),n.Q6J("nzSm",14)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(1),n.Q6J("nzName","document")("nzAction",p.uploadUrl)("nzSize",5120)("nzFileList",p.fileFormList)("nzLimit",1),n.xp6(4),n.Q6J("hidden",!0),n.xp6(2),n.Q6J("nzSpan",14)}},dependencies:[F.O5,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,C.q,U.FY,v.Ls,h.t3,h.SK,s.Lr,s.Nx,s.iK,s.Fd,x.ix,E.w,o.dQ,u.bd],changeDetection:0}),a})(),data:{title:"T\u1ea3i l\xean t\u1ec7p",key:"upload"}}];let D=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[f.Bz.forChild(I),f.Bz]}),a})(),P=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[e.m,D]}),a})()},32802:(B,_,t)=>{t.d(_,{q:()=>E});var e=t(94650),f=t(29576),d=t(9116),g=t(36895),c=t(45655),n=t(94963),T=t(66287);function F(o,u){if(1&o&&(e.TgZ(0,"nz-breadcrumb-item")(1,"a"),e._uU(2),e.qZA()()),2&o){const i=u.$implicit;e.xp6(2),e.Oqu(i)}}function C(o,u){1&o&&e.GkF(0)}function U(o,u){if(1&o&&(e.TgZ(0,"nz-page-header-extra"),e.YNc(1,C,1,0,"ng-container",4),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",i.extraTpl)}}function v(o,u){if(1&o&&(e.ynx(0),e._uU(1),e.BQk()),2&o){const i=e.oxw(2);e.xp6(1),e.Oqu(i.pageHeaderInfo.desc)}}function h(o,u){if(1&o&&(e.TgZ(0,"nz-page-header-content"),e.YNc(1,v,2,1,"ng-container",5),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",i.pageHeaderInfo.desc)}}function s(o,u){if(1&o&&(e.ynx(0),e._uU(1),e.BQk()),2&o){const i=e.oxw(2);e.xp6(1),e.Oqu(i.pageHeaderInfo.footer)}}function x(o,u){if(1&o&&(e.TgZ(0,"nz-page-header-footer"),e.YNc(1,s,2,1,"ng-container",5),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",i.pageHeaderInfo.footer)}}let E=(()=>{class o{constructor(i,l){this.themesService=i,this.router=l,this.pageHeaderInfo={},this.backUrl="",this.themesOptions$=this.themesService.getThemesMode()}back(){this.router.navigateByUrl(this.backUrl)}ngOnInit(){}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(f.f),e.Y36(d.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-page-header"]],inputs:{backTpl:"backTpl",pageHeaderInfo:"pageHeaderInfo",backUrl:"backUrl",extraTpl:"extraTpl"},decls:6,vars:7,consts:[[1,"site-page-header",3,"nzTitle","nzBackIcon","nzGhost","nzBack"],["nz-page-header-breadcrumb",""],[4,"ngFor","ngForOf"],[4,"ngIf"],[4,"ngTemplateOutlet"],[4,"nzStringTemplateOutlet"]],template:function(i,l){1&i&&(e.TgZ(0,"nz-page-header",0),e.NdJ("nzBack",function(){return l.back()}),e.TgZ(1,"nz-breadcrumb",1),e.YNc(2,F,3,1,"nz-breadcrumb-item",2),e.qZA(),e.YNc(3,U,2,1,"nz-page-header-extra",3),e.YNc(4,h,2,1,"nz-page-header-content",3),e.YNc(5,x,2,1,"nz-page-header-footer",3),e.qZA()),2&i&&(e.Q6J("nzTitle",l.pageHeaderInfo.title)("nzBackIcon",l.backTpl?l.backTpl:null)("nzGhost",!1),e.xp6(2),e.Q6J("ngForOf",l.pageHeaderInfo.breadcrumb),e.xp6(1),e.Q6J("ngIf",l.extraTpl),e.xp6(1),e.Q6J("ngIf",l.pageHeaderInfo.desc),e.xp6(1),e.Q6J("ngIf",l.pageHeaderInfo.footer))},dependencies:[g.sg,g.O5,g.tP,c.$O,c.u5,c.Jp,c.$,c.A2,n.Dg,n.MO,T.f],styles:[".site-page-header[_ngcontent-%COMP%]{width:100%}.ant-advanced-search-form[_ngcontent-%COMP%]{padding:24px 24px 0;background:#fff;margin:10px auto}[nz-form-label][_ngcontent-%COMP%]{overflow:visible}.save[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),o})()}}]);