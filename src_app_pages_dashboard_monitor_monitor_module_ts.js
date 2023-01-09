"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_dashboard_monitor_monitor_module_ts"],{

/***/ 22155:
/*!**************************************!*\
  !*** ./src/app/common/UrlDisplay.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlDisplayId": () => (/* binding */ UrlDisplayId)
/* harmony export */ });
var UrlDisplayId;
(function (UrlDisplayId) {
    //dashboard
    UrlDisplayId["Demo"] = "/default/dashboard/demo";
    UrlDisplayId["Analysis"] = "/default/dashboard/analysis";
    UrlDisplayId["Monitor"] = "/default/dashboard/monitor";
    UrlDisplayId["Workbench"] = "/default/dashboard/workbench";
    UrlDisplayId["spxe00101"] = "xe/spxe00101";
    //chuyen
    UrlDisplayId["spch00101"] = "chuyen/spch00101";
    UrlDisplayId["spch00201"] = "chuyen/spch00201";
    // khach hang
    UrlDisplayId["spkh00101"] = "khachhang/spkh00101";
    UrlDisplayId["spkh00201"] = "khachhang/spkh00201";
})(UrlDisplayId || (UrlDisplayId = {}));


/***/ }),

/***/ 27810:
/*!*******************************************************************!*\
  !*** ./src/app/pages/dashboard/monitor/monitor-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorRoutingModule": () => (/* binding */ MonitorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _monitor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor.component */ 67463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _monitor_component__WEBPACK_IMPORTED_MODULE_0__.MonitorComponent, data: { title: 'Trang giám sát', key: 'monitor' } }];
class MonitorRoutingModule {
}
MonitorRoutingModule.ɵfac = function MonitorRoutingModule_Factory(t) { return new (t || MonitorRoutingModule)(); };
MonitorRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MonitorRoutingModule });
MonitorRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MonitorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 67463:
/*!**************************************************************!*\
  !*** ./src/app/pages/dashboard/monitor/monitor.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorComponent": () => (/* binding */ MonitorComponent)
/* harmony export */ });
/* harmony import */ var _app_common_UrlDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/common/UrlDisplay */ 22155);
/* harmony import */ var _system_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../system/base/base.component */ 13951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/common/webservice.service */ 91565);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);









const _c0 = ["pageHeaderContent"];
const _c1 = function () { return [16, 16]; };
class MonitorComponent extends _system_base_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(webService, router, cdf, datePipe) {
        super(webService, router, cdf, datePipe);
        this.webService = webService;
        this.router = router;
        this.cdf = cdf;
        this.datePipe = datePipe;
        this.DisplayScreenID = _app_common_UrlDisplay__WEBPACK_IMPORTED_MODULE_0__.UrlDisplayId.Monitor;
        this.pageHeaderInfo = {
            title: '',
            breadcrumb: [],
            desc: ''
        };
    }
    fnInit() {
        this.cdf.markForCheck();
        this.pageHeaderInfo = {
            title: this.formItemNm[3],
            breadcrumb: [this.formItemNm[1], this.formItemNm[2], this.formItemNm[3]],
            desc: this.pageHeaderContent
        };
    }
    destroy() { }
}
MonitorComponent.ɵfac = function MonitorComponent_Factory(t) { return new (t || MonitorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_2__.WebserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe)); };
MonitorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MonitorComponent, selectors: [["app-monitor"]], viewQuery: function MonitorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.pageHeaderContent = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [[3, "pageHeaderInfo"], [1, "content-wrap"], ["nz-row", "", 3, "nzGutter"]], template: function MonitorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 1)(2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Hello word ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c1));
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective], styles: [".content-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 24px;\n}\n.card-wrap-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n}\n.card-top[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.pipe-height[_ngcontent-%COMP%] {\n  height: 180px;\n}\n#map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbml0b3IuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFBRjtBQUdBO0VBRUksZUFBQTtBQUZKO0FBTUE7RUFDRSxhQUFBO0FBSkY7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFMRiIsImZpbGUiOiJtb25pdG9yLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtd3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG4uY2FyZC13cmFwLWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmQtdG9wIHtcbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cblxuLnBpcGUtaGVpZ2h0IHtcbiAgaGVpZ2h0OiAxODBweDtcbn1cblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 59078:
/*!***********************************************************!*\
  !*** ./src/app/pages/dashboard/monitor/monitor.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorModule": () => (/* binding */ MonitorModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _monitor_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitor-routing.module */ 27810);
/* harmony import */ var _monitor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monitor.component */ 67463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class MonitorModule {
}
MonitorModule.ɵfac = function MonitorModule_Factory(t) { return new (t || MonitorModule)(); };
MonitorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MonitorModule });
MonitorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _monitor_routing_module__WEBPACK_IMPORTED_MODULE_1__.MonitorRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MonitorModule, { declarations: [_monitor_component__WEBPACK_IMPORTED_MODULE_2__.MonitorComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _monitor_routing_module__WEBPACK_IMPORTED_MODULE_1__.MonitorRoutingModule] }); })();


/***/ }),

/***/ 13951:
/*!*****************************************************!*\
  !*** ./src/app/pages/system/base/base.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/common/webservice.service */ 91565);
/* harmony import */ var src_app_common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/const */ 44556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);








class BaseComponent {
    constructor(webService, router, cdf, datePipe) {
        this.webService = webService;
        this.router = router;
        this.cdf = cdf;
        this.datePipe = datePipe;
        this.formItemNm = {};
        this.list = [];
        this.title = 'nam pham';
    }
    ngOnDestroy() {
        this.destroy();
    }
    ngOnInit() {
        this.setFormItemNm();
    }
    setFormItemNm() {
        let url = this.router.url;
        this.webService.PostCallWs(src_app_common_const__WEBPACK_IMPORTED_MODULE_1__.Ant100PostUrlParams, { url: url }, (response) => {
            this.list = response;
            this.list.forEach((row) => {
                this.formItemNm[row.stt] = row.title1;
            });
            this.fnInit();
        });
    }
    getDate() {
        let date = this.datePipe.transform(new Date(), 'yyyy/MM/dd') + "";
        return date;
    }
    formatDate(d) {
        if (d == null || d == '') {
            return '';
        }
        let date = this.datePipe.transform(d, 'yyyy/MM/dd') + "";
        return date;
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_0__.WebserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe)); };
BaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BaseComponent, selectors: [["app-base"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe])], decls: 0, vars: 0, template: function BaseComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_monitor_monitor_module_ts.js.map