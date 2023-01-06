"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[2160],{2155:(M,C,n)=>{n.d(C,{t:()=>o});var o=(()=>{return(a=o||(o={})).Demo="/default/dashboard/demo",a.Analysis="/default/dashboard/analysis",a.Monitor="/default/dashboard/monitor",a.Workbench="/default/dashboard/workbench",a.spxe00101="xe/spxe00101",a.spch00101="chuyen/spch00101",a.spch00201="chuyen/spch00201",a.spkh00101="khachhang/spkh00101",a.spkh00201="khachhang/spkh00201",o;var a})()},1565:(M,C,n)=>{n.d(C,{Q:()=>_});var o=n(5861),a=n(529),v=n(4556),u=n(4650),t=n(4246);let _=(()=>{class p{constructor(r,e){this.http=r,this.httpt=e,this.urlApi="https://fakestoreapi.com/",this.provincesApi=v.tinhthanhApi,this.httpOptions={headers:new a.WM({"Content-Type":"application/json"})}}GetCallProvinces(r,e){var i=this;return(0,o.Z)(function*(){let h=i.httpt.get(i.provincesApi);return h.subscribe({next:c=>(r?.(c),!0),error:c=>(e?.(),!1),complete:()=>{}}),h})()}GetCallCommonWs(r,e,i){var h=this;return(0,o.Z)(function*(){let c=h.httpt.get(h.urlApi+r,{observe:"response"});return c.subscribe({next:d=>(e?.(d),!0),error:d=>(i?.(),!1),complete:()=>{}}),c})()}PostCallCommonWs(r,e,i,h){var c=this;return(0,o.Z)(function*(){let d=c.http.post(r,e,{needSuccessInfo:!1});return d.subscribe({next:E=>(i?.(E),!0),error:E=>(h?.(),!1),complete:()=>{}}),d})()}GetCallWs(r,e,i){var h=this;return(0,o.Z)(function*(){let c=h.http.get(r,{observe:"response"});return c.subscribe({next:d=>(e?.(d),!0),error:d=>(i?.(),!1),complete:()=>{}}),c})()}PostCallWs(r,e,i,h){var c=this;return(0,o.Z)(function*(){let d=c.http.post(r,e,{needSuccessInfo:!1});return d.subscribe({next:E=>(i?.(E),!0),error:E=>(h?.(),!1),complete:()=>{}}),d})()}PutCallWs(r,e,i,h){var c=this;return(0,o.Z)(function*(){let d=c.http.put(r,e,{needSuccessInfo:!0});return d.subscribe({next:E=>(i?.(E),!0),error:E=>(h?.(),!1),complete:()=>{}}),d})()}DeleteCallWs(r,e,i,h){var c=this;return(0,o.Z)(function*(){let d=c.http.delete(r,e,{needSuccessInfo:!0});return d.subscribe({next:E=>(i?.(E),!0),error:E=>(h?.(),!1),complete:()=>{}}),d})()}}return p.\u0275fac=function(r){return new(r||p)(u.LFG(t.q),u.LFG(a.eN))},p.\u0275prov=u.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},2996:(M,C,n)=>{n.d(C,{p:()=>p});var o=n(9523),a=n(4556),v=n(8602),u=n(4650),t=n(4246),_=n(6806);let p=(()=>{class f{constructor(e,i){this.http=e,this.router=i}getChuyens(e){return this.http.post(a.ChuyenAnt100GetAll,e,{needSuccessInfo:!1})}getChuyen(e){return this.http.get(`${a.ChuyenAnt100Get}/${e}/`)}createChuyen(e){return this.http.post(a.ChuyenAnt100Create,e,{needSuccessInfo:!1})}updateChuyen(e){return this.http.put(a.ChuyenAnt100Update,e)}updateTrangthai(e){return this.http.post(a.ChuyenAnt100UpdateTrangthai,e,{needSuccessInfo:!1})}deleteChuyen(e){return this.http.post(a.ChuyenAnt100Delete,{ids:e},{needSuccessInfo:!0})}delateChuyens(){}refresh(e){const i=e,h=(0,o.Ve)(i),c=this.router.parseUrl(i).queryParams;this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{v.E.deleteRouteSnapshot(this.getPathKey(i)),this.router.navigate([h],{queryParams:c})})}getPathKey(e){const i=(0,o.KK)(e),h=this.router.parseUrl(e).queryParams;let c="";return Object.keys(h).length>0&&(c=JSON.stringify(this.router.parseUrl(e).queryParams)),i+c}}return f.\u0275fac=function(e){return new(e||f)(u.LFG(t.q),u.LFG(_.F0))},f.\u0275prov=u.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},9386:(M,C,n)=>{n.d(C,{$:()=>v});var o=n(4650),a=n(2996);let v=(()=>{class u{constructor(_){this.dataService=_,this.id="",this.ngaydi="",this.ngayve="",this.tienxe=0,this.biensoxe="",this.idtai="",this.idphu="",this.changduong="",this.trangthai=0}clear(){this.id="",this.ngaydi="",this.ngayve="",this.tienxe=0,this.biensoxe="",this.idtai="",this.idphu="",this.changduong="",this.trangthai=0}}return u.\u0275fac=function(_){return new(_||u)(o.LFG(a.p))},u.\u0275prov=o.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},3951:(M,C,n)=>{n.d(C,{H:()=>_});var o=n(1565),a=n(4556),v=n(6895),u=n(4650),t=n(6806);let _=(()=>{class p{constructor(r,e,i,h){this.webService=r,this.router=e,this.cdf=i,this.datePipe=h,this.formItemNm={},this.list=[],this.title="nam pham"}ngOnDestroy(){this.destroy()}ngOnInit(){this.setFormItemNm()}setFormItemNm(){this.webService.PostCallWs(a.Ant100PostUrlParams,{url:this.router.url},e=>{this.list=e,this.list.forEach(i=>{this.formItemNm[i.stt]=i.title1}),this.fnInit()})}getDate(){return this.datePipe.transform(new Date,"yyyy/MM/dd")+""}formatDate(r){return null==r||""==r?"":this.datePipe.transform(r,"yyyy/MM/dd")+""}}return p.\u0275fac=function(r){return new(r||p)(u.Y36(o.Q),u.Y36(t.F0),u.Y36(u.sBO),u.Y36(v.uU))},p.\u0275cmp=u.Xpm({type:p,selectors:[["app-base"]],features:[u._Bn([v.uU])],decls:0,vars:0,template:function(r,e){},encapsulation:2}),p})()},2704:(M,C,n)=>{n.d(C,{Z:()=>I});var o=n(4006),a=n(4556),v=n(9523),u=n(9646),t=n(4650),_=n(7),p=n(6895),f=n(3679),r=n(6704),e=n(5635),i=n(7096),h=n(269);const c=["Tlsotien"],d=["Tlghichu"],E=["Tfooter"],P=["Ttilte"];function A(l,y){if(1&l){const s=t.EpF();t.ynx(0),t.TgZ(1,"tr",7)(2,"td")(3,"nz-form-item")(4,"nz-form-control",8),t._UZ(5,"input",9),t.qZA()()(),t.TgZ(6,"td")(7,"nz-form-item")(8,"nz-form-control",10)(9,"nz-input-number",11),t.NdJ("ngModelChange",function(g){t.CHM(s);const D=t.oxw();return t.KtG(D.fnTongchiphi(g))}),t.qZA()()()(),t.TgZ(10,"td")(11,"nz-form-item")(12,"nz-form-control",10),t._UZ(13,"textarea",12),t.qZA()()()(),t.BQk()}if(2&l){const s=y.index,m=t.oxw();t.xp6(1),t.Q6J("formGroupName",s),t.xp6(3),t.Q6J("nzSm",18)("nzXs",24),t.xp6(4),t.Q6J("nzSm",18)("nzXs",24),t.xp6(1),t.Q6J("nzMin",0)("nzMax",1e4)("nzStep",100)("nzDisabled",m.showInfo),t.xp6(3),t.Q6J("nzSm",18)("nzXs",24),t.xp6(1),t.Q6J("disabled",m.showInfo)}}const T=function(){return{"font-weight":"bold"}};function z(l,y){if(1&l&&(t.TgZ(0,"div"),t._uU(1," T\u1ed5ng chi ph\xed: "),t.TgZ(2,"span",13),t._uU(3),t.ALo(4,"currency"),t.qZA()()),2&l){const s=t.oxw();t.xp6(2),t.Q6J("ngStyle",t.DdM(6,T)),t.xp6(1),t.Oqu(t.Dn7(4,2,1e3*s.tongchiphi,"VND",""))}}const O=function(){return{color:"red"}};function S(l,y){if(1&l&&(t.TgZ(0,"div")(1,"span",13)(2,"i"),t._uU(3,"L\u01b0u \xfd: ki\u1ec3m tra th\xf4ng tin ch\xednh x\xe1c tr\u01b0\u1edbc khi x\xe1c nh\u1eadn. "),t.qZA()(),t.TgZ(4,"span",13),t._uU(5),t.ALo(6,"currency"),t.qZA()()),2&l){const s=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.DdM(7,O)),t.xp6(3),t.Q6J("ngStyle",t.DdM(8,T)),t.xp6(1),t.hij(" T\u1ed5ng chi ph\xed: ",t.Dn7(6,3,1e3*s.tongchiphi,"VND",""),"")}}let x=(()=>{class l{constructor(s,m,g,D){this.modalRef=s,this.fb=m,this.cdf=g,this.modalSrv=D,this.dataList=[],this.data=[],this.const=a,this.lstchiphi=a.lstchiphi,this.tongchiphi=0,this.showInfo=!1,this.data.push({tenchiphi:"T\xean chi ph\xed",sotien:"S\u1ed1 ti\u1ec1n",ghichu:"Ghi ch\xfa"})}getAsyncFnData(s){return(0,u.of)(s)}getCurrentValue(){return(0,v.r7)(this.addEditForm)?(0,u.of)(this.addEditForm.value):(0,u.of)(!1)}createItem(s){return this.fb.group({tenchiphi:[s.tenchiphi,[o.kI.required]],sotien:[s.sotien,[o.kI.required]],ghichu:[""]})}getControls(){return this.addEditForm.get("items").controls}ngOnInit(){null!=this.params.listcp&&this.params.listcp.length>0&&(this.lstchiphi=this.params.listcp),null!=this.params.status&&5==this.params.status&&(this.showInfo=!0),this.addEditForm=this.fb.group({items:this.fb.array([])});for(let s of this.lstchiphi)this.items=this.addEditForm.get("items"),this.items.push(this.createItem(s));this.fnTinhchiphi()}fnTongchiphi(s){this.fnTinhchiphi()}fnTinhchiphi(){this.tongchiphi=0;for(let s of this.addEditForm.value.items)this.tongchiphi=this.tongchiphi+s.sotien}}return l.\u0275fac=function(s){return new(s||l)(t.Y36(_.Lf),t.Y36(o.qu),t.Y36(t.sBO),t.Y36(_.Sf))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-subwindowchiphi"]],viewQuery:function(s,m){if(1&s&&(t.Gf(c,7),t.Gf(d,7),t.Gf(E,7),t.Gf(P,7)),2&s){let g;t.iGM(g=t.CRH())&&(m.Tlsotien=g.first),t.iGM(g=t.CRH())&&(m.Tlghichu=g.first),t.iGM(g=t.CRH())&&(m.Tfooter=g.first),t.iGM(g=t.CRH())&&(m.Ttilte=g.first)}},decls:16,vars:9,consts:[["nz-form","",3,"formGroup"],[3,"nzSize","nzTemplateMode","nzFooter","nzTitle"],[3,"nzWidth"],["formArrayName","items"],[4,"ngFor","ngForOf"],["Tfooter",""],["Ttilte",""],[3,"formGroupName"],["nzErrorTip","",3,"nzSm","nzXs"],["nz-input","","id","tenchiphi","name","tenchiphi","formControlName","tenchiphi","readonly",""],["nzErrorTip","Vui l\xf2ng nh\u1eadp ti\u1ec1n \u0111\u01b0a tr\u01b0\u1edbc",3,"nzSm","nzXs"],["id","sotien","name","sotien","formControlName","sotien",3,"nzMin","nzMax","nzStep","nzDisabled","ngModelChange"],["nz-input","","id","ghichu","name","ghichu","formControlName","ghichu","nzAutosize","",3,"disabled"],[3,"ngStyle"]],template:function(s,m){if(1&s&&(t.TgZ(0,"form",0)(1,"nz-table",1)(2,"thead")(3,"tr")(4,"th",2),t._uU(5,"T\xean Ch\xed Ph\xed"),t.qZA(),t.TgZ(6,"th",2),t._uU(7,"S\u1ed1 ti\u1ec1n"),t.qZA(),t.TgZ(8,"th",2),t._uU(9,"Ghi ch\xfa"),t.qZA()()(),t.TgZ(10,"tbody",3),t.YNc(11,A,14,12,"ng-container",4),t.qZA()(),t.YNc(12,z,5,7,"ng-template",null,5,t.W1O),t.YNc(14,S,7,9,"ng-template",null,6,t.W1O),t.qZA()),2&s){const g=t.MAs(13),D=t.MAs(15);t.Q6J("formGroup",m.addEditForm),t.xp6(1),t.Q6J("nzSize","small")("nzTemplateMode",!0)("nzFooter",g)("nzTitle",D),t.xp6(3),t.Q6J("nzWidth","80px"),t.xp6(2),t.Q6J("nzWidth","50px"),t.xp6(2),t.Q6J("nzWidth","150px"),t.xp6(3),t.Q6J("ngForOf",m.getControls())}},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,o.x0,o.CE,p.sg,p.PC,f.t3,f.SK,r.Lr,r.Nx,r.Fd,e.Zp,e.rh,i._V,h.N8,h.Uo,h._C,h.Om,h.p0,h.$Z,p.H9],changeDetection:0}),l})();var b=n(9174);let I=(()=>{class l{constructor(s){this.modalWrapService=s}getContentComponent(){return x}show(s={},m){return this.modalWrapService.show(this.getContentComponent(),s,m)}}return l.\u0275fac=function(s){return new(s||l)(t.LFG(b.U))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},8538:(M,C,n)=>{n.d(C,{V:()=>u});var o=n(6083),a=n(4006),v=n(4650);let u=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275mod=v.oAB({type:t}),t.\u0275inj=v.cJS({imports:[a.u5,a.UX,o.m]}),t})()}}]);