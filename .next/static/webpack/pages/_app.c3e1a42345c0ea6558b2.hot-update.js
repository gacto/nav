webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/styles/style.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-7-2!./node_modules/resolve-url-loader??ref--5-oneOf-7-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./pages/styles/style.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".whole {\\n  top: -300px; }\\n\\n.title {\\n  padding: 180px;\\n  position: relative;\\n  top: 25px; }\\n\\np {\\n  padding: 135px;\\n  position: absolute;\\n  font-family: Georgia, 'Times New Roman', Times, serif; }\\n\\n.social {\\n  padding: 80px 100px;\\n  position: relative; }\\n\\n/* Demo */\\nbody {\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  -webkit-align-items: center;\\n     -moz-box-align: center;\\n          align-items: center;\\n  -webkit-justify-content: center;\\n     -moz-box-pack: center;\\n          justify-content: center;\\n  min-height: 100vh; }\\n\\n/* Color Variables */\\n/* Social Icon Mixin */\\n/* Social Icons */\\n.social-icons {\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex; }\\n\\n.social-icon {\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  -webkit-align-items: center;\\n     -moz-box-align: center;\\n          align-items: center;\\n  -webkit-justify-content: center;\\n     -moz-box-pack: center;\\n          justify-content: center;\\n  position: relative;\\n  width: 80px;\\n  height: 80px;\\n  margin: 0 0.5rem;\\n  border-radius: 50%;\\n  cursor: pointer;\\n  font-family: \\\"Helvetica Neue\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif;\\n  font-size: 2.5rem;\\n  text-decoration: none;\\n  -moz-transition: all 0.15s ease;\\n  transition: all 0.15s ease; }\\n  .social-icon:hover {\\n    color: #fff; }\\n    .social-icon:hover .tooltip {\\n      visibility: visible;\\n      opacity: 1;\\n      -webkit-transform: translate(-50%, -150%);\\n         -moz-transform: translate(-50%, -150%);\\n              transform: translate(-50%, -150%); }\\n  .social-icon:active {\\n    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5) inset; }\\n  .social-icon--linkedin {\\n    background: #006599;\\n    color: #fff; }\\n    .social-icon--linkedin .tooltip {\\n      background: #006599;\\n      color: currentColor; }\\n      .social-icon--linkedin .tooltip:after {\\n        border-top-color: #006599; }\\n  .social-icon--twitter {\\n    background: #2b97f1;\\n    color: #fff; }\\n    .social-icon--twitter .tooltip {\\n      background: #2b97f1;\\n      color: currentColor; }\\n      .social-icon--twitter .tooltip:after {\\n        border-top-color: #2b97f1; }\\n  .social-icon--codepen {\\n    background: #000;\\n    color: #fff; }\\n    .social-icon--codepen .tooltip {\\n      background: #000;\\n      color: currentColor; }\\n      .social-icon--codepen .tooltip:after {\\n        border-top-color: #000; }\\n  .social-icon--facebook {\\n    background: #3b5a9b;\\n    color: #fff; }\\n    .social-icon--facebook .tooltip {\\n      background: #3b5a9b;\\n      color: currentColor; }\\n      .social-icon--facebook .tooltip:after {\\n        border-top-color: #3b5a9b; }\\n  .social-icon--instagram {\\n    background: #527fa6;\\n    color: #fff; }\\n    .social-icon--instagram .tooltip {\\n      background: #527fa6;\\n      color: currentColor; }\\n      .social-icon--instagram .tooltip:after {\\n        border-top-color: #527fa6; }\\n  .social-icon--dribbble {\\n    background: #ef5a92;\\n    color: #fff; }\\n    .social-icon--dribbble .tooltip {\\n      background: #ef5a92;\\n      color: currentColor; }\\n      .social-icon--dribbble .tooltip:after {\\n        border-top-color: #ef5a92; }\\n  .social-icon--github {\\n    background: #4284c0;\\n    color: #fff; }\\n    .social-icon--github .tooltip {\\n      background: #4284c0;\\n      color: currentColor; }\\n      .social-icon--github .tooltip:after {\\n        border-top-color: #4284c0; }\\n  .social-icon i {\\n    position: relative;\\n    top: 1px; }\\n\\n/* Tooltips */\\n.tooltip {\\n  display: block;\\n  position: absolute;\\n  top: 0;\\n  left: 50%;\\n  padding: 0.8rem 1rem;\\n  border-radius: 40px;\\n  font-size: 0.8rem;\\n  font-weight: bold;\\n  opacity: 0;\\n  pointer-events: none;\\n  text-transform: uppercase;\\n  -webkit-transform: translate(-50%, -100%);\\n     -moz-transform: translate(-50%, -100%);\\n          transform: translate(-50%, -100%);\\n  -moz-transition: all 0.3s ease;\\n  transition: all 0.3s ease;\\n  z-index: 1; }\\n  .tooltip:after {\\n    display: block;\\n    position: absolute;\\n    bottom: 1px;\\n    left: 50%;\\n    width: 0;\\n    height: 0;\\n    content: \\\"\\\";\\n    border: solid;\\n    border-width: 10px 10px 0 10px;\\n    border-color: transparent;\\n    -webkit-transform: translate(-50%, 100%);\\n       -moz-transform: translate(-50%, 100%);\\n            transform: translate(-50%, 100%); }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://style.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,WAAW,EAAA;;AAGf;EACI,cAAc;EACd,kBAAkB;EAClB,SAAS,EAAA;;AAGb;EACI,cAAc;EACd,kBAAkB;EAClB,qDAAqD,EAAA;;AAGzD;EACI,mBAAmB;EACnB,kBAAkB,EAAA;;AAGtB,SAAA;AACA;EACI,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,iBAAiB,EAAA;;AAGnB,oBAAA;AASA,sBAAA;AAeA,iBAAA;AACA;EACE,qBAAa;EAAb,iBAAa;EAAb,aAAa,EAAA;;AAGf;EACE,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,+DAA+D;EAC/D,iBAAiB;EACjB,qBAAqB;EACrB,+BAA0B;EAA1B,0BAA0B,EAAA;EAb5B;IAgBI,WAAW,EAAA;IAhBf;MAmBM,mBAAmB;MACnB,UAAU;MACV,yCAAiC;SAAjC,sCAAiC;cAAjC,iCAAiC,EAAA;EArBvC;IA0BI,gDAAgD,EAAA;EAGlD;IA/CA,mBALsB;IAMtB,WAAW,EAAA;IAEX;MACE,mBAToB;MAUpB,mBAAmB,EAAA;MAEnB;QACE,yBAbkB,EAAA;EAqDtB;IAhDA,mBARqB;IASrB,WAAW,EAAA;IAEX;MACE,mBAZmB;MAanB,mBAAmB,EAAA;MAEnB;QACE,yBAhBiB,EAAA;EAyDrB;IAjDA,gBAVkB;IAWlB,WAAW,EAAA;IAEX;MACE,gBAdgB;MAehB,mBAAmB,EAAA;MAEnB;QACE,sBAlBc,EAAA;EA4DlB;IAlDA,mBAJsB;IAKtB,WAAW,EAAA;IAEX;MACE,mBARoB;MASpB,mBAAmB,EAAA;MAEnB;QACE,yBAZkB,EAAA;EAuDtB;IAnDA,mBANuB;IAOvB,WAAW,EAAA;IAEX;MACE,mBAVqB;MAWrB,mBAAmB,EAAA;MAEnB;QACE,yBAdmB,EAAA;EA0DvB;IApDA,mBAPsB;IAQtB,WAAW,EAAA;IAEX;MACE,mBAXoB;MAYpB,mBAAmB,EAAA;MAEnB;QACE,yBAfkB,EAAA;EA4DtB;IArDA,mBAToB;IAUpB,WAAW,EAAA;IAEX;MACE,mBAbkB;MAclB,mBAAmB,EAAA;MAEnB;QACE,yBAjBgB,EAAA;EA2BtB;IAsCI,kBAAkB;IAClB,QAAQ,EAAA;;AAIZ,aAAA;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,UAAU;EACV,oBAAoB;EACpB,yBAAyB;EACzB,yCAAiC;KAAjC,sCAAiC;UAAjC,iCAAiC;EACjC,8BAAyB;EAAzB,yBAAyB;EACzB,UAAU,EAAA;EAdZ;IAiBI,cAAc;IACd,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,QAAQ;IACR,SAAS;IACT,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,yBAAyB;IACzB,wCAAgC;OAAhC,qCAAgC;YAAhC,gCAAgC,EAAA\",\"sourcesContent\":[\".whole {\\n    top: -300px;\\n}\\n\\n.title {\\n    padding: 180px;\\n    position: relative;\\n    top: 25px;\\n}\\n\\np {\\n    padding: 135px;\\n    position: absolute;\\n    font-family: Georgia, 'Times New Roman', Times, serif;\\n}\\n\\n.social {\\n    padding: 80px 100px;\\n    position: relative;\\n}\\n\\n/* Demo */\\nbody {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    min-height: 100vh;\\n  }\\n  \\n  /* Color Variables */\\n  $color-codepen: #000;\\n  $color-github: #4284c0;\\n  $color-twitter: #2b97f1;\\n  $color-dribbble: #ef5a92;\\n  $color-instagram: #527fa6;\\n  $color-linkedin: #006599;\\n  $color-facebook: #3b5a9b;\\n  \\n  /* Social Icon Mixin */\\n  @mixin social-icon($color) {\\n    background: $color;\\n    color: #fff;\\n  \\n    .tooltip {\\n      background: $color;\\n      color: currentColor;\\n  \\n      &:after {\\n        border-top-color: $color;\\n      }\\n    }\\n  }\\n  \\n  /* Social Icons */\\n  .social-icons {\\n    display: flex;\\n  }\\n  \\n  .social-icon {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    position: relative;\\n    width: 80px;\\n    height: 80px;\\n    margin: 0 0.5rem;\\n    border-radius: 50%;\\n    cursor: pointer;\\n    font-family: \\\"Helvetica Neue\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif;\\n    font-size: 2.5rem;\\n    text-decoration: none;\\n    transition: all 0.15s ease;\\n  \\n    &:hover {\\n      color: #fff;\\n  \\n      .tooltip {\\n        visibility: visible;\\n        opacity: 1;\\n        transform: translate(-50%, -150%);\\n      }\\n    }\\n      \\n    &:active {\\n      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5) inset;\\n    }\\n    \\n    &--linkedin { @include social-icon($color-linkedin); }\\n    &--twitter { @include social-icon($color-twitter); }\\n    &--codepen { @include social-icon($color-codepen); }\\n    &--facebook { @include social-icon($color-facebook); }\\n    &--instagram { @include social-icon($color-instagram); }\\n    &--dribbble { @include social-icon($color-dribbble); }\\n    &--github { @include social-icon($color-github); }\\n    \\n    i {\\n      position: relative;\\n      top: 1px;\\n    }\\n  }\\n  \\n  /* Tooltips */\\n  .tooltip {\\n    display: block;\\n    position: absolute;\\n    top: 0;\\n    left: 50%;\\n    padding: 0.8rem 1rem;\\n    border-radius: 40px;\\n    font-size: 0.8rem;\\n    font-weight: bold;\\n    opacity: 0;\\n    pointer-events: none;\\n    text-transform: uppercase;\\n    transform: translate(-50%, -100%);\\n    transition: all 0.3s ease;\\n    z-index: 1;\\n    \\n    &:after {\\n      display: block;\\n      position: absolute;\\n      bottom: 1px;\\n      left: 50%;\\n      width: 0;\\n      height: 0;\\n      content: \\\"\\\";\\n      border: solid;\\n      border-width: 10px 10px 0 10px;\\n      border-color: transparent;\\n      transform: translate(-50%, 100%);\\n    }\\n  }\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R5bGVzL3N0eWxlLnNjc3M/YTQ3YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM0RjtBQUM1Riw4QkFBOEIsbUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsV0FBVyxnQkFBZ0IsRUFBRSxZQUFZLG1CQUFtQix1QkFBdUIsY0FBYyxFQUFFLE9BQU8sbUJBQW1CLHVCQUF1QiwwREFBMEQsRUFBRSxhQUFhLHdCQUF3Qix1QkFBdUIsRUFBRSxzQkFBc0IsMEJBQTBCLHNCQUFzQixrQkFBa0IsZ0NBQWdDLDhCQUE4QixnQ0FBZ0Msb0NBQW9DLDZCQUE2QixvQ0FBb0Msc0JBQXNCLEVBQUUsdUZBQXVGLDBCQUEwQixzQkFBc0Isa0JBQWtCLEVBQUUsa0JBQWtCLDBCQUEwQixzQkFBc0Isa0JBQWtCLGdDQUFnQyw4QkFBOEIsZ0NBQWdDLG9DQUFvQyw2QkFBNkIsb0NBQW9DLHVCQUF1QixnQkFBZ0IsaUJBQWlCLHFCQUFxQix1QkFBdUIsb0JBQW9CLDBFQUEwRSxzQkFBc0IsMEJBQTBCLG9DQUFvQywrQkFBK0IsRUFBRSx3QkFBd0Isa0JBQWtCLEVBQUUsbUNBQW1DLDRCQUE0QixtQkFBbUIsa0RBQWtELGtEQUFrRCxrREFBa0QsRUFBRSx5QkFBeUIsdURBQXVELEVBQUUsNEJBQTRCLDBCQUEwQixrQkFBa0IsRUFBRSx1Q0FBdUMsNEJBQTRCLDRCQUE0QixFQUFFLCtDQUErQyxvQ0FBb0MsRUFBRSwyQkFBMkIsMEJBQTBCLGtCQUFrQixFQUFFLHNDQUFzQyw0QkFBNEIsNEJBQTRCLEVBQUUsOENBQThDLG9DQUFvQyxFQUFFLDJCQUEyQix1QkFBdUIsa0JBQWtCLEVBQUUsc0NBQXNDLHlCQUF5Qiw0QkFBNEIsRUFBRSw4Q0FBOEMsaUNBQWlDLEVBQUUsNEJBQTRCLDBCQUEwQixrQkFBa0IsRUFBRSx1Q0FBdUMsNEJBQTRCLDRCQUE0QixFQUFFLCtDQUErQyxvQ0FBb0MsRUFB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QWtCLHNDQUFzQyxFQUFFLG1CQUFtQix1Q0FBdUMsRUFBRSxvQkFBb0Isd0NBQXdDLEVBQUUsbUJBQW1CLHVDQUF1QyxFQUFFLGlCQUFpQixxQ0FBcUMsRUFBRSxlQUFlLDJCQUEyQixpQkFBaUIsT0FBTyxLQUFLLG9DQUFvQyxxQkFBcUIseUJBQXlCLGFBQWEsZ0JBQWdCLDJCQUEyQiwwQkFBMEIsd0JBQXdCLHdCQUF3QixpQkFBaUIsMkJBQTJCLGdDQUFnQyx3Q0FBd0MsZ0NBQWdDLGlCQUFpQixxQkFBcUIsdUJBQXVCLDJCQUEyQixvQkFBb0Isa0JBQWtCLGlCQUFpQixrQkFBa0Isc0JBQXNCLHNCQUFzQix1Q0FBdUMsa0NBQWtDLHlDQUF5QyxPQUFPLEtBQUssbUJBQW1CO0FBQzM4UjtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vcGFnZXMvc3R5bGVzL3N0eWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud2hvbGUge1xcbiAgdG9wOiAtMzAwcHg7IH1cXG5cXG4udGl0bGUge1xcbiAgcGFkZGluZzogMTgwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDI1cHg7IH1cXG5cXG5wIHtcXG4gIHBhZGRpbmc6IDEzNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7IH1cXG5cXG4uc29jaWFsIHtcXG4gIHBhZGRpbmc6IDgwcHggMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4vKiBEZW1vICovXFxuYm9keSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDsgfVxcblxcbi8qIENvbG9yIFZhcmlhYmxlcyAqL1xcbi8qIFNvY2lhbCBJY29uIE1peGluICovXFxuLyogU29jaWFsIEljb25zICovXFxuLnNvY2lhbC1pY29ucyB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uc29jaWFsLWljb24ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIFxcXCJIZWx2ZXRpY2FcXFwiLCBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7IH1cXG4gIC5zb2NpYWwtaWNvbjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgIC5zb2NpYWwtaWNvbjpob3ZlciAudG9vbHRpcCB7XFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1MCUpO1xcbiAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1MCUpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1MCUpOyB9XFxuICAuc29jaWFsLWljb246YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpIGluc2V0OyB9XFxuICAuc29jaWFsLWljb24tLWxpbmtlZGluIHtcXG4gICAgYmFja2dyb3VuZDogIzAwNjU5OTtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG4gICAgLnNvY2lhbC1pY29uLS1saW5rZWRpbiAudG9vbHRpcCB7XFxuICAgICAgYmFja2dyb3VuZDogIzAwNjU5OTtcXG4gICAgICBjb2xvcjogY3VycmVudENvbG9yOyB9XFxuICAgICAgLnNvY2lhbC1pY29uLS1saW5rZWRpbiAudG9vbHRpcDphZnRlciB7XFxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjMDA2NTk5OyB9XFxuICAuc29jaWFsLWljb24tLXR3aXR0ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMmI5N2YxO1xcbiAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAuc29jaWFsLWljb24tLXR3aXR0ZXIgLnRvb2x0aXAge1xcbiAgICAgIGJhY2tncm91bmQ6ICMyYjk3ZjE7XFxuICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjsgfVxcbiAgICAgIC5zb2NpYWwtaWNvbi0tdHdpdHRlciAudG9vbHRpcDphZnRlciB7XFxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjMmI5N2YxOyB9XFxuICAuc29jaWFsLWljb24tLWNvZGVwZW4ge1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAuc29jaWFsLWljb24tLWNvZGVwZW4gLnRvb2x0aXAge1xcbiAgICAgIGJhY2tncm91bmQ6ICMwMDA7XFxuICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjsgfVxcbiAgICAgIC5zb2NpYWwtaWNvbi0tY29kZXBlbiAudG9vbHRpcDphZnRlciB7XFxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjMDAwOyB9XFxuICAuc29jaWFsLWljb24tLWZhY2Vib29rIHtcXG4gICAgYmFja2dyb3VuZDogIzNiNWE5YjtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG4gICAgLnNvY2lhbC1pY29uLS1mYWNlYm9vayAudG9vbHRpcCB7XFxuICAgICAgYmFja2dyb3VuZDogIzNiNWE5YjtcXG4gICAgICBjb2xvcjogY3VycmVudENvbG9yOyB9XFxuICAgICAgLnNvY2lhbC1pY29uLS1mYWNlYm9vayAudG9vbHRpcDphZnRlciB7XFxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjM2I1YTliOyB9XFxuICAuc29jaWFsLWljb24tLWluc3RhZ3JhbSB7XFxuICAgIGJhY2tncm91bmQ6ICM1MjdmYTY7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgIC5zb2NpYWwtaWNvbi0taW5zdGFncmFtIC50b29sdGlwIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjNTI3ZmE2O1xcbiAgICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7IH1cXG4gICAgICAuc29jaWFsLWljb24tLWluc3RhZ3JhbSAudG9vbHRpcDphZnRlciB7XFxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjNTI3ZmE2OyB9XFxuICAuc29jaWFsLWljb24tLWRyaWJiYmxlIHtcXG4gICAgYmFja2dyb3VuZDogI2VmNWE5MjtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG4gICAgLnNvY2lhbC1pY29uLS1kcmliYmJsZSAudG9vbHRpcCB7XFxuICAgICAgYmFja2dyb3VuZDogI2VmNWE5MjtcXG4gICAgICBjb2xvcjogY3VycmVudENvbG9yOyB9XFxuICAgICAgLnNvY2lhbC1pY29uLS1kcmliYmJsZSAudG9vbHRpcDphZnRlciB7XFxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjZWY1YTkyOyB9XFxuICAuc29jaWFsLWljb24tLWdpdGh1YiB7XFxuICAgIGJhY2tncm91bmQ6ICM0Mjg0YzA7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgIC5zb2NpYWwtaWNvbi0tZ2l0aHViIC50b29sdGlwIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjNDI4NGMwO1xcbiAgICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7IH1cXG4gICAgICAuc29jaWFsLWljb24tLWdpdGh1YiAudG9vbHRpcDphZnRlciB7XFxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjNDI4NGMwOyB9XFxuICAuc29jaWFsLWljb24gaSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxcHg7IH1cXG5cXG4vKiBUb29sdGlwcyAqL1xcbi50b29sdGlwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgcGFkZGluZzogMC44cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTtcXG4gICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgei1pbmRleDogMTsgfVxcbiAgLnRvb2x0aXA6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDFweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgYm9yZGVyOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMCAxMHB4O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xcbiAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJz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VCxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsd0NBQWdDO09BQWhDLHFDQUFnQztZQUFoQyxnQ0FBZ0MsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2hvbGUge1xcbiAgICB0b3A6IC0zMDBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgcGFkZGluZzogMTgwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyNXB4O1xcbn1cXG5cXG5wIHtcXG4gICAgcGFkZGluZzogMTM1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxufVxcblxcbi5zb2NpYWwge1xcbiAgICBwYWRkaW5nOiA4MHB4IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIERlbW8gKi9cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgfVxcbiAgXFxuICAvKiBDb2xvciBWYXJpYWJsZXMgKi9cXG4gICRjb2xvci1jb2RlcGVuOiAjMDAwO1xcbiAgJGNvbG9yLWdpdGh1YjogIzQyODRjMDtcXG4gICRjb2xvci10d2l0dGVyOiAjMmI5N2YxO1xcbiAgJGNvbG9yLWRyaWJiYmxlOiAjZWY1YTkyO1xcbiAgJGNvbG9yLWluc3RhZ3JhbTogIzUyN2ZhNjtcXG4gICRjb2xvci1saW5rZWRpbjogIzAwNjU5OTtcXG4gICRjb2xvci1mYWNlYm9vazogIzNiNWE5YjtcXG4gIFxcbiAgLyogU29jaWFsIEljb24gTWl4aW4gKi9cXG4gIEBtaXhpbiBzb2NpYWwtaWNvbigkY29sb3IpIHtcXG4gICAgYmFja2dyb3VuZDogJGNvbG9yO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIFxcbiAgICAudG9vbHRpcCB7XFxuICAgICAgYmFja2dyb3VuZDogJGNvbG9yO1xcbiAgICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICBcXG4gICAgICAmOmFmdGVyIHtcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6ICRjb2xvcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgLyogU29jaWFsIEljb25zICovXFxuICAuc29jaWFsLWljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIFxcbiAgLnNvY2lhbC1pY29uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBcXFwiSGVsdmV0aWNhXFxcIiwgXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XFxuICBcXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICBcXG4gICAgICAudG9vbHRpcCB7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xNTAlKTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgICBcXG4gICAgJjphY3RpdmUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KSBpbnNldDtcXG4gICAgfVxcbiAgICBcXG4gICAgJi0tbGlua2VkaW4geyBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItbGlua2VkaW4pOyB9XFxuICAgICYtLXR3aXR0ZXIgeyBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItdHdpdHRlcik7IH1cXG4gICAgJi0tY29kZXBlbiB7IEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci1jb2RlcGVuKTsgfVxcbiAgICAmLS1mYWNlYm9vayB7IEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci1mYWNlYm9vayk7IH1cXG4gICAgJi0taW5zdGFncmFtIHsgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLWluc3RhZ3JhbSk7IH1cXG4gICAgJi0tZHJpYmJibGUgeyBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItZHJpYmJibGUpOyB9XFxuICAgICYtLWdpdGh1YiB7IEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci1naXRodWIpOyB9XFxuICAgIFxcbiAgICBpIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiAxcHg7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgLyogVG9vbHRpcHMgKi9cXG4gIC50b29sdGlwIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIFxcbiAgICAmOmFmdGVyIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAxcHg7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICBib3JkZXI6IHNvbGlkO1xcbiAgICAgIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDAgMTBweDtcXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xcbiAgICB9XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/styles/style.scss\n");

/***/ })

})