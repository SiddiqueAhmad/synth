(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),r=n(7),a=(n(0),n(94)),o={id:"command-line",title:"Synth CLI"},c={unversionedId:"getting_started/command-line",id:"getting_started/command-line",isDocsHomePage:!1,title:"Synth CLI",description:"The Synth CLI (synth) is a Unix-y command line tool wrapped around the core synthetic data engine.",source:"@site/docs/getting_started/cli.md",slug:"/getting_started/command-line",permalink:"/synth/getting_started/command-line",editUrl:"https://github.com/openquery-io/synth/edit/master/docs/docs/getting_started/cli.md",version:"current",sidebar:"docsSidebar",previous:{title:"Schema",permalink:"/synth/getting_started/schema"},next:{title:"How it works",permalink:"/synth/getting_started/how-it-works"}},l=[{value:"Usage",id:"usage",children:[{value:"Command: init",id:"command-init",children:[]},{value:"Command: import",id:"command-import",children:[]},{value:"Command: generate",id:"command-generate",children:[]},{value:"Command: serve",id:"command-serve",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Synth CLI (",Object(a.b)("inlineCode",{parentName:"p"},"synth"),") is a Unix-y command line tool wrapped around the core synthetic data engine. "),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"command-init"},"Command: init"),Object(a.b)("p",null,"Usage: ",Object(a.b)("inlineCode",{parentName:"p"},"synth init")),Object(a.b)("p",null,"This is the first command that should be run for any new or existing when starting out with Synth.\nThis initialises the workspace and  sets up all the local data necessary to run Synth.\nA ",Object(a.b)("inlineCode",{parentName:"p"},".synth/")," subdirectory is created that is typically not committed to version control."),Object(a.b)("p",null,"This command is always safe to run multiple times though subsequent runs\nmay give errors. This command will never erase your workspace."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"command-import"},"Command: import"),Object(a.b)("p",null,"Usage: ",Object(a.b)("inlineCode",{parentName:"p"},"synth import [OPTIONS] <namespace>")),Object(a.b)("p",null,"Synth can create namespaces from different data sources using the ",Object(a.b)("inlineCode",{parentName:"p"},"synth import")," command.\nAccidentally running ",Object(a.b)("inlineCode",{parentName:"p"},"synth import")," on an existing namespace is safe - the operation will fail."),Object(a.b)("p",null,"If a subdirectory for a given namespace does not exist in your workspace, Synth will create it."),Object(a.b)("h4",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"--from <from>")," - The location from which to import. Synth supports multiple import strategies.\nImporting directly from a database will be supported in future versions."),Object(a.b)("p",{parentName:"li"},"Importing from a file: Currently we support importing from JSON files by specifying the path to\nthe file: ",Object(a.b)("inlineCode",{parentName:"p"},"/some/path/to/file.json"),"."),Object(a.b)("p",{parentName:"li"},"Importing from standard input: Not specifying ",Object(a.b)("inlineCode",{parentName:"p"},"from")," will accept JSON files from stdin."))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"command-generate"},"Command: generate"),Object(a.b)("p",null,"Usage: ",Object(a.b)("inlineCode",{parentName:"p"},"synth generate [OPTIONS] <namespace>")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"synth generate")," command will generate data for a given namespace. This will not mutate anything in the underlying configuration."),Object(a.b)("p",null,"If there is a misconfiguration in your schema (for example referring to a field that does not exist), ",Object(a.b)("inlineCode",{parentName:"p"},"synth generate")," will exit with a non-zero exit code and hopefully some error message helping you understand which part of the schema is misconfigured."),Object(a.b)("h4",{id:"options-1"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--collection <collection>")," - Specify a specific collection in a namespace if you don't want to generate data from all collections.  "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--size <size>")," - The number of elements which should be generated per collection. This number is not guaranteed, it serves as a lower bound.")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"command-serve"},"Command: serve"),Object(a.b)("p",null,"Usage: ",Object(a.b)("inlineCode",{parentName:"p"},"synth serve [OPTIONS]")),Object(a.b)("p",null,"Run Synth in Daemon mode. The Daemon exposes an HTTP RESTful API on port ",Object(a.b)("inlineCode",{parentName:"p"},"8182")," and creates an internal state which is managed by a version controlled index."),Object(a.b)("p",null,"Daemon mode is used when ",Object(a.b)("inlineCode",{parentName:"p"},"synth")," is used in the context of a collaborating team and comes with a very handy ",Object(a.b)("a",{parentName:"p",href:"https://openquery-io.github.io/synthpy/"},"Python client")),Object(a.b)("h4",{id:"options-2"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-b, --bind <bind> [default: 0.0.0.0:8182]")," - The endpoint on which the HTTP server should be exposed.  "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-d, --data-directory <data-directory> [default: <workspace>/.synth/]")," - The directory which should host the index. (Default is fine in the context of a workspace)")))}p.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),b=i,u=m["".concat(o,".").concat(b)]||m[b]||d[b]||a;return n?r.a.createElement(u,c(c({ref:t},s),{},{components:n})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);