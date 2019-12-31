(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{140:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(1),r=t(9),i=(t(0),t(150)),o=t(151),s={id:"utilities",title:"Helpers",sidebar_label:"Helpers"},l={id:"api/utilities",title:"Helpers",description:'import {API, Badge} from "./API";',source:"@site/docs/api/Utilities.md",permalink:"/craft.js/r/docs/api/utilities",sidebar_label:"Helpers",sidebar:"docs",previous:{title:"useNode()",permalink:"/craft.js/r/docs/api/useNode"},next:{title:"Layers",permalink:"/craft.js/r/docs/additional/layers"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Methods",id:"methods",children:[{value:"Root",id:"root",children:[]},{value:"Canvas",id:"canvas",children:[]},{value:"Deletable",id:"deletable",children:[]},{value:"TopLevelCanvas",id:"toplevelcanvas",children:[]},{value:"ParentOfTopLevelCanvas",id:"parentoftoplevelcanvas",children:[]},{value:"Draggable",id:"draggable",children:[]},{value:"Droppable",id:"droppable",children:[]}]}],d={rightToc:c},b="wrapper";function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(b,Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Methods that helps describe a ",Object(i.b)("inlineCode",{parentName:"p"},"Node"),". "),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"These methods are accessible via the ",Object(i.b)("inlineCode",{parentName:"p"},"is")," query in the ",Object(i.b)("inlineCode",{parentName:"p"},"useEditor")," hook:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import {useEditor} from "@craftjs/core";\n\nconst TextComponent = () => {\n  const { id } = useNode();\n  const { query: {is} } = useEditor();\n  const isRoot = is(id).Root(),\n        isDraggable = is(id).Draggable();\n  ...\n}\n')),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"root"},"Root"),Object(i.b)(o.b,{type:"function",mdxType:"Badge"}),Object(i.b)("p",null,"Returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if a given Node is the Root Node"),Object(i.b)("h4",{id:"returns"},"Returns"),Object(i.b)(o.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5}","{5}":!0}),"const App  = () => {\n  return (\n    <Editor>\n      <Frame>\n        <Canvas> // true\n          <div>Yo</div> // false\n          <h2>It's me</h2> // false\n          <Canvas> // false \n            <h3>Child</h3> // false\n          </Canvas>\n        </Canvas>\n      </Frame>\n    </Editor>\n  )\n}\n")),Object(i.b)("h3",{id:"canvas"},"Canvas"),Object(i.b)(o.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"Check if a given Node is a Canvas"),Object(i.b)("h4",{id:"returns-1"},"Returns"),Object(i.b)(o.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5,8}","{5,8}":!0}),"const App  = () => {\n  return (\n    <Editor>\n      <Frame>\n        <Canvas> // true\n          <div>Yo</div> // false\n          <h2>It's me</h2> // false\n          <Canvas> // true \n            <h3>Child</h3> // false\n          </Canvas>\n        </Canvas>\n      </Frame>\n    </Editor>\n  )\n}\n")),Object(i.b)("h3",{id:"deletable"},"Deletable"),Object(i.b)(o.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"A Node may be deleted as long as it is ",Object(i.b)("strong",{parentName:"p"},"not")," one of the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Root Node"),Object(i.b)("li",{parentName:"ul"},"Top-level Canvas Nodes")),Object(i.b)("h4",{id:"parameters"},"Parameters"),Object(i.b)(o.a,{items:[["node","Node","The Node object to check"]],mdxType:"API"}),Object(i.b)("h4",{id:"returns-2"},"Returns"),Object(i.b)(o.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5,21}","{5,21}":!0}),'const App  = () => {\n  return (\n    <Editor resolves={{Container}}>\n      <Frame>\n        <Canvas> // false\n          <div>Yo</div> // true\n          <h2>It\'s me</h2> // true\n          <Canvas> // true \n            <h3>Child</h3> // true\n            <Container /> // true\n          </Canvas>\n        </Canvas>\n      </Frame>\n    </Editor>\n  )\n}\n\nconst Container = () => {\n  return (\n    <div>\n      <Canvas id="main"> // false\n        <h2>Hi</h2> // true\n      </Canvas>\n    </div>\n  )\n}\n')),Object(i.b)("h3",{id:"toplevelcanvas"},"TopLevelCanvas"),Object(i.b)(o.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"A Canvas Node is considered top-level if it is defined inside a User Component and it is not rendered as an immediate child of another Node."),Object(i.b)("h4",{id:"parameters-1"},"Parameters"),Object(i.b)(o.a,{items:[["node","Node","The Node object to check"]],mdxType:"API"}),Object(i.b)("h4",{id:"returns-3"},"Returns"),Object(i.b)(o.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{21,27}","{21,27}":!0}),'const App  = () => {\n  return (\n    <Editor resolves={{Container}}>\n      <Frame>\n        <Canvas> // false\n          <div>Yo</div> // false\n          <h2>It\'s me</h2> // false\n          <Canvas> // false \n            <h3>Child</h3> // false\n            <Container /> // false\n          </Canvas>\n        </Canvas>\n      </Frame>\n    </Editor>\n  )\n}\n\nconst Container = () => {\n  return (\n    <div>\n      <Canvas id="main"> // true\n        <h2>Hi</h2> // false\n        <Canvas> // false\n          <h2>Hi</h2> // false\n        </Canvas>\n      </Canvas>\n      <Canvas id="secondary"> // true\n        <h2>Hi</h2> // false\n        <Canvas> // false\n          <h2>Hi</h2> // false\n        </Canvas>\n      </Canvas>\n    </div>\n  )\n}\n')),Object(i.b)("h3",{id:"parentoftoplevelcanvas"},"ParentOfTopLevelCanvas"),Object(i.b)(o.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"This returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if a Node's User Component defines a ",Object(i.b)("inlineCode",{parentName:"p"},"<Canvas />")," in its render method."),Object(i.b)("h4",{id:"returns-4"},"Returns"),Object(i.b)(o.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{10}","{10}":!0}),'const App  = () => {\n  return (\n    <Editor resolves={{Container}}>\n      <Frame>\n        <Canvas> // false\n          <div>Yo</div> // false\n          <h2>It\'s me</h2> // false\n          <Canvas> // false \n            <h3>Child</h3> // false\n            <Container /> // true\n          </Canvas>\n        </Canvas>\n      </Frame>\n    </Editor>\n  )\n}\n\nconst Container = () => {\n  return (\n    <div>\n      <Canvas id="main"> // false\n        <h2>Hi</h2> // false\n        <Canvas> // false\n          <h2>Hi</h2> // false\n        </Canvas>\n      </Canvas>\n      <Canvas id="seconday"> // false\n        <h2>Hi</h2> // false\n        <Canvas> // false\n          <h2>Hi</h2> // false\n        </Canvas>\n      </Canvas>\n    </div>\n  )\n}\n')),Object(i.b)("h3",{id:"draggable"},"Draggable"),Object(i.b)(o.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"A Node may be dragged and moved if it satisfies both of the following conditions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Node is an immediate child of a Canvas Node, hence it's draggable"),Object(i.b)("li",{parentName:"ul"},"The Node's ",Object(i.b)("inlineCode",{parentName:"li"},"canDrag")," rule allows it to be moved ")),Object(i.b)("h4",{id:"parameters-2"},"Parameters"),Object(i.b)(o.a,{items:[["onError","(err: string) => void","Error callback"]],mdxType:"API"}),Object(i.b)("h4",{id:"returns-5"},"Returns"),Object(i.b)(o.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("h3",{id:"droppable"},"Droppable"),Object(i.b)(o.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"Check if a Node is Droppable relative to the target Node."),Object(i.b)("h4",{id:"parameters-3"},"Parameters"),Object(i.b)(o.a,{items:[["targetId","NodeId","The target Node"],["onError","(err: string) => void","Error callback"]],mdxType:"API"}),Object(i.b)("h4",{id:"returns-6"},"Returns"),Object(i.b)(o.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("p",null,"In the following example, we're checking if our ",Object(i.b)("inlineCode",{parentName:"p"},"MyCanvas")," component would be able to accept the current selected Node in the editor."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const MyCanvas = () => {\n  const { id } = useNode();\n  const { canWeAcceptTheSelectedNode } = useEditor((state, query) => ({\n    canWeAcceptTheSelectedNode: state.events.selected && query.is(id).Droppable(state.events.selected)\n  }));\n}\n")))}p.isMDXComponent=!0},150:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return v}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),d=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},b=function(e){var n=d(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(t),p=a,m=b["".concat(o,".").concat(p)]||b[p]||u[p]||i;return t?r.a.createElement(m,s({ref:n},c,{components:t})):r.a.createElement(m,s({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},151:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return s}));var a=t(0),r=t.n(a),i=function(e){var n=e.item,t=n[0],a=n.length>1&&"string"==typeof n[1]&&n[1],i=3==n.length?"string"==typeof n[2]&&n[2]:4==n.length&&"string"==typeof n[3]&&n[3],s=n.length>1&&Array.isArray(n[n.length-1])&&n[n.length-1];return r.a.createElement("li",{className:"api-item"},r.a.createElement("div",null,t&&r.a.createElement("code",{className:"api-title"},t),a&&r.a.createElement("strong",{className:"api-type"},a)),i&&r.a.createElement("div",{className:"api-description",dangerouslySetInnerHTML:{__html:i}}),s&&r.a.createElement(o,{items:s}))},o=function(e){var n=e.items;return r.a.createElement("ul",null,n&&n.map((function(e,n){return r.a.createElement(i,{item:e,key:n})})))},s=function(e){var n,t=e.type,a=e.title,i=void 0===a||a,o=e.noMargin,s=void 0===o||o;switch(t){case"hoc":n="Higher-Order Component";break;default:n=t[0].toUpperCase()+t.substring(1)}return r.a.createElement("div",{className:"badge-wrapper"},r.a.createElement("span",{className:"badge badge-"+t+" "+(i?"badge-title":"")+" "+(s?"badge-no-margin":"")},n))}}}]);