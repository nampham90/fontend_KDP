"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_click-out-side_click-out-side_module_ts"],{

/***/ 72232:
/*!****************************************************************************!*\
  !*** ./src/app/pages/feat/click-out-side/click-out-side-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickOutSideRoutingModule": () => (/* binding */ ClickOutSideRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_click_out_side_click_out_side_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/click-out-side/click-out-side.component */ 27897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_click_out_side_click_out_side_component__WEBPACK_IMPORTED_MODULE_0__.ClickOutSideComponent, data: { title: 'clickOutSide', key: 'click-out-side' } }];
class ClickOutSideRoutingModule {
}
ClickOutSideRoutingModule.ɵfac = function ClickOutSideRoutingModule_Factory(t) { return new (t || ClickOutSideRoutingModule)(); };
ClickOutSideRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClickOutSideRoutingModule });
ClickOutSideRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClickOutSideRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 27897:
/*!***********************************************************************!*\
  !*** ./src/app/pages/feat/click-out-side/click-out-side.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickOutSideComponent": () => (/* binding */ ClickOutSideComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/tools */ 58995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);







const _c0 = ["targetHtml"];
class ClickOutSideComponent {
    constructor(cdr, doc) {
        this.cdr = cdr;
        this.doc = doc;
        this.pageHeaderInfo = {
            title: '点内外部触发事件，点一点总会有好运',
            breadcrumb: ['首页', '功能', 'ClickOutSide']
        };
        this.text = '点击内部或者外部';
    }
    ngAfterViewInit() {
        this.targetHtmlClick$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.targetHtml.nativeElement, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(e => {
            (0,_utils_tools__WEBPACK_IMPORTED_MODULE_0__.fnStopMouseEvent)(e);
            this.text = '刀斩肉身';
        }));
        this.winClick$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.doc, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
            this.text = '心斩灵魂';
        }));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(this.targetHtmlClick$, this.winClick$).subscribe(res => {
            this.cdr.markForCheck();
        });
    }
    ngOnInit() { }
}
ClickOutSideComponent.ɵfac = function ClickOutSideComponent_Factory(t) { return new (t || ClickOutSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT)); };
ClickOutSideComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ClickOutSideComponent, selectors: [["app-click-out-side"]], viewQuery: function ClickOutSideComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.targetHtml = _t.first);
    } }, decls: 6, vars: 2, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], [1, "block", "full-with", "center"], ["targetHtml", ""], [1, "sp-28", 2, "color", "white"]], template: function ClickOutSideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2, 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.text);
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent], styles: [".block[_ngcontent-%COMP%] {\n  height: 500px;\n  background: #408EDE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWNrLW91dC1zaWRlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiY2xpY2stb3V0LXNpZGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2sge1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjNDA4RURFO1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 2557:
/*!********************************************************************!*\
  !*** ./src/app/pages/feat/click-out-side/click-out-side.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickOutSideModule": () => (/* binding */ ClickOutSideModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _click_out_side_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./click-out-side-routing.module */ 72232);
/* harmony import */ var _click_out_side_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./click-out-side.component */ 27897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class ClickOutSideModule {
}
ClickOutSideModule.ɵfac = function ClickOutSideModule_Factory(t) { return new (t || ClickOutSideModule)(); };
ClickOutSideModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ClickOutSideModule });
ClickOutSideModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _click_out_side_routing_module__WEBPACK_IMPORTED_MODULE_1__.ClickOutSideRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ClickOutSideModule, { declarations: [_click_out_side_component__WEBPACK_IMPORTED_MODULE_2__.ClickOutSideComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _click_out_side_routing_module__WEBPACK_IMPORTED_MODULE_1__.ClickOutSideRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_click-out-side_click-out-side_module_ts.js.map