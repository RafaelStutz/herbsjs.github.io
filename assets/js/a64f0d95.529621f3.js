(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[616],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},s=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),d=l(r),f=i,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(y,u(u({ref:e},s),{},{components:r})):n.createElement(y,u({ref:e},s))}));function f(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,u=new Array(o);u[0]=d;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:i,u[1]=a;for(var l=2;l<o;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14111:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(22122),i=r(19756),o=(r(67294),r(3905)),u={id:"security",title:"8. Security and Auditing",sidebar_label:"8. Security and Auditing",slug:"/tutotial/security"},a=void 0,c={unversionedId:"tutorial/security",id:"tutorial/security",isDocsHomePage:!1,title:"8. Security and Auditing",description:"Authorizing",source:"@site/docs/tutorial/security.md",sourceDirName:"tutorial",slug:"/tutotial/security",permalink:"/docs/tutotial/security",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/tutorial/security.md",version:"current",frontMatter:{id:"security",title:"8. Security and Auditing",sidebar_label:"8. Security and Auditing",slug:"/tutotial/security"},sidebar:"sidebar",previous:{title:"7. Refactoring",permalink:"/docs/tutotial/refactoring"},next:{title:"Getting Started",permalink:"/docs/usecase/getting-started"}},l=[{value:"Authorizing",id:"authorizing",children:[]},{value:"Auditing",id:"auditing",children:[]}],s={toc:l};function p(t){var e=t.components,r=(0,i.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"authorizing"},"Authorizing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How to setup auth")),(0,o.kt)("h2",{id:"auditing"},"Auditing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How to use Audit")))}p.isMDXComponent=!0}}]);