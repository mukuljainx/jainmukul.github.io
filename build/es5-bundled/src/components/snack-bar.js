define(["exports","../../node_modules/lit-element/lit-element.js"],function(_exports,_litElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SnackBar=void 0;function _templateObject2_efd83c102fc511ea9193e536d8f8396d(){var data=babelHelpers.taggedTemplateLiteral(["\n      :host {\n        display: block;\n        position: fixed;\n        top: 100%;\n        left: 0;\n        right: 0;\n        padding: 12px;\n        background-color: var(--app-secondary-color);\n        color: white;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n        text-align: center;\n        will-change: transform;\n        transform: translate3d(0, 0, 0);\n        transition-property: visibility, transform;\n        transition-duration: 0.2s;\n        visibility: hidden;\n      }\n\n      :host([active]) {\n        visibility: visible;\n        transform: translate3d(0, -100%, 0);\n      }\n\n      @media (min-width: 460px) {\n        :host {\n          width: 320px;\n          margin: auto;\n        }\n      }\n    "]);_templateObject2_efd83c102fc511ea9193e536d8f8396d=function _templateObject2_efd83c102fc511ea9193e536d8f8396d(){return data};return data}function _templateObject_efd83c102fc511ea9193e536d8f8396d(){var data=babelHelpers.taggedTemplateLiteral(["\n      <slot></slot>\n    "]);_templateObject_efd83c102fc511ea9193e536d8f8396d=function _templateObject_efd83c102fc511ea9193e536d8f8396d(){return data};return data}/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var __decorate=void 0||function(decorators,target,key,desc){var c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if("object"===("undefined"===typeof Reflect?"undefined":babelHelpers.typeof(Reflect))&&"function"===typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;0<=i;i--){if(d=decorators[i])r=(3>c?d(r):3<c?d(target,key,r):d(target,key))||r}return 3<c&&r&&Object.defineProperty(target,key,r),r},SnackBar=/*#__PURE__*/function(_LitElement){babelHelpers.inherits(SnackBar,_LitElement);function SnackBar(){var _this;babelHelpers.classCallCheck(this,SnackBar);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SnackBar).apply(this,arguments));_this.active=!1;return _this}babelHelpers.createClass(SnackBar,[{key:"render",value:function render(){return(0,_litElement.html)(_templateObject_efd83c102fc511ea9193e536d8f8396d())}}],[{key:"styles",get:function get(){return(0,_litElement.css)(_templateObject2_efd83c102fc511ea9193e536d8f8396d())}}]);return SnackBar}(_litElement.LitElement);_exports.SnackBar=SnackBar;__decorate([(0,_litElement.property)({type:Boolean})],SnackBar.prototype,"active",void 0);_exports.SnackBar=SnackBar=__decorate([(0,_litElement.customElement)("snack-bar")],SnackBar)});