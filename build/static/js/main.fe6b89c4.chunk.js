(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{36:function(t,e,n){"use strict";n.r(e);var r,i,c,a,o,s,u=n(0),l=n.n(u),d=n(14),p=n.n(d),b=(n(26),n(2)),f=n(3),j=f.a.button(r||(r=Object(b.a)(["\n\tfont-size: 15px;\n\tpadding: 5px 10px;\n\tmin-width:130px;\n\tborder-radius: 3px;\n\tborder: 2px solid palevioletred;\n\tbackground: ",";\n\tcolor: ",";\n\tcursor:pointer;\n"])),(function(t){return t.primary?"palevioletred":"white"}),(function(t){return t.primary?"white":"palevioletred"})),h=n(1),m=function(t){var e=t.value,n=t.onClick,r=t.color;return Object(h.jsx)(j,{tabIndex:0,onClick:n,primary:r,children:Object(h.jsx)("span",{children:e})})},O=f.a.div(i||(i=Object(b.a)(["\n\tborder-radius:10px;\n\tposition: relative;\n\twidth:100%;\n\theight:100%;\n    overflow:hidden;\n\ttransition: all 1s;\n\topacity:",";\n\tvisibility:",";\n\t&:focus {\n        outline: palevioletred 4px solid;\n        box-shadow: 0px 0px 2px red;\n    }\n\t"])),(function(t){return t.isVisible?"1":"0"}),(function(t){return t.isVisible?"visible":"hidden"})),x=f.a.img(c||(c=Object(b.a)(["\n\twidth:100%;\n\theight:100%;\n\ttransition: all 0.8s;\n\tbackface-visibility: hidden;\n\tcursor: pointer;\n\tobject-fit:cover;\n\t"]))),v=Object(f.a)(x)(a||(a=Object(b.a)(["\n\tz-index:",";\n\ttransform:",";\n\t"])),(function(t){return t.isFlipped?1:0}),(function(t){return t.isFlipped?"rotate(0deg)":"rotateY(180deg)"})),g=Object(f.a)(x)(o||(o=Object(b.a)(["\n\tz-index:",";\n\ttransform:",";\n\tposition:absolute;\n\ttop:0;\n\tleft:0;\n\t"])),(function(t){return t.isFlipped?0:1}),(function(t){return t.isFlipped?"rotateY(180deg)":"rotate(360deg)"})),w=n.p+"static/media/card_back.ef68f875.jpg",y=n(4),k=function(t){var e=t.card,n=t.handleClick,r=Object(y.c)((function(t){return t.gameState.isPlayable})),i=e.frontImgUrl,c=e.backImgUrl,a=e.isVisible,o=e.isFlipped,s=e.alt_description,u=function(){r&&!o&&n(e)};return Object(h.jsxs)(O,{tabIndex:0,onKeyDown:function(t){return function(t){" "===t.key&&u()}(t)},onClick:u,isVisible:a,children:[Object(h.jsx)(v,{isFlipped:o,src:i,alt:s||"Front image ".concat(e.pairId)}),Object(h.jsx)(g,{isFlipped:o,src:c||w,alt:"Back image"})]})},C=n(7),S=n(5),I=n.n(S),F=n(8),P=n(13),E=f.a.div(s||(s=Object(b.a)(["\n\tdisplay: grid;\n\tmargin:auto;\n\twidth:98vw;\n\tgrid-template-columns: repeat(6,minmax(20px, 1fr));\n\tgrid-template-rows: repeat(6,minmax(20px, 1fr));\n\tgrid-gap: 10px;\n\theight: 94vh;\n\tjustify-items:center;\n"]))),z=n(21),T=new function t(){var e=this;Object(z.a)(this,t),this._apiBaseUrl=void 0,this.getResource=function(){var t=Object(F.a)(I.a.mark((function t(n){var r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e._apiBaseUrl).concat(n),{headers:{Authorization:"Client-ID ".concat("G9CUg7nEb0OhGUuHRMwg4UNNeFoSXPwZZoj2maRNDtI;")}});case 2:if((r=t.sent).ok){t.next=5;break}throw new Error("Could not fetch ".concat(n)+", received ".concat(r.status));case 5:return t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.getPhotos=function(){var t=Object(F.a)(I.a.mark((function t(n){var r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResource("photos/random?count=".concat(n));case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this._apiBaseUrl="https://api.unsplash.com/"},G=n(10);function U(t){return function(t){for(var e=Object(G.a)(t),n=t.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),i=[e[r],e[n]];e[n]=i[0],e[r]=i[1]}return e}(function(t){return[].concat(Object(G.a)(t),Object(G.a)(t)).map((function(t,e){return{id:t.id+e,alt_description:t.alt_description||void 0,frontImgUrl:t.urls.regular,isFlipped:!1,isVisible:!0,pairId:t.id}}))}(t))}var A,_,B,D,L=n(6),R={id:Date.now(),isFirstGame:!0,isPlayable:!1,pairsFound:0,chosenCard:void 0},V=(Object(L.b)("gameState/fetchImgs",Object(F.a)(I.a.mark((function t(){var e;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.getPhotos(18);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),Object(L.c)({name:"gameState",initialState:R,reducers:{restartGame:function(t){t.id=Date.now(),t.pairsFound=0,t.chosenCard=void 0},firstGameEnded:function(t){t.isFirstGame=!1},changeGameState:function(t){t.isPlayable=!t.isPlayable},incrementFoundPairs:function(t){t.pairsFound++},choseCard:function(t,e){t.chosenCard=e.payload},resetChosenCards:function(t){t.chosenCard=void 0}}})),M=V.actions,N=M.changeGameState,J=M.incrementFoundPairs,K=M.choseCard,X=(M.resetChosenCards,M.restartGame),Y=M.firstGameEnded,Z=V.reducer,H=Object(L.c)({name:"timer",initialState:{elapsedTime:0,isActive:!1},reducers:{increment:function(t){t.elapsedTime+=1},reset:function(t){t.elapsedTime=0,t.isActive=!1},changeTimerState:function(t){t.isActive=!t.isActive}}}),q=H.actions,Q=q.increment,W=q.reset,$=q.changeTimerState,tt=H.reducer,et=Object(L.c)({name:"timer",initialState:{results:[]},reducers:{addResult:function(t,e){t.results.push(e.payload)}}}),nt=et.actions.addResult,rt=et.reducer,it=function(){var t=Object(u.useState)([]),e=Object(P.a)(t,2),n=e[0],r=e[1],i=Object(u.useState)(0),c=Object(P.a)(i,2),a=c[0],o=c[1],s=Object(y.c)((function(t){return t.gameState.chosenCard})),l=Object(y.c)((function(t){return t.gameState.pairsFound})),d=Object(y.c)((function(t){return t.gameState.id})),p=Object(y.c)((function(t){return t.timerState.elapsedTime})),b=Object(y.b)();Object(u.useEffect)((function(){var t=function(){var t=Object(F.a)(I.a.mark((function t(e){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getPhotos(18);case 2:n=t.sent,r(U(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();t(T)}),[d]),Object(u.useEffect)((function(){l===n.length/2&&0!==l&&(b($()),b(Y()),b(nt({seconds:p,id:Date.now()})))}),[l]);var f,j=Object(u.useCallback)((function(t){return r((function(e){return e.map((function(e){return e.id===t.id?Object(C.a)(Object(C.a)({},e),{},{isFlipped:!0}):e}))})),void 0===s?(o(setTimeout((function(){r((function(e){return e.map((function(e){return e.id===t.id?Object(C.a)(Object(C.a)({},e),{},{isFlipped:!1}):e}))})),b(K(void 0))}),5e3)),void b(K(t))):(clearTimeout(a),s.pairId===t.pairId&&t.id!=s.id?(r((function(e){return e.map((function(e){return e.pairId===t.pairId?Object(C.a)(Object(C.a)({},e),{},{isVisible:!1}):e}))})),b(J()),void b(K(void 0))):(setTimeout((function(){r((function(e){return e.map((function(e){return e.id===t.id||e.pairId===s.pairId?Object(C.a)(Object(C.a)({},e),{},{isFlipped:!1}):e}))}))}),800),void b(K(void 0))))}),[n,s]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(E,{children:n&&(f=n,f.map((function(t,e){return Object(h.jsx)(k,{card:t,handleClick:j},t.id+e)})))})})},ct=f.a.div(A||(A=Object(b.a)(["\n\tfont-size:20px;\n"]))),at=function(t){var e=t.isActive,n=t.elapsedTime,r=Object(y.b)();return Object(u.useEffect)((function(){var t=0;return e?t=setInterval((function(){r(Q())}),1e3):e||0===n||clearInterval(t),function(){return clearInterval(t)}}),[e,n]),Object(h.jsx)(ct,{children:Object(h.jsx)("span",{children:n})})},ot=f.a.div(_||(_=Object(b.a)(["\n\tdisplay:flex;\n\talign-items:center;\n\twidth:98vw;\n\tmargin:auto;\n\tjustify-content:space-around;\n\theight:5vh;\t\n"]))),st=function(){var t=Object(u.useState)(!1),e=Object(P.a)(t,2),n=e[0],r=e[1],i=Object(y.b)(),c=Object(y.c)((function(t){return t.timerState.isActive})),a=Object(y.c)((function(t){return t.timerState.elapsedTime})),o=Object(y.c)((function(t){return t.gameState.isFirstGame})),s=Object(y.c)((function(t){return t.resultState.results}));return Object(h.jsxs)(ot,{children:[Object(h.jsx)(Ft,{isOpened:n,onClose:function(t){t.stopPropagation(),r(!1)},title:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b",children:Object(h.jsx)(Tt,{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0435\u043a\u0443\u043d\u0434",results:Object(G.a)(s).sort((function(t,e){return t.seconds-e.seconds}))})}),Object(h.jsx)(m,{value:"".concat(c?"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e":"\u0421\u0442\u0430\u0440\u0442"),onClick:c||!o?function(){i(W()),i(X()),i($())}:function(){i(W()),i(N()),i($())},color:!0}),Object(h.jsx)(at,{isActive:c,elapsedTime:a}),Object(h.jsx)(m,{value:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432",onClick:function(){return r(!0)}})]})},ut=f.a.div(B||(B=Object(b.a)(["\n\tz-index:10;\n\tposition:absolute;\n\ttop:0;\n\tleft:0;\n\tright:0;\n\tbottom:0;\n\tdisplay:flex;\n\tjustify-content:center;\n\talign-items:center;\n\tbackground-color:rgba(0,0,0,0.5);\n\tcursor:pointer;\n\t"]))),lt=function(t){var e=t.children,n=t.isOpened,r=t.onClose;return n?Object(h.jsx)(ut,{role:"button",tabIndex:0,onClick:function(t){return r(t)},children:e}):null},dt=["title","titleId"];function pt(){return pt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pt.apply(this,arguments)}function bt(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function ft(t,e){var n=t.title,r=t.titleId,i=bt(t,dt);return u.createElement("svg",pt({height:"512px",id:"Layer_1",style:{enableBackground:"new 0 0 512 512"},viewBox:"0 0 512 512",width:"512px",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:e,"aria-labelledby":r},i),n?u.createElement("title",{id:r},n):null,D||(D=u.createElement("path",{d:"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"})))}var jt,ht,mt,Ot,xt,vt,gt,wt,yt=u.forwardRef(ft),kt=(n.p,f.a.div(jt||(jt=Object(b.a)(["\n\tposition:absolute;\n\tz-index:10;\n\tpadding:5px 10px;\n\tbackground-color:#f8f8f8;\n\tmin-width:200px;\n\tmin-width:500px;\n\tmin-height:300px;\n\tmax-height:600px;\n\toverflow:scroll;\n\tborder-radius:15px;\n\tborder:1px solid rgba(0,0,0,0.08);\n\tbox-shadow:0 10px 40px rgba(0,0,0,0.1);\n\tcursor:initial;\n\t&::-webkit-scrollbar {\n  \t\tdisplay: none;\n\t}\n\t"])))),Ct=Object(f.a)(yt)(ht||(ht=Object(b.a)(["\n\t\tfill: #d3859e;\n\t\tposition:absolute;\n\t\tright:10px;\n\t\ttop:5px;\n\t\tcursor:pointer;\n\t\twidth: 25px;\n\t\theight: 25px;\n\t"]))),St=f.a.div(mt||(mt=Object(b.a)(["\n\t\tposition:relavtive;\n\t\tdisplay:flex;\n\t\tjustify-content: center;\n\t\t"]))),It=f.a.div(Ot||(Ot=Object(b.a)(["\n\t\tfont-size:30px;\n"]))),Ft=function(t){var e=t.children,n=t.isOpened,r=t.onClose,i=t.title;return Object(h.jsx)(lt,{isOpened:n,onClose:r,children:Object(h.jsxs)(kt,{onClick:function(t){return t.stopPropagation()},children:[Object(h.jsxs)(St,{children:[Object(h.jsx)(It,{children:i}),Object(h.jsx)(Ct,{tabIndex:0,onKeyDown:function(t){return function(t){" "!==t.key&&"Enter"!==t.key||r(t)}(t)},onClick:function(t){return r(t)}})]}),e]})})},Pt=f.a.div(xt||(xt=Object(b.a)(["\n\twidth:100%;\n\theight:100%;\n\tdisplay:flex;\n\tflex-direction:column;\n\talign-items:center;\n\toverflow-y:scroll;\n\t&::-webkit-scrollbar {\n  \t\tdisplay: none;\n\t}\n\t"]))),Et=f.a.div(vt||(vt=Object(b.a)(["\n\twidth:100%;\n\ttext-align:center;\n\tmargin-top:15px;\n\tfont-size:25px;\n\tborder-bottom:1px solid black;\n\t"]))),zt=f.a.div(gt||(gt=Object(b.a)(["\n\twidth:100%;\n\tpadding:10px 0 6px 0;\n\ttext-align:center;\n\tfont-size:20px;\n\tborder-bottom:1px solid black;\n\t"]))),Tt=function(t){var e=t.title,n=t.results;return Object(h.jsxs)(Pt,{children:[Object(h.jsx)(Et,{children:e}),n.map((function(t){return Object(h.jsx)(zt,{children:t.seconds},t.id)}))]})},Gt=f.a.div(wt||(wt=Object(b.a)(["\n\tfont-family:sans-serif;\n\tfont-size:1em;\n\tbackground-color:#f8f8f8;\n\t"])));var Ut=function(){return Object(h.jsxs)(Gt,{children:[Object(h.jsx)(st,{}),Object(h.jsx)(it,{})]})},At=Object(L.a)({reducer:{timerState:tt,gameState:Z,resultState:rt}});p.a.render(Object(h.jsx)(l.a.StrictMode,{children:Object(h.jsx)(y.a,{store:At,children:Object(h.jsx)(Ut,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.fe6b89c4.chunk.js.map