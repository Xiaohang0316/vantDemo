(function(t){function e(e){for(var a,s,l=e[0],r=e[1],c=e[2],d=0,f=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,l=1;l<n.length;l++){var r=n[l];0!==o[r]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b52":function(t,e,n){"use strict";n("cc52")},2374:function(t,e,n){"use strict";n("2d27")},"2d27":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),e("Department"),e("Postdepartment"),e("div",{staticClass:"vantheight"},[e("div",{staticClass:"headeraa"}),e("div",{staticClass:"vantList"},[e("VantList")],1)])],1)},i=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("van-field",{attrs:{"is-link":"",readonly:"",label:"地区",placeholder:"请选择所在地区"},on:{click:function(e){t.show=!0}},model:{value:t.fieldValue,callback:function(e){t.fieldValue=e},expression:"fieldValue"}}),e("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("van-cascader",{attrs:{title:"请选择所在地区",options:t.options},on:{close:function(e){t.show=!1},finish:t.onFinish},model:{value:t.cascaderValue,callback:function(e){t.cascaderValue=e},expression:"cascaderValue"}})],1)],1)},l=[],r={name:"Department",data(){return{show:!1,fieldValue:"",cascaderValue:"",options:[{text:"浙江省",value:"330000",children:[{text:"杭州市",value:"330100"}]},{text:"江苏省",value:"320000",children:[{text:"南京市",value:"320100"}]}]}},methods:{onFinish({selectedOptions:t}){this.show=!1,this.fieldValue=t.map(t=>t.text).join("/")}}},c=r,u=(n("2374"),n("2877")),d=Object(u["a"])(c,s,l,!1,null,"369ec140",null),f=d.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("van-cell",{attrs:{"is-link":"",title:"基础用法"},on:{click:function(e){t.show=!0}}}),e("van-action-sheet",{attrs:{actions:t.actions},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},h=[],v=n("d399"),b={name:"Postdepartment",data(){return{show:!1,selectData:"",actions:[{name:"选项一"},{name:"选项二"},{name:"选项三"}]}},methods:{onSelect(t){this.show=!1,Object(v["a"])(t.name),this.selectData=t,console.log(this.selectData.name)}}},m=b,g=(n("7806"),Object(u["a"])(m,p,h,!1,null,"1fb79f19",null)),w=g.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t){return e("van-cell",{key:t,attrs:{title:t}})})),1)],1)},y=[],O={name:"VantList",data(){return{list:[],loading:!1,finished:!1}},methods:{onLoad(){setTimeout(()=>{for(let t=0;t<10;t++)this.list.push(this.list.length+1);this.loading=!1,this.list.length>=40&&(this.finished=!0)},1e3)}}},j=O,_=(n("765b"),Object(u["a"])(j,x,y,!1,null,"09eb63ee",null)),k=_.exports,V={name:"App",components:{Department:f,Postdepartment:w,VantList:k}},P=V,S=(n("0b52"),Object(u["a"])(P,o,i,!1,null,null,null)),C=S.exports,D=n("b970");n("157a");a["a"].use(D["a"]),a["a"].config.productionTip=!1,new a["a"]({render:t=>t(C)}).$mount("#app")},"765b":function(t,e,n){"use strict";n("dae8")},7806:function(t,e,n){"use strict";n("8a67")},"8a67":function(t,e,n){},cc52:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},dae8:function(t,e,n){}});
//# sourceMappingURL=app.e79f2d19.js.map