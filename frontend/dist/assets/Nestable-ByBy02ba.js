import{C as b}from"./CommonNavbar-BhIZaCLC.js";import{V as f}from"./vue-draggable-next.esm-bundler-C218FRa4.js";import{d as k,_ as y,c as t,b as p,a as s,w as v,F as a,r as g,o as e,e as o,t as l}from"./index-W9UAkHyD.js";const N=k({name:"nestable_",components:{draggable:f,CommonNavbar:b},setup(){return{}},data(){return{dragging:!1,list:[{name:"Item 1",id:1},{name:"Item 2",id:2,tasks:[{name:"Item 3",id:3},{name:"Item 4",id:4},{name:"Item 5",id:5,tasks:[{name:"Item 6",id:6},{name:"Item 7",id:7},{name:"Item 8",id:8}]}]},{name:"Item 9",id:9},{name:"Item 10",id:10}],list2:[{name:"Item 11",id:11},{name:"Item 12",id:12,tasks:[{name:"Item 13",id:13},{name:"Item 14",id:14},{name:"Item 15",id:15,tasks:[{name:"Item 16",id:16},{name:"Item 17",id:17},{name:"Item 18",id:18}]}]},{name:"Item 19",id:19},{name:"Item 20",id:20}]}}}),C={class:"container-fluid vh-100"},$={class:"row"},w={class:"col-12"},V={class:"card"},x={class:"card-body"},B={class:"row"},D={class:"col-md-6"},E={class:"card-content"},F={class:"nestable"},S={class:"dd",id:"nestable"},L={class:"dd-handle"},P={class:"dd-list"},j={class:"dd-handle"},q={class:"dd-list"},z={class:"dd-handle"},A={class:"col-md-6"},G={class:"card-content"},H={class:"nestable"},J={class:"dd",id:"nestable"},K={class:"dd-handle"},M={class:"dd-list"},O={class:"dd-handle"},Q={class:"dd-list"},R={class:"dd-handle"};function T(n,i,U,W,X,Y){const I=g("CommonNavbar"),h=g("draggable");return e(),t(a,null,[p(I,{page:"Plugins",path:"Nestable"}),s("div",C,[s("div",$,[s("div",w,[s("div",V,[i[2]||(i[2]=s("div",{class:"card-header"},[s("h4",{class:"card-title"},"Nestable")],-1)),s("div",x,[s("div",B,[s("div",D,[s("div",E,[s("div",F,[s("div",S,[p(h,{class:"dd-list",list:n.list,group:"people",onStart:i[0]||(i[0]=d=>n.dragging=!0),onEnd:i[1]||(i[1]=d=>n.dragging=!1)},{default:v(()=>[(e(!0),t(a,null,o(n.list,d=>(e(),t("li",{class:"dd-item",key:d.name},[s("div",L,l(d.name),1),s("ol",P,[(e(!0),t(a,null,o(d.tasks,({name:m,tasks:r},c)=>(e(),t("li",{class:"dd-item","data-id":"3",key:c,style:{"margin-top":"5px"}},[s("div",j,l(m),1),s("ol",q,[(e(!0),t(a,null,o(r,({name:_},u)=>(e(),t("li",{class:"dd-item","data-id":"3",key:u,style:{"margin-top":"5px"}},[s("div",z,l(_),1)]))),128))])]))),128))])]))),128))]),_:1},8,["list"])])])])]),s("div",A,[s("div",G,[s("div",H,[s("div",J,[p(h,{class:"dd-list",list:n.list2,group:"people"},{default:v(()=>[(e(!0),t(a,null,o(n.list2,d=>(e(),t("li",{class:"dd-item",key:d.name},[s("div",K,l(d.name),1),s("ol",M,[(e(!0),t(a,null,o(d.tasks,({name:m,tasks:r},c)=>(e(),t("li",{class:"dd-item","data-id":"3",key:c,style:{"margin-top":"5px"}},[s("div",O,l(m),1),s("ol",Q,[(e(!0),t(a,null,o(r,({name:_},u)=>(e(),t("li",{class:"dd-item","data-id":"3",key:u,style:{"margin-top":"5px"}},[s("div",R,l(_),1)]))),128))])]))),128))])]))),128))]),_:1},8,["list"])])])])])])])])])])])],64)}const es=y(N,[["render",T]]);export{es as default};
