import{d as c,H as f,_ as d,r as l,o as n,c as o,b as p,h as j,S as a,a as t,F as x,e as b,f as P,t as V}from"./index-W9UAkHyD.js";import{m as $}from"./vue3-apexcharts-7HJDJEhS.js";import{d as C}from"./ChartsData-BHLdK6pI.js";const y=c({name:"calender_",components:{VueDatePicker:f},data(){return{date:null}},setup(){return{}}}),D={class:"card-body schedules-cal p-2"};function S(s,e,v,m,h,u){const i=l("VueDatePicker");return n(),o("div",D,[p(i,{class:"date-picker",modelValue:s.date,"onUpdate:modelValue":e[0]||(e[0]=r=>s.date=r),inline:"","auto-apply":""},null,8,["modelValue"]),e[1]||(e[1]=j('<div class="events"><h6>events</h6><div class="dz-scroll event-scroll" style="height:200px;"><div class="event-media"><div class="d-flex align-items-center"><div class="event-box"><h5 class="mb-0">20</h5><span>Mon</span></div><div class="event-data ms-2"><h5 class="mb-0"><a href="javascript:void(0)">Development planning</a></h5><span>w3it Technologies</span></div></div><span class="text-secondary">12:05 PM</span></div><div class="event-media"><div class="d-flex align-items-center"><div class="event-box"><h5 class="mb-0">20</h5><span>Mon</span></div><div class="event-data ms-2"><h5 class="mb-0"><a href="javascript:void(0)">Development planning</a></h5><span>w3it Technologies</span></div></div><span class="text-secondary">12:05 PM</span></div><div class="event-media"><div class="d-flex align-items-center"><div class="event-box"><h5 class="mb-0">20</h5><span>Mon</span></div><div class="event-data ms-2"><h5 class="mb-0"><a href="javascript:void(0)">Development planning</a></h5><span>w3it Technologies</span></div></div><span class="text-secondary">12:05 PM</span></div></div></div>',1))])}const E=d(y,[["render",S]]),M=c({name:"projectStatus",components:{apexchart:$},data(){return{doughtnutChart:C}},setup(){return{projectStatusData:[{img:a.color1,title:"Completed Projects"},{img:a.color2,title:"Progress Projects"},{img:a.color3,title:"Cancelled"},{img:a.color4,title:"Yet to Start"}]}}}),k={class:"card-body"},T={id:"projectChart",class:"project-chart"},w={class:"project-date"},H={class:"mb-0"},N=["innerHTML"];function B(s,e,v,m,h,u){const i=l("apexchart");return n(),o("div",k,[t("div",T,[p(i,{width:"250px",options:s.doughtnutChart.chartOption,series:s.doughtnutChart.series},null,8,["options","series"])]),t("div",w,[(n(!0),o(x,null,b(s.projectStatusData,({img:r,title:g},_)=>(n(),o("div",{class:"project-media",key:_},[t("p",H,[t("span",{innerHTML:r},null,8,N),P(" "+V(g),1)]),e[0]||(e[0]=t("span",null,"125 Projects",-1))]))),128))])])}const G=d(M,[["render",B]]);export{E as C,G as P};
