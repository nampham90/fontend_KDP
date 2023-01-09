"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_charts_gaode-map_gaode-map_module_ts"],{

/***/ 22765:
/*!*************************************************************************!*\
  !*** ./src/app/pages/feat/charts/gaode-map/gaode-map-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaodeMapRoutingModule": () => (/* binding */ GaodeMapRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_charts_gaode_map_gaode_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/charts/gaode-map/gaode-map.component */ 80829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_charts_gaode_map_gaode_map_component__WEBPACK_IMPORTED_MODULE_0__.GaodeMapComponent, data: { title: 'Vàng', key: 'gaode-map' } }];
class GaodeMapRoutingModule {
}
GaodeMapRoutingModule.ɵfac = function GaodeMapRoutingModule_Factory(t) { return new (t || GaodeMapRoutingModule)(); };
GaodeMapRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GaodeMapRoutingModule });
GaodeMapRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GaodeMapRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 80829:
/*!********************************************************************!*\
  !*** ./src/app/pages/feat/charts/gaode-map/gaode-map.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaodeMapComponent": () => (/* binding */ GaodeMapComponent)
/* harmony export */ });
/* harmony import */ var _amap_amap_jsapi_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amap/amap-jsapi-loader */ 77601);
/* harmony import */ var _amap_amap_jsapi_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_amap_amap_jsapi_loader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _shared_components_water_mark_water_mark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/water-mark/water-mark.component */ 29332);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);








class GaodeMapComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.pageHeaderInfo = {
            title: '高德地图，可不要暴露行踪了哟',
            breadcrumb: ['首页', '功能', '图表', '高德地图']
        };
        this.marker = [116.437253, 39.935033];
        this.markerPosition = this.marker.join(',');
    }
    ngAfterViewInit() {
        // api地址
        // https://lbs.amap.com/demo/javascript-api/example/map-lifecycle/map-show
        // 自己去申请一个key，别用我这个Key，多谢
        // 申请地址 https://console.amap.com/dev/key/app
        _amap_amap_jsapi_loader__WEBPACK_IMPORTED_MODULE_0___default().load({
            key: '1c1b77fae2e59c25eb26ced9a0801103',
            version: '1.4.15',
            AMapUI: {
                version: '1.1',
                plugins: ['overlay/SimpleMarker']
            }
        })
            .then(AMap => {
            let map = new AMap.Map('container', {
                resizeEnable: true,
                zoom: 11,
                center: [116.397428, 39.90923]
            });
            const marker = new AMap.Marker({
                position: new AMap.LngLat(this.marker[0], this.marker[1]),
                /*  title: '南京',*/
                draggable: true
            });
            marker.on('dragend', () => {
                this.marker = [marker.getPosition()['R'], marker.getPosition()['Q']];
                this.markerPosition = this.marker.join(',');
                this.cdr.markForCheck();
                console.log(this.markerPosition);
            });
            marker.setMap(map);
        })
            .catch(e => {
            console.error(e);
        });
    }
    ngOnInit() { }
}
GaodeMapComponent.ɵfac = function GaodeMapComponent_Factory(t) { return new (t || GaodeMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
GaodeMapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GaodeMapComponent, selectors: [["app-gaode-map"]], decls: 6, vars: 2, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nz-input", "", 3, "ngModel", "ngModelChange"], ["id", "container", 2, "height", "500px", "width", "100%"]], template: function GaodeMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-water-mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GaodeMapComponent_Template_input_ngModelChange_4_listener($event) { return ctx.markerPosition = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.markerPosition);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, _shared_components_water_mark_water_mark_component__WEBPACK_IMPORTED_MODULE_2__.WaterMarkComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__.NzCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW9kZS1tYXAuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 24868:
/*!*****************************************************************!*\
  !*** ./src/app/pages/feat/charts/gaode-map/gaode-map.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaodeMapModule": () => (/* binding */ GaodeMapModule)
/* harmony export */ });
/* harmony import */ var _app_pages_feat_charts_gaode_map_gaode_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/charts/gaode-map/gaode-map.component */ 80829);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _gaode_map_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gaode-map-routing.module */ 22765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class GaodeMapModule {
}
GaodeMapModule.ɵfac = function GaodeMapModule_Factory(t) { return new (t || GaodeMapModule)(); };
GaodeMapModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: GaodeMapModule });
GaodeMapModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _gaode_map_routing_module__WEBPACK_IMPORTED_MODULE_2__.GaodeMapRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GaodeMapModule, { declarations: [_app_pages_feat_charts_gaode_map_gaode_map_component__WEBPACK_IMPORTED_MODULE_0__.GaodeMapComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _gaode_map_routing_module__WEBPACK_IMPORTED_MODULE_2__.GaodeMapRoutingModule] }); })();


