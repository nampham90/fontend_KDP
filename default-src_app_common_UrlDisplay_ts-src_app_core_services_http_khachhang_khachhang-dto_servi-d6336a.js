"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["default-src_app_common_UrlDisplay_ts-src_app_core_services_http_khachhang_khachhang-dto_servi-d6336a"],{

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

/***/ 60976:
/*!***********************************************************************!*\
  !*** ./src/app/core/services/http/khachhang/khachhang-dto.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KhachhangDtoService": () => (/* binding */ KhachhangDtoService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class KhachhangDtoService {
    constructor() {
        this.kbnflg = false;
        this.id = "";
        this.name = "";
        this.dienthoai = "";
        this.diachi = "";
        this.groupid = "";
        this.sotienno = 0;
    }
    clear() {
        this.kbnflg = false;
        this.id = "";
        this.name = "";
        this.dienthoai = "";
        this.diachi = "";
        this.groupid = "";
        this.sotienno = 0;
    }
}
KhachhangDtoService.ɵfac = function KhachhangDtoService_Factory(t) { return new (t || KhachhangDtoService)(); };
KhachhangDtoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KhachhangDtoService, factory: KhachhangDtoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 57087:
/*!*******************************************************************!*\
  !*** ./src/app/core/services/http/khachhang/khachhang.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KhachhangService": () => (/* binding */ KhachhangService)
/* harmony export */ });
/* harmony import */ var _app_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/common/const */ 44556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _base_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-http.service */ 54246);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);




class KhachhangService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    getlists(params) {
        return this.http.post(_app_common_const__WEBPACK_IMPORTED_MODULE_0__.KhachhangAnt100GetAll, params, { needSuccessInfo: false });
    }
    searchParams(params) {
        return this.http.post(_app_common_const__WEBPACK_IMPORTED_MODULE_0__.KhachhangAnt100SearchParams, params, { needSuccessInfo: false });
    }
    update(params) {
        return this.http.put(_app_common_const__WEBPACK_IMPORTED_MODULE_0__.KhachhangAnt100Update, params);
    }
    getDetail(id) {
        return this.http.get(`${_app_common_const__WEBPACK_IMPORTED_MODULE_0__.KhachhangAnt100GetDetail}/${id}/`);
    }
}
KhachhangService.ɵfac = function KhachhangService_Factory(t) { return new (t || KhachhangService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_base_http_service__WEBPACK_IMPORTED_MODULE_1__.BaseHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
KhachhangService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: KhachhangService, factory: KhachhangService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 79610:
/*!*****************************************************************!*\
  !*** ./src/app/core/services/http/nhatkykh/nhatkykh.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NhatkykhService": () => (/* binding */ NhatkykhService)
/* harmony export */ });
/* harmony import */ var _app_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/common/const */ 44556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _base_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-http.service */ 54246);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);




class NhatkykhService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    getlists(params) {
        return this.http.post(_app_common_const__WEBPACK_IMPORTED_MODULE_0__.NhatkykhAnt100GetAll, params, { needSuccessInfo: false });
    }
    // req tất toán
    tatToan(params) {
        return this.http.post(_app_common_const__WEBPACK_IMPORTED_MODULE_0__.NhatkykhAnt100PostTattoan, params, { needSuccessInfo: false });
    }
    thanhtoanmotphan(params) {
        return this.http.post(_app_common_const__WEBPACK_IMPORTED_MODULE_0__.NhatkykhAnt100PostThanhtoanmotphan, params, { needSuccessInfo: false });
    }
    thanhtoan(params) {
        return this.http.post(_app_common_const__WEBPACK_IMPORTED_MODULE_0__.NhatkykhAnt100PostThanhtoan, params, { needSuccessInfo: false });
    }
}
NhatkykhService.ɵfac = function NhatkykhService_Factory(t) { return new (t || NhatkykhService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_base_http_service__WEBPACK_IMPORTED_MODULE_1__.BaseHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
NhatkykhService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NhatkykhService, factory: NhatkykhService.ɵfac, providedIn: 'root' });


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
//# sourceMappingURL=default-src_app_common_UrlDisplay_ts-src_app_core_services_http_khachhang_khachhang-dto_servi-d6336a.js.map