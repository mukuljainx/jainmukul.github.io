define(["exports","../index.js"],function(_exports,_index){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.Work=_exports.$workDefault=_exports.$work$1=_exports.$work=void 0;function _templateObject8_013ee1704ba411ebb0daab35d7f67c81(){var data=babelHelpers.taggedTemplateLiteral(["\n        :host {\n          height: 100%;\n          width: 100%;\n        }\n\n        .container {\n          height: 100%;\n          width: 100%;\n        }\n\n        .flex-column {\n          flex-direction: column;\n        }\n\n        .showcase {\n          width: 60%;\n          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);\n          background: #fff;\n          border-radius: 4px;\n        }\n\n        .showcase-image {\n          position: relative;\n          width: 100%;\n        }\n\n        .showcase-image img {\n          width: 100%;\n        }\n\n        .showcase-image:hover .showcase-image-hover {\n          display: flex;\n        }\n\n        .showcase-image:hover img {\n          filter: blur(3px) grayscale(75%);\n        }\n\n        .showcase-image-hover {\n          flex-direction: column;\n          display: none;\n          position: absolute;\n          top: 0;\n          left: 0;\n          bottom: 0;\n          right: 0;\n        }\n\n        .showcase-image-hover-a {\n          border: 1px solid;\n          padding: 10px 16px;\n          color: white;\n        }\n\n        .showcase-image-hover-h4 {\n          margin: 12px 0 0;\n          color: white;\n        }\n\n        .dark .showcase-image-hover-a,\n        .dark .showcase-image-hover-h4 {\n          color: black;\n        }\n\n        .detail {\n          padding: 12px 16px;\n        }\n\n        h3 {\n          margin: 0;\n          line-height: 1;\n          font-weight: 400;\n          margin-bottom: 2px;\n        }\n\n        p {\n          margin: 0;\n          font-weight: 300;\n          display: flex;\n          justify-content: space-between;\n        }\n\n        button {\n          font-size: 60px;\n          font-weight: 300;\n          background: none;\n          border: none;\n          cursor: pointer;\n        }\n\n        a {\n          text-decoration: none;\n          color: #000;\n        }\n\n        a:hover {\n          border-bottom: 1px solid;\n        }\n\n        .rotate-180 {\n          transform: rotate(180deg);\n          margin-left: 32px;\n        }\n\n        h2 {\n          display: none;\n        }\n\n        @media (max-width: 640px) {\n          h2 {\n            display: block;\n          }\n\n          button,\n          .not-mobile {\n            display: none;\n          }\n\n          .container {\n            display: flex;\n            flex-direction: column;\n          }\n\n          .showcase {\n            width: calc(100% - 32px);\n            margin-bottom: 32px;\n          }\n\n          .flex-column {\n            padding-top: 48px;\n          }\n\n          h2 {\n            margin: 0;\n          }\n        }\n      "]);_templateObject8_013ee1704ba411ebb0daab35d7f67c81=function _templateObject8_013ee1704ba411ebb0daab35d7f67c81(){return data};return data}function _templateObject7_013ee1704ba411ebb0daab35d7f67c81(){var data=babelHelpers.taggedTemplateLiteral(["\n                                <a target=\"_blank\" href=","\n                                  >Github</a\n                                >\n                                |\n                              "]);_templateObject7_013ee1704ba411ebb0daab35d7f67c81=function _templateObject7_013ee1704ba411ebb0daab35d7f67c81(){return data};return data}function _templateObject6_013ee1704ba411ebb0daab35d7f67c81(){var data=babelHelpers.taggedTemplateLiteral(["\n                                <a target=\"_blank\" href=","\n                                  >Live Demo</a\n                                >\n                                |\n                              "]);_templateObject6_013ee1704ba411ebb0daab35d7f67c81=function _templateObject6_013ee1704ba411ebb0daab35d7f67c81(){return data};return data}function _templateObject5_013ee1704ba411ebb0daab35d7f67c81(){var data=babelHelpers.taggedTemplateLiteral(["\n                    <div class=\"showcase\">\n                      <div class=\"showcase-image\">\n                        <img src=\"images/work/","\" alt="," />\n                        <div\n                          class=\"showcase-image-hover flex v-center h-center ","\"\n                        >\n                          <a\n                            class=\"showcase-image-hover-a\"\n                            href=\"/work/","\"\n                          >\n                            View Project\n                          </a>\n                          <h4 class=\"showcase-image-hover-h4\">","</h4>\n                        </div>\n                      </div>\n                      <div class=\"detail\">\n                        <h3>","</h3>\n                        <p>\n                          <span>","</span>\n                          <span>\n                            ","\n                            ","\n                            <a href=\"/work/","\">Details</a>\n                          </span>\n                        </p>\n                      </div>\n                    </div>\n                  "]);_templateObject5_013ee1704ba411ebb0daab35d7f67c81=function _templateObject5_013ee1704ba411ebb0daab35d7f67c81(){return data};return data}function _templateObject4_013ee1704ba411ebb0daab35d7f67c81(){var data=babelHelpers.taggedTemplateLiteral(["\n                      <a target=\"_blank\" href=",">Github</a> |\n                    "]);_templateObject4_013ee1704ba411ebb0daab35d7f67c81=function _templateObject4_013ee1704ba411ebb0daab35d7f67c81(){return data};return data}function _templateObject3_013ee1704ba411ebb0daab35d7f67c81(){var data=babelHelpers.taggedTemplateLiteral(["\n                      <a target=\"_blank\" href=",">Live Demo</a>\n                      |\n                    "]);_templateObject3_013ee1704ba411ebb0daab35d7f67c81=function _templateObject3_013ee1704ba411ebb0daab35d7f67c81(){return data};return data}function _templateObject2_013ee1704ba411ebb0daab35d7f67c81(){var data=babelHelpers.taggedTemplateLiteral(["\n                  <img\n                    style=\"display: none\"\n                    src=\"images/work/","\"\n                    alt=","\n                  />\n                "]);_templateObject2_013ee1704ba411ebb0daab35d7f67c81=function _templateObject2_013ee1704ba411ebb0daab35d7f67c81(){return data};return data}function _templateObject_013ee1704ba411ebb0daab35d7f67c81(){var data=babelHelpers.taggedTemplateLiteral(["\n      <div class=\"container flex v-center h-center flex-column\">\n        <h2>Work</h2>\n        <!-- for preloading of images -->\n        ","\n        <div class=\"container flex v-center h-center\">\n          <button style=\"margin-right: 32px\" @click=\"","\">\n            <img src=\"images/left.svg\" />\n          </button>\n          <div class=\"showcase not-mobile\">\n            <div class=\"showcase-image\">\n              <img src=\"images/work/","\" alt="," />\n              <div\n                class=\"showcase-image-hover flex v-center h-center ","\"\n              >\n                <a\n                  class=\"showcase-image-hover-a\"\n                  href=\"/work/","\"\n                >\n                  View Project\n                </a>\n                <h4 class=\"showcase-image-hover-h4\">","</h4>\n              </div>\n            </div>\n            <div class=\"detail\">\n              <h3>","</h3>\n              <p>\n                <span>","</span>\n                <span>\n                  ","\n                  ","\n                  <a href=\"/work/","\">Details</a>\n                </span>\n              </p>\n            </div>\n          </div>\n\n          <!-- for mobile -->\n          ","\n\n          <button class=\"rotate-180\" @click=\"","\">\n            <img src=\"images/left.svg\" />\n          </button>\n        </div>\n      </div>\n    "]);_templateObject_013ee1704ba411ebb0daab35d7f67c81=function _templateObject_013ee1704ba411ebb0daab35d7f67c81(){return data};return data}var work=[{img:"mokku.png",altImg:"Mokku",name:"Mokku",stack:"Chrome Extension \u2022 ReactJS \u2022 TypeScript",what:"Developed",websiteLink:"https://mukuljainx.github.io/Mokku/#/",githubLink:"https://github.com/mukuljainx/mokku",detailLink:"mokku",detailTextColor:"dark",id:"mokku"},{img:"budget-book.png",altImg:"Budget Book | Home Page",name:"Budget Book",stack:"ReactJS \u2022 TypeScript \u2022 Redux \u2022 NodeJS \u2022 PostgreSQL",what:"Designed and Developed",websiteLink:"http://beta.budgetbook.io/",detailLink:"budget-book",detailTextColor:"dark",id:"budget-book"},{img:"smart-grid.png",altImg:"Smart Grid",name:"Smart Grid",stack:"ReactJS \u2022 TypeScript",what:"Developed",websiteLink:"https://mukuljainx.github.io/smart-grid/",githubLink:"https://github.com/mukuljainx/smart-grid",detailLink:"smart-grid",detailTextColor:"dark",id:"smart-grid"},{img:"plinth2017.jpg",altImg:"Plinth 2017 | Home Page",name:"Plinth, The LNMIIT 2017",stack:"jQuery \u2022 Foundation \u2022\xA0Nodejs \u2022 Expressjs \u2022 MongoDB \u2022 Sketch",what:"Designed and Developed",githubLink:"https://github.com/mukuljainx/plinth_2k17",websiteLink:"",detailLink:"plinth-2017",detailTextColor:"",id:"plinth2017"},{img:"mun2017.jpg",altImg:"MUN 2017",name:"MUN, The LNMIIT 2017",stack:"jQuery \u2022 Foundation \u2022\xA0Nodejs \u2022 Expressjs \u2022 Sketch",what:"Designed and Developed",githubLink:"https://github.com/mukuljainx/plinth_2k17/blob/master/public/mun2017.ejs",websiteLink:"",detailLink:"mun-2017",detailTextColor:"",id:"mun2017"},{img:"timespread.jpg",altImg:"Time Spread Android app Image",name:"Time Spread",stack:"Nodejs \u2022 Expressjs \u2022 MongoDB \u2022 Sketch",what:"Designed and Developed Backend",githubLink:"https://github.com/mukuljainx/timespread",websiteLink:"",detailLink:"timespread",detailTextColor:"dark",id:"timeSpread"},{img:"zento.jpg",altImg:"Zento Gallery",name:"Zento, Pure JS Gallery",stack:"Vanilla JavaScript",what:"Developed",githubLink:"https://github.com/mukuljainx/zento",websiteLink:"",detailLink:"zento",detailTextColor:"dark",id:"zento"},{img:"flash.jpg",altImg:"Chatbot Flash",name:"Flash - Chatbot",stack:"Python \u2022 AIML \u2022 PyAMIL \u2022 Bash",what:"Developed",githubLink:"https://github.com/mukuljainx/flash_an_interactive_chatbot",websiteLink:"",detailLink:"flash",detailTextColor:"",id:"flashChat"},{img:"plinth2016.jpg",altImg:"Plinth 2017 | Home Page",name:"Plinth, The LNMIIT 2016",stack:"jQuery \u2022 Materializecss \u2022 AngularJS",what:"Developed",githubLink:"https://github.com/mukuljainx/plinth2016",websiteLink:"",detailLink:"plinth-2016",detailTextColor:"dark",id:"plinth2016"},{img:"event-graphia.jpg",altImg:"Event Graphia",name:"Event Graphia",stack:"BootStrap \u2022 JS \u2022 jQuery",what:"Designed and Developed",githubLink:"",websiteLink:"",detailLink:"event-graphia",detailTextColor:"",id:"egOld"},{img:"event-graphia-dropped.jpg",altImg:"Event Graphia(Uncomplete) Image",name:"Event Graphia(Uncomplete)",stack:"AngularJS \u2022 jQuery \u2022 Materializecss",what:"Designed and Developed",githubLink:"https://github.com/mukuljainx/EventGraphia_Dropped",websiteLink:"",detailLink:"event-graphia-angular",detailTextColor:"",id:"egNew"}];_exports.$workDefault=work;var work$1={__proto__:null,default:work};_exports.$work=work$1;var __decorate=void 0||function(decorators,target,key,desc){var c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if("object"===("undefined"===typeof Reflect?"undefined":babelHelpers.typeof(Reflect))&&"function"===typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;0<=i;i--){if(d=decorators[i])r=(3>c?d(r):3<c?d(target,key,r):d(target,key))||r}return 3<c&&r&&Object.defineProperty(target,key,r),r},Work=/*#__PURE__*/function(_PageViewElement){babelHelpers.inherits(Work,_PageViewElement);function Work(){var _this;babelHelpers.classCallCheck(this,Work);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Work).apply(this,arguments));_this._workIndex=0;_this.show=function(next){var n=work.length;_this._workIndex=((_this._workIndex+next)%n+n)%n};return _this}babelHelpers.createClass(Work,[{key:"render",value:function render(){var _this2=this,work$1=work[this._workIndex],isMobile=640>=window.innerWidth;return(0,_index.html)(_templateObject_013ee1704ba411ebb0daab35d7f67c81(),!isMobile?work.map(function(workImg){return(0,_index.html)(_templateObject2_013ee1704ba411ebb0daab35d7f67c81(),workImg.img,workImg.altImg)}):null,function(){return _this2.show(-1)},work$1.img,work$1.altImg,work$1.detailTextColor,work$1.detailLink,work$1.what,work$1.name,work$1.stack,work$1.websiteLink&&(0,_index.html)(_templateObject3_013ee1704ba411ebb0daab35d7f67c81(),work$1.websiteLink),work$1.githubLink&&(0,_index.html)(_templateObject4_013ee1704ba411ebb0daab35d7f67c81(),work$1.githubLink),work$1.detailLink,isMobile?work.map(function(work){return(0,_index.html)(_templateObject5_013ee1704ba411ebb0daab35d7f67c81(),work.img,work.altImg,work.detailTextColor,work.detailLink,work.what,work.name,work.stack,work.websiteLink&&(0,_index.html)(_templateObject6_013ee1704ba411ebb0daab35d7f67c81(),work.websiteLink),work.githubLink&&(0,_index.html)(_templateObject7_013ee1704ba411ebb0daab35d7f67c81(),work.githubLink),work.detailLink)}):null,function(){return _this2.show(1)})}}],[{key:"styles",get:function get(){return[_index.$sharedStylesDefault,(0,_index.css)(_templateObject8_013ee1704ba411ebb0daab35d7f67c81())]}}]);return Work}(_index.PageViewElement);_exports.Work=Work;__decorate([(0,_index.property)({type:Number})],Work.prototype,"_workIndex",void 0);_exports.Work=Work=__decorate([(0,_index.customElement)("mx-work")],Work);var work$2={__proto__:null,get Work(){return Work}};_exports.$work$1=work$2});