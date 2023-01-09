"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_charts_baidu-map_baidu-map_module_ts"],{

/***/ 38166:
/*!*************************************************************************!*\
  !*** ./src/app/pages/feat/charts/baidu-map/baidu-map-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaiduMapRoutingModule": () => (/* binding */ BaiduMapRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_charts_baidu_map_baidu_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/charts/baidu-map/baidu-map.component */ 4718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_charts_baidu_map_baidu_map_component__WEBPACK_IMPORTED_MODULE_0__.BaiduMapComponent, data: { title: 'Baidu', key: 'baidu-map' } }];
class BaiduMapRoutingModule {
}
BaiduMapRoutingModule.ɵfac = function BaiduMapRoutingModule_Factory(t) { return new (t || BaiduMapRoutingModule)(); };
BaiduMapRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BaiduMapRoutingModule });
BaiduMapRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BaiduMapRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4718:
/*!********************************************************************!*\
  !*** ./src/app/pages/feat/charts/baidu-map/baidu-map.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaiduMapComponent": () => (/* binding */ BaiduMapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_common_lazy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/common/lazy.service */ 22447);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);




class BaiduMapComponent {
    constructor(lazyService) {
        this.lazyService = lazyService;
        this.pageHeaderInfo = {
            title: '百度地图，可不要暴露行踪了哟',
            breadcrumb: ['首页', '功能', '图表', '百度地图']
        };
    }
    ngOnInit() {
        this.lazyService.loadScript('http://api.map.baidu.com/getscript?v=2.0&ak=RD5HkkjTa6uAIDpw7GRFtR83Fk7Wdk0j').then(() => {
            const map = new BMap.Map('map'); //创建地图实例
            const point = new BMap.Point(116.404, 39.915); //创建点坐标
            map.centerAndZoom(point, 15); //初始化地图，设置中心点坐标和地图级别
            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        });
    }
}
BaiduMapComponent.ɵfac = function BaiduMapComponent_Factory(t) { return new (t || BaiduMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_common_lazy_service__WEBPACK_IMPORTED_MODULE_0__.LazyService)); };
BaiduMapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BaiduMapComponent, selectors: [["app-baidu-map"]], decls: 4, vars: 1, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["id", "map", 2, "height", "500px", "width", "100%"]], template: function BaiduMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
    } }, dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__.NzCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWlkdS1tYXAuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 58227:
/*!*****************************************************************!*\
  !*** ./src/app/pages/feat/charts/baidu-map/baidu-map.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaiduMapPageModule": () => (/* binding */ BaiduMapPageModule)
/* harmony export */ });
/* harmony import */ var _app_pages_feat_charts_baidu_map_baidu_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/charts/baidu-map/baidu-map.component */ 4718);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _baidu_map_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baidu-map-routing.module */ 38166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




// O7EUG8p2Mp0Ne6bm8HygWspxwjEdPvdY
class BaiduMapPageModule {
}
BaiduMapPageModule.ɵfac = function BaiduMapPageModule_Factory(t) { return new (t || BaiduMapPageModule)(); };
BaiduMapPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BaiduMapPageModule });
BaiduMapPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _baidu_map_routing_module__WEBPACK_IMPORTED_MODULE_2__.BaiduMapRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BaiduMapPageModule, { declarations: [_app_pages_feat_charts_baidu_map_baidu_map_component__WEBPACK_IMPORTED_MODULE_0__.BaiduMapComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _baidu_map_routing_module__WEBPACK_IMPORTED_MODULE_2__.BaiduMapRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_charts_baidu-map_baidu-map_module_ts.js.map