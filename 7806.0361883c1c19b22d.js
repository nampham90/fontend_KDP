"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[7806],{22155:(V,w,s)=>{s.d(w,{t:()=>c});var c=(()=>{return(a=c||(c={})).Demo="/default/dashboard/demo",a.Analysis="/default/dashboard/analysis",a.Monitor="/default/dashboard/monitor",a.Workbench="/default/dashboard/workbench",a.spxe00101="xe/spxe00101",a.spcm01101="system/spcm01101",a.spcm01102="system/spcm01102",a.spcm01103="system/spcm01103",a.huongdan="system/huongdan",a.sprp00701="report/sprp00701",a.sprp00702="report/sprp00702",a.spch00101="chuyen/spch00101",a.spch00201="chuyen/spch00201",a.spch00251="chuyen/spch00251",a.spch00252="chuyen/spch00252",a.spch00253="chuyen/spch00253",a.spch00254="chuyen/spch00254",a.spch00255="chuyen/spch00255",a.spch00351="chuyen/spch00351",a.spkh00101="khachhang/spkh00101",a.spkh00201="khachhang/spkh00201",a.spkh00301="khachhang/spkh00301",a.mbtx00101="mobile/mbtx00101",a.mbtx00201="mobile/mbtx00201",a.mbtx00301="mobile/mbtx00301",a.spin00301="trongkho/spin00301",a.spin00251="trongkho/spin00251",a.spin00601="trongkho/spin00601",a.spin00801="trongkho/spin00801",a.spin00901="trongkho/spin00901",c;var a})()},13951:(V,w,s)=>{s.d(w,{H:()=>M});var c=s(91565),a=s(44556),v=s(36895),d=s(94650),S=s(9116),C=s(99651),T=s(35568);let M=(()=>{class l{constructor(n,u,y,P,b,_){this.webService=n,this.router=u,this.cdf=y,this.datePipe=P,this.tabService=b,this.modalVideoyoutube=_,this.formItemNm={},this.list=[],this.title="nam pham",this.constHttt=a.Hinhthucthanhtoan}ngOnDestroy(){this.destroy()}ngOnInit(){this.setFormItemNm()}setFormItemNm(){this.webService.PostCallWs(a.Ant100PostUrlParams,{url:this.router.url},u=>{this.list=u,this.list.forEach(y=>{this.formItemNm[y.stt]=y.title1}),this.fnInit()})}getDate(){return this.datePipe.transform(new Date,"yyyy/MM/dd")+""}getFirstDayOfMonth(){const n=new Date,u=new Date(n.getFullYear(),n.getMonth(),1);return this.datePipe.transform(u,"yyyy/MM/dd")}getLastDayOfMonth(){const n=new Date,u=new Date(n.getFullYear(),n.getMonth()+1,0);return this.datePipe.transform(u,"yyyy/MM/dd")}formatDate(n){return null==n||""==n?"":this.datePipe.transform(n,"yyyy/MM/dd")+""}displayVND(n){return(0,v.xG)(1e3*n,"vi-VN","\u0111","symbol-narrow","1.0-0")}displayOD(n){return n.slice(-5)+"-"+n.substring(0,n.length-5)}transfer(n){let u=this.tabService.findIndex(n);-1==u||this.tabService.delTab(this.tabService.getTabArray()[u],u),this.router.navigate([n])}mergeHttt(n){let u=n+"",y="";for(let P of this.constHttt)P.value===u&&(y=P.lable);return y}showVideo(){const u=this.router.url.split("/");this.webService.PostCallWs(a.Tmt101Ant100Detail,{urldisplayid:u[u.length-2]+"/"+u[u.length-1]},P=>{P&&this.modalVideoyoutube.show({nzTitle:"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng"},{showcomfirm:!1,idvideo:P}).subscribe(_=>{})})}}return l.\u0275fac=function(n){return new(n||l)(d.Y36(c.Q),d.Y36(S.F0),d.Y36(d.sBO),d.Y36(v.uU),d.Y36(C.p),d.Y36(T.L))},l.\u0275cmp=d.Xpm({type:l,selectors:[["app-base"]],features:[d._Bn([v.uU])],decls:0,vars:0,template:function(n,u){},encapsulation:2}),l})()},35568:(V,w,s)=>{s.d(w,{L:()=>M});var c=s(39646),a=s(94650),v=s(50007),d=s(24006),S=s(13458);let C=(()=>{class l{constructor(n,u,y){this.modalRef=n,this.fb=u,this.cdf=y,this.apiLoaded=!1,this.videoId="cH_T9iFJ1kw",this.height=400,this.width=670,this.startSeconds=0,this.endSeconds=120}ngOnInit(){if(null!=this.params.idvideo&&this.params.idvideo.length>0&&(this.videoId=this.params.idvideo),!this.apiLoaded){const n=document.createElement("script");n.src="https://www.youtube.com/iframe_api",document.body.appendChild(n),this.apiLoaded=!0}}getAsyncFnData(n){return(0,c.of)(n)}}return l.\u0275fac=function(n){return new(n||l)(a.Y36(v.Lf),a.Y36(d.qu),a.Y36(a.sBO))},l.\u0275cmp=a.Xpm({type:l,selectors:[["app-subwindowvideoyoutube"]],decls:1,vars:3,consts:[["suggestedQuality","small",3,"videoId","height","width"]],template:function(n,u){1&n&&a._UZ(0,"youtube-player",0),2&n&&a.Q6J("videoId",u.videoId)("height",u.height)("width",u.width)},dependencies:[S.D]}),l})();var T=s(69174);let M=(()=>{class l{constructor(n){this.modalWrapService=n}getContentComponent(){return C}show(n={},u){return this.modalWrapService.show(this.getContentComponent(),n,u)}}return l.\u0275fac=function(n){return new(n||l)(a.LFG(T.U))},l.\u0275prov=a.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},13458:(V,w,s)=>{s.d(w,{D:()=>z,e:()=>ge});var c=s(94650),a=s(36895),v=s(77579),d=s(61135),S=s(39646),C=s(69751),T=s(30576),M=s(83268);function l(t,i,e){return e?l(t,i).pipe((0,M.Z)(e)):new C.y(o=>{const r=(...f)=>o.next(1===f.length?f[0]:f),h=t(r);return(0,T.m)(i)?()=>i(r,h):void 0})}var g=s(39841),n=s(89635),u=s(56451),y=s(95698),P=s(68675),b=s(54004),_=s(18505),R=s(82722),W=s(94033),X=s(38421),Y=s(54482);const G={connector:()=>new v.x};function I(t,i=G){const{connector:e}=i;return(0,Y.e)((o,r)=>{const h=e();(0,X.Xf)(t(function H(t){return new C.y(i=>t.subscribe(i))}(h))).subscribe(r),r.add(o.subscribe(h))})}var U=s(63900),j=s(95577),k=s(11365),J=s(75026),$=s(71884);const{isArray:q}=Array;function ee(t){return 1===t.length&&q(t[0])?t[0]:t}var te=s(63269);function F(...t){const i=(0,te.jO)(t);return i?(0,n.z)(F(...t),(0,M.Z)(i)):(0,Y.e)((e,o)=>{(0,g.l)([e,...ee(t)])(o)})}var ne=s(25403),se=s(39300);const ae=["youtubeContainer"];let z=(()=>{class t{get videoId(){return this._videoId.value}set videoId(e){this._videoId.next(e)}get height(){return this._height.value}set height(e){this._height.next(e||390)}get width(){return this._width.value}set width(e){this._width.next(e||640)}set startSeconds(e){this._startSeconds.next(e)}set endSeconds(e){this._endSeconds.next(e)}set suggestedQuality(e){this._suggestedQuality.next(e)}get playerVars(){return this._playerVars.value}set playerVars(e){this._playerVars.next(e)}get disableCookies(){return this._disableCookies.value}set disableCookies(e){this._disableCookies.next(!!e)}constructor(e,o){this._ngZone=e,this._youtubeContainer=new v.x,this._destroyed=new v.x,this._playerChanges=new d.X(void 0),this._videoId=new d.X(void 0),this._height=new d.X(390),this._width=new d.X(640),this._startSeconds=new d.X(void 0),this._endSeconds=new d.X(void 0),this._suggestedQuality=new d.X(void 0),this._playerVars=new d.X(void 0),this._disableCookies=new d.X(!1),this.ready=this._getLazyEmitter("onReady"),this.stateChange=this._getLazyEmitter("onStateChange"),this.error=this._getLazyEmitter("onError"),this.apiChange=this._getLazyEmitter("onApiChange"),this.playbackQualityChange=this._getLazyEmitter("onPlaybackQualityChange"),this.playbackRateChange=this._getLazyEmitter("onPlaybackRateChange"),this._isBrowser=(0,a.NF)(o)}ngOnInit(){if(!this._isBrowser)return;let e=(0,S.of)(!0);if(!window.YT||!window.YT.Player){const h=new v.x;this._existingApiReadyCallback=window.onYouTubeIframeAPIReady,window.onYouTubeIframeAPIReady=()=>{this._existingApiReadyCallback&&this._existingApiReadyCallback(),this._ngZone.run(()=>h.next(!0))},e=h.pipe((0,y.q)(1),(0,P.O)(!1))}const o=this._disableCookies.pipe((0,b.U)(h=>h?"https://www.youtube-nocookie.com":void 0)),r=function ue(t,i,e,o,r,h,f,A){const E=(0,g.a)([i,e,f]).pipe((0,k.M)((0,g.a)([r,h])),(0,b.U)(([O,p])=>{const[m,L,D]=O,[pe,fe]=p;return m?{videoId:m,playerVars:D,width:pe,height:fe,host:L}:void 0}));return(0,g.a)([t,E,(0,S.of)(A)]).pipe(function de(t){return(0,n.z)(F(t),function ie(t){return(0,Y.e)((i,e)=>{let o=!1,r=0;i.subscribe((0,ne.x)(e,h=>(o||(o=!t(h,r++)))&&e.next(h)))})}(([i,e])=>!e),(0,b.U)(([i])=>i))}(o),(0,J.R)(le,void 0),(0,$.x)())}(this._youtubeContainer,this._videoId,o,e,this._width,this._height,this._playerVars,this._ngZone).pipe((0,_.b)(h=>{this._playerChanges.next(h)}),function he(t){return(0,j.z)(i=>i?N(i)?(0,S.of)(i):new C.y(e=>{let o=!1,r=!1;const h=f=>{r=!0,o||(f.target.removeEventListener("onReady",h),e.next(f.target))};return i.addEventListener("onReady",h),()=>{o=!0,r||t(i)}}).pipe((0,y.q)(1),(0,P.O)(void 0)):(0,S.of)(void 0))}(h=>{N(h)||h.destroy()}),(0,R.R)(this._destroyed),function K(t){return t?i=>I(t)(i):i=>function Z(t,i){const e=(0,T.m)(t)?t:()=>t;return(0,T.m)(i)?I(i,{connector:e}):o=>new W.c(o,e)}(new v.x)(i)}());r.subscribe(h=>{this._player=h,h&&this._pendingPlayerState&&this._initializePlayer(h,this._pendingPlayerState),this._pendingPlayerState=void 0}),function oe(t,i,e){(0,g.a)([t,i,e]).subscribe(([o,r,h])=>o&&o.setSize(r,h))}(r,this._width,this._height),function re(t,i){(0,g.a)([t,i]).subscribe(([e,o])=>e&&o&&e.setPlaybackQuality(o))}(r,this._suggestedQuality),function ce(t,i,e,o,r,h){const f=(0,g.a)([e,o]).pipe((0,b.U)(([p,m])=>({startSeconds:p,endSeconds:m}))),A=f.pipe(x(t,p=>!!p&&!function ye(t){const i=t.getPlayerState();return i!==YT.PlayerState.UNSTARTED&&i!==YT.PlayerState.CUED}(p))),E=i.pipe(x(t,(p,m)=>!!p&&p.videoId!==m)),O=t.pipe(x((0,g.a)([i,f]),([p,m],L)=>!(!L||p==L.videoId&&!m.startSeconds&&!m.endSeconds)));(0,u.T)(O,E,A).pipe((0,k.M)((0,g.a)([t,i,f,r])),(0,b.U)(([p,m])=>m),(0,R.R)(h)).subscribe(([p,m,L,D])=>{!m||!p||(p.videoId=m,p.cueVideoById({videoId:m,suggestedQuality:D,...L}))})}(r,this._videoId,this._startSeconds,this._endSeconds,this._suggestedQuality,this._destroyed),r.connect()}ngAfterViewInit(){this._youtubeContainer.next(this.youtubeContainer.nativeElement)}ngOnDestroy(){this._player&&(this._player.destroy(),window.onYouTubeIframeAPIReady=this._existingApiReadyCallback),this._playerChanges.complete(),this._videoId.complete(),this._height.complete(),this._width.complete(),this._startSeconds.complete(),this._endSeconds.complete(),this._suggestedQuality.complete(),this._youtubeContainer.complete(),this._playerVars.complete(),this._destroyed.next(),this._destroyed.complete()}playVideo(){this._player?this._player.playVideo():this._getPendingState().playbackState=YT.PlayerState.PLAYING}pauseVideo(){this._player?this._player.pauseVideo():this._getPendingState().playbackState=YT.PlayerState.PAUSED}stopVideo(){this._player?this._player.stopVideo():this._getPendingState().playbackState=YT.PlayerState.CUED}seekTo(e,o){this._player?this._player.seekTo(e,o):this._getPendingState().seek={seconds:e,allowSeekAhead:o}}mute(){this._player?this._player.mute():this._getPendingState().muted=!0}unMute(){this._player?this._player.unMute():this._getPendingState().muted=!1}isMuted(){return this._player?this._player.isMuted():!!this._pendingPlayerState&&!!this._pendingPlayerState.muted}setVolume(e){this._player?this._player.setVolume(e):this._getPendingState().volume=e}getVolume(){return this._player?this._player.getVolume():this._pendingPlayerState&&null!=this._pendingPlayerState.volume?this._pendingPlayerState.volume:0}setPlaybackRate(e){if(this._player)return this._player.setPlaybackRate(e);this._getPendingState().playbackRate=e}getPlaybackRate(){return this._player?this._player.getPlaybackRate():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackRate?this._pendingPlayerState.playbackRate:0}getAvailablePlaybackRates(){return this._player?this._player.getAvailablePlaybackRates():[]}getVideoLoadedFraction(){return this._player?this._player.getVideoLoadedFraction():0}getPlayerState(){if(this._isBrowser&&window.YT)return this._player?this._player.getPlayerState():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackState?this._pendingPlayerState.playbackState:YT.PlayerState.UNSTARTED}getCurrentTime(){return this._player?this._player.getCurrentTime():this._pendingPlayerState&&this._pendingPlayerState.seek?this._pendingPlayerState.seek.seconds:0}getPlaybackQuality(){return this._player?this._player.getPlaybackQuality():"default"}getAvailableQualityLevels(){return this._player?this._player.getAvailableQualityLevels():[]}getDuration(){return this._player?this._player.getDuration():0}getVideoUrl(){return this._player?this._player.getVideoUrl():""}getVideoEmbedCode(){return this._player?this._player.getVideoEmbedCode():""}_getPendingState(){return this._pendingPlayerState||(this._pendingPlayerState={}),this._pendingPlayerState}_initializePlayer(e,o){const{playbackState:r,playbackRate:h,volume:f,muted:A,seek:E}=o;switch(r){case YT.PlayerState.PLAYING:e.playVideo();break;case YT.PlayerState.PAUSED:e.pauseVideo();break;case YT.PlayerState.CUED:e.stopVideo()}null!=h&&e.setPlaybackRate(h),null!=f&&e.setVolume(f),null!=A&&(A?e.mute():e.unMute()),null!=E&&e.seekTo(E.seconds,E.allowSeekAhead)}_getLazyEmitter(e){return this._playerChanges.pipe((0,U.w)(o=>o?l(r=>{o.addEventListener(e,r)},r=>{try{o.removeEventListener&&o.removeEventListener(e,r)}catch{}}):(0,S.of)()),o=>new C.y(r=>o.subscribe({next:h=>this._ngZone.run(()=>r.next(h)),error:h=>r.error(h),complete:()=>r.complete()})),(0,R.R)(this._destroyed))}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(c.R0b),c.Y36(c.Lbi))},t.\u0275cmp=c.Xpm({type:t,selectors:[["youtube-player"]],viewQuery:function(e,o){if(1&e&&c.Gf(ae,5),2&e){let r;c.iGM(r=c.CRH())&&(o.youtubeContainer=r.first)}},inputs:{videoId:"videoId",height:"height",width:"width",startSeconds:"startSeconds",endSeconds:"endSeconds",suggestedQuality:"suggestedQuality",playerVars:"playerVars",disableCookies:"disableCookies",showBeforeIframeApiLoads:"showBeforeIframeApiLoads"},outputs:{ready:"ready",stateChange:"stateChange",error:"error",apiChange:"apiChange",playbackQualityChange:"playbackQualityChange",playbackRateChange:"playbackRateChange"},decls:2,vars:0,consts:[["youtubeContainer",""]],template:function(e,o){1&e&&c._UZ(0,"div",null,0)},encapsulation:2,changeDetection:0}),t})();function le(t,[i,e,o]){if(t&&e&&(t.playerVars!==e.playerVars||t.host!==e.host))t.destroy();else{if(!e)return void(t&&t.destroy());if(t)return t}const r=o.runOutsideAngular(()=>new YT.Player(i,e));return r.videoId=e.videoId,r.playerVars=e.playerVars,r.host=e.host,r}function N(t){return"getPlayerStatus"in t}function x(t,i){return(0,n.z)((0,k.M)(t),(0,se.h)(([e,o])=>i(o,e)),(0,b.U)(([e])=>e))}let ge=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({}),t})()}}]);