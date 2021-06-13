(function(t){function e(e){for(var r,o,u=e[0],s=e[1],l=e[2],b=0,d=[];b<u.length;b++)o=u[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);i&&i(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},c=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var i=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"};function c(t,e,n,c,o,u){var s=Object(r["u"])("Header"),l=Object(r["u"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(s),Object(r["g"])("div",a,[Object(r["g"])(l)])],64)}var o={class:"text-center bg-green-500 text-white p-4 mb-10"},u=Object(r["g"])("div",{class:"text-3xl md:text-5xl font-bold mb-3"},[Object(r["g"])("i",{class:"fa fa-viruses"}),Object(r["f"])(" Covid-19 Tracker ")],-1),s=Object(r["g"])("p",null,[Object(r["f"])(" API by "),Object(r["g"])("a",{class:"text-green-200",href:"https://covid19api.com",target:"_blank"},"covid19api.com")],-1);function l(t,e,n,a,c,l){return Object(r["p"])(),Object(r["d"])("header",o,[u,s])}var i={name:"Header"};i.render=l;var b=i,d={components:{Header:b}};d.render=c;var p=d,f=(n("ba8c"),n("6c02")),j={key:0},O={key:1,class:"flex flex-col align-center justify-center text-center"},m=Object(r["g"])("div",{class:"text-gray-500 text-3xl mt-10 mb-6"}," Fetching Data ",-1);function v(t,e,a,c,o,u){var s=Object(r["u"])("DataTitle"),l=Object(r["u"])("DataBoxes"),i=Object(r["u"])("CountrySelect");return c.loading?(Object(r["p"])(),Object(r["d"])("main",O,[m,Object(r["g"])("img",{src:n("e8dd"),alt:"",class:"w-24 m-auto"},null,8,["src"])])):(Object(r["p"])(),Object(r["d"])("main",j,[Object(r["g"])(s,{dataDate:c.dataDate,text:c.title},null,8,["dataDate","text"]),Object(r["g"])(l,{stats:c.status},null,8,["stats"]),Object(r["g"])(i,{countries:c.countries,onGetCountry:c.getCountryData},null,8,["countries","onGetCountry"]),c.status.Country?(Object(r["p"])(),Object(r["d"])("button",{key:0,class:"bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600",onClick:e[1]||(e[1]=function(){return c.clearCountryData&&c.clearCountryData.apply(c,arguments)})}," Clear Country ")):Object(r["e"])("",!0)]))}var g=n("1da1"),x=(n("96cf"),n("d3b7"),Object(r["g"])("option",{value:"0"},"Select Country",-1));function h(t,e,n,a,c,o){return Object(r["A"])((Object(r["p"])(),Object(r["d"])("select",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return a.selected=t}),class:"form-select mt-10 block w-full border p-3 rounded",onChange:e[2]||(e[2]=function(t){return a.onChange()})},[x,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["t"])(n.countries,(function(t){return Object(r["p"])(),Object(r["d"])("option",{value:t.ID},Object(r["w"])(t.Country),9,["value"])})),256))],544)),[[r["y"],a.selected]])}n("7db0");var y={name:"CountrySelect",props:["countries"],setup:function(t,e){var n=t.countries,a=e.emit,c=Object(r["s"])(0);return{selected:c,onChange:function(){var t=n.find((function(t){return t.ID===c.value}));a("get-country",t)}}}};y.render=h;var w=y,C={class:"grid md:grid-cols-2 gap-4"},D={class:"shadow-md bg-green-200 p-10 text-center rounded"},k=Object(r["g"])("h3",{class:"text-3xl text-blue-900 font-bold mb-4"},"Cases",-1),S={class:"text-2xl mb-4"},T=Object(r["g"])("span",{class:"font-bold"},"New:",-1),M={class:"text-2xl mb-4"},P=Object(r["g"])("span",{class:"font-bold"},"Total:",-1),_={class:"shadow-md bg-red-400 p-10 text-center rounded"},G=Object(r["g"])("h3",{class:"text-3xl text-blue-900 font-bold mb-4"},"Deaths",-1),R={class:"text-2xl mb-4"},H=Object(r["g"])("span",{class:"font-bold"},"New:",-1),W={class:"text-2xl mb-4"},B=Object(r["g"])("span",{class:"font-bold"},"Total:",-1);function N(t,e,n,a,c,o){return Object(r["p"])(),Object(r["d"])("div",C,[Object(r["g"])("div",D,[k,Object(r["g"])("div",S,[T,Object(r["f"])(" "+Object(r["w"])(a.numberWithCommas(n.stats.NewConfirmed)),1)]),Object(r["g"])("div",M,[P,Object(r["f"])(" "+Object(r["w"])(a.numberWithCommas(n.stats.TotalConfirmed)),1)])]),Object(r["g"])("div",_,[G,Object(r["g"])("div",R,[H,Object(r["f"])(" "+Object(r["w"])(a.numberWithCommas(n.stats.NewDeaths)),1)]),Object(r["g"])("div",W,[B,Object(r["f"])(" "+Object(r["w"])(a.numberWithCommas(n.stats.TotalDeaths)),1)])])])}n("ac1f"),n("5319"),n("25f0");var Y={name:"DataBoxes",props:["stats"],setup:function(){return{numberWithCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}}};Y.render=N;var I=Y,A={class:"text-center"},J={class:"text-3xl font-bold"},F={class:"text-2xl mt-4 mb-10"};function U(t,e,n,a,c,o){return Object(r["p"])(),Object(r["d"])("div",A,[Object(r["g"])("h2",J,Object(r["w"])(n.text),1),Object(r["g"])("div",F,Object(r["w"])(a.timestamp),1)])}var V=n("5a0c"),q=n.n(V),z={name:"DataTitle",props:["text","dataDate"],setup:function(t){var e=t.dataDate;return{timestamp:Object(r["b"])((function(){return q()(e).format("MMMM D YYYY, h:mm:ss a")}))}}};z.render=U;var E=z,K={name:"Home",components:{DataTitle:E,DataBoxes:I,CountrySelect:w},setup:function(){var t=Object(r["s"])(!0),e=Object(r["s"])("Global"),n=Object(r["s"])(""),a=Object(r["s"])({}),c=Object(r["s"])([]),o=function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.covid19api.com/summary");case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(t){a.value=t,e.value=t.Country},s=function(){var n=Object(g["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.value=!0,n.next=3,o();case 3:r=n.sent,e.value="Global",a.value=r.Global,t.value=!1;case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:r=e.sent,n.value=r.Date,a.value=r.Global,c.value=r.Countries,t.value=!1;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l(),{loading:t,title:e,dataDate:n,status:a,countries:c,getCountryData:u,clearCountryData:s}}};K.render=v;var L=K,Q=[{path:"/",name:"Home",component:L}],X=Object(f["a"])({history:Object(f["b"])("/"),routes:Q}),Z=X;Object(r["c"])(p).use(Z).mount("#app")},ba8c:function(t,e,n){},e8dd:function(t,e,n){t.exports=n.p+"img/hourglass.549947b6.gif"}});
//# sourceMappingURL=app.e74432e4.js.map