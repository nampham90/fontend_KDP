"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[7694],{80126:(y,m,a)=>{a.d(m,{u:()=>T});var c=a(44556),g=a(94650),z=a(54246);let T=(()=>{class p{constructor(n){this.http=n}postAll(n){return this.http.post(c.NguonxeAnt100GetAll,n,{needSuccessInfo:!1})}postDetail(n){return this.http.post(c.NguonxeAnt100GetDetail,n,{needSuccessInfo:!1})}postCreate(n){return this.http.post(c.NguonxeAnt100Create,n,{needSuccessInfo:!1})}postUpdate(n){return this.http.post(c.NguonxeAnt100Update,n,{needSuccessInfo:!1})}postDelete(n){return this.http.post(c.NguonxeAnt100Delete,n,{needSuccessInfo:!1})}postDeleteAll(n){return this.http.post(c.NguonxeAnt100DeleteAll,n,{needSuccessInfo:!1})}postUpdateStatus(n){return this.http.post(c.NguonxeAnt100UpdateStatus,n,{needSuccessInfo:!1})}}return p.\u0275fac=function(n){return new(n||p)(g.LFG(z.q))},p.\u0275prov=g.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},67859:(y,m,a)=>{a.d(m,{S:()=>D});var c=a(94650),E=a(91565);let F=(()=>{class r{constructor(h){this.webService=h}mobileRule(h){return h?function s(r){return/^(0|\+?84|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(r)}(h)?null:{message:"Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i ch\xednh x\xe1c"}:null}telPhoneRule(h){return h?function n(r){return/^(0\d{2,3}-?)?\d{7,8}$/.test(r)}(h)?null:{message:"Vui l\xf2ng nh\u1eadp zalo ch\xednh x\xe1c"}:null}emailRule(h){return h?function v(r){return/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(r)}(h)?null:{message:"Vui l\xf2ng nh\u1eadp emali ch\xednh x\xe1c"}:null}passwordRule(h){return h?function f(r){return/^[^\s]{6,20}$/.test(r)&&!/^\d+$/.test(r)}(h)?null:{message:"M\u1eadt kh\u1ea9u bao g\u1ed3m 6 \u0111\u1ebfn 20 ch\u1eef c\xe1i vi\u1ebft hoa v\xe0 vi\u1ebft th\u01b0\u1eddng, s\u1ed1 ho\u1eb7c c\xe1c k\xfd t\u1ef1 kh\xe1c"}:null}}return r.\u0275fac=function(h){return new(h||r)(c.LFG(E.Q))},r.\u0275prov=c.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),D=(()=>{class r{constructor(h){this.vrService=h}emailValidator(){return this.commonUtil(this.vrService.emailRule)}mobileValidator(){return this.commonUtil(this.vrService.telPhoneRule)}passwordValidator(){return this.commonUtil(this.vrService.passwordRule)}zaloValidator(){return this.commonUtil(this.vrService.telPhoneRule)}commonUtil(h){return J=>h(J.value)}}return r.\u0275fac=function(h){return new(h||r)(c.LFG(F))},r.\u0275prov=c.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},57694:(y,m,a)=>{a.r(m),a.d(m,{Spch00251Module:()=>Hn});var c=a(9116),g=a(22155),z=a(13951),T=a(44556),p=a(22195),s=a(24006),n=a(94650),v=a(91565),f=a(36895),Q=a(99651),E=a(35568),F=a(49651),D=a(49523),r=a(39646),S=a(28746),h=a(50007),J=a(67859),U=a(69454),L=a(85726),C=a(73679),_=a(36704),X=a(35635),A=a(38231),M=a(48521);function N(e,l){1&e&&(n.ynx(0),n.TgZ(1,"nz-form-item")(2,"nz-form-label",33),n._uU(3,"S\u1ed1 th\u1ee9 t\u1ef1"),n.qZA(),n.TgZ(4,"nz-form-control",3),n._UZ(5,"input",34),n.qZA()(),n.BQk()),2&e&&(n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("readOnly",!0))}function q(e,l){if(1&e&&n._UZ(0,"nz-option",35),2&e){const t=l.$implicit;n.Q6J("nzValue",t.id)("nzLabel",t.name)}}const B=function(){return{minRows:2,maxRows:6}};let k=(()=>{class e{constructor(t,o,i,u,d){this.modalRef=t,this.fb=o,this.cdf=i,this.validatorsService=u,this.dataKhachhangService=d,this.const=T,this.listKh=[],this.tiencuocMode=0,this.tiencuocxengoaiMode=0,this.editForm=!1}changeTiencuoc(t){this.tiencuocMode=t}changeTiencuocxengoai(t){this.tiencuocxengoaiMode=t}getAsyncFnData(t){return(0,r.of)(t)}getCurrentValue(){return(0,D.r7)(this.addEditForm)?(this.addEditForm.value.tiencuoc=this.tiencuocMode,this.addEditForm.value.tiencuocxengoai=this.tiencuocxengoaiMode,(0,r.of)(this.addEditForm.value)):(0,r.of)(!1)}ngOnInit(){this.getListKh(),this.initForm(),Object.keys(this.params).length>0&&(this.editForm=!0,this.setFormStatusByType("enable"),this.addEditForm.patchValue(this.params),this.tiencuocMode=this.params.tiencuoc,this.tiencuocxengoaiMode=this.params.tiencuocxengoai,console.log(this.params))}initForm(){this.addEditForm=this.fb.group({stt:[null],thongtindonhang:[null,[s.kI.required]],diadiembochang:[null,[s.kI.required]],htttxengoai:["1",[s.kI.required]],idkhachhang:["",[s.kI.required]],htttkhachhang:["1",[s.kI.required]],tennguoinhan:[null,[s.kI.required]],sdtnguoinhan:[null,[s.kI.required,this.validatorsService.mobileValidator()]],diachinguoinhan:[null,[s.kI.required]],status02:["1",[s.kI.required]],ghichu:[null]})}setFormStatusByType(t){this.addEditForm.get("stt")?.[t]()}getListKh(){this.dataKhachhangService.getAccount({pageSize:0,pageNum:0,filters:{phongban_id:this.const.idKhachhang}}).pipe((0,S.x)(()=>{})).subscribe(o=>{this.listKh=o,this.cdf.markForCheck()})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(h.Lf),n.Y36(s.qu),n.Y36(n.sBO),n.Y36(J.S),n.Y36(U.B))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-subwindowctchuyenngoai"]],decls:77,vars:55,consts:[["nz-form","",3,"formGroup"],[4,"ngIf"],["nzRequired","","nzFor","thongtindonhang",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ...",3,"nzSm","nzXs"],["nz-input","","formControlName","thongtindonhang","name","thongtindonhang","placeholder","Vui l\xf2ng nh\u1eadp ...","id","thongtindonhang"],["nzRequired","","nzFor","diadiembochang",3,"nzSm","nzXs"],["nz-input","","formControlName","diadiembochang","name","diadiembochang","placeholder","Vui l\xf2ng nh\u1eadp ...","id","diadiembochang"],["nzRequired","","nzFor","tiencuoc",3,"nzSm","nzXs"],[3,"Amount","changeAmount"],["nzRequired","","nzFor","tiencuocxengoai",3,"nzSm","nzXs"],["nzRequired","","nzFor","htttxengoai",3,"nzSm","nzXs"],["nzErrorTip","",3,"nzSm","nzXs"],["formControlName","htttxengoai"],["nz-radio","","nzValue","1"],["nz-radio","","nzValue","2"],["nzRequired","","nzFor","idkhachhang",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng ch\u1ecdn",3,"nzSm","nzXs"],["name","idkhachhang","id","idkhachhang","formControlName","idkhachhang","nzAllowClear","","nzShowSearch","","nzPlaceHolder","Select"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nzRequired","","nzFor","htttkhachhang",3,"nzSm","nzXs"],["formControlName","htttkhachhang"],["nz-radio","","nzValue","3"],["nzRequired","","nzFor","tennguoinhan",3,"nzSm","nzXs"],["nz-input","","formControlName","tennguoinhan","name","tennguoinhan","placeholder","Vui l\xf2ng nh\u1eadp ...","id","tennguoinhan"],["nzRequired","","nzFor","sdtnguoinhan",3,"nzSm","nzXs"],["nz-input","","formControlName","sdtnguoinhan","name","sdtnguoinhan","placeholder","Vui l\xf2ng nh\u1eadp ...","id","sdtnguoinhan"],["nzRequired","","nzFor","diachinguoinhan",3,"nzSm","nzXs"],["nz-input","","formControlName","diachinguoinhan","name","diachinguoinhan","placeholder","Vui l\xf2ng nh\u1eadp ...","id","diachinguoinhan"],["nzRequired","","nzFor","status02",3,"nzSm","nzXs"],["formControlName","status02"],["nz-radio","","nzValue","0"],["nzFor","ghichu",3,"nzSm","nzXs"],["nz-input","","formControlName","ghichu","placeholder","M\u1ed1t s\u1ed1 ghi ch\xfa v\u1ec1 chi ti\u1ebft \u0111\u01a1n h\xe0ng.",3,"nzAutosize"],["nzRequired","","nzFor","stt",3,"nzSm","nzXs"],["nz-input","","formControlName","stt","name","stt","placeholder","","id","stt",3,"readOnly"],[3,"nzValue","nzLabel"]],template:function(t,o){1&t&&(n.TgZ(0,"form",0),n.YNc(1,N,6,5,"ng-container",1),n.TgZ(2,"nz-form-item")(3,"nz-form-label",2),n._uU(4,"Th\xf4ng tin \u0111\u01a1n h\xe0ng"),n.qZA(),n.TgZ(5,"nz-form-control",3),n._UZ(6,"input",4),n.qZA()(),n.TgZ(7,"nz-form-item")(8,"nz-form-label",5),n._uU(9,"\u0110\u1ecba \u0111i\u1ec3m b\xf3c h\xe0ng"),n.qZA(),n.TgZ(10,"nz-form-control",3),n._UZ(11,"input",6),n.qZA()(),n.TgZ(12,"nz-form-item")(13,"nz-form-label",7),n._uU(14,"Ti\u1ec1n c\u01b0\u1edbc"),n.qZA(),n.TgZ(15,"nz-form-control",3)(16,"app-input-currency",8),n.NdJ("changeAmount",function(u){return o.changeTiencuoc(u)}),n.qZA()()(),n.TgZ(17,"nz-form-item")(18,"nz-form-label",9),n._uU(19,"Ti\u1ec1n c\u01b0\u1edbc xe ngo\xe0i"),n.qZA(),n.TgZ(20,"nz-form-control",3)(21,"app-input-currency",8),n.NdJ("changeAmount",function(u){return o.changeTiencuocxengoai(u)}),n.qZA()()(),n.TgZ(22,"nz-form-item")(23,"nz-form-label",10),n._uU(24,"HTTT Xe ngo\xe0i"),n.qZA(),n.TgZ(25,"nz-form-control",11)(26,"nz-radio-group",12)(27,"label",13),n._uU(28,"Tr\u1ef1c ti\u1ebfp"),n.qZA(),n.TgZ(29,"label",14),n._uU(30,"Ghi n\u1ee3"),n.qZA()()()(),n.TgZ(31,"nz-form-item")(32,"nz-form-label",15),n._uU(33,"Id Kh\xe1ch h\xe0ng"),n.qZA(),n.TgZ(34,"nz-form-control",16)(35,"nz-select",17),n.YNc(36,q,1,2,"nz-option",18),n.qZA()()(),n.TgZ(37,"nz-form-item")(38,"nz-form-label",19),n._uU(39,"HTTT Kh\xe1ch h\xe0ng"),n.qZA(),n.TgZ(40,"nz-form-control",11)(41,"nz-radio-group",20)(42,"label",13),n._uU(43,"Tr\u1ef1c ti\u1ebfp"),n.qZA(),n.TgZ(44,"label",14),n._uU(45,"Ghi n\u1ee3"),n.qZA(),n.TgZ(46,"label",21),n._uU(47,"Khi nh\u1eadn h\xe0ng"),n.qZA()()()(),n.TgZ(48,"nz-form-item")(49,"nz-form-label",22),n._uU(50,"T\xean ng\u01b0\u1eddi nh\u1eadn"),n.qZA(),n.TgZ(51,"nz-form-control",3),n._UZ(52,"input",23),n.qZA()(),n.TgZ(53,"nz-form-item")(54,"nz-form-label",24),n._uU(55,"SDT ng\u01b0\u1eddi nh\u1eadn"),n.qZA(),n.TgZ(56,"nz-form-control",3),n._UZ(57,"input",25),n.qZA()(),n.TgZ(58,"nz-form-item")(59,"nz-form-label",26),n._uU(60,"\u0110\u1ecba ch\u1ec9 ng\u01b0\u1eddi nh\u1eadn"),n.qZA(),n.TgZ(61,"nz-form-control",3),n._UZ(62,"input",27),n.qZA()(),n.TgZ(63,"nz-form-item")(64,"nz-form-label",28),n._uU(65,"Thu h\u1ed3i bi\xean lai"),n.qZA(),n.TgZ(66,"nz-form-control",11)(67,"nz-radio-group",29)(68,"label",13),n._uU(69,"C\xf3"),n.qZA(),n.TgZ(70,"label",30),n._uU(71,"Kh\xf4ng"),n.qZA()()()(),n.TgZ(72,"nz-form-item")(73,"nz-form-label",31),n._uU(74,"Ghi ch\xfa"),n.qZA(),n.TgZ(75,"nz-form-control",11),n._UZ(76,"textarea",32),n.qZA()()()),2&t&&(n.Q6J("formGroup",o.addEditForm),n.xp6(1),n.Q6J("ngIf",o.editForm),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("Amount",o.tiencuocMode),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("Amount",o.tiencuocxengoaiMode),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(7),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(2),n.Q6J("ngForOf",o.listKh),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(9),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(7),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzAutosize",n.DdM(54,B)))},dependencies:[f.sg,f.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,L.e,C.t3,C.SK,_.Lr,_.Nx,_.iK,_.Fd,X.Zp,X.rh,A.Ip,A.Vq,M.Of,M.Dg]}),e})();var O=a(69174);let I=(()=>{class e{constructor(t){this.modalWrapService=t}getContentComponent(){return k}show(t={},o){return this.modalWrapService.show(this.getContentComponent(),t,o)}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(O.U))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var G=a(80126),Y=a(63604),R=a(47094),H=a(32802),V=a(5529),P=a(35656),K=a(94178),W=a(21102),$=a(66616),j=a(47044),nn=a(21811),tn=a(51971),en=a(834);const on=["operationTpl"],an=["tiencuocTpl"],ln=["tiencuocxengoaiTpl"],rn=["thongtindonhangTpl"],sn=["diadiembochangTpl"],un=["ghichuTpl"],hn=["htttkhachhangTpl"],cn=["htttxengoaiTpl"],dn=["sdtnguoinhanTpl"],pn=["tennguoinhanTpl"],gn=["diachinguoinhanTpl"];function mn(e,l){if(1&e){const t=n.EpF();n.TgZ(0,"button",39),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.showVideo())}),n._UZ(1,"span",40),n._uU(2,"H\u01b0\u1edbng d\u1eabn "),n.qZA()}2&e&&n.Q6J("nzSize","large")}function zn(e,l){1&e&&(n.ynx(0),n.TgZ(1,"span",42),n._uU(2,"Quay l\u1ea1i"),n.qZA(),n.BQk())}function fn(e,l){if(1&e&&n.YNc(0,zn,3,0,"ng-container",41),2&e){const t=n.oxw();n.Q6J("ngIf",t.showreturnBack)}}function _n(e,l){if(1&e&&n._UZ(0,"nz-option",43),2&e){const t=l.$implicit;n.hYB("nzLabel","",t.datacd," - ",t.datanm,""),n.s9C("nzValue",t.id)}}function Tn(e,l){if(1&e&&(n.ynx(0),n._uU(1),n.BQk()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.Oqu(t.errors.message)}}function Sn(e,l){1&e&&(n.ynx(0),n._uU(1,"Ph\u1ea7n b\u1eaft bu\u1ed9c"),n.BQk())}function xn(e,l){if(1&e&&(n.YNc(0,Tn,2,1,"ng-container",41),n.YNc(1,Sn,2,0,"ng-container",41)),2&e){const t=l.$implicit;n.Q6J("ngIf",t.hasError("message")),n.xp6(1),n.Q6J("ngIf",t.hasError("required"))}}function bn(e,l){if(1&e){const t=n.EpF();n.TgZ(0,"span",45)(1,"button",46),n.NdJ("click",function(){n.CHM(t);const i=n.oxw().stt,u=n.oxw();return n.KtG(u.edit(i))}),n._uU(2,"C\u1eadp nh\u1eadt"),n.qZA()()}if(2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("disabled",t.btnUpdate)}}function Cn(e,l){if(1&e){const t=n.EpF();n.TgZ(0,"span",45)(1,"button",46),n.NdJ("click",function(){n.CHM(t);const i=n.oxw().stt,u=n.oxw();return n.KtG(u.del(i))}),n._uU(2,"X\xf3a"),n.qZA()()}if(2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("disabled",t.btnDelete)}}function Xn(e,l){if(1&e&&(n.YNc(0,bn,3,1,"span",44),n.YNc(1,Cn,3,1,"span",44)),2&e){const t=n.oxw();n.Q6J("appAuth",t.ActionCode.ChuyenngoaiEdit),n.xp6(1),n.Q6J("appAuth",t.ActionCode.ChuyenngoaiDel)}}function An(e,l){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"currency"),n.qZA()),2&e){const t=l.tiencuoc;n.xp6(1),n.Oqu(n.Dn7(2,1,1e3*t,"VND",""))}}function Zn(e,l){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"currency"),n.qZA()),2&e){const t=l.tiencuocxengoai;n.xp6(1),n.Oqu(n.Dn7(2,1,1e3*t,"VND",""))}}function yn(e,l){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=l.thongtindonhang;n.xp6(1),n.Oqu(t)}}function vn(e,l){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=l.diadiembochang;n.xp6(1),n.Oqu(t)}}function En(e,l){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=l.ghichu;n.xp6(1),n.Oqu(t)}}function Fn(e,l){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=l.htttkhachhang,o=n.oxw();n.xp6(1),n.Oqu(o.mergeHttt(t))}}function Dn(e,l){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=l.htttxengoai,o=n.oxw();n.xp6(1),n.Oqu(o.mergeHttt(t))}}function Jn(e,l){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=l.sdtnguoinhan;n.xp6(1),n.Oqu(t)}}function Qn(e,l){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=l.tennguoinhan;n.xp6(1),n.Oqu(t)}}function Mn(e,l){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=l.diachinguoinhan;n.xp6(1),n.Oqu(t)}}function wn(e,l){if(1&e){const t=n.EpF();n.TgZ(0,"button",49),n.NdJ("click",function(){n.CHM(t);const i=n.oxw(2);return n.KtG(i.add())}),n._UZ(1,"i",50),n._uU(2," Th\xeam m\u1edbi "),n.qZA()}if(2&e){const t=n.oxw(2);n.Q6J("disabled",t.btnNew)}}function Un(e,l){if(1&e){const t=n.EpF();n.TgZ(0,"button",51),n.NdJ("click",function(){n.CHM(t);const i=n.oxw(2);return n.KtG(i.allDel())}),n._UZ(1,"i",52),n._uU(2," X\xf3a t\u1ea5t c\u1ea3 "),n.qZA()}if(2&e){const t=n.oxw(2);n.Q6J("disabled",t.btnDeleteAll)}}function Ln(e,l){if(1&e&&(n.YNc(0,wn,3,1,"button",47),n.YNc(1,Un,3,1,"button",48)),2&e){const t=n.oxw();n.Q6J("appAuth",t.ActionCode.ChuyenngoaiAdd),n.xp6(1),n.Q6J("appAuth",t.ActionCode.DataScDelAll)}}function Nn(e,l){if(1&e){const t=n.EpF();n.TgZ(0,"span",45)(1,"button",49),n.NdJ("click",function(){n.CHM(t);const i=n.oxw(3);return n.KtG(i.fnBtnConfirm())}),n._UZ(2,"i",53),n._uU(3," Confirm "),n.qZA()()}if(2&e){const t=n.oxw(3);n.xp6(1),n.Q6J("disabled",!t.btnConfirm)("disabled",!t.headerForm.valid)}}function qn(e,l){if(1&e&&(n.ynx(0),n.YNc(1,Nn,4,2,"span",44),n.BQk()),2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("appAuth",t.ActionCode.ConfirmChuyenngoai)}}function Bn(e,l){if(1&e&&n.YNc(0,qn,2,1,"ng-container",41),2&e){const t=n.oxw();n.Q6J("ngIf",t.showConfirm)}}const kn=function(){return{"padding-bottom":0}},Z=function(){return{xs:8,sm:16,md:24}},On=function(){return{minRows:2,maxRows:6}},In=[{path:"",component:(()=>{class e extends z.H{constructor(t,o,i,u,d,x,b,Vn,Pn,Kn,Wn,$n,jn){super(t,o,i,u,d,x),this.webService=t,this.router=o,this.cdf=i,this.datePipe=u,this.tabService=d,this.modalVideoyoutube=x,this.message=b,this.subwinCtChuyenngoaiService=Vn,this.modalSrv=Pn,this.nguonxeService=Kn,this.dataService=Wn,this.chuyenngoaiDto=$n,this.fb=jn,this.DisplayScreenID=g.t.spch00251,this.searchParam={},this.dateFormat=T.dateFormat,this.dataList=[],this.checkedCashArray=[],this.ActionCode=p.h,this.availableOptions=[],this.pageHeaderInfo={title:"Qu\u1ea3n l\xfd chuy\u1ebfn ngo\xe0i",breadcrumb:["Home","Chuy\u1ebfn","Qu\u1ea3n l\xfd chuy\u1ebfn ngo\xe0i"],desc:""},this.ngaynhap=null,this.ngayvanchuyen=null,this.ngaydukiengiaohang=null,this.listnguonxe=[],this.biensoxe="",this.tentaixe="",this.sodienthoai="",this.ghichu="",this.listdetail=[],this.disabledidchuyenngoai=!0,this.disabledsdtnguonxe=!0,this.showConfirm=!1,this.btnConfirm=!0,this.btnNew=!0,this.btnDelete=!0,this.btnDeleteAll=!0,this.btnUpdate=!0,this.showreturnBack=!1}fnInit(){}destroy(){}ngOnInit(){this.initTable(),this.headerForm=this.createForm(),this.showBtnConfirm(),this.fnGetAllNguonXe(),!0===this.chuyenngoaiDto.initFlg&&(this.btnNew=!1,this.btnDelete=!1,this.btnDeleteAll=!1,this.btnUpdate=!1,this.showreturnBack=!1),"link"==this.chuyenngoaiDto.mode&&!1===this.chuyenngoaiDto.initFlg&&(this.tableLoading(!0),this.dataService.postDetail({id:this.chuyenngoaiDto.id}).pipe().subscribe(t=>{this.listdetail=[...t.listdetail];let o=1;for(let i of this.listdetail)i.stt=o,o++;this.getDataList(),this.headerForm.patchValue(t.resHeader),this.showreturnBack=!0}),this.chuyenngoaiDto.mode="",this.chuyenngoaiDto.initFlg=!0),"update"==this.chuyenngoaiDto.mode&&!1===this.chuyenngoaiDto.initFlg&&(this.tableLoading(!0),this.dataService.postDetail({id:this.chuyenngoaiDto.id}).pipe().subscribe(t=>{this.listdetail=[...t.listdetail];let o=1;for(let i of this.listdetail)i.stt=o,o++;this.getDataList(),this.headerForm.patchValue(t.resHeader),this.showBtnConfirm(),this.btnDelete=!1,this.btnDeleteAll=!0,this.btnNew=!1,this.btnUpdate=!1,this.showreturnBack=!0}))}fnGetAllNguonXe(){this.nguonxeService.postAll({pageSize:0,pageNum:0}).pipe().subscribe(o=>{this.listnguonxe=o})}fnBtnConfirm(){if(this.headerForm.value.id&&""==this.chuyenngoaiDto.id&&24==this.headerForm.value.id.length)this.chuyenngoaiDto.clear(),this.headerForm.reset();else{let t={},o="",i="",u="";!1===this.chuyenngoaiDto.initFlg&&"update"==this.chuyenngoaiDto.mode?(u="update",o="B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n c\u1eadp nh\u1eadt !",i="D\u1eef li\u1ec7u s\u1ebd \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt sau khi nh\u1ea5n OK",t={spch00251Header:this.headerForm.value,spch00251Listdetail:this.dataList,mode:"update"}):(u="create",o="B\u1ea1n ch\u1eafc ch\u1eafn d\u1eef li\u1ec7u b\u1ea1n t\u1ea1o \u0111\xe3 \u0111\xfang ch\u01b0a !",i="Nh\u1ea5n ok \u0111\u1ec3 ho\xe0n th\xe0nh c\xf4ng vi\u1ec7c !",t={spch00251Header:this.headerForm.value,spch00251Listdetail:this.dataList,mode:"create"}),this.modalSrv.confirm({nzTitle:o,nzContent:i,nzOnOk:()=>{this.dataService.postCreate(t).pipe().subscribe(d=>{this.tableLoading(!0),this.listdetail=d.reslistdetail;let x=1;for(let b of this.listdetail)b.stt=x,x++;this.headerForm.patchValue(d.resspch00251Header),this.getDataList(),this.chuyenngoaiDto.initFlg=!1,this.chuyenngoaiDto.mode="update",this.chuyenngoaiDto.listdetail=d.reslistdetail,this.message.success("create"==u?"\u0110\u0103ng k\xfd th\xe0nh c\xf4ng !":"C\u1eadp nh\u1eadt th\xe0nh c\xf4ng !")})}})}}createForm(){return this.fb.group({id:[""],nguonxe:[null,[s.kI.required]],sdtnguonxe:["",[s.kI.required]],ngaynhap:[this.getDate(),[s.kI.required]],ngayvanchuyen:[null,[s.kI.required]],ngaydukiengiaohang:[null],biensoxe:[null,[s.kI.required]],tentaixe:[null,[s.kI.required]],sodienthoai:[null,[s.kI.required]],ghichu:[""]})}submitForm(){console.log("submit",this.headerForm.value)}fnChangeNguonXe(t){this.nguonxeService.postDetail({id:t}).pipe().subscribe(i=>{this.headerForm.patchValue({sdtnguonxe:i.sodienthoai})})}reloadTable(){this.message.info("\u0110\xe3 \u0111\u01b0\u1ee3c l\xe0m m\u1edbi"),this.getDataList()}getDataList(t){this.tableLoading(!0),this.listdetail.length>0?(this.dataList=[...this.listdetail],this.tableLoading(!1)):this.tableLoading(!1)}selectedChecked(t){this.checkedCashArray=[...t]}changePageSize(t){this.tableConfig.pageSize=t}tableChangeDectction(){this.dataList=[...this.dataList],this.cdf.detectChanges()}tableLoading(t){this.tableConfig.loading=t,this.tableChangeDectction()}add(){this.subwinCtChuyenngoaiService.show({nzTitle:"Th\xeam m\u1edbi"}).subscribe(t=>{!t||0===t.status||(this.tableLoading(!0),this.mergeDetail(t.modalValue),this.addListDetail(),this.getDataList(),this.showBtnConfirm())},t=>this.tableLoading(!1))}edit(t){let o;for(let i of this.dataList)i.stt===t&&(o=i);this.subwinCtChuyenngoaiService.show({nzTitle:"C\u1eadp nh\u1eadt"},o).subscribe(({modalValue:i,status:u})=>{0!==u&&(this.tableLoading(!0),i.stt=t,this.mergeUpdateList(i),this.getDataList(),this.message.info("Click Confirm \u0111\u1ec3 ho\xe0n th\xe0nh c\u1eadp nh\u1eadt "))})}del(t){this.modalSrv.confirm({nzTitle:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a n\xf3 kh\xf4ng?",nzContent:"Kh\xf4ng th\u1ec3 ph\u1ee5c h\u1ed3i sau khi x\xf3a",nzOnOk:()=>{this.tableLoading(!0),this.listdetail=this.listdetail.filter(o=>o.stt!==t),this.dataList=[...this.listdetail],this.showBtnConfirm(),this.tableLoading(!1)}})}showBtnConfirm(){this.showConfirm=this.dataList.length>0}allDel(){}addListDetail(){this.ctchuyenngoai&&(this.listdetail=this.listdetail.concat(this.ctchuyenngoai))}mergeDetail(t){let o=0,i=this.listdetail.length;if(0==i)o=1;else{let u=this.listdetail[i-1].stt;u&&u>0&&(o=u+1)}return this.ctchuyenngoai=t,this.ctchuyenngoai.stt=o,this.ctchuyenngoai}mergeUpdateList(t){for(let o of this.listdetail)o.stt==t.stt&&(o.thongtindonhang=t.thongtindonhang,o.diadiembochang=t.diadiembochang,o.ghichu=t.ghichu,o.idkhachhang=t.idkhachhang,o.htttkhachhang=t.htttkhachhang,o.htttxengoai=t.htttxengoai,o.sdtnguoinhan=t.sdtnguoinhan,o.tennguoinhan=t.tennguoinhan,o.diachinguoinhan=t.diachinguoinhan,o.tiencuoc=t.tiencuoc,o.status02=t.status02,o.tiencuocxengoai=t.tiencuocxengoai)}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:"STT",field:"stt",width:80},{title:"Th\xf4ng tin \u0111\u01a1n h\xe0ng",field:"thongtindonhang",width:280,tdTemplate:this.thongtindonhangTpl},{title:"\u0110\u1ecba \u0111i\u1ec3m b\u1ed1c h\xe0ng",width:280,field:"diadiembochang",tdTemplate:this.diadiembochangTpl},{title:"Ti\u1ec1n c\u01b0\u1edbc",width:120,field:"tiencuoc",tdTemplate:this.tiencuocTpl},{title:"Ti\u1ec1n thu\xea xe ngo\xe0i",width:250,field:"tiencuocxengoai",tdTemplate:this.tiencuocxengoaiTpl},{title:"HTTT xe ngo\xe0i",width:200,field:"htttxengoai",tdTemplate:this.htttxengoaiTpl},{title:"HTTT kh\xe1ch h\xe0ng",width:200,field:"htttkhachhang",tdTemplate:this.htttkhachhangTpl},{title:"T\xean ng\u01b0\u1eddi nh\u1eadn",width:150,field:"tennguoinhan",tdTemplate:this.tennguoinhanTpl},{title:"SDT ng\u01b0\u1eddi nh\u1eadn",width:150,field:"sdtnguoinhan",tdTemplate:this.sdtnguoinhanTpl},{title:"\u0110ia ch\u1ec9 ng\u01b0\u1eddi nh\u1eadn",width:230,field:"diachinguoinhan",tdTemplate:this.diachinguoinhanTpl},{title:"Ghi ch\xfa",width:350,field:"ghichu",tdTemplate:this.ghichuTpl},{title:"H\xe0nh \u0111\u1ed9ng",tdTemplate:this.operationTpl,width:300,fixed:!0,fixedDir:"right"}],total:0,loading:!0,pageSize:10,pageIndex:1}}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(v.Q),n.Y36(c.F0),n.Y36(n.sBO),n.Y36(f.uU),n.Y36(Q.p),n.Y36(E.L),n.Y36(F.dD),n.Y36(I),n.Y36(h.Sf),n.Y36(G.u),n.Y36(Y.h),n.Y36(R.d),n.Y36(s.qu))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-spch00251"]],viewQuery:function(t,o){if(1&t&&(n.Gf(on,7),n.Gf(an,7),n.Gf(ln,7),n.Gf(rn,7),n.Gf(sn,7),n.Gf(un,7),n.Gf(hn,7),n.Gf(cn,7),n.Gf(dn,7),n.Gf(pn,7),n.Gf(gn,7)),2&t){let i;n.iGM(i=n.CRH())&&(o.operationTpl=i.first),n.iGM(i=n.CRH())&&(o.tiencuocTpl=i.first),n.iGM(i=n.CRH())&&(o.tiencuocxengoaiTpl=i.first),n.iGM(i=n.CRH())&&(o.thongtindonhangTpl=i.first),n.iGM(i=n.CRH())&&(o.diadiembochangTpl=i.first),n.iGM(i=n.CRH())&&(o.ghichuTpl=i.first),n.iGM(i=n.CRH())&&(o.htttkhachhangTpl=i.first),n.iGM(i=n.CRH())&&(o.htttxengoaiTpl=i.first),n.iGM(i=n.CRH())&&(o.sdtnguoinhanTpl=i.first),n.iGM(i=n.CRH())&&(o.tennguoinhanTpl=i.first),n.iGM(i=n.CRH())&&(o.diachinguoinhanTpl=i.first)}},features:[n.qOj],decls:103,vars:220,consts:[[3,"backTpl","backUrl","extraTpl","pageHeaderInfo"],["huongdanTpl",""],["backTpl",""],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-form","",3,"formGroup","ngSubmit"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nzRequired","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs","nzFor"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nz-input","","name","id","formControlName","id","placeholder","M\xe3 chuy\u1ebfn ngo\xe0i","readonly","",3,"disabled"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs","nzErrorTip"],["name","nguonxe","nzShowSearch","","nzAllowClear","","nzPlaceHolder","Select","formControlName","nguonxe",3,"ngModelChange"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nz-input","","name","sdtnguonxe","id","sdtnguonxe","formControlName","sdtnguonxe","placeholder","","readonly","",3,"disabled"],["name","ngaynhap","formControlName","ngaynhap",3,"nzFormat","nzPlaceHolder"],["name","ngayvanchuyen","formControlName","ngayvanchuyen",3,"nzFormat","nzPlaceHolder"],["name","ngaydukiengiaohang","formControlName","ngaydukiengiaohang",3,"nzFormat","nzPlaceHolder"],["nz-input","","name","biensoxe","formControlName","biensoxe","placeholder","Bi\u1ec3n s\u1ed1 xe"],["nz-input","","name","tentaixe","formControlName","tentaixe","placeholder","T\xean t\xe0i x\xea"],["nz-input","","name","sodienthoai","formControlName","sodienthoai","placeholder","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i t\xe0i x\u1ebf"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs","nzFor"],["nz-input","","name","ghichu","formControlName","ghichu","placeholder","Ghi ch\xfa",3,"nzAutosize"],["combineTpl",""],[3,"tableTitle","btnTpl","btnConfirm","reload"],[3,"checkedCashArrayFromComment","tableConfig","tableData","selectedChange","changePageSize","changePageNum"],["operationTpl",""],["tiencuocTpl",""],["tiencuocxengoaiTpl",""],["thongtindonhangTpl",""],["diadiembochangTpl",""],["ghichuTpl",""],["htttkhachhangTpl",""],["htttxengoaiTpl",""],["sdtnguoinhanTpl",""],["tennguoinhanTpl",""],["diachinguoinhanTpl",""],["tableBtns",""],["tableConfirm",""],["nz-button","","nzType","primary","nzShape","round",3,"nzSize","click"],["nz-icon","","nzType","star","nzTheme","outline"],[4,"ngIf"],["nz-icon","","nzType","arrow-left","nzTheme","outline"],[3,"nzLabel","nzValue"],["class","operate-text",4,"appAuth"],[1,"operate-text"],["nz-button","","nzType","primary","nzGhost","",3,"disabled","click"],["nz-button","","nzType","primary","class","m-r-8",3,"disabled","click",4,"appAuth"],["nz-button","","nzType","default",3,"disabled","click",4,"appAuth"],["nz-button","","nzType","primary",1,"m-r-8",3,"disabled","click"],["nz-icon","","nzType","plus"],["nz-button","","nzType","default",3,"disabled","click"],["nz-icon","","nzType","delete"],["nz-icon","","nzType","caret-right"]],template:function(t,o){if(1&t&&(n._UZ(0,"app-page-header",0),n.YNc(1,mn,3,1,"ng-template",null,1,n.W1O),n.YNc(3,fn,1,1,"ng-template",null,2,n.W1O),n.TgZ(5,"div",3)(6,"nz-card",4)(7,"form",5),n.NdJ("ngSubmit",function(){return o.submitForm()}),n.TgZ(8,"div",6)(9,"div",7)(10,"nz-form-item")(11,"nz-form-label",8),n._uU(12,"M\xe3 chuy\u1ebfn ngo\xe0i"),n.qZA(),n.TgZ(13,"nz-form-control",9),n._UZ(14,"input",10),n.qZA()()(),n.TgZ(15,"div",7)(16,"nz-form-item")(17,"nz-form-label",8),n._uU(18,"Ngu\u1ed3n xe"),n.qZA(),n.TgZ(19,"nz-form-control",11)(20,"nz-select",12),n.NdJ("ngModelChange",function(u){return o.fnChangeNguonXe(u)}),n.YNc(21,_n,1,3,"nz-option",13),n.qZA()()()(),n.TgZ(22,"div",7)(23,"nz-form-item")(24,"nz-form-label",8),n._uU(25,"SDT ngu\u1ed3n xe"),n.qZA(),n.TgZ(26,"nz-form-control",9),n._UZ(27,"input",14),n.qZA()()()(),n.TgZ(28,"div",6)(29,"div",7)(30,"nz-form-item")(31,"nz-form-label",8),n._uU(32,"Ng\xe0y nh\u1eadp"),n.qZA(),n.TgZ(33,"nz-form-control",11),n._UZ(34,"nz-date-picker",15),n.qZA()()(),n.TgZ(35,"div",7)(36,"nz-form-item")(37,"nz-form-label",8),n._uU(38,"Ng\xe0y v\u1eadn chuy\u1ec3n"),n.qZA(),n.TgZ(39,"nz-form-control",11),n._UZ(40,"nz-date-picker",16),n.qZA()()(),n.TgZ(41,"div",7)(42,"nz-form-item")(43,"nz-form-label",8),n._uU(44,"Ng\xe0y d\u1ef1 ki\u1ebfn GH"),n.qZA(),n.TgZ(45,"nz-form-control",11),n._UZ(46,"nz-date-picker",17),n.qZA()()()(),n.TgZ(47,"div",6)(48,"div",7)(49,"nz-form-item")(50,"nz-form-label",8),n._uU(51,"Bi\u1ec3n s\u1ed1 xe"),n.qZA(),n.TgZ(52,"nz-form-control",11),n._UZ(53,"input",18),n.qZA()()(),n.TgZ(54,"div",7)(55,"nz-form-item")(56,"nz-form-label",8),n._uU(57,"T\xean t\xe0i x\u1ebf"),n.qZA(),n.TgZ(58,"nz-form-control",11),n._UZ(59,"input",19),n.qZA()()(),n.TgZ(60,"div",7)(61,"nz-form-item")(62,"nz-form-label",8),n._uU(63,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),n.qZA(),n.TgZ(64,"nz-form-control",11),n._UZ(65,"input",20),n.qZA()()()(),n.TgZ(66,"div",6)(67,"div",7)(68,"nz-form-item")(69,"nz-form-label",21),n._uU(70,"Ghi ch\xfa"),n.qZA(),n.TgZ(71,"nz-form-control",11),n._UZ(72,"textarea",22),n.qZA()()()()(),n.YNc(73,xn,2,2,"ng-template",null,23,n.W1O),n.qZA(),n.TgZ(75,"app-card-table-wrap",24),n.NdJ("reload",function(){return o.reloadTable()}),n.TgZ(76,"app-ant-table",25),n.NdJ("selectedChange",function(u){return o.selectedChecked(u)})("changePageSize",function(u){return o.changePageSize(u)})("changePageNum",function(u){return o.getDataList(u)}),n.qZA(),n.YNc(77,Xn,2,2,"ng-template",null,26,n.W1O),n.YNc(79,An,3,5,"ng-template",null,27,n.W1O),n.YNc(81,Zn,3,5,"ng-template",null,28,n.W1O),n.YNc(83,yn,2,1,"ng-template",null,29,n.W1O),n.YNc(85,vn,2,1,"ng-template",null,30,n.W1O),n.YNc(87,En,2,1,"ng-template",null,31,n.W1O),n.YNc(89,Fn,2,1,"ng-template",null,32,n.W1O),n.YNc(91,Dn,2,1,"ng-template",null,33,n.W1O),n.YNc(93,Jn,2,1,"ng-template",null,34,n.W1O),n.YNc(95,Qn,2,1,"ng-template",null,35,n.W1O),n.YNc(97,Mn,2,1,"ng-template",null,36,n.W1O),n.qZA(),n.YNc(99,Ln,2,2,"ng-template",null,37,n.W1O),n.YNc(101,Bn,1,1,"ng-template",null,38,n.W1O),n.qZA()),2&t){const i=n.MAs(2),u=n.MAs(4),d=n.MAs(74),x=n.MAs(100),b=n.MAs(102);n.Q6J("backTpl",u)("backUrl","/default/chuyen/spch00252")("extraTpl",i)("pageHeaderInfo",o.pageHeaderInfo),n.xp6(6),n.Q6J("nzBodyStyle",n.DdM(214,kn)),n.xp6(1),n.Q6J("formGroup",o.headerForm),n.xp6(1),n.Q6J("nzGutter",n.DdM(215,Z)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("disabled",!0),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",d),n.xp6(2),n.Q6J("ngForOf",o.listnguonxe),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("disabled",!0),n.xp6(1),n.Q6J("nzGutter",n.DdM(216,Z)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",d),n.xp6(1),n.Q6J("nzFormat",o.dateFormat)("nzPlaceHolder",o.dateFormat),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",d),n.xp6(1),n.Q6J("nzFormat",o.dateFormat)("nzPlaceHolder",o.dateFormat),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",d),n.xp6(1),n.Q6J("nzFormat",o.dateFormat)("nzPlaceHolder",o.dateFormat),n.xp6(1),n.Q6J("nzGutter",n.DdM(217,Z)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",d),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",d),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",d),n.xp6(2),n.Q6J("nzGutter",n.DdM(218,Z)),n.xp6(1),n.Q6J("nzXXl",24)("nzXl",24)("nzLg",24)("nzMd",24)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",3)("nzXl",3)("nzLg",3)("nzMd",6)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",d),n.xp6(1),n.Q6J("nzAutosize",n.DdM(219,On)),n.xp6(3),n.Q6J("tableTitle","Chi ti\u1ebft \u0111\u01a1n h\xe0ng")("btnTpl",x)("btnConfirm",b),n.xp6(1),n.Q6J("checkedCashArrayFromComment",o.checkedCashArray)("tableConfig",o.tableConfig)("tableData",o.dataList)}},dependencies:[f.sg,f.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,H.q,V.q,P.x,K.p,W.Ls,C.t3,C.SK,_.Lr,_.Nx,_.iK,_.Fd,$.ix,j.w,nn.dQ,X.Zp,X.rh,A.Ip,A.Vq,tn.bd,en.uw,f.H9]}),e})(),data:{title:"Qu\u1ea3n l\xfd chuy\u1ebfn ngo\xe0i",key:"spch00251"}}];let Gn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[c.Bz.forChild(In),c.Bz]}),e})();var w=a(5316);let Yn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[w.m]}),e})();var Rn=a(30804);let Hn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[Gn,w.m,Yn,Rn.A]}),e})()},30804:(y,m,a)=>{a.d(m,{A:()=>T});var c=a(5316),g=a(13458),z=a(94650);let T=(()=>{class p{}return p.\u0275fac=function(n){return new(n||p)},p.\u0275mod=z.oAB({type:p}),p.\u0275inj=z.cJS({imports:[c.m,g.e]}),p})()}}]);