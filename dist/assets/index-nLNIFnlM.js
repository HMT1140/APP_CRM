import{r as o,d as c}from"./antd-kCinhVj_.js";import{u as g,A as y,g as v,E as O,C as b}from"./createLoading-B_d1gAsX.js";import"./index-DRRM9E0F.js";var p=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a},C=o.forwardRef(function(e,n){var a=e.chartRef,r=e.style,t=r===void 0?{height:"inherit"}:r,f=e.className,m=e.loading,u=e.loadingTemplate,d=e.errorTemplate,s=p(e,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),i=g(y,s),l=i.chart,h=i.container;return o.useEffect(function(){v(a,l.current)},[l.current]),o.useImperativeHandle(n,function(){return{getChart:function(){return l.current}}}),c.createElement(O,{errorTemplate:d},m&&c.createElement(b,{loadingTemplate:u,theme:e.theme}),c.createElement("div",{className:f,style:t,ref:h}))});export{C as default};