/***/ }),

/***/ 77601:
/*!************************************************************!*\
  !*** ./node_modules/@amap/amap-jsapi-loader/dist/index.js ***!
  \************************************************************/
/***/ (function(module) {



(function (m, p) {
   true ? module.exports = p() : 0;
})(this, function () {
  function m(a) {
    var b = [];
    a.AMapUI && b.push(p(a.AMapUI));
    a.Loca && b.push(r(a.Loca));
    return Promise.all(b);
  }

  function p(a) {
    return new Promise(function (h, c) {
      var f = [];
      if (a.plugins) for (var e = 0; e < a.plugins.length; e += 1) -1 == d.AMapUI.plugins.indexOf(a.plugins[e]) && f.push(a.plugins[e]);
      if (g.AMapUI === b.failed) c("\u524d\u6b21\u8bf7\u6c42 AMapUI \u5931\u8d25");else if (g.AMapUI === b.notload) {
        g.AMapUI = b.loading;
        d.AMapUI.version = a.version || d.AMapUI.version;
        e = d.AMapUI.version;
        var l = document.body || document.head,
            k = document.createElement("script");
        k.type = "text/javascript";
        k.src = "https://webapi.amap.com/ui/" + e + "/main.js";

        k.onerror = function (a) {
          g.AMapUI = b.failed;
          c("\u8bf7\u6c42 AMapUI \u5931\u8d25");
        };

        k.onload = function () {
          g.AMapUI = b.loaded;
          if (f.length) window.AMapUI.loadUI(f, function () {
            for (var a = 0, b = f.length; a < b; a++) {
              var c = f[a].split("/").slice(-1)[0];
              window.AMapUI[c] = arguments[a];
            }

            for (h(); n.AMapUI.length;) n.AMapUI.splice(0, 1)[0]();
          });else for (h(); n.AMapUI.length;) n.AMapUI.splice(0, 1)[0]();
        };

        l.appendChild(k);
      } else g.AMapUI === b.loaded ? a.version && a.version !== d.AMapUI.version ? c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c AMapUI \u6df7\u7528") : f.length ? window.AMapUI.loadUI(f, function () {
        for (var a = 0, b = f.length; a < b; a++) {
          var c = f[a].split("/").slice(-1)[0];
          window.AMapUI[c] = arguments[a];
        }

        h();
      }) : h() : a.version && a.version !== d.AMapUI.version ? c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c AMapUI \u6df7\u7528") : n.AMapUI.push(function (a) {
        a ? c(a) : f.length ? window.AMapUI.loadUI(f, function () {
          for (var a = 0, b = f.length; a < b; a++) {
            var c = f[a].split("/").slice(-1)[0];
            window.AMapUI[c] = arguments[a];
          }

          h();
        }) : h();
      });
    });
  }

  function r(a) {
    return new Promise(function (h, c) {
      if (g.Loca === b.failed) c("\u524d\u6b21\u8bf7\u6c42 Loca \u5931\u8d25");else if (g.Loca === b.notload) {
        g.Loca = b.loading;
        d.Loca.version = a.version || d.Loca.version;
        var f = d.Loca.version,
            e = d.AMap.version.startsWith("2"),
            l = f.startsWith("2");
        if (e && !l || !e && l) c("JSAPI \u4e0e Loca \u7248\u672c\u4e0d\u5bf9\u5e94\uff01\uff01");else {
          e = d.key;
          l = document.body || document.head;
          var k = document.createElement("script");
          k.type = "text/javascript";
          k.src = "https://webapi.amap.com/loca?v=" + f + "&key=" + e;

          k.onerror = function (a) {
            g.Loca = b.failed;
            c("\u8bf7\u6c42 AMapUI \u5931\u8d25");
          };

          k.onload = function () {
            g.Loca = b.loaded;

            for (h(); n.Loca.length;) n.Loca.splice(0, 1)[0]();
          };

          l.appendChild(k);
        }
      } else g.Loca === b.loaded ? a.version && a.version !== d.Loca.version ? c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c Loca \u6df7\u7528") : h() : a.version && a.version !== d.Loca.version ? c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c Loca \u6df7\u7528") : n.Loca.push(function (a) {
        a ? c(a) : c();
      });
    });
  }

  if (!window) throw Error("AMap JSAPI can only be used in Browser.");
  var b;

  (function (a) {
    a.notload = "notload";
    a.loading = "loading";
    a.loaded = "loaded";
    a.failed = "failed";
  })(b || (b = {}));

  var d = {
    key: "",
    AMap: {
      version: "1.4.15",
      plugins: []
    },
    AMapUI: {
      version: "1.1",
      plugins: []
    },
    Loca: {
      version: "1.3.2"
    }
  },
      g = {
    AMap: b.notload,
    AMapUI: b.notload,
    Loca: b.notload
  },
      n = {
    AMap: [],
    AMapUI: [],
    Loca: []
  },
      q = [],
      t = function (a) {
    "function" == typeof a && (g.AMap === b.loaded ? a(window.AMap) : q.push(a));
  };

  return {
    load: function (a) {
      return new Promise(function (h, c) {
        if (g.AMap == b.failed) c("");else if (g.AMap == b.notload) {
          var f = a.key,
              e = a.version,
              l = a.plugins;
          f ? (window.AMap && "lbs.amap.com" !== location.host && c("\u7981\u6b62\u591a\u79cdAPI\u52a0\u8f7d\u65b9\u5f0f\u6df7\u7528"), d.key = f, d.AMap.version = e || d.AMap.version, d.AMap.plugins = l || d.AMap.plugins, g.AMap = b.loading, e = document.body || document.head, window.___onAPILoaded = function (d) {
            delete window.___onAPILoaded;
            if (d) g.AMap = b.failed, c(d);else for (g.AMap = b.loaded, m(a).then(function () {
              h(window.AMap);
            })["catch"](c); q.length;) q.splice(0, 1)[0]();
          }, l = document.createElement("script"), l.type = "text/javascript", l.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + d.AMap.version + "&key=" + f + "&plugin=" + d.AMap.plugins.join(","), l.onerror = function (a) {
            g.AMap = b.failed;
            c(a);
          }, e.appendChild(l)) : c("\u8bf7\u586b\u5199key");
        } else if (g.AMap == b.loaded) {
          if (a.key && a.key !== d.key) c("\u591a\u4e2a\u4e0d\u4e00\u81f4\u7684 key");else if (a.version && a.version !== d.AMap.version) c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c JSAPI \u6df7\u7528");else {
            f = [];
            if (a.plugins) for (e = 0; e < a.plugins.length; e += 1) -1 == d.AMap.plugins.indexOf(a.plugins[e]) && f.push(a.plugins[e]);
            if (f.length) window.AMap.plugin(f, function () {
              m(a).then(function () {
                h(window.AMap);
              })["catch"](c);
            });else m(a).then(function () {
              h(window.AMap);
            })["catch"](c);
          }
        } else if (a.key && a.key !== d.key) c("\u591a\u4e2a\u4e0d\u4e00\u81f4\u7684 key");else if (a.version && a.version !== d.AMap.version) c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c JSAPI \u6df7\u7528");else {
          var k = [];
          if (a.plugins) for (e = 0; e < a.plugins.length; e += 1) -1 == d.AMap.plugins.indexOf(a.plugins[e]) && k.push(a.plugins[e]);
          t(function () {
            if (k.length) window.AMap.plugin(k, function () {
              m(a).then(function () {
                h(window.AMap);
              })["catch"](c);
            });else m(a).then(function () {
              h(window.AMap);
            })["catch"](c);
          });
        }
      });
    },
    reset: function () {
      delete window.AMap;
      delete window.AMapUI;
      delete window.Loca;
      d = {
        key: "",
        AMap: {
          version: "1.4.15",
          plugins: []
        },
        AMapUI: {
          version: "1.1",
          plugins: []
        },
        Loca: {
          version: "1.3.2"
        }
      };
      g = {
        AMap: b.notload,
        AMapUI: b.notload,
        Loca: b.notload
      };
      n = {
        AMap: [],
        AMapUI: [],
        Loca: []
      };
    }
  };
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_charts_gaode-map_gaode-map_module_ts.js.map