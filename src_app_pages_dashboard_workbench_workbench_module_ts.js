"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_dashboard_workbench_workbench_module_ts"],{

/***/ 4982:
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/workbench/workbench-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkbenchRoutingModule": () => (/* binding */ WorkbenchRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _workbench_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workbench.component */ 79940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _workbench_component__WEBPACK_IMPORTED_MODULE_0__.WorkbenchComponent, data: { title: 'Bàn làm việc', key: 'workbench' } }];
class WorkbenchRoutingModule {
}
WorkbenchRoutingModule.ɵfac = function WorkbenchRoutingModule_Factory(t) { return new (t || WorkbenchRoutingModule)(); };
WorkbenchRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WorkbenchRoutingModule });
WorkbenchRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WorkbenchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 79940:
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard/workbench/workbench.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkbenchComponent": () => (/* binding */ WorkbenchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);





const _c0 = ["pageHeaderContent"];
class WorkbenchComponent {
    constructor(fb, msg, ngZone) {
        this.fb = fb;
        this.msg = msg;
        this.ngZone = ngZone;
        this.pageHeaderInfo = {
            title: '',
            breadcrumb: [],
            desc: ''
        };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.pageHeaderInfo = {
            title: 'Bàn Làm việc',
            breadcrumb: ['Home', 'Dashboard', 'Bàn làm việc'],
            desc: this.pageHeaderContent
        };
    }
}
WorkbenchComponent.ɵfac = function WorkbenchComponent_Factory(t) { return new (t || WorkbenchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone)); };
WorkbenchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WorkbenchComponent, selectors: [["app-workbench"]], viewQuery: function WorkbenchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.pageHeaderContent = _t.first);
    } }, decls: 1, vars: 1, consts: [[3, "pageHeaderInfo"]], template: function WorkbenchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-page-header", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent], styles: ["img[_ngcontent-%COMP%] {\n  width: 72px;\n}\n[_nghost-%COMP%]     .ant-statistic {\n  text-align: right;\n}\n@media (max-width: 820px) {\n  .mini-screen[_ngcontent-%COMP%] {\n    display: block;\n  }\n  [_nghost-%COMP%]     .ant-statistic {\n    margin-top: 10px;\n    text-align: left;\n    max-width: 100px;\n  }\n}\n.card-foot[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  justify-content: space-between;\n}\n.group[_ngcontent-%COMP%] {\n  display: block;\n  height: 24px;\n  margin: 12px 0;\n  transition: all 0.3s;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  word-break: break-all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtiZW5jaC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7QUFBRjtBQUdBO0VBRUksaUJBQUE7QUFGSjtBQU1BO0VBQ0U7SUFDRSxjQUFBO0VBSkY7RUFPQTtJQUVJLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQU5KO0FBQ0Y7QUFVQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFSRjtBQVdBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQVZGIiwiZmlsZSI6IndvcmtiZW5jaC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1nIHtcbiAgd2lkdGg6IDcycHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gIC5hbnQtc3RhdGlzdGljIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcbiAgLm1pbmktc2NyZWVuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIDpob3N0IDo6bmctZGVlcCB7XG4gICAgLmFudC1zdGF0aXN0aWMge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZC1mb290IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ncm91cCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogMTJweCAwO1xuICAvLyBjb2xvcjogcmdiYSgwLDAsMCwuODUpO1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 48852:
/*!***************************************************************!*\
  !*** ./src/app/pages/dashboard/workbench/workbench.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkbenchModule": () => (/* binding */ WorkbenchModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _workbench_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workbench-routing.module */ 4982);
/* harmony import */ var _workbench_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workbench.component */ 79940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class WorkbenchModule {
}
WorkbenchModule.ɵfac = function WorkbenchModule_Factory(t) { return new (t || WorkbenchModule)(); };
WorkbenchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: WorkbenchModule });
WorkbenchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _workbench_routing_module__WEBPACK_IMPORTED_MODULE_1__.WorkbenchRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WorkbenchModule, { declarations: [_workbench_component__WEBPACK_IMPORTED_MODULE_2__.WorkbenchComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _workbench_routing_module__WEBPACK_IMPORTED_MODULE_1__.WorkbenchRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_workbench_workbench_module_ts.js.map