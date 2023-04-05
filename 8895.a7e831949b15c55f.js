"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[8895],{85216:(A,h,a)=>{a.d(h,{m:()=>z});var g=a(94650);let z=(()=>{class d{constructor(){this.formRules={nonEmpty:"^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$",usernameMin:6,passwordMin:6,passwordPattern:"^[a-zA-Z0-9]{6,20}$"},this.formErrors={name:"",email:"",password:"",confirmPassword:"",accept:!1},this.errorMessages={name:{required:"Name kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng",minLength:`Name t\u1ed1i thi\u1ec3u ${this.formRules.usernameMin} k\xfd t\u1ef1`,pattern:"Must contain letters and/or numbers, no trailing spaces",namedb:"T\xean T\xe0i Kho\u1ea3n \u0111\xe3 t\u1ed3n t\u1ea1i."},text:{required:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng."},email:{required:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng.",email:"\u0110\u1ecba ch\u1ec9 Email kh\xf4ng \u0111\xfang.",emaildb:"Email \u0111\xe3 t\u1ed3n t\u1ea1i."},password:{required:"Password kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng",pattern:"Password l\xe0 k\xfd t\u1ef1 \u0111\u1eb7c bi\u1ec7t, s\u1ed1, ch\u1eef hoa v\xe0 ch\u1eef th\u01b0\u1eddng",minLength:`Password t\u1ed1i thi\u1ec3u ${this.formRules.passwordMin} k\xfd t\u1ef1`},confirmPassword:{required:"Password confirmation is required",passwordMismatch:"Passwords must match"},accept:{requiredTrue:"You have to accept our Terms and Conditions"}}}}return d.\u0275fac=function(C){return new(C||d)},d.\u0275prov=g.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},48895:(A,h,a)=>{a.r(h),a.d(h,{HuongdanModule:()=>dt});var g=a(9116),z=a(22155),d=a(13951),u=a(44556),C=a(22195),T=a(28746),t=a(94650),H=a(91565),S=a(36895),x=a(35568),Z=a(99651),v=a(49651),N=a(54246);let F=(()=>{class e{constructor(n){this.http=n}Create(n){return this.http.post(u.Tmt101Ant100Create,n,{needSuccessInfo:!1})}Update(n){return this.http.post(u.Tmt101Ant100Update,n,{needSuccessInfo:!1})}PostAll(n){return this.http.post(u.Tmt101Ant100FindAll,n,{needSuccessInfo:!1})}PostSearchParams(n){return this.http.post(u.Tmt101Ant100Searchparam,n,{needSuccessInfo:!1})}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(N.q))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=a(24006),M=a(88176),E=a(49523),b=a(39646),I=a(50007),J=a(85216),D=a(73780),f=a(73679),m=a(36704),_=a(35635);let L=(()=>{class e{constructor(n,o,i,s,c){this.modalRef=n,this.fb=o,this.vf=i,this.message=s,this.langService=c,this.isEdit=!1}getAsyncFnData(n){return(0,b.of)(n)}getCurrentValue(){return(0,E.r7)(this.addEditForm)?(0,b.of)(this.addEditForm.value):(0,b.of)(!1)}get f(){return this.addEditForm.controls}ngOnInit(){this.initForm(),Object.keys(this.params).length>0&&this.addEditForm.patchValue(this.params)}initForm(){this.addEditForm=this.fb.group({idyoutube:[null,[l.kI.required]],urldisplayid:[null,[l.kI.required]],title:[null],content:[null]})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(I.Lf),t.Y36(l.qu),t.Y36(J.m),t.Y36(v.dD),t.Y36(D.C))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-huongdan-modal"]],features:[t._Bn([M.z])],decls:21,vars:17,consts:[["nz-form","",3,"formGroup"],["nzRequired","","nzFor","idyoutube",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ID Youtube",3,"nzSm","nzXs"],["nz-input","","formControlName","idyoutube","name","idyoutube","placeholder","Vui l\xf2ng nh\u1eadp ID Youtube","id","idyoutube"],["nzRequired","","nzFor","urldisplayid",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp m\xe3 m\xe0n h\xecnh",3,"nzSm","nzXs"],["nz-input","","formControlName","urldisplayid","name","urldisplayid","placeholder","vd: khachhang/spkh00101","id","urldisplayid"],["nzFor","title",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ",3,"nzSm","nzXs"],["nz-input","","formControlName","title","name","title","placeholder","Vui l\xf2ng nh\u1eadp ...","id","title"],["nzFor","content",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ...",3,"nzSm","nzXs"],["nz-input","","formControlName","content","name","content","placeholder","Vui l\xf2ng nh\u1eadp ...","id","content"]],template:function(n,o){1&n&&(t.TgZ(0,"form",0)(1,"nz-form-item")(2,"nz-form-label",1),t._uU(3,"ID Youtube"),t.qZA(),t.TgZ(4,"nz-form-control",2),t._UZ(5,"input",3),t.qZA()(),t.TgZ(6,"nz-form-item")(7,"nz-form-label",4),t._uU(8,"M\xe3 m\xe0n h\xecnh"),t.qZA(),t.TgZ(9,"nz-form-control",5),t._UZ(10,"input",6),t.qZA()(),t.TgZ(11,"nz-form-item")(12,"nz-form-label",7),t._uU(13,"Ti\xeau \u0111\u1ec1"),t.qZA(),t.TgZ(14,"nz-form-control",8),t._UZ(15,"input",9),t.qZA()(),t.TgZ(16,"nz-form-item")(17,"nz-form-label",10),t._uU(18,"N\u1ed9i dung"),t.qZA(),t.TgZ(19,"nz-form-control",11),t._UZ(20,"input",12),t.qZA()()()),2&n&&(t.Q6J("formGroup",o.addEditForm),t.xp6(2),t.Q6J("nzSm",4)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24),t.xp6(3),t.Q6J("nzSm",4)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24),t.xp6(3),t.Q6J("nzSm",4)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24),t.xp6(3),t.Q6J("nzSm",4)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24))},dependencies:[l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,f.t3,f.SK,m.Lr,m.Nx,m.iK,m.Fd,_.Zp],changeDetection:0}),e})();var X=a(69174);let Y=(()=>{class e{constructor(n){this.modalWrapService=n}getContentComponent(){return L}show(n={},o){return this.modalWrapService.show(this.getContentComponent(),n,o)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(X.U))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var U=a(32802),P=a(5529),Q=a(35656),k=a(94178),w=a(21102),O=a(66616),B=a(47044),G=a(21811),K=a(51971);const V=["operationTpl"];function R(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.showVideo())}),t._UZ(1,"span",21),t._uU(2,"H\u01b0\u1edbng d\u1eabn "),t.qZA()}2&e&&t.Q6J("nzSize","large")}function j(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"span",23)(1,"button",24),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().id,s=t.oxw();return t.KtG(s.edit(i))}),t._uU(2),t.qZA()()}if(2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(n.formItemNm[10])}}function W(e,r){1&e&&t._UZ(0,"span",23)}function $(e,r){if(1&e&&(t.YNc(0,j,3,1,"span",22),t.YNc(1,W,1,0,"span",22)),2&e){const n=t.oxw();t.Q6J("appAuth",n.ActionCode.HuongdanUpdate),t.xp6(1),t.Q6J("appAuth",n.ActionCode.KhachhangTattoan)}}function q(e,r){}function tt(e,r){}function nt(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.add())}),t._UZ(1,"i",28),t._uU(2),t.qZA()}if(2&e){const n=t.oxw(2);t.xp6(2),t.hij(" ",n.formItemNm[8]," ")}}function et(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.allDel())}),t._UZ(1,"i",30),t._uU(2),t.qZA()}if(2&e){const n=t.oxw(2);t.xp6(2),t.hij(" ",n.formItemNm[9]," ")}}function ot(e,r){if(1&e&&(t.YNc(0,nt,3,1,"button",25),t.YNc(1,et,3,1,"button",26)),2&e){const n=t.oxw();t.Q6J("appAuth",n.ActionCode.HuongdanAdd),t.xp6(1),t.Q6J("appAuth",n.ActionCode.HuongdanallDel)}}const at=function(){return{"padding-bottom":0}},it=function(){return{xs:8,sm:16,md:24}},rt=[{path:"",component:(()=>{class e extends d.H{constructor(n,o,i,s,c,p,ut,mt,ct){super(n,o,i,s,p,c),this.webService=n,this.router=o,this.cdf=i,this.datePipe=s,this.modalVideoyoutube=c,this.tabService=p,this.message=ut,this.dataService=mt,this.modalHuongdan=ct,this.pageHeaderInfo={title:"",breadcrumb:["","",""]},this.DisplayScreenID=z.t.huongdan,this.searchParam={},this.dateFormat=u.dateFormat,this.dataList=[],this.checkedCashArray=[],this.ActionCode=C.h}fnInit(){this.pageHeaderInfo={title:this.formItemNm[3],breadcrumb:[this.formItemNm[1],this.formItemNm[2],this.formItemNm[3]],desc:""},this.initTable()}destroy(){}add(){this.modalHuongdan.show({nzTitle:"Th\xeam m\u1edbi"}).subscribe(n=>{!n||0===n.status||(this.tableLoading(!0),this.addEditData(n.modalValue,"Create"))},n=>this.tableLoading(!1))}allDel(){}edit(n){this.webService.PostCallWs(u.Tmt101Ant100GetDetail,{id:n},o=>{this.modalHuongdan.show({nzTitle:this.formItemNm[10]},o).subscribe(({modalValue:i,status:s})=>{0!==s&&(i.id=n,this.tableLoading(!0),this.addEditData(i,"Update"))})})}addEditData(n,o){this.dataService[o](n).pipe((0,T.x)(()=>{this.tableLoading(!1)})).subscribe(i=>{this.getDataList()})}getDataList(n){this.tableLoading(!0),this.dataService.PostAll({pageSize:this.tableConfig.pageSize,pageNum:n?.pageIndex||this.tableConfig.pageIndex,filters:this.searchParam}).pipe((0,T.x)(()=>{this.tableLoading(!1)})).subscribe(i=>{const{list:s,total:c,pageNum:p}=i;this.dataList=[...s],this.tableConfig.total=c,this.tableConfig.pageIndex=p,this.tableLoading(!1),this.checkedCashArray=[...this.checkedCashArray]})}searchName(n){this.dataService.PostSearchParams({pageSize:this.tableConfig.pageSize,pageNum:1,filters:n.target.value}).pipe((0,T.x)(()=>{this.tableLoading(!1)})).subscribe(i=>{console.log(i);const{list:s,total:c,pageNum:p}=i;this.dataList=[...s],this.tableConfig.total=c,this.tableConfig.pageIndex=p,this.tableLoading(!1),this.checkedCashArray=[...this.checkedCashArray]})}resetForm(){this.searchParam={}}reloadTable(){this.message.info("\u0110\xe3 \u0111\u01b0\u1ee3c l\xe0m m\u1edbi"),this.getDataList()}tableChangeDectction(){this.dataList=[...this.dataList],this.cdf.detectChanges()}tableLoading(n){this.tableConfig.loading=n,this.tableChangeDectction()}selectedChecked(n){this.checkedCashArray=[...n]}changePageSize(n){this.tableConfig.pageSize=n}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:this.formItemNm[12],field:"idyoutube",width:180},{title:this.formItemNm[13],width:180,field:"urldisplayid"},{title:this.formItemNm[14],width:120,field:"title"},{title:this.formItemNm[15],width:150,field:"content"},{title:this.formItemNm[16],tdTemplate:this.operationTpl,width:250,fixed:!0,fixedDir:"right"}],total:0,loading:!0,pageSize:10,pageIndex:1}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(H.Q),t.Y36(g.F0),t.Y36(t.sBO),t.Y36(S.uU),t.Y36(x.L),t.Y36(Z.p),t.Y36(v.dD),t.Y36(F),t.Y36(Y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-huongdan"]],viewQuery:function(n,o){if(1&n&&t.Gf(V,7),2&n){let i;t.iGM(i=t.CRH())&&(o.operationTpl=i.first)}},features:[t.qOj],decls:31,vars:34,consts:[[3,"pageHeaderInfo","extraTpl"],["huongdanTpl",""],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-form",""],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],[3,"nzFor"],["nz-input","","name","text","placeholder","search name",3,"ngModel","ngModelChange","keyup.enter"],["nz-col","",1,"text-right","p-0","m-b-10",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","search"],["nz-button","",1,"m-l-15",3,"click"],["nz-icon","","nzType","close-circle","nzTheme","outline"],[3,"tableTitle","btnTpl","reload"],[3,"checkedCashArrayFromComment","tableConfig","tableData","selectedChange","changePageSize","changePageNum"],["operationTpl",""],["linkidTpl",""],["sotienno",""],["tableBtns",""],["nz-button","","nzType","primary","nzShape","round",3,"nzSize","click"],["nz-icon","","nzType","star","nzTheme","outline"],["class","operate-text",4,"appAuth"],[1,"operate-text"],["nz-button","","nzType","primary","nzGhost","",3,"click"],["nz-button","","nzType","primary","class","m-r-8",3,"click",4,"appAuth"],["nz-button","","nzType","default",3,"click",4,"appAuth"],["nz-button","","nzType","primary",1,"m-r-8",3,"click"],["nz-icon","","nzType","plus"],["nz-button","","nzType","default",3,"click"],["nz-icon","","nzType","delete"]],template:function(n,o){if(1&n&&(t._UZ(0,"app-page-header",0),t.YNc(1,R,3,1,"ng-template",null,1,t.W1O),t.TgZ(3,"div",2)(4,"nz-card",3)(5,"form",4)(6,"div",5)(7,"div",6)(8,"nz-form-item")(9,"nz-form-label",7),t._uU(10),t.qZA(),t.TgZ(11,"nz-form-control")(12,"input",8),t.NdJ("ngModelChange",function(s){return o.searchParam.urldisplayid=s})("keyup.enter",function(s){return o.searchName(s)}),t.qZA()()()(),t._UZ(13,"div",6),t.TgZ(14,"div",9)(15,"button",10),t.NdJ("click",function(){return o.getDataList()}),t._UZ(16,"i",11),t._uU(17),t.qZA(),t.TgZ(18,"button",12),t.NdJ("click",function(){return o.resetForm()}),t._UZ(19,"i",13),t._uU(20),t.qZA()()()()(),t.TgZ(21,"app-card-table-wrap",14),t.NdJ("reload",function(){return o.reloadTable()}),t.TgZ(22,"app-ant-table",15),t.NdJ("selectedChange",function(s){return o.selectedChecked(s)})("changePageSize",function(s){return o.changePageSize(s)})("changePageNum",function(s){return o.getDataList(s)}),t.qZA(),t.YNc(23,$,2,2,"ng-template",null,16,t.W1O),t.YNc(25,q,0,0,"ng-template",null,17,t.W1O),t.YNc(27,tt,0,0,"ng-template",null,18,t.W1O),t.qZA(),t.YNc(29,ot,2,2,"ng-template",null,19,t.W1O),t.qZA()),2&n){const i=t.MAs(2),s=t.MAs(30);t.Q6J("pageHeaderInfo",o.pageHeaderInfo)("extraTpl",i),t.xp6(4),t.Q6J("nzBodyStyle",t.DdM(32,at)),t.xp6(2),t.Q6J("nzGutter",t.DdM(33,it)),t.xp6(1),t.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),t.xp6(3),t.Oqu(o.formItemNm[4]),t.xp6(2),t.Q6J("ngModel",o.searchParam.urldisplayid),t.xp6(1),t.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),t.xp6(1),t.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),t.xp6(1),t.Q6J("nzType","primary"),t.xp6(2),t.Oqu(o.formItemNm[5]),t.xp6(3),t.Oqu(o.formItemNm[6]),t.xp6(1),t.Q6J("tableTitle",o.formItemNm[7])("btnTpl",s),t.xp6(1),t.Q6J("checkedCashArrayFromComment",o.checkedCashArray)("tableConfig",o.tableConfig)("tableData",o.dataList)}},dependencies:[l._Y,l.Fj,l.JJ,l.JL,l.On,l.F,U.q,P.q,Q.x,k.p,w.Ls,f.t3,f.SK,m.Lr,m.Nx,m.iK,m.Fd,O.ix,B.w,G.dQ,_.Zp,K.bd]}),e})(),data:{title:"H\u01b0\u1edbng d\u1eabn",key:"huongdan"}}];let st=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(rt),g.Bz]}),e})();var y=a(5316);let lt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[y.m]}),e})(),dt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[y.m,st,lt]}),e})()}}]);