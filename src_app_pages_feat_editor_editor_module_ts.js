"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_feat_editor_editor_module_ts"],{

/***/ 77594:
/*!************************************************************!*\
  !*** ./src/app/pages/feat/editor/editor-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorRoutingModule": () => (/* binding */ EditorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_feat_editor_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/feat/editor/editor.component */ 68530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_feat_editor_editor_component__WEBPACK_IMPORTED_MODULE_0__.EditorComponent, data: { title: 'biên tập mã', key: 'editor' } }];
class EditorRoutingModule {
}
EditorRoutingModule.ɵfac = function EditorRoutingModule_Factory(t) { return new (t || EditorRoutingModule)(); };
EditorRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EditorRoutingModule });
EditorRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 68530:
/*!*******************************************************!*\
  !*** ./src/app/pages/feat/editor/editor.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorComponent": () => (/* binding */ EditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-monaco-editor */ 66218);




class EditorComponent {
    constructor() {
        this.pageHeaderInfo = {
            title: '代码编辑器，vscode的起源',
            breadcrumb: ['首页', '扩展功能', '代码编辑器']
        };
        this.editorOptions = { theme: 'vs-dark', language: 'javascript' };
        this.code = 'function x() {\n\tconsole.log("Hello world!");\n}';
    }
    initEditor() { }
    ngOnInit() {
        this.initEditor();
    }
    ngOnDestroy() {
        // this.monacoInstance.dispose()
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(); };
EditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], decls: 3, vars: 3, consts: [[3, "pageHeaderInfo"], [1, "normal-table-wrap"], [2, "height", "500px", 3, "options", "ngModel", "ngModelChange"]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "ngx-monaco-editor", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditorComponent_Template_ngx_monaco_editor_ngModelChange_2_listener($event) { return ctx.code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageHeaderInfo", ctx.pageHeaderInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.editorOptions)("ngModel", ctx.code);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_3__.EditorComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 35847:
/*!****************************************************!*\
  !*** ./src/app/pages/feat/editor/editor.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorModule": () => (/* binding */ EditorModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-monaco-editor */ 66218);
/* harmony import */ var _editor_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor-routing.module */ 77594);
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.component */ 68530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






class EditorModule {
}
EditorModule.ɵfac = function EditorModule_Factory(t) { return new (t || EditorModule)(); };
EditorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: EditorModule });
EditorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _editor_routing_module__WEBPACK_IMPORTED_MODULE_1__.EditorRoutingModule, ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__.MonacoEditorModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EditorModule, { declarations: [_editor_component__WEBPACK_IMPORTED_MODULE_2__.EditorComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _editor_routing_module__WEBPACK_IMPORTED_MODULE_1__.EditorRoutingModule, ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__.MonacoEditorModule] }); })();


/***/ }),

/***/ 66218:
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-monaco-editor/fesm2015/ngx-monaco-editor.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiffEditorComponent": () => (/* binding */ DiffEditorComponent),
/* harmony export */   "EditorComponent": () => (/* binding */ EditorComponent),
/* harmony export */   "MonacoEditorModule": () => (/* binding */ MonacoEditorModule),
/* harmony export */   "NGX_MONACO_EDITOR_CONFIG": () => (/* binding */ NGX_MONACO_EDITOR_CONFIG)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);





const _c0 = ["editorContainer"];
const NGX_MONACO_EDITOR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NGX_MONACO_EDITOR_CONFIG');
let loadedMonaco = false;
let loadPromise;

