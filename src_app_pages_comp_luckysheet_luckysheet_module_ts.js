"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_comp_luckysheet_luckysheet_module_ts"],{

/***/ 39534:
/*!********************************************************************!*\
  !*** ./src/app/pages/comp/luckysheet/luckysheet-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LuckysheetRoutingModule": () => (/* binding */ LuckysheetRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_comp_luckysheet_luckysheet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/comp/luckysheet/luckysheet.component */ 4792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_comp_luckysheet_luckysheet_component__WEBPACK_IMPORTED_MODULE_0__.LuckysheetComponent, data: { title: '在线excel', key: 'luckysheet' } }];
class LuckysheetRoutingModule {
}
LuckysheetRoutingModule.ɵfac = function LuckysheetRoutingModule_Factory(t) { return new (t || LuckysheetRoutingModule)(); };
LuckysheetRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LuckysheetRoutingModule });
LuckysheetRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LuckysheetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4792:
/*!***************************************************************!*\
  !*** ./src/app/pages/comp/luckysheet/luckysheet.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LuckysheetComponent": () => (/* binding */ LuckysheetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_common_lazy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/common/lazy.service */ 22447);


class LuckysheetComponent {
    constructor(lazyService) {
        this.lazyService = lazyService;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.lazyService
            .load([
            'https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/plugins/css/pluginsCss.css',
            'https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/plugins/plugins.css',
            'https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/css/luckysheet.css',
            'https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/assets/iconfont/iconfont.css',
            'https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/plugins/js/plugin.js',
            'https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/luckysheet.umd.js'
        ])
            .then(() => {
            const options = {
                userName: 'NgAntAdmin',
                myFolderUrl: 'https://github.com/huajian123/ng-ant-admin',
                container: 'luckysheet',
                title: '简单的示例',
                lang: 'zh' // 设定表格语言
            };
            // @ts-ignore
            luckysheet.create(options);
        });
    }
}
LuckysheetComponent.ɵfac = function LuckysheetComponent_Factory(t) { return new (t || LuckysheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_common_lazy_service__WEBPACK_IMPORTED_MODULE_0__.LazyService)); };
LuckysheetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LuckysheetComponent, selectors: [["app-luckysheet"]], decls: 1, vars: 0, consts: [["id", "luckysheet", 2, "height", "800px"]], template: function LuckysheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, styles: ["[_nghost-%COMP%]     .luckysheet-scrollbar-ltr {\n  z-index: 1000!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImx1Y2t5c2hlZXQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx1QkFBQTtBQUFKIiwiZmlsZSI6Imx1Y2t5c2hlZXQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXB7XG4gIC5sdWNreXNoZWV0LXNjcm9sbGJhci1sdHIge1xuICAgIHotaW5kZXg6IDEwMDAhaW1wb3J0YW50O1xuICB9XG59XG5cblxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 32358:
/*!************************************************************!*\
  !*** ./src/app/pages/comp/luckysheet/luckysheet.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LuckysheetModule": () => (/* binding */ LuckysheetModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _luckysheet_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./luckysheet-routing.module */ 39534);
/* harmony import */ var _luckysheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./luckysheet.component */ 4792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class LuckysheetModule {
}
LuckysheetModule.ɵfac = function LuckysheetModule_Factory(t) { return new (t || LuckysheetModule)(); };
LuckysheetModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LuckysheetModule });
LuckysheetModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _luckysheet_routing_module__WEBPACK_IMPORTED_MODULE_1__.LuckysheetRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LuckysheetModule, { declarations: [_luckysheet_component__WEBPACK_IMPORTED_MODULE_2__.LuckysheetComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _luckysheet_routing_module__WEBPACK_IMPORTED_MODULE_1__.LuckysheetRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_comp_luckysheet_luckysheet_module_ts.js.map