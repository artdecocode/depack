const nodeRequire = require;
(function(){
  // debugger
  'use strict';var f={a:(a,b=0,c=!1)=>{if(0===b&&!c)return a;a=a.split("\n",c?b+1:Number.Infinity);return c?a[a.length-1]:a.slice(b).join("\n")},i:(a,b)=>(0,f.a)(a,2+(b?1:0)),h:(a)=>(0,f.a)(a,2,!0),j:(a)=>`Error: ${a}`,f:(a)=>{var {callee:{caller:a}}=a;return a}};const {s:g}=nodeRequire("os"),h=/\s+at.*(?:\(|\s)(.*)\)?/,k=/^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:IGNORED_MODULES)\/.*)?\w+)\.js:\d+:\d+)|native)/,l=g();
var m=(a,b={})=>{const {w:c=!1,u:e=["pirates"]}=b,d=new RegExp(k.source.replace("IGNORED_MODULES",e.join("|")));return a.replace(/\\/g,"/").split("\n").filter((a)=>{a=a.match(h);if(null===a||!a[1])return!0;a=a[1];return a.includes(".app/Contents/Resources/electron.asar")||a.includes(".app/Contents/Resources/default_app.asar")?!1:!d.test(a)}).filter((a)=>""!==a.trim()).map((a)=>c?a.replace(h,(a,b)=>a.replace(b,b.replace(l,"~"))):a).join("\n")};var p={a:(a,b=0,c=!1)=>{if(0===b&&!c)return a;a=a.split("\n",c?b+1:Number.Infinity);return c?a[a.length-1]:a.slice(b).join("\n")},i:(a,b)=>(0,p.a)(a,2+(b?1:0)),h:(a)=>(0,p.a)(a,2,!0),j:(a)=>`Error: ${a}`,f:(a)=>{var {callee:{caller:a}}=a;return a}};var r={v:function(a,b,c=!1){return function(e){var d=(0,p.f)(arguments),{stack:n}=Error();const x=(0,p.h)(n),q=(n=e instanceof Error)?e.message:e;d=[(0,p.j)(q),...null!==d&&a===d||c?[b]:[x,b]].join("\n");d=m(d);return Object.assign(n?e:Error(),{message:q,stack:d})}}};m&&m.g&&(m=m.default);const {}=p;function t(a){const {stack:b}=Error();return(0,r.v)((0,f.f)(arguments),(0,f.i)(b,a),a)}const {}=f,{}=r;const {s:u}=nodeRequire("os"),v=/\s+at.*(?:\(|\s)(.*)\)?/,w=/^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:IGNORED_MODULES)\/.*)?\w+)\.js:\d+:\d+)|native)/,y=u();
var z=(a,b={})=>{const {w:c=!1,u:e=["pirates"]}=b,d=new RegExp(w.source.replace("IGNORED_MODULES",e.join("|")));return a.replace(/\\/g,"/").split("\n").filter((a)=>{a=a.match(v);if(null===a||!a[1])return!0;a=a[1];return a.includes(".app/Contents/Resources/electron.asar")||a.includes(".app/Contents/Resources/default_app.asar")?!1:!d.test(a)}).filter((a)=>""!==a.trim()).map((a)=>c?a.replace(v,(a,b)=>a.replace(b,b.replace(y,"~"))):a).join("\n")};const {D:A}=nodeRequire("stream");t&&t.g&&(t=t.default);z&&z.g&&(z=z.default);var B=class extends A{constructor(a){a=void 0===a?{}:a;var b=Object.assign({},a),c=void 0===a.c?t(!0):a.c;a=(delete b.c,b);super(a);const {m:e,B:d}=a;this.b=[];this.l=new Promise((a,b)=>{this.H("finish",()=>{a(e?Buffer.concat(this.b):this.b.join(""));this.b=[]});this.once("error",(a)=>{if(-1==a.stack.indexOf("\n"))a=c(a),b(a);else{const c=z(a.stack);a.stack=c;b(a)}});d&&(d.once("error",(a)=>this.F("error",a)),d.I(this))})}get A(){return this.l}};
B.o=async(a)=>{var b={G:!0};b=void 0===b?{m:!1}:b;var {A:a}=new B(Object.assign({},{B:a},b,{c:t(!0)}));return await a};const {}=B,{C}=nodeRequire("stream");(async()=>{var a=new C({read(){this.push("ok");this.push(null)}});a=await (0,B.o)(a);console.log(a)})();
}).call(this)