class BaseEditor {
  constructor(config) {
    this.config = config;
    this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  ngAfterViewInit() {
    if (loadedMonaco) {
      // Wait until monaco editor is available
      loadPromise.then(() => {
        this.initMonaco(this._options);
      });
    } else {
      loadedMonaco = true;
      loadPromise = new Promise(resolve => {
        const baseUrl = (this.config.baseUrl || './assets') + '/monaco-editor/min/vs';

        if (typeof window.monaco === 'object') {
          resolve();
          return;
        }

        const onGotAmdLoader = () => {
          // Load monaco
          window.require.config({
            paths: {
              'vs': `${baseUrl}`
            }
          });

          window.require([`vs/editor/editor.main`], () => {
            if (typeof this.config.onMonacoLoad === 'function') {
              this.config.onMonacoLoad();
            }

            this.initMonaco(this._options);
            resolve();
          });
        }; // Load AMD loader if necessary


        if (!window.require) {
          const loaderScript = document.createElement('script');
          loaderScript.type = 'text/javascript';
          loaderScript.src = `${baseUrl}/loader.js`;
          loaderScript.addEventListener('load', onGotAmdLoader);
          document.body.appendChild(loaderScript);
        } else {
          onGotAmdLoader();
        }
      });
    }
  }

  ngOnDestroy() {
    if (this._windowResizeSubscription) {
      this._windowResizeSubscription.unsubscribe();
    }

    if (this._editor) {
      this._editor.dispose();

      this._editor = undefined;
    }
  }

}

BaseEditor.ɵfac = function BaseEditor_Factory(t) {
  return new (t || BaseEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NGX_MONACO_EDITOR_CONFIG));
};

BaseEditor.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BaseEditor,
  selectors: [["ng-component"]],
  viewQuery: function BaseEditor_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._editorContainer = _t.first);
    }
  },
  outputs: {
    onInit: "onInit"
  },
  decls: 0,
  vars: 0,
  template: function BaseEditor_Template(rf, ctx) {},
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseEditor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      template: ''
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [NGX_MONACO_EDITOR_CONFIG]
      }]
    }];
  }, {
    _editorContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['editorContainer', {
        static: true
      }]
    }],
    onInit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class EditorComponent extends BaseEditor {
  constructor(zone, editorConfig) {
    super(editorConfig);
    this.zone = zone;
    this.editorConfig = editorConfig;
    this._value = '';

    this.propagateChange = _ => {};

    this.onTouched = () => {};
  }

  set options(options) {
    this._options = Object.assign({}, this.config.defaultOptions, options);

    if (this._editor) {
      this._editor.dispose();

      this.initMonaco(options);
    }
  }

  get options() {
    return this._options;
  }

  set model(model) {
    this.options.model = model;

    if (this._editor) {
      this._editor.dispose();

      this.initMonaco(this.options);
    }
  }

  writeValue(value) {
    this._value = value || ''; // Fix for value change while dispose in process.

    setTimeout(() => {
      if (this._editor && !this.options.model) {
        this._editor.setValue(this._value);
      }
    });
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  initMonaco(options) {
    const hasModel = !!options.model;

    if (hasModel) {
      const model = monaco.editor.getModel(options.model.uri || '');

      if (model) {
        options.model = model;
        options.model.setValue(this._value);
      } else {
        options.model = monaco.editor.createModel(options.model.value, options.model.language, options.model.uri);
      }
    }

    this._editor = monaco.editor.create(this._editorContainer.nativeElement, options);

    if (!hasModel) {
      this._editor.setValue(this._value);
    }

    this._editor.onDidChangeModelContent(e => {
      const value = this._editor.getValue(); // value is not propagated to parent when executing outside zone.


      this.zone.run(() => {
        this.propagateChange(value);
        this._value = value;
      });
    });

    this._editor.onDidBlurEditorWidget(() => {
      this.onTouched();
    }); // refresh layout on resize event.


    if (this._windowResizeSubscription) {
      this._windowResizeSubscription.unsubscribe();
    }

    this._windowResizeSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(window, 'resize').subscribe(() => this._editor.layout());
    this.onInit.emit(this._editor);
  }

}

EditorComponent.ɵfac = function EditorComponent_Factory(t) {
  return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NGX_MONACO_EDITOR_CONFIG));
};

EditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EditorComponent,
  selectors: [["ngx-monaco-editor"]],
  inputs: {
    options: "options",
    model: "model"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => EditorComponent),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 0,
  consts: [[1, "editor-container"], ["editorContainer", ""]],
  template: function EditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    }
  },
  styles: ["[_nghost-%COMP%] {\n          display: block;\n          height: 200px;\n      }\n\n      .editor-container[_ngcontent-%COMP%] {\n          width: 100%;\n          height: 98%;\n      }"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-monaco-editor',
      template: '<div class="editor-container" #editorContainer></div>',
      styles: [`
      :host {
          display: block;
          height: 200px;
      }

      .editor-container {
          width: 100%;
          height: 98%;
      }
  `],
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => EditorComponent),
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [NGX_MONACO_EDITOR_CONFIG]
      }]
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['options']
    }],
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['model']
    }]
  });
})();

class DiffEditorComponent extends BaseEditor {
  constructor(editorConfig) {
    super(editorConfig);
    this.editorConfig = editorConfig;
  }

  set options(options) {
    this._options = Object.assign({}, this.config.defaultOptions, options);

    if (this._editor) {
      this._editor.dispose();

      this.initMonaco(options);
    }
  }

  get options() {
    return this._options;
  }

  set originalModel(model) {
    this._originalModel = model;

    if (this._editor) {
      this._editor.dispose();

      this.initMonaco(this.options);
    }
  }

  set modifiedModel(model) {
    this._modifiedModel = model;

    if (this._editor) {
      this._editor.dispose();

      this.initMonaco(this.options);
    }
  }

  initMonaco(options) {
    if (!this._originalModel || !this._modifiedModel) {
      throw new Error('originalModel or modifiedModel not found for ngx-monaco-diff-editor');
    }

    this._originalModel.language = this._originalModel.language || options.language;
    this._modifiedModel.language = this._modifiedModel.language || options.language;
    let originalModel = monaco.editor.createModel(this._originalModel.code, this._originalModel.language);
    let modifiedModel = monaco.editor.createModel(this._modifiedModel.code, this._modifiedModel.language);
    this._editorContainer.nativeElement.innerHTML = '';
    const theme = options.theme;
    this._editor = monaco.editor.createDiffEditor(this._editorContainer.nativeElement, options);
    options.theme = theme;

    this._editor.setModel({
      original: originalModel,
      modified: modifiedModel
    }); // refresh layout on resize event.


    if (this._windowResizeSubscription) {
      this._windowResizeSubscription.unsubscribe();
    }

    this._windowResizeSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(window, 'resize').subscribe(() => this._editor.layout());
    this.onInit.emit(this._editor);
  }

}

DiffEditorComponent.ɵfac = function DiffEditorComponent_Factory(t) {
  return new (t || DiffEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NGX_MONACO_EDITOR_CONFIG));
};

DiffEditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DiffEditorComponent,
  selectors: [["ngx-monaco-diff-editor"]],
  inputs: {
    options: "options",
    originalModel: "originalModel",
    modifiedModel: "modifiedModel"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 0,
  consts: [[1, "editor-container"], ["editorContainer", ""]],
  template: function DiffEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    }
  },
  styles: ["[_nghost-%COMP%] {\n      display: block;\n      height: 200px;\n    }\n\n    .editor-container[_ngcontent-%COMP%] {\n      width: 100%;\n      height: 98%;\n    }"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiffEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-monaco-diff-editor',
      template: '<div class="editor-container" #editorContainer></div>',
      styles: [`
    :host {
      display: block;
      height: 200px;
    }

    .editor-container {
      width: 100%;
      height: 98%;
    }
  `]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [NGX_MONACO_EDITOR_CONFIG]
      }]
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['options']
    }],
    originalModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['originalModel']
    }],
    modifiedModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['modifiedModel']
    }]
  });
})();

class MonacoEditorModule {
  static forRoot(config = {}) {
    return {
      ngModule: MonacoEditorModule,
      providers: [{
        provide: NGX_MONACO_EDITOR_CONFIG,
        useValue: config
      }]
    };
  }

}

MonacoEditorModule.ɵfac = function MonacoEditorModule_Factory(t) {
  return new (t || MonacoEditorModule)();
};

MonacoEditorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MonacoEditorModule
});
MonacoEditorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonacoEditorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      declarations: [EditorComponent, DiffEditorComponent],
      exports: [EditorComponent, DiffEditorComponent]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_pages_feat_editor_editor_module_ts.js.map