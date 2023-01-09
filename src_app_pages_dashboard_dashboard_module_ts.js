"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 91565:
/*!************************************************************!*\
  !*** ./src/app/core/services/common/webservice.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebserviceService": () => (/* binding */ WebserviceService)
/* harmony export */ });
/* harmony import */ var C_Users_Administrator_Desktop_angular_theme_ng_ant_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _app_common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/common/const */ 44556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_base_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/base-http.service */ 54246);






class WebserviceService {
  constructor(http, httpt) {
    this.http = http;
    this.httpt = httpt;
    this.urlApi = 'https://fakestoreapi.com/';
    this.provincesApi = _app_common_const__WEBPACK_IMPORTED_MODULE_1__.tinhthanhApi;
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  GetCallProvinces(fncSuccess, fncError) {
    var _this = this;

    return (0,C_Users_Administrator_Desktop_angular_theme_ng_ant_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let promise = _this.httpt.get(_this.provincesApi);

      promise.subscribe({
        next: res => {
          if (fncSuccess != null) {
            fncSuccess(res);
          }

          return true;
        },
        error: err => {
          if (fncError != null) {
            fncError();
          }

          return false;
        },
        complete: () => {}
      });
      return promise;
    })();
  }

  GetCallCommonWs(serviceName, fncSuccess, fncError) {
    var _this2 = this;

    return (0,C_Users_Administrator_Desktop_angular_theme_ng_ant_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let promise = _this2.httpt.get(_this2.urlApi + serviceName, {
        observe: 'response'
      });

      promise.subscribe({
        next: res => {
          if (fncSuccess != null) {
            fncSuccess(res);
          }

          return true;
        },
        error: err => {
          if (fncError != null) {
            fncError();
          }

          return false;
        },
        complete: () => {}
      });
      return promise;
    })();
  }

  PostCallCommonWs(serviceName, data, fncSuccess, fncError) {
    var _this3 = this;

    return (0,C_Users_Administrator_Desktop_angular_theme_ng_ant_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let promisr = _this3.http.post(serviceName, data, {
        needSuccessInfo: false
      });

      promisr.subscribe({
        next: res => {
          if (fncSuccess != null) {
            fncSuccess(res);
          }

          return true;
        },
        error: err => {
          if (fncError != null) {
            fncError();
          }

          return false;
        },
        complete: () => {}
      });
      return promisr;
    })();
  }

  GetCallWs(serviceName, fncSuccess, fncError) {
    var _this4 = this;

    return (0,C_Users_Administrator_Desktop_angular_theme_ng_ant_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let promise = _this4.http.get(serviceName, {
        observe: 'response'
      });

      promise.subscribe({
        next: res => {
          if (fncSuccess != null) {
            fncSuccess(res);
          }

          return true;
        },
        error: err => {
          if (fncError != null) {
            fncError();
          }

          return false;
        },
        complete: () => {}
      });
      return promise;
    })();
  }

  PostCallWs(serviceName, data, fncSuccess, fncError) {
    var _this5 = this;

    return (0,C_Users_Administrator_Desktop_angular_theme_ng_ant_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let promisr = _this5.http.post(serviceName, data, {
        needSuccessInfo: false
      });

      promisr.subscribe({
        next: res => {
          if (fncSuccess != null) {
            fncSuccess(res);
          }

          return true;
        },
        error: err => {
          if (fncError != null) {
            fncError();
          }

          return false;
        },
        complete: () => {}
      });
      return promisr;
    })();
  }

  PutCallWs(serviceName, data, fncSuccess, fncError) {
    var _this6 = this;

    return (0,C_Users_Administrator_Desktop_angular_theme_ng_ant_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let promisr = _this6.http.put(serviceName, data, {
        needSuccessInfo: true
      });

      promisr.subscribe({
        next: res => {
          if (fncSuccess != null) {
            fncSuccess(res);
          }

          return true;
        },
        error: err => {
          if (fncError != null) {
            fncError();
          }

          return false;
        },
        complete: () => {}
      });
      return promisr;
    })();
  }

  DeleteCallWs(serviceName, data, fncSuccess, fncError) {
    var _this7 = this;

    return (0,C_Users_Administrator_Desktop_angular_theme_ng_ant_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let promisr = _this7.http.delete(serviceName, data, {
        needSuccessInfo: true
      });

      promisr.subscribe({
        next: res => {
          if (fncSuccess != null) {
            fncSuccess(res);
          }

          return true;
        },
        error: err => {
          if (fncError != null) {
            fncError();
          }

          return false;
        },
        complete: () => {}
      });
      return promisr;
    })();
  }

}

WebserviceService.ɵfac = function WebserviceService_Factory(t) {
  return new (t || WebserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_base_http_service__WEBPACK_IMPORTED_MODULE_2__.BaseHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};

WebserviceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: WebserviceService,
  factory: WebserviceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 99366:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'analysis', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dashboard_analysis_analysis_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./analysis/analysis.module */ 550)).then(m => m.AnalysisModule) },
    { path: 'monitor', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_monitor_monitor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./monitor/monitor.module */ 59078)).then(m => m.MonitorModule) },
    { path: 'workbench', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_workbench_workbench_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workbench/workbench.module */ 48852)).then(m => m.WorkbenchModule) },
    { path: "demo", loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_demo_demo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/demo.module */ 53145)).then(m => m.DemoModule) },
    { path: '', redirectTo: 'analysis', pathMatch: 'full' }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 71659:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 99366);
/* harmony import */ var src_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common/webservice.service */ 91565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [src_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_1__.WebserviceService], imports: [_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardModule, { imports: [_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map