"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[9190],{69190:(v,l,a)=>{a.r(l),a.d(l,{CopyModule:()=>c});var e=a(64425),u=a(5316),i=a(9116),t=a(94650),d=a(49651),g=a(24006),f=a(32802),h=a(66616),z=a(47044),C=a(21811),_=a(35635),T=a(51971);function x(n,r){if(1&n){const p=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(p);const m=t.oxw();return t.KtG(m.info())}),t._uU(1,"copy"),t.qZA()}if(2&n){const p=t.oxw();t.Q6J("cdkCopyToClipboard",p.value)}}const O=[{path:"",component:(()=>{class n{constructor(p){this.msg=p,this.pageHeaderInfo={title:"\u6587\u672c\u590d\u5236\u793a\u4f8b",breadcrumb:["\u9996\u9875","\u529f\u80fd","\u526a\u5207\u677f"]},this.value=""}info(){this.msg.success("\u590d\u5236\u6210\u529f\uff0c\u76f4\u63a5\u7c98\u8d34")}ngOnInit(){}}return n.\u0275fac=function(p){return new(p||n)(t.Y36(d.dD))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-copy"]],decls:7,vars:3,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nzTitle","\u590d\u5236\u793a\u4f8b"],["nzSearch","","nzSize","large",3,"nzAddOnAfter"],["type","text","nz-input","","placeholder","input search text",3,"ngModel","ngModelChange"],["suffixButton",""],["nz-button","","nzType","primary","nzSize","large","nzSearch","",3,"cdkCopyToClipboard","click"]],template:function(p,s){if(1&p&&(t._UZ(0,"app-page-header",0),t.TgZ(1,"div",1)(2,"nz-card",2)(3,"nz-input-group",3)(4,"input",4),t.NdJ("ngModelChange",function(M){return s.value=M}),t.qZA()(),t.YNc(5,x,2,1,"ng-template",null,5,t.W1O),t.qZA()()),2&p){const m=t.MAs(6);t.Q6J("pageHeaderInfo",s.pageHeaderInfo),t.xp6(3),t.Q6J("nzAddOnAfter",m),t.xp6(1),t.Q6J("ngModel",s.value)}},dependencies:[g.Fj,g.JJ,g.On,f.q,h.ix,z.w,C.dQ,_.Zp,_.gB,T.bd,e.i3],changeDetection:0}),n})(),data:{title:"b\xeca k\u1eb9p h\u1ed3 s\u01a1",key:"copy"}}];let o=(()=>{class n{}return n.\u0275fac=function(p){return new(p||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[i.Bz.forChild(O),i.Bz]}),n})(),c=(()=>{class n{}return n.\u0275fac=function(p){return new(p||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.m,o,e.Iq]}),n})()},32802:(v,l,a)=>{a.d(l,{q:()=>O});var e=a(94650),u=a(29576),i=a(9116),t=a(36895),d=a(45655),g=a(94963),f=a(66287);function h(o,c){if(1&o&&(e.TgZ(0,"nz-breadcrumb-item")(1,"a"),e._uU(2),e.qZA()()),2&o){const n=c.$implicit;e.xp6(2),e.Oqu(n)}}function z(o,c){1&o&&e.GkF(0)}function C(o,c){if(1&o&&(e.TgZ(0,"nz-page-header-extra"),e.YNc(1,z,1,0,"ng-container",4),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",n.extraTpl)}}function _(o,c){if(1&o&&(e.ynx(0),e._uU(1),e.BQk()),2&o){const n=e.oxw(2);e.xp6(1),e.Oqu(n.pageHeaderInfo.desc)}}function T(o,c){if(1&o&&(e.TgZ(0,"nz-page-header-content"),e.YNc(1,_,2,1,"ng-container",5),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",n.pageHeaderInfo.desc)}}function x(o,c){if(1&o&&(e.ynx(0),e._uU(1),e.BQk()),2&o){const n=e.oxw(2);e.xp6(1),e.Oqu(n.pageHeaderInfo.footer)}}function y(o,c){if(1&o&&(e.TgZ(0,"nz-page-header-footer"),e.YNc(1,x,2,1,"ng-container",5),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",n.pageHeaderInfo.footer)}}let O=(()=>{class o{constructor(n,r){this.themesService=n,this.router=r,this.pageHeaderInfo={},this.backUrl="",this.themesOptions$=this.themesService.getThemesMode()}back(){this.router.navigateByUrl(this.backUrl)}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(u.f),e.Y36(i.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-page-header"]],inputs:{backTpl:"backTpl",pageHeaderInfo:"pageHeaderInfo",backUrl:"backUrl",extraTpl:"extraTpl"},decls:6,vars:7,consts:[[1,"site-page-header",3,"nzTitle","nzBackIcon","nzGhost","nzBack"],["nz-page-header-breadcrumb",""],[4,"ngFor","ngForOf"],[4,"ngIf"],[4,"ngTemplateOutlet"],[4,"nzStringTemplateOutlet"]],template:function(n,r){1&n&&(e.TgZ(0,"nz-page-header",0),e.NdJ("nzBack",function(){return r.back()}),e.TgZ(1,"nz-breadcrumb",1),e.YNc(2,h,3,1,"nz-breadcrumb-item",2),e.qZA(),e.YNc(3,C,2,1,"nz-page-header-extra",3),e.YNc(4,T,2,1,"nz-page-header-content",3),e.YNc(5,y,2,1,"nz-page-header-footer",3),e.qZA()),2&n&&(e.Q6J("nzTitle",r.pageHeaderInfo.title)("nzBackIcon",r.backTpl?r.backTpl:null)("nzGhost",!1),e.xp6(2),e.Q6J("ngForOf",r.pageHeaderInfo.breadcrumb),e.xp6(1),e.Q6J("ngIf",r.extraTpl),e.xp6(1),e.Q6J("ngIf",r.pageHeaderInfo.desc),e.xp6(1),e.Q6J("ngIf",r.pageHeaderInfo.footer))},dependencies:[t.sg,t.O5,t.tP,d.$O,d.u5,d.Jp,d.$,d.A2,g.Dg,g.MO,f.f],styles:[".site-page-header[_ngcontent-%COMP%]{width:100%}.ant-advanced-search-form[_ngcontent-%COMP%]{padding:24px 24px 0;background:#fff;margin:10px auto}[nz-form-label][_ngcontent-%COMP%]{overflow:visible}.save[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),o})()}}]);