"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_websocket_websocket_module_ts"],{

/***/ 60559:
/*!******************************************************************!*\
  !*** ./src/app/pages/feat/websocket/websocket-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsocketRoutingModule": () => (/* binding */ WebsocketRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_websocket_websocket_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/websocket/websocket.component */ 70201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_websocket_websocket_component__WEBPACK_IMPORTED_MODULE_0__.WebsocketComponent, data: { title: 'kiểm tra websocket', key: 'websocket' } }];
class WebsocketRoutingModule {
}
WebsocketRoutingModule.ɵfac = function WebsocketRoutingModule_Factory(t) { return new (t || WebsocketRoutingModule)(); };
WebsocketRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WebsocketRoutingModule });
WebsocketRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WebsocketRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 70201:
/*!*************************************************************!*\
  !*** ./src/app/pages/feat/websocket/websocket.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsocketComponent": () => (/* binding */ WebsocketComponent)
/* harmony export */ });
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/webSocket */ 92227);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/result */ 64655);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/typography */ 63140);















function WebsocketComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10)(2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u5DF2\u8BFB");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1);
} }
const _c0 = function () { return [16, 16]; };
const _c1 = function () { return { minRows: 3, maxRows: 5 }; };
class WebsocketComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.concate = true;
        // https://github.com/ReactiveX/rxjs/issues/4166
        this.pageHeaderInfo = {
            title: 'websocket',
            breadcrumb: ['首页', '功能', 'websocket']
        };
        this.subject = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__.webSocket)(`ws://${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.ip}:8003/webSocket`);
        this.result = [];
        this.msg = '';
    }
    send() {
        this.subject.next(this.msg);
        this.msg = '';
    }
    end() {
        this.subject.complete();
        this.concate = false;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.subject.subscribe(res => {
            // @ts-ignore
            this.result.push(res.message);
            this.result = [...this.result];
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.subject.complete();
    }
}
WebsocketComponent.ɵfac = function WebsocketComponent_Factory(t) { return new (t || WebsocketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
WebsocketComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WebsocketComponent, selectors: [["app-websocket"]], decls: 14, vars: 8, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzFlex", "300px"], ["nz-input", "", "placeholder", "\u53D1\u9001\u7684\u5185\u5BB9\u670D\u52A1\u7AEF\u4F1A\u8FD4\u56DE", 1, "m-b-8", 3, "ngModel", "nzAutosize", "ngModelChange"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-button", "", "nzType", "default", 1, "m-l-8", 3, "click"], ["nz-col", "", "nzFlex", "auto"], ["nzTitle", "\u6D88\u606F\u5185\u5BB9"], [4, "ngFor", "ngForOf"], ["nz-result-content", "", 1, "m-t-0", "p-8", "text-break", "m-b-8"], ["nz-typography", ""], ["nz-typography", "", "nzType", "secondary", 1, "sp-12", "text-right", "m-t-5"]], template: function WebsocketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function WebsocketComponent_Template_textarea_ngModelChange_4_listener($event) { return ctx.msg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebsocketComponent_Template_button_click_5_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u53D1\u9001");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebsocketComponent_Template_button_click_7_listener() { return ctx.end(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u65AD\u5F00\u8FDE\u63A5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "nz-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, WebsocketComponent_ng_container_13_Template, 6, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.msg)("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u94FE\u63A5\u72B6\u6001\uFF1A", ctx.concate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.result);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzAutosizeDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__.NzCardComponent, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_12__.NzResultContentDirective, ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_13__.NzTypographyComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWJzb2NrZXQuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 39976:
/*!**********************************************************!*\
  !*** ./src/app/pages/feat/websocket/websocket.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsocketModule": () => (/* binding */ WebsocketModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _websocket_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket-routing.module */ 60559);
/* harmony import */ var _websocket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./websocket.component */ 70201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class WebsocketModule {
}
WebsocketModule.ɵfac = function WebsocketModule_Factory(t) { return new (t || WebsocketModule)(); };
WebsocketModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: WebsocketModule });
WebsocketModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _websocket_routing_module__WEBPACK_IMPORTED_MODULE_1__.WebsocketRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WebsocketModule, { declarations: [_websocket_component__WEBPACK_IMPORTED_MODULE_2__.WebsocketComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _websocket_routing_module__WEBPACK_IMPORTED_MODULE_1__.WebsocketRoutingModule] }); })();


/***/ }),

/***/ 53526:
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/dom/WebSocketSubject.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebSocketSubject": () => (/* binding */ WebSocketSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Subject */ 80228);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Subscriber */ 19904);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Observable */ 90833);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Subscription */ 26078);
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ReplaySubject */ 26067);





