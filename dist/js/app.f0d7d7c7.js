(function(e){function t(t){for(var a,o,l=t[0],i=t[1],s=t[2],d=0,f=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"14d6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=(n("fb98"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg--gray",attrs:{id:"calc"}},[n("Calc")],1)}),c=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"calc"},[n("Panel")],1)},l=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel bg--blue-00"},[n("PanelContent")],1)},s=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input"},[n("label",{staticClass:"input__label text--white bg--black",attrs:{for:"radio"}},[n("h3",{staticClass:"input__label--text"},[e._v("Selecione a moeda para conversão:")]),n("form",{attrs:{name:"form",id:"form"}},[n("input",{attrs:{type:"radio",id:"BRL",name:"moeda",checked:""},on:{click:function(t){return e.click()}}}),n("label",{attrs:{for:"BRL"}},[e._v("BRL")]),n("input",{attrs:{type:"radio",id:"USD",name:"moeda"},on:{click:function(t){return e.click()}}}),n("label",{attrs:{for:"USD"}},[e._v("USD")]),n("input",{attrs:{type:"radio",id:"EUR",name:"moeda"},on:{click:function(t){return e.click()}}}),n("label",{attrs:{for:"EUR"}},[e._v("EUR")])])]),n("label",{staticClass:"input__label text--white bg--black",attrs:{for:"input"}},[n("div",{attrs:{id:"title"}},[n("h3",{staticClass:"text--white bg--black"},[e._v("Digite o valor a ser convertido:")]),n("div",{attrs:{id:"value"}}),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.value,expression:"value",modifiers:{lazy:!0}},{name:"money",rawName:"v-money",value:e.money,expression:"money"}],staticClass:"input__input",attrs:{id:"input",type:"text",autofocus:""},domProps:{value:e.value},on:{change:[function(t){e.value=t.target.value},e.change]}}),n("select",{staticClass:"choose text--white bg--black",attrs:{id:"moeda"},on:{click:function(t){return e.click()}}},[n("option",{attrs:{value:" "}},[e._v(" Selecione uma moeda")]),n("option",{attrs:{value:"BRL"}},[e._v("BRL - Real")]),n("option",{attrs:{value:"USD"}},[e._v("USD - Dólar")]),n("option",{attrs:{value:"EUR"}},[e._v("EUR - Euro")])])])]),e._m(0)])},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"input__label text--white bg--black"},[n("label",{staticClass:"screen"},[e._v("Moeda: "),n("label",{staticClass:"text--white bg--black",attrs:{id:"coin"}})]),n("label",{staticClass:"screen"},[e._v("IOF (1,10%): "),n("label",{staticClass:"text--white bg--black",attrs:{id:"iof"}})]),n("label",{staticClass:"screen"},[e._v("Taxa administrativa (1%): "),n("label",{staticClass:"text--white bg--black",attrs:{id:"fx"}})]),n("label",{staticClass:"screen"},[e._v("Valor convertido: "),n("label",{staticClass:"text--white bg--black",attrs:{id:"result"}})])])}],f=(n("ac1f"),n("5319"),n("b680"),n("716b")),p=n.n(f),m=function(){var e=document.querySelector("#input");e.addEventListener("change",(function(e){e.target.value;v()}),!0)},v=function(){var e=document.querySelector("#moeda"),t=e.options[e.selectedIndex].value,n="",a="",r=0,c=0,o=0,l=0,i=document.querySelector("#input").value,s=parseFloat(i.replace(/\./g,""));document.getElementById("BRL").checked&&"BRL"===t&&(c=0,o=0,s=0,b(),alert("Impossível converter")),document.getElementById("BRL").checked&&"USD"===t&&(n="R$ ",r=5.2164,a="USD 1 = BRL 5.2164"),document.getElementById("BRL").checked&&"EUR"===t&&(n="R$ ",r=6.397,a="EUR 1 = BRL 6.3970"),document.getElementById("USD").checked&&"USD"===t&&(c=0,o=0,s=0,b(),alert("Impossível converter")),document.getElementById("USD").checked&&"BRL"===t&&(n="U$ ",r=.1917,a="BRL 1 = USD 0,1917"),document.getElementById("USD").checked&&"EUR"===t&&(n="U$ ",r=1.2206,a="EUR 1 = USD 1,2206"),document.getElementById("EUR").checked&&"EUR"===t&&(c=0,o=0,s=0,b(),alert("Impossível converter")),document.getElementById("EUR").checked&&"BRL"===t&&(n="€ ",r=.1563,a="BRL 1 = EUR 0,1563"),document.getElementById("EUR").checked&&"USD"===t&&(n="€ ",r=.86,a="USD 1 = EUR 0,86"),c=parseFloat((1.1*s/100).toFixed(2)),o=parseFloat((1*s/100).toFixed(2));var u=document.getElementById("coin");u.innerHTML=a;var d=document.getElementById("iof");d.innerHTML=n+c.toLocaleString("pt-BR",{});var f=document.getElementById("fx");f.innerHTML=n+o.toLocaleString("pt-BR",{}),l=parseFloat(((s-c-o)*r).toFixed(2));var p=document.getElementById("result");p.innerHTML=n+l.toLocaleString("pt-BR",{})};function b(){coin.innerHTML="",iof.innerHTML="",fx.innerHTML="",result.innerHTML=""}var h={name:"PanelContent",data:function(){return{value:0,money:{decimal:",",thousands:".",precision:2,masked:!1}}},methods:{change:function(){m()},click:function(){v()}},directives:{money:f["VMoney"]}},g=h,y=(n("88b3"),n("2877")),_=Object(y["a"])(g,u,d,!1,null,"3f19017a",null),R=_.exports,E={name:"Panel",components:{PanelContent:R}},k=E,U=(n("d653"),Object(y["a"])(k,i,s,!1,null,"b5e85cc4",null)),x=U.exports,B={name:"Calc",components:{Panel:x}},S=B,L=(n("c1ef"),Object(y["a"])(S,o,l,!1,null,"00189d09",null)),C=L.exports,w={name:"App",components:{Calc:C}},I=w,D=(n("73e5"),Object(y["a"])(I,r,c,!1,null,"09c385a0",null)),O=D.exports;a["a"].config.productionTip=!1,a["a"].use(p.a,{precision:4}),new a["a"]({render:function(e){return e(O)}}).$mount("#root")},"5e4b":function(e,t,n){},"73e5":function(e,t,n){"use strict";n("14d6")},"88b3":function(e,t,n){"use strict";n("ac4b")},ac4b:function(e,t,n){},c1ef:function(e,t,n){"use strict";n("5e4b")},d653:function(e,t,n){"use strict";n("e30f")},e30f:function(e,t,n){},fb98:function(e,t,n){}});
//# sourceMappingURL=app.f0d7d7c7.js.map