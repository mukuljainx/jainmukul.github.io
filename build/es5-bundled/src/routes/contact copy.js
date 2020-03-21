define(["exports","../../node_modules/lit-element/lit-element.js","../components/page-view-element.js","../components/social-links.js","../css/shared-styles.js"],function(_exports,_litElement,_pageViewElement,_socialLinks,_sharedStyles){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.Contact=void 0;_sharedStyles=babelHelpers.interopRequireDefault(_sharedStyles);function _templateObject2_f19756106bae11ea864501c92be9aec4(){var data=babelHelpers.taggedTemplateLiteral(["\n        :host {\n          height: 100%;\n          width: 100%;\n        }\n\n        .container {\n          height: 100%;\n          flex-direction: column;\n        }\n\n        a {\n          display: flex;\n          align-items: center;\n          color: black;\n          text-decoration: none;\n          justify-content: center;\n        }\n\n        a img {\n          margin-right: 4px;\n        }\n\n        .separator {\n          width: 200px;\n          margin-top: 20px;\n          margin-bottom: 80px;\n        }\n\n        .separator div {\n          height: 1px;\n          background: #979797;\n        }\n\n        .separator-top {\n          width: 100%;\n        }\n\n        .separator-bottom {\n          width: 50%;\n          margin: 8px 25%;\n        }\n\n        .contact-info {\n          flex-direction: column;\n        }\n\n        h1 {\n          margin-bottom: 80px;\n        }\n      "]);_templateObject2_f19756106bae11ea864501c92be9aec4=function _templateObject2_f19756106bae11ea864501c92be9aec4(){return data};return data}function _templateObject_f19756106bae11ea864501c92be9aec4(){var data=babelHelpers.taggedTemplateLiteral(["\n      <div class=\"container flex v-center h-center\">\n        <div>\n          <h1>Get in Touch</h1>\n        </div>\n        <div class=\"flex v-align contact-info\">\n          <a href=\"mailto:jainmukul1996@gmail.com\">\n            <img src=\"images/contact/email.svg\" />\n            jainmukul1996@gmail.com\n          </a>\n          <a href=\"tel:+918114483580\">\n            <img src=\"images/contact/mobile.svg\" />\n            +91-8114-483-580\n          </a>\n        </div>\n\n        <div class=\"separator\">\n          <div class=\"separator-top\"></div>\n          <div class=\"separator-bottom\"></div>\n        </div>\n\n        <mx-social-links></mx-social-links>\n      </div>\n    "]);_templateObject_f19756106bae11ea864501c92be9aec4=function _templateObject_f19756106bae11ea864501c92be9aec4(){return data};return data}var __decorate=void 0||function(decorators,target,key,desc){var c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if("object"===("undefined"===typeof Reflect?"undefined":babelHelpers.typeof(Reflect))&&"function"===typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;0<=i;i--){if(d=decorators[i])r=(3>c?d(r):3<c?d(target,key,r):d(target,key))||r}return 3<c&&r&&Object.defineProperty(target,key,r),r},Contact=/*#__PURE__*/function(_PageViewElement){babelHelpers.inherits(Contact,_PageViewElement);function Contact(){babelHelpers.classCallCheck(this,Contact);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Contact).apply(this,arguments))}babelHelpers.createClass(Contact,[{key:"render",value:function render(){return(0,_litElement.html)(_templateObject_f19756106bae11ea864501c92be9aec4())}}],[{key:"styles",get:function get(){return[_sharedStyles.default,(0,_litElement.css)(_templateObject2_f19756106bae11ea864501c92be9aec4())]}}]);return Contact}(_pageViewElement.PageViewElement);_exports.Contact=Contact;_exports.Contact=Contact=__decorate([(0,_litElement.customElement)("mx-contact")],Contact)});