const DEFAULT_WEBSOCKET_CONFIG = {
  url: '',
  deserializer: e => JSON.parse(e.data),
  serializer: value => JSON.stringify(value)
};
const WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT = 'WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }';
class WebSocketSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.AnonymousSubject {
  constructor(urlConfigOrSource, destination) {
    super();
    this._socket = null;

    if (urlConfigOrSource instanceof _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable) {
      this.destination = destination;
      this.source = urlConfigOrSource;
    } else {
      const config = this._config = Object.assign({}, DEFAULT_WEBSOCKET_CONFIG);
      this._output = new _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();

      if (typeof urlConfigOrSource === 'string') {
        config.url = urlConfigOrSource;
      } else {
        for (const key in urlConfigOrSource) {
          if (urlConfigOrSource.hasOwnProperty(key)) {
            config[key] = urlConfigOrSource[key];
          }
        }
      }

      if (!config.WebSocketCtor && WebSocket) {
        config.WebSocketCtor = WebSocket;
      } else if (!config.WebSocketCtor) {
        throw new Error('no WebSocket constructor can be found');
      }

      this.destination = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject();
    }
  }

  lift(operator) {
    const sock = new WebSocketSubject(this._config, this.destination);
    sock.operator = operator;
    sock.source = this;
    return sock;
  }

  _resetState() {
    this._socket = null;

    if (!this.source) {
      this.destination = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject();
    }

    this._output = new _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }

  multiplex(subMsg, unsubMsg, messageFilter) {
    const self = this;
    return new _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      try {
        self.next(subMsg());
      } catch (err) {
        observer.error(err);
      }

      const subscription = self.subscribe({
        next: x => {
          try {
            if (messageFilter(x)) {
              observer.next(x);
            }
          } catch (err) {
            observer.error(err);
          }
        },
        error: err => observer.error(err),
        complete: () => observer.complete()
      });
      return () => {
        try {
          self.next(unsubMsg());
        } catch (err) {
          observer.error(err);
        }

        subscription.unsubscribe();
      };
    });
  }

  _connectSocket() {
    const {
      WebSocketCtor,
      protocol,
      url,
      binaryType
    } = this._config;
    const observer = this._output;
    let socket = null;

    try {
      socket = protocol ? new WebSocketCtor(url, protocol) : new WebSocketCtor(url);
      this._socket = socket;

      if (binaryType) {
        this._socket.binaryType = binaryType;
      }
    } catch (e) {
      observer.error(e);
      return;
    }

    const subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription(() => {
      this._socket = null;

      if (socket && socket.readyState === 1) {
        socket.close();
      }
    });

    socket.onopen = evt => {
      const {
        _socket
      } = this;

      if (!_socket) {
        socket.close();

        this._resetState();

        return;
      }

      const {
        openObserver
      } = this._config;

      if (openObserver) {
        openObserver.next(evt);
      }

      const queue = this.destination;
      this.destination = _Subscriber__WEBPACK_IMPORTED_MODULE_4__.Subscriber.create(x => {
        if (socket.readyState === 1) {
          try {
            const {
              serializer
            } = this._config;
            socket.send(serializer(x));
          } catch (e) {
            this.destination.error(e);
          }
        }
      }, err => {
        const {
          closingObserver
        } = this._config;

        if (closingObserver) {
          closingObserver.next(undefined);
        }

        if (err && err.code) {
          socket.close(err.code, err.reason);
        } else {
          observer.error(new TypeError(WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT));
        }

        this._resetState();
      }, () => {
        const {
          closingObserver
        } = this._config;

        if (closingObserver) {
          closingObserver.next(undefined);
        }

        socket.close();

        this._resetState();
      });

      if (queue && queue instanceof _ReplaySubject__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject) {
        subscription.add(queue.subscribe(this.destination));
      }
    };

    socket.onerror = e => {
      this._resetState();

      observer.error(e);
    };

    socket.onclose = e => {
      if (socket === this._socket) {
        this._resetState();
      }

      const {
        closeObserver
      } = this._config;

      if (closeObserver) {
        closeObserver.next(e);
      }

      if (e.wasClean) {
        observer.complete();
      } else {
        observer.error(e);
      }
    };

    socket.onmessage = e => {
      try {
        const {
          deserializer
        } = this._config;
        observer.next(deserializer(e));
      } catch (err) {
        observer.error(err);
      }
    };
  }

  _subscribe(subscriber) {
    const {
      source
    } = this;

    if (source) {
      return source.subscribe(subscriber);
    }

    if (!this._socket) {
      this._connectSocket();
    }

    this._output.subscribe(subscriber);

    subscriber.add(() => {
      const {
        _socket
      } = this;

      if (this._output.observers.length === 0) {
        if (_socket && (_socket.readyState === 1 || _socket.readyState === 0)) {
          _socket.close();
        }

        this._resetState();
      }
    });
    return subscriber;
  }

  unsubscribe() {
    const {
      _socket
    } = this;

    if (_socket && (_socket.readyState === 1 || _socket.readyState === 0)) {
      _socket.close();
    }

    this._resetState();

    super.unsubscribe();
  }

}

/***/ }),

/***/ 92227:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/dom/webSocket.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "webSocket": () => (/* binding */ webSocket)
/* harmony export */ });
/* harmony import */ var _WebSocketSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebSocketSubject */ 53526);

function webSocket(urlConfigOrSource) {
  return new _WebSocketSubject__WEBPACK_IMPORTED_MODULE_0__.WebSocketSubject(urlConfigOrSource);
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_websocket_websocket_module_ts.js.map