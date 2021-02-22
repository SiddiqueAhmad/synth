(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(94)),i={title:"one_of"},c={unversionedId:"content/one-of",id:"content/one-of",isDocsHomePage:!1,title:"one_of",description:"Synth's one_of generator is a compound operator, i.e. a way to compose other generator types together. It lets you",source:"@site/docs/content/one-of.md",slug:"/content/one-of",permalink:"/synth/content/one-of",editUrl:"https://github.com/openquery-io/synth/edit/master/docs/docs/content/one-of.md",version:"current",sidebar:"docsSidebar",previous:{title:"array",permalink:"/synth/content/array"},next:{title:"same_as",permalink:"/synth/content/same-as"}},p=[],s={toc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Synth's ",Object(a.b)("inlineCode",{parentName:"p"},"one_of")," generator is a compound operator, i.e. a way to compose other generator types together. It lets you\ndefine a new generator that samples randomly from a specified list of dependent generators (called ",Object(a.b)("em",{parentName:"p"},"variants"),"). In that\nway, ",Object(a.b)("inlineCode",{parentName:"p"},"one_of")," is similar to ",Object(a.b)("a",{parentName:"p",href:"/synth/content/string#categorical"},"categorical ",Object(a.b)("inlineCode",{parentName:"a"},"string"),"s"),". However, the variants of\na ",Object(a.b)("inlineCode",{parentName:"p"},"one_of")," generator are allowed to be generated from any other Synth generator."),Object(a.b)("p",null,"Variants of a ",Object(a.b)("inlineCode",{parentName:"p"},"one_of")," generator are specified with the ",Object(a.b)("inlineCode",{parentName:"p"},'"variants"')," field. Allowed value is an array of Synth\ngenerators."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n  "type": "one_of",\n  "variants": [ {\n    "weight": 0.5,\n    "type": "string",\n    "pattern": "M|F"\n  }, {\n    "weight": 0.5,\n    "type": "null"\n  } ]\n}\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"one_of")," has a concept of a weight for each variant - where weight represents the individual entry's contribution to the\nprobability distribution. The weight can be specified by adding the ",Object(a.b)("inlineCode",{parentName:"p"},'"weight"')," field to the corresponding variant's\ndefinition."),Object(a.b)("h4",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n  "type": "one_of",\n  "variants": [ {\n    "weight": 9.5,\n    "type": "string",\n    "faker": {\n      "generator": "address"\n    }\n  }, {\n    "weight" : 0.5,\n    "type": "object",\n      "postcode": {\n        "type": "string",\n        "faker": {\n          "generator": "postcode"\n        }\n      },\n      "number": {\n        "type": "number",\n        "subtype": "u64",\n        "range": {\n          "low": 1,\n          "high": 200,\n          "step": 2\n        }\n      }\n  } ]\n}\n')))}l.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,d=u["".concat(i,".").concat(b)]||u[b]||f[b]||a;return t?o.a.createElement(d,c(c({ref:n},s),{},{components:t})):o.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);