"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[6905],{23317:(_,g,e)=>{e.d(g,{R:()=>t});var o=e(44556),c=e(94650),z=e(54246),h=e(9116);let t=(()=>{class n{constructor(l,C){this.http=l,this.router=C}getlists(l){return this.http.post(o.ChiphichuyenAnt100GetAll,l,{needSuccessInfo:!1})}getDetail(l){return this.http.get(`${o.ChiphichuyenAnt100Get}/${l}/`)}create(l){return this.http.post(o.ChiphichuyenAnt100Create,l,{needSuccessInfo:!1})}update(l){return this.http.put(o.ChiphichuyenAnt100Update,l)}updateList(l){return this.http.post(o.ChiphichuyenAnt100UpdateList,l,{needSuccessInfo:!1})}delete(l){return this.http.post(o.ChiphichuyenAnt100Delete,{ids:l},{needSuccessInfo:!0})}delates(){}}return n.\u0275fac=function(l){return new(l||n)(c.LFG(z.q),c.LFG(h.F0))},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},42996:(_,g,e)=>{e.d(g,{p:()=>r});var o=e(49523),c=e(44556),z=e(68602),h=e(94650),t=e(54246),n=e(9116);let r=(()=>{class l{constructor(s,E){this.http=s,this.router=E}getChuyens(s){return this.http.post(c.ChuyenAnt100GetAll,s,{needSuccessInfo:!1})}getChuyen(s){return this.http.get(`${c.ChuyenAnt100Get}/${s}/`)}createChuyen(s){return this.http.post(c.ChuyenAnt100Create,s,{needSuccessInfo:!1})}updateChuyen(s){return this.http.put(c.ChuyenAnt100Update,s)}updateTrangthai(s){return this.http.post(c.ChuyenAnt100UpdateTrangthai,s,{needSuccessInfo:!1})}deleteChuyen(s){return this.http.post(c.ChuyenAnt100Delete,{ids:s},{needSuccessInfo:!0})}delateChuyens(){}searchParams(s){return this.http.post(c.ChuyenAnt100SearchParams,s,{needSuccessInfo:!1})}refresh(s){const E=s,S=(0,o.Ve)(E),f=this.router.parseUrl(E).queryParams;this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{z.E.deleteRouteSnapshot(this.getPathKey(E)),this.router.navigate([S],{queryParams:f})})}getPathKey(s){const E=(0,o.KK)(s),S=this.router.parseUrl(s).queryParams;let f="";return Object.keys(S).length>0&&(f=JSON.stringify(this.router.parseUrl(s).queryParams)),E+f}}return l.\u0275fac=function(s){return new(s||l)(h.LFG(t.q),h.LFG(n.F0))},l.\u0275prov=h.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},69386:(_,g,e)=>{e.d(g,{$:()=>z});var o=e(94650),c=e(42996);let z=(()=>{class h{constructor(n){this.dataService=n,this.initFlg=!0,this.id="",this.ngaydi="",this.ngayve="",this.tienxe=0,this.biensoxe="",this.idtai="",this.idphu="",this.changduong="",this.trangthai=0}clear(){this.initFlg=!0,this.id="",this.ngaydi="",this.ngayve="",this.tienxe=0,this.biensoxe="",this.idtai="",this.idphu="",this.changduong="",this.trangthai=0}}return h.\u0275fac=function(n){return new(n||h)(o.LFG(c.p))},h.\u0275prov=o.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},65078:(_,g,e)=>{e.d(g,{$:()=>h});var o=e(44556),c=e(94650),z=e(54246);let h=(()=>{class t{constructor(r){this.http=r}getlists(r){return this.http.post(o.PhieunhaphangAnt100GetAll,r,{needSuccessInfo:!1})}getDetail(r){return this.http.get(`${o.PhieunhaphangAnt100Get}/${r}/`)}create(r){return this.http.post(o.PhieunhaphangAnt100Create,r,{needSuccessInfo:!1})}update(r){return this.http.put(o.PhieunhaphangAnt100Update,r)}delete(r){return this.http.post(o.PhieunhaphangAnt100Delete,{ids:r},{needSuccessInfo:!0})}ExportDataPDFChuyen(r){return this.http.post(o.PhieunhaphangAnt100ExportData,{id:r},{needSuccessInfo:!0})}delates(){}}return t.\u0275fac=function(r){return new(r||t)(c.LFG(z.q))},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},78898:(_,g,e)=>{e.d(g,{C:()=>h});var o=e(44556),c=e(94650),z=e(54246);let h=(()=>{class t{constructor(r){this.http=r}searchParams(r){return this.http.post(o.Spin00901Ant100Search,r,{needSuccessInfo:!1})}Detail(r){return this.http.post(o.Spin00901Ant100Detail,r,{needSuccessInfo:!1})}create(r){return this.http.post(o.Spin00901Ant100Add,r,{needSuccessInfo:!1})}update(r){return this.http.post(o.Spin00901Ant100Update,r,{needSuccessInfo:!1})}delete(r){return this.http.post(o.Spin00901Ant100Del,r,{needSuccessInfo:!1})}deleteAll(r){return this.http.post(o.Spin00901Ant100Alldel,r,{needSuccessInfo:!1})}}return t.\u0275fac=function(r){return new(r||t)(c.LFG(z.q))},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},22704:(_,g,e)=>{e.d(g,{Z:()=>p});var o=e(24006),c=e(44556),z=e(49523),h=e(39646),t=e(94650),n=e(50007),r=e(78898),l=e(36895),C=e(73679),s=e(36704),E=e(35635),S=e(37096),f=e(40269);const A=["Tlsotien"],D=["Tlghichu"],Z=["Tfooter"],M=["Ttilte"];function F(a,u){if(1&a){const i=t.EpF();t.ynx(0),t.TgZ(1,"tr",7)(2,"td")(3,"nz-form-item")(4,"nz-form-control",8),t._UZ(5,"input",9),t.qZA()()(),t.TgZ(6,"td")(7,"nz-form-item")(8,"nz-form-control",10)(9,"nz-input-number",11),t.NdJ("ngModelChange",function(m){t.CHM(i);const v=t.oxw();return t.KtG(v.fnTongchiphi(m))}),t.qZA()()()(),t.TgZ(10,"td")(11,"nz-form-item")(12,"nz-form-control",10),t._UZ(13,"textarea",12),t.qZA()()()(),t.BQk()}if(2&a){const i=u.index,d=t.oxw();t.xp6(1),t.Q6J("formGroupName",i),t.xp6(3),t.Q6J("nzSm",18)("nzXs",24),t.xp6(4),t.Q6J("nzSm",18)("nzXs",24),t.xp6(1),t.Q6J("nzMin",0)("nzMax",1e4)("nzStep",100)("nzDisabled",d.showInfo),t.xp6(3),t.Q6J("nzSm",18)("nzXs",24),t.xp6(1),t.Q6J("disabled",d.showInfo)}}const T=function(){return{"font-weight":"bold"}};function x(a,u){if(1&a&&(t.TgZ(0,"div"),t._uU(1," T\u1ed5ng chi ph\xed: "),t.TgZ(2,"span",13),t._uU(3),t.ALo(4,"currency"),t.qZA()()),2&a){const i=t.oxw();t.xp6(2),t.Q6J("ngStyle",t.DdM(6,T)),t.xp6(1),t.Oqu(t.Dn7(4,2,1e3*i.tongchiphi,"VND",""))}}const y=function(){return{color:"red"}};function P(a,u){if(1&a&&(t.TgZ(0,"div")(1,"span",13)(2,"i"),t._uU(3,"L\u01b0u \xfd: ki\u1ec3m tra th\xf4ng tin ch\xednh x\xe1c tr\u01b0\u1edbc khi x\xe1c nh\u1eadn. "),t.qZA()(),t.TgZ(4,"span",13),t._uU(5),t.ALo(6,"currency"),t.qZA()()),2&a){const i=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.DdM(7,y)),t.xp6(3),t.Q6J("ngStyle",t.DdM(8,T)),t.xp6(1),t.hij(" T\u1ed5ng chi ph\xed: ",t.Dn7(6,3,1e3*i.tongchiphi,"VND",""),"")}}let U=(()=>{class a{constructor(i,d,m,v,J){this.modalRef=i,this.fb=d,this.cdf=m,this.modalSrv=v,this.spin00901Service=J,this.dataList=[],this.data=[],this.const=c,this.lstchiphi=[],this.tongchiphi=0,this.showInfo=!1,this.searchParam={},this.data.push({tenchiphi:"T\xean chi ph\xed",sotien:"S\u1ed1 ti\u1ec1n",ghichu:"Ghi ch\xfa"})}fnAddlistchiphi(i){for(let d of i)this.lstchiphi.push({idchuyen:"",tenchiphi:d.datacd,sotien:0,ghichu:""})}getAsyncFnData(i){return(0,h.of)(i)}getCurrentValue(){return(0,z.r7)(this.addEditForm)?(0,h.of)(this.addEditForm.value):(0,h.of)(!1)}createItem(i){return this.fb.group({tenchiphi:[i.tenchiphi,[o.kI.required]],sotien:[i.sotien,[o.kI.required]],ghichu:[i.ghichu]})}getControls(){return this.addEditForm.get("items").controls}ngOnInit(){this.addEditForm=this.fb.group({items:this.fb.array([])}),null!=this.params.status&&5==this.params.status&&(this.showInfo=!0),null!=this.params.listcp&&this.params.listcp.length>0?(this.lstchiphi=this.params.listcp,this.createForm(),this.cdf.detectChanges()):(this.searchParam.rcdkbn=c.tmt050lstchiphi,this.spin00901Service.searchParams({pageSize:0,pageNum:0,filters:this.searchParam}).subscribe(d=>{this.fnAddlistchiphi(d),this.createForm(),this.cdf.detectChanges()}))}createForm(){for(let i of this.lstchiphi)this.items=this.addEditForm.get("items"),this.items.push(this.createItem(i));this.fnTinhchiphi()}fnTongchiphi(i){this.fnTinhchiphi()}fnTinhchiphi(){this.tongchiphi=0;for(let i of this.addEditForm.value.items)this.tongchiphi=this.tongchiphi+i.sotien}}return a.\u0275fac=function(i){return new(i||a)(t.Y36(n.Lf),t.Y36(o.qu),t.Y36(t.sBO),t.Y36(n.Sf),t.Y36(r.C))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-subwindowchiphi"]],viewQuery:function(i,d){if(1&i&&(t.Gf(A,7),t.Gf(D,7),t.Gf(Z,7),t.Gf(M,7)),2&i){let m;t.iGM(m=t.CRH())&&(d.Tlsotien=m.first),t.iGM(m=t.CRH())&&(d.Tlghichu=m.first),t.iGM(m=t.CRH())&&(d.Tfooter=m.first),t.iGM(m=t.CRH())&&(d.Ttilte=m.first)}},decls:16,vars:9,consts:[["nz-form","",3,"formGroup"],[3,"nzSize","nzTemplateMode","nzFooter","nzTitle"],[3,"nzWidth"],["formArrayName","items"],[4,"ngFor","ngForOf"],["Tfooter",""],["Ttilte",""],[3,"formGroupName"],["nzErrorTip","",3,"nzSm","nzXs"],["nz-input","","id","tenchiphi","name","tenchiphi","formControlName","tenchiphi","readonly",""],["nzErrorTip","Vui l\xf2ng nh\u1eadp ti\u1ec1n \u0111\u01b0a tr\u01b0\u1edbc",3,"nzSm","nzXs"],["id","sotien","name","sotien","formControlName","sotien",3,"nzMin","nzMax","nzStep","nzDisabled","ngModelChange"],["nz-input","","id","ghichu","name","ghichu","formControlName","ghichu","nzAutosize","",3,"disabled"],[3,"ngStyle"]],template:function(i,d){if(1&i&&(t.TgZ(0,"form",0)(1,"nz-table",1)(2,"thead")(3,"tr")(4,"th",2),t._uU(5,"T\xean Ch\xed Ph\xed"),t.qZA(),t.TgZ(6,"th",2),t._uU(7,"S\u1ed1 ti\u1ec1n"),t.qZA(),t.TgZ(8,"th",2),t._uU(9,"Ghi ch\xfa"),t.qZA()()(),t.TgZ(10,"tbody",3),t.YNc(11,F,14,12,"ng-container",4),t.qZA()(),t.YNc(12,x,5,7,"ng-template",null,5,t.W1O),t.YNc(14,P,7,9,"ng-template",null,6,t.W1O),t.qZA()),2&i){const m=t.MAs(13),v=t.MAs(15);t.Q6J("formGroup",d.addEditForm),t.xp6(1),t.Q6J("nzSize","small")("nzTemplateMode",!0)("nzFooter",m)("nzTitle",v),t.xp6(3),t.Q6J("nzWidth","80px"),t.xp6(2),t.Q6J("nzWidth","50px"),t.xp6(2),t.Q6J("nzWidth","150px"),t.xp6(3),t.Q6J("ngForOf",d.getControls())}},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,o.x0,o.CE,l.sg,l.PC,C.t3,C.SK,s.Lr,s.Nx,s.Fd,E.Zp,E.rh,S._V,f.N8,f.Uo,f._C,f.Om,f.p0,f.$Z,l.H9],changeDetection:0}),a})();var I=e(69174);let p=(()=>{class a{constructor(i){this.modalWrapService=i}getContentComponent(){return U}show(i={},d){return this.modalWrapService.show(this.getContentComponent(),i,d)}}return a.\u0275fac=function(i){return new(i||a)(t.LFG(I.U))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},8538:(_,g,e)=>{e.d(g,{V:()=>h});var o=e(5316),c=e(24006),z=e(94650);let h=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=z.oAB({type:t}),t.\u0275inj=z.cJS({imports:[c.u5,c.UX,o.m]}),t})()},27097:(_,g,e)=>{e.d(g,{o:()=>I});var o=e(24006),c=e(44556),z=e(49523),h=e(39646),t=e(28746),n=e(94650),r=e(50007),l=e(69454),C=e(78898),s=e(36895),E=e(73679),S=e(36704),f=e(35635),A=e(38231),D=e(48521),Z=e(37096);const M=function(){return{background:"#555555"}};function F(p,a){1&p&&(n.ynx(0),n.TgZ(1,"nz-form-item")(2,"nz-form-label",40),n._uU(3,"M\xe3 Phi\u1ebfu Nh\u1eadp"),n.qZA(),n.TgZ(4,"nz-form-control",13),n._UZ(5,"input",41),n.qZA()(),n.BQk()),2&p&&(n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("readonly",!0)("ngStyle",n.DdM(6,M)))}function T(p,a){if(1&p&&n._UZ(0,"nz-option",42),2&p){const u=a.$implicit;n.Q6J("nzValue",u.id)("nzLabel",u.name)}}function x(p,a){if(1&p&&n._UZ(0,"nz-option",42),2&p){const u=a.$implicit;n.Q6J("nzValue",u.value)("nzLabel",u.lable)}}const y=function(){return{minRows:2,maxRows:6}};let P=(()=>{class p{constructor(u,i,d,m,v){this.modalRef=u,this.fb=i,this.cdf=d,this.dataKhachhangService=m,this.spin00901Service=v,this.isEdit=!1,this.const=c,this.listKh=[],this.tenkhachhang="",this.listdonvitinh=[],this.params={}}ngOnInit(){this.getListKh(),this.getListDonvitinh(),this.initForm(),Object.keys(this.params).length>0&&(this.isEdit=!0,this.addEditForm.patchValue(this.params))}getAsyncFnData(u){return(0,h.of)(u)}getCurrentValue(){return(0,z.r7)(this.addEditForm)?(this.addEditForm.value.tenkhachhang=this.tenkhachhang,(0,h.of)(this.addEditForm.value)):(0,h.of)(!1)}initForm(){this.addEditForm=this.fb.group({id:[null],iduser:[null,[o.kI.required]],tenhang:[null,[o.kI.required]],tiencuoc:[0,[o.kI.required]],soluong:[null,[o.kI.required]],trongluong:[null],khoiluong:[null],donvitinh:[null,[o.kI.required]],diadiembochang:[null,[o.kI.required]],hinhthucthanhtoan:["1",[o.kI.required]],lotrinh:["0",[o.kI.required]],tennguoinhan:[null,[o.kI.required]],sdtnguoinhan:[null,[o.kI.required]],diachinguoinhan:[null,[o.kI.required]],ghichu:[null]})}changeKH(u){for(let i of this.listKh)if(i.id==u){this.tenkhachhang=i.name;break}}getListKh(){this.dataKhachhangService.getAccount({pageSize:0,pageNum:0,filters:{phongban_id:this.const.idKhachhang}}).pipe((0,t.x)(()=>{})).subscribe(i=>{this.listKh=i,this.cdf.markForCheck()})}getListDonvitinh(){this.spin00901Service.searchParams({pageSize:0,pageNum:0,filters:{rcdkbn:this.const.tmt050lstdonvitinh}}).subscribe(i=>{this.fnAddlstDonvitinh(i)})}fnAddlstDonvitinh(u){for(let i of u)this.listdonvitinh.push({value:i.datacd,lable:i.datanm})}}return p.\u0275fac=function(u){return new(u||p)(n.Y36(r.Lf),n.Y36(o.qu),n.Y36(n.sBO),n.Y36(l.B),n.Y36(C.C))},p.\u0275cmp=n.Xpm({type:p,selectors:[["app-subwindowproduct"]],decls:84,vars:74,consts:[["nz-form","",3,"formGroup"],[4,"ngIf"],["nzRequired","","nzFor","iduser",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng ch\u1ecdn T\xe0i ph\u1ee5",3,"nzSm","nzXs"],["name","iduser","id","iduser","formControlName","iduser","nzAllowClear","","nzShowSearch","","nzPlaceHolder","Select",3,"ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nzRequired","","nzFor","tenhang",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp t\xean h\xe0ng",3,"nzSm","nzXs"],["nz-input","","formControlName","tenhang","name","tenhang","placeholder","","id","tenhang"],["nzRequired","","nzFor","soluong",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng",3,"nzSm","nzXs"],["name","soluong","id","soluong","formControlName","soluong",3,"nzMin","nzMax","nzStep"],["nzRequired","","nzFor","trongluong",3,"nzSm","nzXs"],["nzErrorTip","",3,"nzSm","nzXs"],["name","trongluong","id","trongluong","formControlName","trongluong",3,"nzMin","nzMax","nzStep"],["nzRequired","","nzFor","khoiluong",3,"nzSm","nzXs"],["name","khoiluong","id","khoiluong","formControlName","khoiluong",3,"nzMin","nzMax","nzStep"],["nzRequired","","nzFor","donvitinh",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng ch\u1ecdn \u0111\u01a1n v\u1ecb t\xednh",3,"nzSm","nzXs"],["name","donvitinh","id","donvitinh","formControlName","donvitinh","nzAllowClear","","nzShowSearch","","nzPlaceHolder","Select"],["nzRequired","","nzFor","trongtai",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ti\u1ec1n c\u01b0\u1edbc",3,"nzSm","nzXs"],["name","tiencuoc","id","tiencuoc","formControlName","tiencuoc",3,"nzMin","nzMax","nzStep"],["nzErrorTip","Vui l\xf2ng nh\u1eadp \u0111\u1ecba \u0111i\u1ec3m b\xf3c h\xe0ng",3,"nzSm","nzXs"],["nz-input","","formControlName","diadiembochang","name","diadiembochang","placeholder","","id","diadiembochang"],["formControlName","hinhthucthanhtoan"],["nz-radio","","nzValue","1"],["nz-radio","","nzValue","2"],["nz-radio","","nzValue","3"],["formControlName","lotrinh"],["nz-radio","","nzValue","0"],["nzRequired","","nzFor","tennguoinhan",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp t\xean ng\u01b0\u1eddi nh\u1eadn",3,"nzSm","nzXs"],["nz-input","","formControlName","tennguoinhan","name","tennguoinhan","placeholder","","id","tennguoinhan"],["nzRequired","","nzFor","sdtnguoinhan",3,"nzSm","nzXs"],["nz-input","","formControlName","sdtnguoinhan","name","sdtnguoinhan","placeholder","","id","sdtnguoinhan"],["nzRequired","","nzFor","diachinguoinhan",3,"nzSm","nzXs"],["nz-input","","formControlName","diachinguoinhan","name","diachinguoinhan","placeholder","","id","diachinguoinhan"],["nzFor","ghichu",3,"nzSm","nzXs"],["nz-input","","formControlName","ghichu","placeholder","M\u1ed1t s\u1ed1 ghi ch\xfa v\u1ec1 th\xf4ng tin \u0111\u01a1n h\xe0ng.",3,"nzAutosize"],["nzRequired","","nzFor","id",3,"nzSm","nzXs"],["nz-input","","formControlName","id","name","id","placeholder","","id","id",3,"readonly","ngStyle"],[3,"nzValue","nzLabel"]],template:function(u,i){1&u&&(n.TgZ(0,"form",0),n.YNc(1,F,6,7,"ng-container",1),n.TgZ(2,"nz-form-item")(3,"nz-form-label",2),n._uU(4,"Id Kh\xe1ch h\xe0ng"),n.qZA(),n.TgZ(5,"nz-form-control",3)(6,"nz-select",4),n.NdJ("ngModelChange",function(m){return i.changeKH(m)}),n.YNc(7,T,1,2,"nz-option",5),n.qZA()()(),n.TgZ(8,"nz-form-item")(9,"nz-form-label",6),n._uU(10,"T\xean h\xe0ng"),n.qZA(),n.TgZ(11,"nz-form-control",7),n._UZ(12,"input",8),n.qZA()(),n.TgZ(13,"nz-form-item")(14,"nz-form-label",9),n._uU(15,"S\u1ed1 l\u01b0\u1ee3ng"),n.qZA(),n.TgZ(16,"nz-form-control",10),n._UZ(17,"nz-input-number",11),n.qZA()(),n.TgZ(18,"nz-form-item")(19,"nz-form-label",12),n._uU(20,"Tr\u1ecdng l\u01b0\u1ee3ng"),n.qZA(),n.TgZ(21,"nz-form-control",13),n._UZ(22,"nz-input-number",14),n.qZA()(),n.TgZ(23,"nz-form-item")(24,"nz-form-label",15),n._uU(25,"Kh\u1ed1i l\u01b0\u1ee3ng"),n.qZA(),n.TgZ(26,"nz-form-control",13),n._UZ(27,"nz-input-number",16),n.qZA()(),n.TgZ(28,"nz-form-item")(29,"nz-form-label",17),n._uU(30,"\u0110\u01a1n v\u1ecb t\xednh"),n.qZA(),n.TgZ(31,"nz-form-control",18)(32,"nz-select",19),n.YNc(33,x,1,2,"nz-option",5),n.qZA()()(),n.TgZ(34,"nz-form-item")(35,"nz-form-label",20),n._uU(36,"Ti\u1ec1n c\u01b0\u1edbc"),n.qZA(),n.TgZ(37,"nz-form-control",21),n._UZ(38,"nz-input-number",22),n.qZA()(),n.TgZ(39,"nz-form-item")(40,"nz-form-label",20),n._uU(41,"\u0110\u1ecba \u0111i\u1ec3m b\xf3c h\xe0ng"),n.qZA(),n.TgZ(42,"nz-form-control",23),n._UZ(43,"input",24),n.qZA()(),n.TgZ(44,"nz-form-item")(45,"nz-form-label",20),n._uU(46,"H\xecnh th\u1ee9c thanh to\xe1n"),n.qZA(),n.TgZ(47,"nz-form-control",13)(48,"nz-radio-group",25)(49,"label",26),n._uU(50,"Tr\u1ef1c ti\u1ebfp"),n.qZA(),n.TgZ(51,"label",27),n._uU(52,"Ghi n\u1ee3"),n.qZA(),n.TgZ(53,"label",28),n._uU(54,"Khi nh\u1eadn h\xe0ng"),n.qZA()()()(),n.TgZ(55,"nz-form-item")(56,"nz-form-label",20),n._uU(57,"L\u1ed9 tr\xecnh"),n.qZA(),n.TgZ(58,"nz-form-control",13)(59,"nz-radio-group",29)(60,"label",30),n._uU(61,"H\xe0ng \u0111i"),n.qZA(),n.TgZ(62,"label",26),n._uU(63,"H\xe0ng v\u1ec1"),n.qZA()()()(),n.TgZ(64,"nz-form-item")(65,"nz-form-label",31),n._uU(66,"T\xean ng\u01b0\u1eddi Nh\u1eadn"),n.qZA(),n.TgZ(67,"nz-form-control",32),n._UZ(68,"input",33),n.qZA()(),n.TgZ(69,"nz-form-item")(70,"nz-form-label",34),n._uU(71,"SDT ng\u01b0\u1eddi Nh\u1eadn"),n.qZA(),n.TgZ(72,"nz-form-control",32),n._UZ(73,"input",35),n.qZA()(),n.TgZ(74,"nz-form-item")(75,"nz-form-label",36),n._uU(76,"\u0110\u1ecba ch\u1ec9 ng\u01b0\u1eddi Nh\u1eadn"),n.qZA(),n.TgZ(77,"nz-form-control",32),n._UZ(78,"input",37),n.qZA()(),n.TgZ(79,"nz-form-item")(80,"nz-form-label",38),n._uU(81,"Ghi ch\xfa"),n.qZA(),n.TgZ(82,"nz-form-control",13),n._UZ(83,"textarea",39),n.qZA()()()),2&u&&(n.Q6J("formGroup",i.addEditForm),n.xp6(1),n.Q6J("ngIf",i.isEdit),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(2),n.Q6J("ngForOf",i.listKh),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzMin",0)("nzMax",1e4)("nzStep",1),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzMin",0)("nzMax",100)("nzStep",.001),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzMin",0)("nzMax",100)("nzStep",.001),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(2),n.Q6J("ngForOf",i.listdonvitinh),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzMin",0)("nzMax",5e4)("nzStep",100),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(9),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(7),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzAutosize",n.DdM(73,y)))},dependencies:[s.sg,s.O5,s.PC,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,E.t3,E.SK,S.Lr,S.Nx,S.iK,S.Fd,f.Zp,f.rh,A.Ip,A.Vq,D.Of,D.Dg,Z._V]}),p})();var U=e(69174);let I=(()=>{class p{constructor(u){this.modalWrapService=u}getContentComponent(){return P}show(u={},i){return this.modalWrapService.show(this.getContentComponent(),u,i)}}return p.\u0275fac=function(u){return new(u||p)(n.LFG(U.U))},p.\u0275prov=n.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},41227:(_,g,e)=>{e.d(g,{j:()=>z});var o=e(5316),c=e(94650);let z=(()=>{class h{}return h.\u0275fac=function(n){return new(n||h)},h.\u0275mod=c.oAB({type:h}),h.\u0275inj=c.cJS({imports:[o.m]}),h})()}}]);