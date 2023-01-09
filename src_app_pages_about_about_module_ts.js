"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_about_about_module_ts"],{

/***/ 93423:
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutRoutingModule": () => (/* binding */ AboutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/about/about.component */ 73794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent, data: { title: 'About', key: 'about' } }];
class AboutRoutingModule {
}
AboutRoutingModule.ɵfac = function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); };
AboutRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 73794:
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/tag */ 5020);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 33610);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);






const _c0 = function () { return { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }; };
class AboutComponent {
    constructor() {
        this.pageHeaderInfo = {
            title: 'About',
            breadcrumb: ['Home', 'Chức năng mở rộng', 'About'],
            desc: 'ng-ant-admin'
        };
        this.data = new Date();
        this.dateFormat = "yyyy-MM-dd HH:mm" /* DateFormat.DateTime */;
    }
    ngOnInit() { }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 68, vars: 15, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap", "bg-color-no", "p-b-50"], [1, "m-b-20", 3, "nzBordered"], ["nzTitle", "Th\u00F4ng tin d\u1EF1 \u00E1n", "nzBordered", "", 3, "nzSize", "nzColumn"], ["nzTitle", "Phi\u00EAn b\u1EA3n"], [3, "nzColor"], ["nzTitle", "Th\u1EDDi gian bi\u00EAn d\u1ECBch cu\u1ED1i c\u00F9ng"], ["nzTitle", "\u0110\u1ECBa ch\u1EC9 t\u00E0i li\u1EC7u"], ["nzTitle", "\u0110\u1ECBa ch\u1EC9 xem tr\u01B0\u1EDBc"], ["href", "http://124.71.128.53:8081/", 1, "operate-text"], ["nzTitle", "Github"], ["href", "https://github.com/huajian123/ng-ant-admin", 1, "operate-text"], ["nzTitle", "\u0110\u00E1m m\u00E2y m\u00E3"], ["href", "https://gitee.com/hjxiaoqianduan/ng-ant-admin", 1, "operate-text"], ["nzTitle", "\u0110\u1ECBa ch\u1EC9 d\u1EF1 \u00E1n phi\u00EAn b\u1EA3n thu\u1EA7n t\u00FAy"], ["href", "https://gitee.com/hjxiaoqianduan/ng-ant-admin-pure", 1, "operate-text"], ["nzTitle", "T\u00E0i li\u1EC7u tr\u1EF1c tuy\u1EBFn"], ["href", "http://1.117.181.242:8081/", 1, "operate-text"], ["nzTitle", "package.json C\u00E1c g\u00F3i c\u1EE7a b\u00EAn th\u1EE9 ba \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng trong", "nzBordered", "", 3, "nzSize", "nzColumn"], ["nzTitle", "@amap/amap-jsapi-loader"], ["nzTitle", "@antv/g2plot"], ["nzTitle", "@antv/l7"], ["nzTitle", "@antv/x6"], ["nzTitle", "@auth0/angular-jwt"], ["nzTitle", "@tinymce/tinymce-angular"], ["nzTitle", "angular-password-strength-meter"], ["nzTitle", "zxcvbn3"], ["nzTitle", "crypto-js"], ["nzTitle", "angular2-qrcode"], ["nzTitle", "driver.js"], ["nzTitle", "ng-zorro-antd"], ["nzTitle", "ngx-quicklink"], ["nzTitle", "screenfull"], ["nzTitle", "uuid"], ["nzTitle", "ngx-color-picker"], ["nzTitle", "file-saver"], ["nzTitle", "ngx-echarts"], ["nzTitle", "echarts"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "nz-card", 2)(3, "nz-descriptions", 3)(4, "nz-descriptions-item", 4)(5, "nz-tag", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "1.0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-descriptions-item", 6)(8, "nz-tag", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-descriptions-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "K\u1EBF ho\u1EA1ch l\u00E0...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-descriptions-item", 8)(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nz-descriptions-item", 10)(17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "nz-descriptions-item", 12)(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u0110\u00E1m m\u00E2y m\u00E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nz-descriptions-item", 14)(23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u0110\u1ECBa ch\u1EC9 d\u1EF1 \u00E1n phi\u00EAn b\u1EA3n thu\u1EA7n t\u00FAy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nz-descriptions-item", 16)(26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "T\u00E0i li\u1EC7u tr\u1EF1c tuy\u1EBFn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "nz-card", 2)(29, "nz-descriptions", 18)(30, "nz-descriptions-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Google map");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nz-descriptions-item", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "bi\u1EC3u \u0111\u1ED3 g2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "nz-descriptions-item", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "b\u1EA3n \u0111\u1ED3 antv l7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "nz-descriptions-item", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "l\u01B0u \u0111\u1ED3 x6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "nz-descriptions-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "ph\u00E2n t\u00EDch jwt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "nz-descriptions-item", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "v\u0103n b\u1EA3n \u0111a d\u1EA1ng th\u1EE9c");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "nz-descriptions-item", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "m\u1EADt kh\u1EA9u m\u1EA1nh");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "nz-descriptions-item", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u0110\u1ED9 m\u1EA1nh m\u1EADt kh\u1EA9u tr\u01B0\u1EDBc \u0111\u00F3 c\u0169ng c\u00E0i \u0111\u1EB7t n\u00E0y");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "nz-descriptions-item", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "M\u1EADt kh\u1EA9u m\u1EA1nh tr\u01B0\u1EDBc \u0111\u00F3 c\u0169ng c\u00E0i \u0111\u1EB7t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "nz-descriptions-item", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "m\u00E3 QR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "nz-descriptions-item", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Trang Bootstrap trong l\u1EA7n t\u1EA3i \u0111\u1EA7u ti\u00EAn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "nz-descriptions-item", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "zorro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "nz-descriptions-item", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "chi\u1EBFn l\u01B0\u1EE3c t\u1EA3i tr\u01B0\u1EDBc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "nz-descriptions-item", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Ph\u00F3ng to");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "nz-descriptions-item", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Id duy nh\u1EA5t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "nz-descriptions-item", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "C\u00F4ng c\u1EE5 ch\u1ECDn m\u00E0u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "nz-descriptions-item", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "T\u1EADp tin t\u1EA3i v\u1EC1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "nz-descriptions-item", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u0110\u1ED3 th\u1ECB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "nz-descriptions-item", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "C\u0169ng l\u00E0 m\u1ED9t \u0111\u1ED3 th\u1ECB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzBordered", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSize", "small")("nzColumn", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", "cyan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", "cyan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 10, ctx.data, ctx.dateFormat));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzBordered", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSize", "small")("nzColumn", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__.NzTagComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__.NzCardComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_4__.NzDescriptionsComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_4__.NzDescriptionsItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 18114:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-routing.module */ 93423);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ 73794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class AboutModule {
}
AboutModule.ɵfac = function AboutModule_Factory(t) { return new (t || AboutModule)(); };
AboutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_1__.AboutRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_1__.AboutRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_about_about_module_ts.js.map