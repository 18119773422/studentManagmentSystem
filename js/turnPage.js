!function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=92)}({92:function(e,t){function n(e){var t=e;if(this.wrap=t.wrap,this.cur=t.cur||1,this.all=t.all||5,this.changePageFun=t.changePageFun||null,this.width=a(window).width(),this.cur>this.all)return console.error("page error,页数异常"),!1;this.createDom(),this.initStyle(),this.bindEvent()}var a;a=window.jQuery||window.$,n.prototype.createDom=function(){a(this.wrap).empty();var e=a("<span>•••</span>"),t=768<this.width?2:1,n=a('<ul class="turnPage_"></ul>');1<this.cur?n.append(a('<li class="prev-page_">上一页</li>')):n.remove(".prev-page_"),1!==this.cur&&1<this.cur-2&&n.append(a('<li class="page-number_">1</li>')),2<this.cur-2&&n.append(e);for(var r=this.cur-t;r<=this.cur+t;r++)if(0<r&&r<=this.all){var i=a('<li class="page-number_">'.concat(r,"</li>"));r===this.cur&&i.addClass("cur-page_"),n.append(i)}3<this.all-this.cur&&n.append(e),this.cur+2<this.all&&a('<li class="page-number_">'.concat(this.all,"</li>")).appendTo(n),this.cur<this.all?n.append(a('<li class="next-page_">下一页</li>')):n.remove(".next-page_"),n.appendTo(a(this.wrap))},n.prototype.initStyle=function(){768<=this.width?a(".turnPage_ li",this.wrap).css({padding:"6px 12px",margin:"0 5px",fontSize:"14px"}):this.width<350?a(".turnPage_ li",this.wrap).css({padding:"2px 3px",margin:"0 2px",fontSize:"12px"}):a(".turnPage_ li",this.wrap).css({padding:"3px 6px",margin:"0 5px",fontSize:"16px"}),a(".turnPage_",this.wrap).css({padding:0,margin:0,listStyle:"none",overflow:"hidden",whiteSpace:"nowrap"}).find("li").css({display:"inline-block",cursor:"pointer",backgroundColor:"#6a5acd",color:"#fff",borderRadius:"6%"}).end().find("span").css({color:"#6a5acd"}).end().find("li.cur-page_").css({backgroundColor:"#fff",color:"#6a5acd",border:"1px solid #6a5acd"})},n.prototype.bindEvent=function(){var t=this,n=this;a(".prev-page_",n.wrap).click(function(e){t.cur--,t.change()}),a(".next-page_",n.wrap).click(function(e){t.cur++,t.change()}),a(".page-number_",n.wrap).click(function(e){var t=Number(a(this).text());n.cur=t,n.change()})},n.prototype.change=function(){this.createDom(),this.initStyle(),this.bindEvent(),"function"===a.type(this.changePageFun)&&this.changePageFun(this.cur,this.all)},a.fn.extend({turnPage:function(e){return e.wrap=this,new n(e),this}})}});