(this["webpackJsonpproject-finance"]=this["webpackJsonpproject-finance"]||[]).push([[0],{25:function(e,n,i){e.exports={container:"Navigation_container__1GEEb",left:"Navigation_left__1syFc",right:"Navigation_right__PFLhV",icon:"Navigation_icon__Fr710"}},43:function(e,n,i){e.exports={container:"Footer_container__1Qwgs"}},44:function(e,n,i){e.exports={container:"CardComponent_container__1gHI5"}},45:function(e,n,i){e.exports={heading:"Heading_heading__3BG_1"}},54:function(e,n,i){},55:function(e,n,i){},62:function(e,n,i){},63:function(e,n,i){},64:function(e,n,i){},65:function(e,n,i){},66:function(e,n,i){},67:function(e,n,i){},68:function(e,n,i){},69:function(e,n,i){},71:function(e,n,i){"use strict";i.r(n);var t=i(0),a=i.n(t),c=i(37),s=i.n(c),d=(i(54),i(55),i(25)),r=i.n(d),o=i(38),l=i.n(o),h=i(41),j=i.n(h),b=i(42),u=i.n(b),m=i(4),x=i(1),O=function(){var e=Object(m.f)(),n=Object(m.f)(),i=Object(m.f)();return Object(x.jsxs)("div",{className:r.a.container,children:[Object(x.jsx)("div",{className:r.a.left,children:Object(x.jsx)(l.a,{onClick:function(){e("/")},className:r.a.icon})}),Object(x.jsx)("div",{}),Object(x.jsxs)("div",{className:r.a.right,children:[Object(x.jsx)(j.a,{onClick:function(){n("/notes")},className:r.a.icon}),Object(x.jsx)(u.a,{onClick:function(){i("/daxValues")},className:r.a.icon})]})]})},v=i(43),g=i.n(v),f=function(){return Object(x.jsx)("div",{className:g.a.container,children:Object(x.jsx)("p",{children:"copyright \xa9 2022"})})},E=i(7),A=i(44),S=i.n(A),y=function(e){var n=e.title,i=e.imageUrl,t=e.id,a=Object(m.f)();return Object(x.jsxs)("div",{className:S.a.container,onClick:function(){a("/daxValues",{state:{name:n,id:t}})},children:[Object(x.jsx)("p",{children:n}),Object(x.jsx)("img",{src:i,alt:"flag",className:"image",style:{width:"89px",height:"89px"}})]})},p=function(){var e=Object(t.useState)([]),n=Object(E.a)(e,2),i=n[0],a=n[1];Object(t.useEffect)((function(){a([{id:1,name:"DAX",logo:"images/flagGermany.png"}])}),[]);return Object(x.jsx)("div",{style:{display:"flex",justifyContent:"center",textAlign:"center"},children:function(){var e=[];return i.forEach((function(n){e.push(Object(x.jsx)(y,{id:n.id,title:n.name,imageUrl:n.logo},n.id))})),e}()})},D=i(45),N=i.n(D),T=function(e){var n=e.title;return Object(x.jsx)("div",{className:N.a.heading,children:Object(x.jsx)("p",{children:n})})},R=(i(62),function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"center-heading",children:Object(x.jsx)(T,{title:"Wertpapiere"})}),Object(x.jsx)(p,{})]})}),X=i(90),k=i(92),M=i(89),C=i(91),F=i(88),I=[{id:1,name:"adidas",isin:"DE000A1EWWW0",symbol:"ADS",dividendShare:3,exchange:"XETRA"},{id:2,name:"Airbus",isin:"NL0000235190",symbol:"AIR",dividendShare:0,exchange:"XETRA"},{id:3,name:"Allianz",isin:"DE0008404005",symbol:"ALV",dividendShare:9.6,exchange:"XETRA"},{id:4,name:"BASF",isin:"DE000BASF111",symbol:"BAS",dividendShare:3.3,exchange:"XETRA"},{id:5,name:"Bayer",isin:"DE000BAY0017",symbol:"BAYN",dividendShare:2,exchange:"XETRA"},{id:6,name:"Beiersdorf",isin:"DE0005200000",symbol:"BEI",dividendShare:.7,exchange:"XETRA"},{id:7,name:"BMW",isin:"DE0005190003",symbol:"BMW",dividendShare:1.9,exchange:"XETRA"},{id:8,name:"Brenntag",isin:"DE000A1DAHH0",symbol:"BNTGF",dividendShare:1.35,exchange:"XETRA"},{id:9,name:"Continental",isin:"DE0005439004",symbol:"CON",dividendShare:0,exchange:"XETRA"},{id:10,name:"Covestro",isin:"DE0006062144",symbol:"CVVTF",dividendShare:1.3,exchange:"XETRA"},{id:11,name:"Daimler",isin:"DE0007100000",symbol:"DAI",dividendShare:1.13,exchange:"XETRA"},{id:12,name:"Delivery Hero",isin:"DE000A2E4K43",symbol:"DLVHF",dividendShare:0,exchange:"XETRA"},{id:13,name:"Deutsche Bank",isin:"DE0005140008",symbol:"DBK",dividendShare:0,exchange:"XETRA"},{id:14,name:"Deutsche B\xf6rse",isin:"DE0005810055",symbol:"DB1",dividendShare:3,exchange:"XETRA"},{id:15,name:"Deutsche Post",isin:"DE0005552004",symbol:"DPW",dividendShare:1.35,exchange:"XETRA"},{id:16,name:"Deutsche Telekom",isin:"DE0005557508",symbol:"DTE",dividendShare:.6,exchange:"XETRA"},{id:17,name:"E.ON",isin:"DE000ENAG999",symbol:"EOA",dividendShare:.47,exchange:"XETRA"},{id:18,name:"Fresenius",isin:"DE0005785604",symbol:"FRE",dividendShare:.88,exchange:"XETRA"},{id:19,name:"Fresenius Medical Care",isin:"DE0005785802",symbol:"FME",dividendShare:1.34,exchange:"XETRA"},{id:20,name:"HeidelbergCement",isin:"DE0006047004",symbol:"HEI",dividendShare:2.2,exchange:"XETRA"},{id:21,name:"HelloFresh",isin:"DE000A161408",symbol:"HLFFF",dividendShare:0,exchange:"XETRA"},{id:22,name:"Henkel vz.",isin:"DE0006048432",symbol:"HEN3",dividendShare:1.85,exchange:"XETRA"},{id:23,name:"Infineon",isin:"DE0006231004",symbol:"IFX",dividendShare:.27,exchange:"XETRA"},{id:24,name:"Linde",isin:"IE00BZ12WP82",symbol:"LIN",dividendShare:3.85,exchange:"XETRA"},{id:25,name:"Merck",isin:"DE0006599905",symbol:"MRK",dividendShare:1.4,exchange:"XETRA"},{id:26,name:"MTU Aero Engines",isin:"DE000A0D9PT0",symbol:"MTX",dividendShare:1.25,exchange:"XETRA"},{id:27,name:"M\xfcnchener R\xfcckversicherungs-Gesellschaft",isin:"DE0008430026",symbol:"MUV2",dividendShare:9.8,exchange:"XETRA"},{id:28,name:"Porsche",isin:"DE000PAH0038",symbol:"POR3",dividendShare:2.2,exchange:"XETRA"},{id:29,name:"PUMA",isin:"DE0006969603",symbol:"PUM",dividendShare:.16,exchange:"XETRA"},{id:30,name:"QIAGEN",isin:"NL0012169213",symbol:"QIA",dividendShare:0,exchange:"XETRA"},{id:31,name:"RWE",isin:"DE0007037129",symbol:"RWE",dividendShare:.85,exchange:"XETRA"},{id:32,name:"SAP",isin:"DE0007164600",symbol:"SAP",dividendShare:1.69,exchange:"XETRA"},{id:33,name:"Sartorius vz.",isin:"DE0007165631",symbol:"SRT3",dividendShare:1.01,exchange:"XETRA"},{id:34,name:"Siemens",isin:"DE0007236101",symbol:"SIE",dividendShare:4,exchange:"XETRA"},{id:35,name:"Siemens Energy",isin:"DE000ENER6Y0",symbol:"SMEGF",dividendShare:.1,exchange:"XETRA"},{id:36,name:"Siemens Healthineers",isin:"DE000SHL1006",symbol:"SEMHF",dividendShare:.85,exchange:"XETRA"},{id:37,name:"Symrise",isin:"DE000SYM9999",symbol:"SY1",dividendShare:.97,exchange:"XETRA"},{id:38,name:"Volkswagen (VW) vz.",isin:"DE0007664039",symbol:"VOW3",dividendShare:4.86,exchange:"XETRA"},{id:39,name:"Vonovia",isin:"DE000A1ML7J1",symbol:"ANN",dividendShare:1.58,exchange:"XETRA"},{id:40,name:"Zalando",isin:"DE000ZAL1111",symbol:"ZLDSF",dividendShare:0,exchange:"XETRA"}];function _(){var e=Object(t.useState)([]),n=Object(E.a)(e,2),i=n[0],a=n[1],c=Object(m.f)();Object(t.useEffect)((function(){a(I)}),[i]);return Object(x.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"21px"},children:Object(x.jsxs)(X.a,{sx:{minWidth:650,maxWidth:1200},"aria-label":"simple table",children:[Object(x.jsx)(C.a,{children:Object(x.jsxs)(F.a,{children:[Object(x.jsx)(M.a,{style:{fontWeight:"bold"},children:"Dax Value"}),Object(x.jsx)(M.a,{align:"right",style:{fontWeight:"bold"},children:"EXCHANGE"}),Object(x.jsx)(M.a,{align:"right",style:{fontWeight:"bold"},children:"ISIN"})]})}),Object(x.jsx)(k.a,{children:function(){var e=[];return i.forEach((function(n){e.push(Object(x.jsxs)(F.a,{sx:{"&:last-child td, &:last-child th":{border:0},":hover":{cursor:"pointer"}},onClick:function(){return function(e){c("/indexDetails",{state:e})}(n)},children:[Object(x.jsx)(M.a,{component:"th",scope:"row",children:"".concat(n.name)}),Object(x.jsx)(M.a,{align:"right",children:"".concat(n.exchange)}),Object(x.jsx)(M.a,{align:"right",children:"".concat(n.isin)})]},n.isin))})),e}()})]})})}i(63);var B=function(e){var n=e.description;return Object(x.jsxs)("div",{className:"description-container",children:[Object(x.jsx)("p",{children:Object(x.jsx)("u",{children:"Description:"})}),"  ",n]})},H=(i(64),function(e){var n=e.text,i=e.to,t=Object(m.f)();return Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:"button",onClick:function(){t("".concat(i))},children:n})})}),W=(i(65),i(46)),w=i(11);w.d.register(w.c,w.i,w.k,w.h,w.o,w.p,w.f);var P=function(e){var n=e.data,i=e.options;return Object(x.jsx)("div",{children:Object(x.jsx)(W.a,{style:{height:"50vh",width:"50vw"},options:i,data:n})})};function V(){var e=Object(m.e)().state,n=Object(t.useState)([]),i=Object(E.a)(n,2),a=i[0],c=i[1],s=Object(t.useState)(!0),d=Object(E.a)(s,2),r=d[0],o=d[1],l=Object(t.useState)(!0),h=Object(E.a)(l,2),j=h[0],b=h[1],u=Object(t.useState)([]),O=Object(E.a)(u,2),v=O[0],g=O[1];Object(t.useEffect)((function(){var n="http://localhost:8080/stock/value/".concat(e.symbol,".XETRA"),i="https://www.alphavantage.co/query?function=MAMA&symbol=".concat(e.symbol,"&interval=daily&series_type=close&fastlimit=0.02&apikey=").concat("RFPSJQBOAQINO7QV");fetch(n).then((function(e){return e.json()})).then((function(e){c(e),o(!1)})),fetch(i).then((function(e){return e.json()})).then((function(e){var n=[],i=e["Technical Analysis: MAMA"];Object.entries(i).map((function(e){n.push(e)})),g(n),b(!1)}))}),[e.symbol]);var f=v.map((function(e){return e[0]})),A={labels:f,datasets:[{label:"FAMA",data:v.map((function(e){return e[1].FAMA})),borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"MAMA",data:v.map((function(e){return e[1].MAMA})),borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]};return Object(x.jsxs)("div",{children:[Object(x.jsx)(H,{className:"button",to:"/daxValues",text:"\u276e"}),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("u",{children:Object(x.jsx)("h1",{children:e.name})}),Object(x.jsx)("div",{className:"content",children:r?"...loading":Object(x.jsx)(B,{description:a.description})}),Object(x.jsx)("div",{children:j?"... data is loading":Object(x.jsx)(P,{data:A,options:{responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Data from API"}}}})})]})]})}var L=i(10);var G=function(e,n){var i=Object(t.useState)((function(){return function(e,n){if("undefined"!==typeof window){var i=localStorage.getItem(e);return null!==i?JSON.parse(i):n}}(e,n)})),a=Object(E.a)(i,2),c=a[0],s=a[1];return Object(t.useEffect)((function(){localStorage.setItem(e,JSON.stringify(c))}),[e,c]),[c,s]};i(66);var U=function(e){var n=e.addTask,i=Object(t.useState)(""),a=Object(E.a)(i,2),c=a[0],s=a[1],d=Object(t.useState)(""),r=Object(E.a)(d,2),o=r[0],l=r[1],h=Object(t.useState)(1),j=Object(E.a)(h,2),b=j[0],u=j[1];return Object(x.jsxs)("div",{className:"task-container",children:[Object(x.jsx)("input",{style:{backgroundColor:"white"},disabled:!0,placeholder:"DATUM"}),Object(x.jsx)("input",{type:"text",placeholder:"UNTERNEHMEN",onChange:function(e){s(e.target.value)},value:c}),Object(x.jsx)("button",{className:"submitButton",onClick:function(){u(b+1),n({name:c,notes:o,id:b}),s(""),l("")},children:"ADD"}),Object(x.jsx)("textarea",{cols:"5",rows:"10",className:"inputNotes",type:"text",placeholder:"NOTIZEN",onChange:function(e){l(e.target.value)},value:o})]})},J=function(){return Object(x.jsx)("div",{children:"\u2716"})},Q=(i(67),function(e){var n=e.stockName,i=e.notes,t=e.id,a=e.onDelete;return Object(x.jsxs)("div",{className:"task-container",children:[Object(x.jsx)("div",{className:"taskItem",children:function(){var e=new Date;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}()}),Object(x.jsx)("div",{className:"taskItem",children:Object(x.jsx)("u",{children:n})}),Object(x.jsx)("div",{onClick:function(){a(t)},id:"removeIcon",children:Object(x.jsx)(J,{})}),Object(x.jsx)("div",{className:"taskItem",id:"notes",children:i})]})}),Y=(i(68),function(e){var n=e.tasks,i=e.onDelete;return Object(x.jsx)("div",{className:"container",children:n.map((function(e){return Object(x.jsx)(Q,{id:e.id,stockName:e.name,notes:e.notes,onDelete:i},e.id)}))})}),z=(i(69),function(){var e=G("tasks",[]),n=Object(E.a)(e,2),i=n[0],t=n[1];return Object(x.jsxs)("div",{className:"notes-container",children:[Object(x.jsx)("u",{children:Object(x.jsx)("h1",{children:"Notizen"})}),Object(x.jsx)(U,{addTask:function(e){t((function(n){return[].concat(Object(L.a)(n),[e])}))}}),Object(x.jsx)(Y,{tasks:i,onDelete:function(e){var n=i.filter((function(n){return n.id!==e}));t(n)}})]})});var Z=function(){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(O,{}),Object(x.jsxs)(m.c,{children:[Object(x.jsx)(m.a,{path:"/",element:Object(x.jsx)(R,{})}),Object(x.jsx)(m.a,{path:"/notes",element:Object(x.jsx)(z,{})}),Object(x.jsx)(m.a,{path:"/daxValues",element:Object(x.jsx)(_,{})}),Object(x.jsx)(m.a,{path:"/indexDetails",element:Object(x.jsx)(V,{})})]})]}),Object(x.jsx)("div",{className:"footer",children:Object(x.jsx)(f,{})})]})},K=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,93)).then((function(n){var i=n.getCLS,t=n.getFID,a=n.getFCP,c=n.getLCP,s=n.getTTFB;i(e),t(e),a(e),c(e),s(e)}))},q=i(21);s.a.render(Object(x.jsx)(q.a,{children:Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(Z,{})})}),document.getElementById("root")),K()}},[[71,1,2]]]);
//# sourceMappingURL=main.21fbd5c9.chunk.js.map