import{C as c}from"./CommonNavbar-BhIZaCLC.js";import{d as b,_ as u,c as m,b as v,a as s,f as a,F as g,o as p,r as f}from"./index-W9UAkHyD.js";const h=b({name:"alerts_",components:{CommonNavbar:c},setup(){return{}},mounted:function(){window.addEventListener("scroll",this.setScrollVal)},methods:{scrollView(e){document.querySelectorAll(".scrollAccordian")[e].scrollIntoView({behavior:"smooth",block:"start"})},setScrollVal(){var n,o,r;let e=document.querySelectorAll(".scrollAccordian"),l=document.querySelectorAll(".scroll");for(let i=0;i<e.length;i++)e[i].getBoundingClientRect().top<2?(n=l[i].parentElement)==null||n.classList.add("active"):(o=l[i].parentElement)==null||o.classList.remove("active"),e[i].getBoundingClientRect().bottom<=-1&&((r=l[i].parentElement)==null||r.classList.remove("active"))}}}),y={class:"container-fluid"},w={class:"element-area"},k={class:"demo-right"},x={class:"demo-right-inner dz-scroll",id:"right-sidebar"},S={class:"dz-scroll demo-right-tabs",id:"rightSidebarScroll"},C={class:"navbar-nav",id:"menu-bar"};function M(e,l,n,o,r,i){const d=f("CommonNavbar");return p(),m(g,null,[v(d,{page:"Bootstrap",path:"Alert"}),s("div",y,[l[19]||(l[19]=s("div",{class:"row"},[s("div",{class:"col-xl-12"})],-1)),s("div",w,[l[18]||(l[18]=s("div",{class:"demo-view"},[s("div",{class:"container-fluid pt-0 ps-0 pe-lg-4 pe-0"},[s("div",{class:"row"},[s("div",{class:"col-xl-12"},[s("div",{class:"card dz-card scrollAccordian",id:"basic-alerts"},[s("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[s("div",null,[s("h4",{class:"card-title"},"Basic Alerts"),s("p",{class:"subtitle mb-0"},"Bootstrap default style")]),s("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#Preview",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),s("div",{class:"tab-content",id:"myTabContent"},[s("div",{class:"tab-pane fade show active",id:"Preview",role:"tabpanel","aria-labelledby":"home-tab"},[s("div",{class:"card-body pt-0"},[s("div",{class:"alert alert-primary alert-dismissible fade show"},[s("svg",{viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"me-2"},[s("circle",{cx:"12",cy:"12",r:"10"}),s("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),s("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),s("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"})]),s("strong",null,"Welcome!"),a(" Message has been sent. "),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])])]),s("div",{class:"alert alert-secondary alert-dismissible fade show"},[s("svg",{viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"me-2"},[s("path",{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"})]),s("strong",null,"Done!"),a(" Your profile photo updated. "),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])])]),s("div",{class:"alert alert-success alert-dismissible fade show"},[s("svg",{viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"me-2"},[s("polyline",{points:"9 11 12 14 22 4"}),s("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]),s("strong",null,"Success!"),a(" Message has been sent. "),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])])]),s("div",{class:"alert alert-info alert-dismissible fade show"},[s("svg",{viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"me-2"},[s("circle",{cx:"12",cy:"12",r:"10"}),s("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),s("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]),s("strong",null,"Info!"),a(" You have got 5 new email. "),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])])]),s("div",{class:"alert alert-warning alert-dismissible fade show"},[s("svg",{viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"me-2"},[s("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),s("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),s("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]),s("strong",null,"Warning!"),a(" Something went wrong. Please check. "),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])])]),s("div",{class:"alert alert-danger alert-dismissible fade show"},[s("svg",{viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"me-2"},[s("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),s("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),s("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]),s("strong",null,"Error!"),a(" Message sending failed. "),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])])]),s("div",{class:"alert alert-dark alert-dismissible fade show"},[s("svg",{viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"me-2"},[s("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),s("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),s("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]),s("strong",null,"Error!"),a(" You successfully read this important alert message. "),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])])]),s("div",{class:"alert alert-light alert-dismissible fade show"},[s("svg",{viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"me-2"},[s("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),s("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),s("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]),s("strong",null,"Error!"),a(" You successfully read this message.. "),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])])])])]),s("div",{class:"tab-pane fade",id:"html",role:"tabpanel","aria-labelledby":"home-tab"},[s("div",{class:"card-body p-0 code-area"},[s("pre",{class:"mb-0"},[s("code",{class:"language-html"},`
<div class="alert alert-primary alert-dismissible fade show">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
    <strong>Welcome!</strong> Message has been sent.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
</div>
<div class="alert alert-secondary alert-dismissible fade show">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
    <strong>Done!</strong> Your profile photo updated.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
</div>
<div class="alert alert-success alert-dismissible fade show">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>	
    <strong>Success!</strong> Message has been sent.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
</div>
<div class="alert alert-info alert-dismissible fade show">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <strong>Info!</strong> You have got 5 new email.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
</div>
<div class="alert alert-warning alert-dismissible fade show">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    <strong>Warning!</strong> Something went wrong. Please check.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
</div>
<div class="alert alert-danger alert-dismissible fade show">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
    <strong>Error!</strong> Message sending failed.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
</div>
<div class="alert alert-dark alert-dismissible fade show">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
    <strong>Error!</strong> You successfully read this important alert message.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
</div>
<div class="alert alert-light alert-dismissible fade show">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
    <strong>Error!</strong> You successfully read this message..
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
</div>`)])])])])])]),s("div",{class:"col-xl-12"},[s("div",{class:"card dz-card scrollAccordian",id:"color-alerts"},[s("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[s("div",null,[s("h4",{class:"card-title"},"Solid color alerts"),s("p",{class:"subtitle mb-0"},[a(" add "),s("code",null,".solid"),a(" class to change the solid color. ")])]),s("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-1",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"home-tab-1","data-bs-toggle":"tab","data-bs-target":"#colorAlerts",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"profile-tab-1","data-bs-toggle":"tab","data-bs-target":"#colorAlerts-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),s("div",{class:"tab-content",id:"myTabContent-1"},[s("div",{class:"tab-pane fade show active",id:"colorAlerts",role:"tabpanel","aria-labelledby":"home-tab-1"},[s("div",{class:"card-body pt-0"},[s("div",{class:"alert alert-primary solid alert-dismissible fade show"},[s("svg",{viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"me-2"},[s("circle",{cx:"12",cy:"12",r:"10"}),s("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),s("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),s("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"})]),s("strong",null,"Welcome!"),a(" Message has been sent. "),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])])]),s("div",{class:"alert alert-secondary solid alert-dismissible fade show"},[s("svg",{viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"me-2"},[s("path",{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"})]),s("strong",null,"Done!"),a(" Your profile photo updated. "),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])])]),s("div",{class:"alert alert-success solid alert-dismissible fade show"},[s("svg",{viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"me-2"},[s("polyline",{points:"9 11 12 14 22 4"}),s("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]),s("strong",null,"Success!"),a(" Message has been sent. "),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])])]),s("div",{class:"alert alert-info solid alert-dismissible fade show"},[s("svg",{viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"me-2"},[s("circle",{cx:"12",cy:"12",r:"10"}),s("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),s("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]),s("strong",null,"Info!"),a(" You have got 5 new email. "),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])])]),s("div",{class:"alert alert-warning solid alert-dismissible fade show"},[s("svg",{viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"me-2"},[s("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),s("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),s("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]),s("strong",null,"Warning!"),a(" Something went wrong. Please check. "),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])])]),s("div",{class:"alert alert-danger solid alert-dismissible fade show"},[s("svg",{viewBox:"0 0 24 24",width:"24 ",height:"24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"me-2"},[s("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),s("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),s("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]),s("strong",null,"Error!"),a(" Message sending failed. "),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])])]),s("div",{class:"alert alert-dark solid alert-dismissible fade show"},[s("svg",{viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"me-2"},[s("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),s("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),s("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]),s("strong",null,"Error!"),a(" You successfully read this important alert message. "),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])])]),s("div",{class:"alert alert-light solid alert-dismissible fade show"},[s("svg",{viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"me-2"},[s("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),s("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),s("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]),s("strong",null,"Error!"),a(" You successfully read this message.. "),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])])])])]),s("div",{class:"tab-pane fade",id:"colorAlerts-html",role:"tabpanel","aria-labelledby":"home-tab-1"},[s("div",{class:"card-body p-0 code-area"},[s("pre",{class:"mb-0"},[s("code",{class:"language-html"},`  <div class="alert alert-primary solid alert-dismissible fade show">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
    <strong>Welcome!</strong> Message has been sent.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
</div>
<div class="alert alert-secondary solid alert-dismissible fade show">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
    <strong>Done!</strong> Your profile photo updated.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
</div>

<div class="alert alert-success solid alert-dismissible fade show">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
    <strong>Success!</strong> Message has been sent.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
</div>
<div class="alert alert-info solid alert-dismissible fade show">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <strong>Info!</strong> You have got 5 new email.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
</div>
<div class="alert alert-warning solid alert-dismissible fade show">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    <strong>Warning!</strong> Something went wrong. Please check.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
</div>
<div class="alert alert-danger solid alert-dismissible fade show">
    <svg viewBox="0 0 24 24" width="24 " height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
    <strong>Error!</strong> Message sending failed.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
</div>
<div class="alert alert-dark solid alert-dismissible fade show">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
    <strong>Error!</strong> You successfully read this important alert message.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
</div>
<div class="alert alert-light solid alert-dismissible fade show">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
    <strong>Error!</strong> You successfully read this message..
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
</div>`)])])])])])]),s("div",{class:"col-xl-12"},[s("div",{class:"card dz-card scrollAccordian",id:"square-alerts"},[s("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[s("div",null,[s("h4",{class:"card-title"},"Square alerts"),s("p",{class:"mb-0 subtitle"},[a(" add "),s("code",null,".alert-square"),a(" class to change the solid color. ")])]),s("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-2",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"home-tab-2","data-bs-toggle":"tab","data-bs-target":"#SquareAlerts",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"profile-tab-2","data-bs-toggle":"tab","data-bs-target":"#SquareAlerts-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),s("div",{class:"tab-content",id:"myTabContent-2"},[s("div",{class:"tab-pane fade show active",id:"SquareAlerts",role:"tabpanel","aria-labelledby":"home-tab-2"},[s("div",{class:"card-body pt-0"},[s("div",{class:"alert alert-primary solid alert-square"},[s("strong",null,"Welcome!"),a(" Message has been sent. ")]),s("div",{class:"alert alert-secondary solid alert-square"},[s("strong",null,"Done!"),a(" Your profile photo updated. ")]),s("div",{class:"alert alert-success solid alert-square"},[s("strong",null,"Success!"),a(" Message has been sent. ")]),s("div",{class:"alert alert-info solid alert-square"},[s("strong",null,"Info!"),a(" You have got 5 new email. ")]),s("div",{class:"alert alert-warning solid alert-square"},[s("strong",null,"Warning!"),a(" Something went wrong. Please check. ")]),s("div",{class:"alert alert-danger solid alert-square"},[s("strong",null,"Error!"),a(" Message sending failed. ")]),s("div",{class:"alert alert-dark solid alert-square"},[s("strong",null,"Error!"),a(" You successfully read this important alert message. ")]),s("div",{class:"alert alert-light solid alert-square"},[s("strong",null,"Error!"),a(" You successfully read this message.. ")])])]),s("div",{class:"tab-pane fade",id:"SquareAlerts-html",role:"tabpanel","aria-labelledby":"home-tab-2"},[s("div",{class:"card-body p-0 code-area"},[s("pre",{class:"mb-0"},[s("code",{class:"language-html"},`<div class="alert alert-primary solid alert-square"><strong>Welcome!</strong> Message has been sent.</div>
<div class="alert alert-secondary solid alert-square"><strong>Done!</strong> Your profile photo updated.</div>
<div class="alert alert-success solid alert-square "><strong>Success!</strong> Message has been sent.</div>
<div class="alert alert-info solid alert-square "><strong>Info!</strong> You have got 5 new email.</div>
<div class="alert alert-warning solid alert-square "><strong>Warning!</strong> Something went wrong. Please check.</div>
<div class="alert alert-danger solid alert-square "><strong>Error!</strong> Message sending failed.</div>
<div class="alert alert-dark solid alert-square"><strong>Error!</strong> You successfully read this important alert message.</div>
<div class="alert alert-light solid alert-square"><strong>Error!</strong> You successfully read this message..</div>`)])])])])])]),s("div",{class:"col-xl-12"},[s("div",{class:"card dz-card scrollAccordian",id:"rounded-alerts"},[s("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[s("div",null,[s("h4",{class:"card-title"},"Rounded alerts"),s("p",{class:"mb-0 subtitle"},[a(" add "),s("code",null,".alert-rounded"),a(" class to change the solid color. ")])]),s("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-3",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"home-tab-3","data-bs-toggle":"tab","data-bs-target":"#RoundedAlerts",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"profile-tab-3","data-bs-toggle":"tab","data-bs-target":"#RoundedAlerts-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),s("div",{class:"tab-content",id:"myTabContent-3"},[s("div",{class:"tab-pane fade show active",id:"RoundedAlerts",role:"tabpanel","aria-labelledby":"home-tab-3"},[s("div",{class:"card-body pt-0"},[s("div",{class:"alert alert-primary solid alert-rounded"},[s("strong",null,"Welcome!"),a(" Message has been sent. ")]),s("div",{class:"alert alert-secondary solid alert-rounded"},[s("strong",null,"Done!"),a(" Your profile photo updated. ")]),s("div",{class:"alert alert-success solid alert-rounded"},[s("strong",null,"Success!"),a(" Message has been sent. ")]),s("div",{class:"alert alert-info solid alert-rounded"},[s("strong",null,"Info!"),a(" You have got 5 new email. ")]),s("div",{class:"alert alert-warning solid alert-rounded"},[s("strong",null,"Warning!"),a(" Something went wrong. Please check. ")]),s("div",{class:"alert alert-danger solid alert-rounded"},[s("strong",null,"Error!"),a(" Message sending failed. ")]),s("div",{class:"alert alert-dark solid alert-rounded"},[s("strong",null,"Error!"),a(" You successfully read this important alert message. ")]),s("div",{class:"alert alert-light solid alert-rounded"},[s("strong",null,"Error!"),a(" You successfully read this message.. ")])])]),s("div",{class:"tab-pane fade",id:"RoundedAlerts-html",role:"tabpanel","aria-labelledby":"home-tab-3"},[s("div",{class:"card-body p-0 code-area"},[s("pre",{class:"mb-0"},[s("code",{class:"language-html"},`<div class="alert alert-primary solid alert-rounded"><strong>Welcome!</strong> Message has been sent.</div>
<div class="alert alert-secondary solid alert-rounded"><strong>Done!</strong> Your profile photo updated.</div>
<div class="alert alert-success solid alert-rounded "><strong>Success!</strong> Message has been sent.</div>
<div class="alert alert-info solid alert-rounded "><strong>Info!</strong> You have got 5 new email.</div>
<div class="alert alert-warning solid alert-rounded "><strong>Warning!</strong> Something went wrong. Please check.</div>
<div class="alert alert-danger solid alert-rounded "><strong>Error!</strong> Message sending failed.</div>
<div class="alert alert-dark solid alert-rounded"><strong>Error!</strong> You successfully read this important alert message.</div>
<div class="alert alert-light solid alert-rounded"><strong>Error!</strong> You successfully read this message..</div>`)])])])])])]),s("div",{class:"col-xl-12"},[s("div",{class:"card dz-card scrollAccordian",id:"dismissable-alerts"},[s("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[s("div",null,[s("h4",{class:"card-title"},"Dismissable Alerts"),s("p",{class:"subtitle mb-0"},"Bootstrap default style")]),s("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-4",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"home-tab-4","data-bs-toggle":"tab","data-bs-target":"#DismissableAlerts",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"profile-tab-4","data-bs-toggle":"tab","data-bs-target":"#DismissableAlerts-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),s("div",{class:"tab-content",id:"myTabContent-4"},[s("div",{class:"tab-pane fade show active",id:"DismissableAlerts",role:"tabpanel","aria-labelledby":"home-tab-4"},[s("div",{class:"card-body pt-0"},[s("div",{class:"alert alert-primary alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Success!"),a(" Message has been sent. ")]),s("div",{class:"alert alert-secondary alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Success!"),a(" Message has been sent. ")]),s("div",{class:"alert alert-success alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Success!"),a(" Message has been sent. ")]),s("div",{class:"alert alert-info alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Info!"),a(" You have got 5 new email. ")]),s("div",{class:"alert alert-warning alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Warning!"),a(" Something went wrong. Please check. ")]),s("div",{class:"alert alert-danger alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")]),s("div",{class:"alert alert-dark alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")]),s("div",{class:"alert alert-light alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")])])]),s("div",{class:"tab-pane fade",id:"DismissableAlerts-html",role:"tabpanel","aria-labelledby":"home-tab-4"},[s("div",{class:"card-body p-0 code-area"},[s("pre",{class:"mb-0"},[s("code",{class:"language-html"},`<div class="alert alert-primary alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Success!</strong> Message has been sent.
</div>
<div class="alert alert-secondary alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Success!</strong> Message has been sent.
</div>
<div class="alert alert-success alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Success!</strong> Message has been sent.
</div>
<div class="alert alert-info alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Info!</strong> You have got 5 new email.
</div>
<div class="alert alert-warning alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Warning!</strong> Something went wrong. Please check.
</div>
<div class="alert alert-danger alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Message Sending failed.
</div>
<div class="alert alert-dark alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Message Sending failed.
</div>
<div class="alert alert-light alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Message Sending failed.
</div>`)])])])])])]),s("div",{class:"col-xl-12"},[s("div",{class:"card dz-card scrollAccordian",id:"alerts-alt"},[s("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[s("div",null,[s("h4",{class:"card-title"},"Alerts alt"),s("p",{class:"mb-0 subtitle"},[a(" add "),s("code",null,".alert-alt"),a(" class to change the solid color. ")])]),s("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-5",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"home-tab-5","data-bs-toggle":"tab","data-bs-target":"#AlertsAlt",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"profile-tab-5","data-bs-toggle":"tab","data-bs-target":"#AlertsAlt-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),s("div",{class:"tab-content",id:"myTabContent-5"},[s("div",{class:"tab-pane fade show active",id:"AlertsAlt",role:"tabpanel","aria-labelledby":"home-tab-5"},[s("div",{class:"card-body pt-0"},[s("div",{class:"alert alert-primary alert-dismissible alert-alt fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Success!"),a(" Message has been sent. ")]),s("div",{class:"alert alert-secondary alert-dismissible alert-alt fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Success!"),a(" Message has been sent. ")]),s("div",{class:"alert alert-success alert-dismissible alert-alt fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Success!"),a(" Message has been sent. ")]),s("div",{class:"alert alert-info alert-dismissible alert-alt fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Info!"),a(" You have got 5 new email. ")]),s("div",{class:"alert alert-warning alert-dismissible alert-alt fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Warning!"),a(" Something went wrong. Please check. ")]),s("div",{class:"alert alert-danger alert-dismissible alert-alt fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")]),s("div",{class:"alert alert-dark alert-dismissible alert-alt fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")]),s("div",{class:"alert alert-light alert-dismissible alert-alt fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")])])]),s("div",{class:"tab-pane fade",id:"AlertsAlt-html",role:"tabpanel","aria-labelledby":"home-tab-5"},[s("div",{class:"card-body p-0 code-area"},[s("pre",{class:"mb-0"},[s("code",{class:"language-html"},`<div class="alert alert-primary alert-dismissible alert-alt fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Success!</strong> Message has been sent.
</div>
<div class="alert alert-secondary alert-dismissible alert-alt fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Success!</strong> Message has been sent.
</div>
<div class="alert alert-success alert-dismissible alert-alt fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Success!</strong> Message has been sent.
</div>
<div class="alert alert-info alert-dismissible alert-alt fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Info!</strong> You have got 5 new email.
</div>
<div class="alert alert-warning alert-dismissible alert-alt fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Warning!</strong> Something went wrong. Please check.
</div>
<div class="alert alert-danger alert-dismissible alert-alt fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Message Sending failed.
</div>
<div class="alert alert-dark alert-dismissible alert-alt fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Message Sending failed.
</div>
<div class="alert alert-light alert-dismissible alert-alt fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Message Sending failed.
</div>`)])])])])])]),s("div",{class:"col-xl-12"},[s("div",{class:"card dz-card scrollAccordian",id:"solid-alt"},[s("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[s("div",null,[s("h4",{class:"card-title"},"Solid Alt"),s("p",{class:"mb-0 subtitle"},[a(" add "),s("code",null,".alert-alt.solid"),a(" class to change the solid color. ")])]),s("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-6",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"home-tab-6","data-bs-toggle":"tab","data-bs-target":"#SolidAlt",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"profile-tab-6","data-bs-toggle":"tab","data-bs-target":"#SolidAlt-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),s("div",{class:"tab-content",id:"myTabContent-6"},[s("div",{class:"tab-pane fade show active",id:"SolidAlt",role:"tabpanel","aria-labelledby":"home-tab-6"},[s("div",{class:"card-body pt-0"},[s("div",{class:"alert alert-primary alert-dismissible alert-alt solid fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Success!"),a(" Message has been sent. ")]),s("div",{class:"alert alert-secondary alert-dismissible alert-alt solid fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Success!"),a(" Message has been sent. ")]),s("div",{class:"alert alert-success alert-dismissible alert-alt solid fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Success!"),a(" Message has been sent. ")]),s("div",{class:"alert alert-info alert-dismissible alert-alt solid fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Info!"),a(" You have got 5 new email. ")]),s("div",{class:"alert alert-warning alert-dismissible alert-alt solid fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Warning!"),a(" Something went wrong. Please check. ")]),s("div",{class:"alert alert-danger alert-dismissible alert-alt solid fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")]),s("div",{class:"alert alert-dark alert-dismissible alert-alt solid fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")]),s("div",{class:"alert alert-light alert-dismissible alert-alt solid fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")])])]),s("div",{class:"tab-pane fade",id:"SolidAlt-html",role:"tabpanel","aria-labelledby":"home-tab-6"},[s("div",{class:"card-body p-0 code-area"},[s("pre",{class:"mb-0"},[s("code",{class:"language-html"},`<div class="alert alert-primary alert-dismissible alert-alt solid fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Success!</strong> Message has been sent.
</div>
<div class="alert alert-secondary alert-dismissible alert-alt solid fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Success!</strong> Message has been sent.
</div>
<div class="alert alert-success alert-dismissible alert-alt solid fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Success!</strong> Message has been sent.
</div>
<div class="alert alert-info alert-dismissible alert-alt solid fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Info!</strong> You have got 5 new email.
</div>
<div class="alert alert-warning alert-dismissible alert-alt solid fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Warning!</strong> Something went wrong. Please check.
</div>
<div class="alert alert-danger alert-dismissible alert-alt solid fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Message Sending failed.
</div>
<div class="alert alert-dark alert-dismissible alert-alt solid fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Message Sending failed.
</div>
<div class="alert alert-light alert-dismissible alert-alt solid fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Message Sending failed.
</div>`)])])])])])]),s("div",{class:"col-xl-12"},[s("div",{class:"card dz-card scrollAccordian",id:"dismissable-solid"},[s("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[s("div",null,[s("h4",{class:"card-title"},"Dismissable with solid"),s("p",{class:"mb-0 subtitle"},[a(" add "),s("code",null,".solid"),a(" class to change the solid color. ")])]),s("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-7",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"home-tab-7","data-bs-toggle":"tab","data-bs-target":"#Dismissable",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"profile-tab-7","data-bs-toggle":"tab","data-bs-target":"#Dismissable-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),s("div",{class:"tab-content",id:"myTabContent-7"},[s("div",{class:"tab-pane fade show active",id:"Dismissable",role:"tabpanel","aria-labelledby":"home-tab-7"},[s("div",{class:"card-body pt-0"},[s("div",{class:"alert alert-primary solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Success!"),a(" Message has been sent. ")]),s("div",{class:"alert alert-secondary solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Success!"),a(" Message has been sent. ")]),s("div",{class:"alert alert-success solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Success!"),a(" Message has been sent. ")]),s("div",{class:"alert alert-info solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Info!"),a(" You have got 5 new email. ")]),s("div",{class:"alert alert-warning solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Warning!"),a(" Something went wrong. Please check. ")]),s("div",{class:"alert alert-danger solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")]),s("div",{class:"alert alert-dark solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")]),s("div",{class:"alert alert-light solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")])])]),s("div",{class:"tab-pane fade",id:"Dismissable-html",role:"tabpanel","aria-labelledby":"home-tab-7"},[s("div",{class:"card-body p-0 code-area"},[s("pre",{class:"mb-0"},[s("code",{class:"language-html"},`
    <div class="alert alert-primary solid alert-dismissible fade show">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
        </button>
        <strong>Success!</strong> Message has been sent.
    </div>
    <div class="alert alert-secondary solid alert-dismissible fade show">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
        </button>
        <strong>Success!</strong> Message has been sent.
    </div>
    <div class="alert alert-success solid alert-dismissible fade show">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
        </button>
        <strong>Success!</strong> Message has been sent.
    </div>
    <div class="alert alert-info solid alert-dismissible fade show">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
        </button>
        <strong>Info!</strong> You have got 5 new email.
    </div>
    <div class="alert alert-warning solid alert-dismissible fade show">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
        </button>
        <strong>Warning!</strong> Something went wrong. Please check.
    </div>
    <div class="alert alert-danger solid alert-dismissible fade show">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
        </button>
        <strong>Error!</strong> Message Sending failed.
    </div>
    <div class="alert alert-dark solid alert-dismissible fade show">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
        </button>
        <strong>Error!</strong> Message Sending failed.
    </div>
    <div class="alert alert-light solid alert-dismissible fade show">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
        </button>
        <strong>Error!</strong> Message Sending failed.
    </div>`)])])])])])]),s("div",{class:"col-xl-12"},[s("div",{class:"card dz-card scrollAccordian",id:"alert-link"},[s("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[s("div",null,[s("h4",{class:"card-title"},"Alert with Link"),s("p",{class:"mb-0 subtitle"},"Bootstrap default style")]),s("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-8",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"home-tab-8","data-bs-toggle":"tab","data-bs-target":"#AlertLink",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"profile-tab-8","data-bs-toggle":"tab","data-bs-target":"#AlertLink-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),s("div",{class:"tab-content",id:"myTabContent-8"},[s("div",{class:"tab-pane fade show active",id:"AlertLink",role:"tabpanel","aria-labelledby":"home-tab-8"},[s("div",{class:"card-body pt-0"},[s("div",{class:"alert alert-primary alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"WOW! Eveything looks OK."),s("a",{href:"#"},"Please check this one as well")]),s("div",{class:"alert alert-secondary alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"WOW! Eveything looks OK."),s("a",{href:"#"},"Please check this one as well")]),s("div",{class:"alert alert-success alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"WOW! Eveything looks OK."),s("a",{href:"#"},"Please check this one as well")]),s("div",{class:"alert alert-info alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Hey! Take a quick look."),a(),s("a",{href:"#"},"My birthday party")]),s("div",{class:"alert alert-warning alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Warning!"),a(" Why you did it to me! "),s("a",{href:"#"},"Check this out")]),s("div",{class:"alert alert-danger alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Something Went wrong "),s("a",{href:"#"},"Click here for details.")]),s("div",{class:"alert alert-dark alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Something Went wrong "),s("a",{href:"#"},"Click here for details.")]),s("div",{class:"alert alert-light alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Something Went wrong "),s("a",{href:"#"},"Click here for details.")])])]),s("div",{class:"tab-pane fade",id:"AlertLink-html",role:"tabpanel","aria-labelledby":"home-tab-8"},[s("div",{class:"card-body p-0 code-area"},[s("pre",{class:"mb-0"},[s("code",{class:"language-html"},`
<div class="alert alert-primary alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>WOW! Eveything looks OK.</strong> <a href="#">Please check this one as
        well</a>
</div>

<div class="alert alert-secondary alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>WOW! Eveything looks OK.</strong> <a href="#">Please check this one as
        well</a>
</div>

<div class="alert alert-success alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>WOW! Eveything looks OK.</strong> <a href="#">Please check this one as
        well</a>
</div>

<div class="alert alert-info alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Hey! Take a quick look.</strong> <a href="#">My birthday party</a>
</div>
<div class="alert alert-warning alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Warning!</strong> Why you did it to me! <a href="#">Check this out</a>
</div>
<div class="alert alert-danger alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Something Went wrong <a href="#">Click here for details.</a>
</div>
<div class="alert alert-dark alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Something Went wrong <a href="#">Click here for details.</a>
</div>
<div class="alert alert-light alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Something Went wrong <a href="#">Click here for details.</a>
</div>
`)])])])])])]),s("div",{class:"col-xl-12"},[s("div",{class:"card dz-card scrollAccordian",id:"alert-link-color"},[s("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[s("div",null,[s("h4",{class:"card-title"},"Alert with Link and solid color"),s("p",{class:"mb-0 subtitle"},[a(" add "),s("code",null,".solid"),a(" class to change the solid color. ")])]),s("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-9",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"home-tab-9","data-bs-toggle":"tab","data-bs-target":"#LinkSolid",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"profile-tab-9","data-bs-toggle":"tab","data-bs-target":"#LinkSolid-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),s("div",{class:"tab-content",id:"myTabContent-9"},[s("div",{class:"tab-pane fade show active",id:"LinkSolid",role:"tabpanel","aria-labelledby":"home-tab-9"},[s("div",{class:"card-body pt-0"},[s("div",{class:"alert alert-primary solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),a(" WOW! Eveything looks OK. "),s("a",{href:"#",class:"badge badge-sm light badge-primary ms-1"},"upgrade")]),s("div",{class:"alert alert-secondary solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),a(" WOW! Eveything looks OK. "),s("a",{href:"#",class:"badge badge-sm light badge-secondary ms-1"},"upgrade")]),s("div",{class:"alert alert-success solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),a(" WOW! Eveything looks OK. "),s("a",{href:"#",class:"badge badge-sm light badge-success ms-1"},"upgrade")]),s("div",{class:"alert alert-info solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),a(" Hey! Take a quick look. "),s("a",{href:"#",class:"badge badge-sm light badge-info ms-1"},"upgrade")]),s("div",{class:"alert alert-warning solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Warning!"),a(" Why you did it to me! "),s("a",{href:"#",class:"badge badge-sm light badge-warning ms-1"},"upgrade")]),s("div",{class:"alert alert-danger solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Something Went wrong "),s("a",{href:"#",class:"badge badge-sm light badge-danger ms-1"},"upgrade")]),s("div",{class:"alert alert-dark solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Something Went wrong "),s("a",{href:"#",class:"badge badge-sm light badge-dark ms-1"},"upgrade")]),s("div",{class:"alert alert-light solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Something Went wrong "),s("a",{href:"#",class:"badge badge-sm light badge-light ms-1"},"upgrade")])])]),s("div",{class:"tab-pane fade",id:"LinkSolid-html",role:"tabpanel","aria-labelledby":"home-tab-9"},[s("div",{class:"card-body p-0 code-area"},[s("pre",{class:"mb-0"},[s("code",{class:"language-html"},`
<div class="alert alert-primary solid alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button> WOW! Eveything looks OK. <a href="#" class="badge badge-sm light badge-primary ms-1">upgrade</a>
</div>
<div class="alert alert-secondary solid alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button> WOW! Eveything looks OK. <a href="#" class="badge badge-sm light badge-secondary ms-1">upgrade</a>
</div>
<div class="alert alert-success solid alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button> WOW! Eveything looks OK. <a href="#" class="badge badge-sm light badge-success ms-1">upgrade</a>
</div>

<div class="alert alert-info solid alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button> Hey! Take a quick look. <a href="#" class="badge badge-sm light badge-info ms-1">upgrade</a>
</div>
<div class="alert alert-warning solid alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Warning!</strong> Why you did it to me! <a href="#" class="badge badge-sm light badge-warning ms-1">upgrade</a>
</div>
<div class="alert alert-danger solid alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Something Went wrong <a href="#" class="badge badge-sm light badge-danger ms-1">upgrade</a>
</div>
<div class="alert alert-dark solid alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Something Went wrong <a href="#" class="badge badge-sm light badge-dark ms-1">upgrade</a>
</div>
<div class="alert alert-light solid alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Something Went wrong <a href="#" class="badge badge-sm light badge-light ms-1">upgrade</a>
</div>
`)])])])])])]),s("div",{class:"col-lg-12"},[s("div",{class:"card dz-card scrollAccordian",id:"notifications"},[s("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[s("div",null,[s("h4",{class:"card-title"},"Inline Notifications"),s("p",{class:"mb-0 subtitle"},"Default inline notification")]),s("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-10",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"home-tab-10","data-bs-toggle":"tab","data-bs-target":"#Notifications",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"profile-tab-10","data-bs-toggle":"tab","data-bs-target":"#Notifications-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),s("div",{class:"tab-content",id:"myTabContent-10"},[s("div",{class:"tab-pane fade show active",id:"Notifications",role:"tabpanel","aria-labelledby":"home-tab-10"},[s("div",{class:"card-body pt-0"},[s("div",{class:"row"},[s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-primary notification"},[s("p",{class:"notificaiton-title mb-2"},[s("strong",null,"Success!"),a(" Vampires The Romantic Ideology Behind Them ")]),s("p",null," The following article covers a topic that has recently moved to center stage-at lease it seems that way. "),s("button",{class:"btn btn-primary btn-sm"},"Confirm"),s("button",{class:"btn btn-link btn-sm"},"Cancel")])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-secondary notification"},[s("p",{class:"notificaiton-title mb-2"},[s("strong",null,"Success!"),a(" Vampires The Romantic Ideology Behind Them ")]),s("p",null," The following article covers a topic that has recently moved to center stage-at lease it seems that way. "),s("button",{class:"btn btn-secondary btn-sm"},"Confirm"),s("button",{class:"btn btn-link btn-sm"},"Cancel")])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-success notification"},[s("p",{class:"notificaiton-title mb-2"},[s("strong",null,"Success!"),a(" Vampires The Romantic Ideology Behind Them ")]),s("p",null," The following article covers a topic that has recently moved to center stage-at lease it seems that way. "),s("button",{class:"btn btn-success btn-sm"},"Confirm"),s("button",{class:"btn btn-link btn-sm"},"Cancel")])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-info notification"},[s("p",{class:"notificaiton-title mb-2"},[s("strong",null,"Success!"),a(" Vampires The Romantic Ideology Behind Them ")]),s("p",null," The following article covers a topic that has recently moved to center stage-at lease it seems that way. "),s("button",{class:"btn btn-info btn-sm"},"Confirm"),s("button",{class:"btn btn-link btn-sm"},"Cancel")])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-warning notification"},[s("p",{class:"notificaiton-title mb-2"},[s("strong",null,"Success!"),a(" Vampires The Romantic Ideology Behind Them ")]),s("p",null," The following article covers a topic that has recently moved to center stage-at lease it seems that way. "),s("button",{class:"btn btn-warning btn-sm"},"Confirm"),s("button",{class:"btn btn-link btn-sm"},"Cancel")])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-danger notification"},[s("p",{class:"notificaiton-title mb-2"},[s("strong",null,"Danger! "),a(" Religion And Science ")]),s("p",null," What is the loop of Creation? How is there something from nothing? In spite of the fact.. "),s("button",{class:"btn btn-danger btn-sm"},"Confirm"),s("button",{class:"btn btn-link btn-sm"},"Cancel")])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-dark notification"},[s("p",{class:"notificaiton-title mb-2"},[s("strong",null,"Danger! "),a(" Religion And Science ")]),s("p",null," What is the loop of Creation? How is there something from nothing? In spite of the fact.. "),s("button",{class:"btn btn-dark btn-sm"},"Confirm"),s("button",{class:"btn btn-link btn-sm"},"Cancel")])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-light notification"},[s("p",{class:"notificaiton-title mb-2"},[s("strong",null,"Danger! "),a(" Religion And Science ")]),s("p",null," What is the loop of Creation? How is there something from nothing? In spite of the fact.. "),s("button",{class:"btn btn-dark btn-sm"},"Confirm"),s("button",{class:"btn btn-link btn-sm"},"Cancel")])])])])]),s("div",{class:"tab-pane fade",id:"Notifications-html",role:"tabpanel","aria-labelledby":"home-tab-10"},[s("div",{class:"card-body p-0 code-area"},[s("pre",{class:"m-0"},[s("code",{class:"language-html"},`<div class="row">
    <div class="col-xl-6">
        <div class="alert alert-primary notification">
            <p class="notificaiton-title mb-2"><strong>Success!</strong> Vampires The Romantic Ideology Behind Them</p>
            <p>The following article covers a topic that has recently moved to center stage-at lease it seems that way.</p>
            <button class="btn btn-primary btn-sm">Confirm</button>
            <button class="btn btn-link btn-sm">Cancel</button>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-secondary notification">
            <p class="notificaiton-title mb-2"><strong>Success!</strong> Vampires The Romantic Ideology Behind Them</p>
            <p>The following article covers a topic that has recently moved to center stage-at lease it seems that way.</p>
            <button class="btn btn-secondary btn-sm">Confirm</button>
            <button class="btn btn-link btn-sm">Cancel</button>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-success notification">
            <p class="notificaiton-title mb-2"><strong>Success!</strong> Vampires The Romantic Ideology Behind Them</p>
            <p>The following article covers a topic that has recently moved to center stage-at lease it seems that way.</p>
            <button class="btn btn-success btn-sm">Confirm</button>
            <button class="btn btn-link btn-sm">Cancel</button>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-info notification">
            <p class="notificaiton-title mb-2"><strong>Success!</strong> Vampires The Romantic Ideology Behind Them</p>
            <p>The following article covers a topic that has recently moved to center stage-at lease it seems that way.</p>
            <button class="btn btn-info btn-sm">Confirm</button>
            <button class="btn btn-link btn-sm">Cancel</button>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-warning notification">
            <p class="notificaiton-title mb-2"><strong>Success!</strong> Vampires The Romantic Ideology Behind Them</p>
            <p>The following article covers a topic that has recently moved to center stage-at lease it seems that way.</p>
            <button class="btn btn-warning btn-sm">Confirm</button>
            <button class="btn btn-link btn-sm">Cancel</button>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-danger notification">
            <p class="notificaiton-title mb-2"><strong>Danger! </strong> Religion And Science
            </p>
            <p>What is the loop of Creation? How is there something from nothing? In spite of the fact.. </p>
            <button class="btn btn-danger btn-sm">Confirm</button>
            <button class="btn btn-link btn-sm">Cancel</button>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-dark notification">
            <p class="notificaiton-title mb-2"><strong>Danger! </strong> Religion And Science
            </p>
            <p>What is the loop of Creation? How is there something from nothing? In spite of the fact.. </p>
            <button class="btn btn-dark btn-sm">Confirm</button>
            <button class="btn btn-link btn-sm">Cancel</button>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-light notification">
            <p class="notificaiton-title mb-2"><strong>Danger! </strong> Religion And Science
            </p>
            <p>What is the loop of Creation? How is there something from nothing? In spite of the fact.. </p>
            <button class="btn btn-dark btn-sm">Confirm</button>
            <button class="btn btn-link btn-sm">Cancel</button>
        </div>
    </div>
</div>`),a()])])])])])]),s("div",{class:"col-xl-12"},[s("div",{class:"card dz-card scrollAccordian",id:"alert-icon-left"},[s("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[s("div",null,[s("h4",{class:"card-title"},"Alert Icon Left"),s("p",{class:"mb-0 subtitle"},[a(" add "),s("code",null,".alert-end-icon"),a(" to change the style ")])]),s("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-11",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"home-tab-11","data-bs-toggle":"tab","data-bs-target":"#IconLeft",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"profile-tab-11","data-bs-toggle":"tab","data-bs-target":"#IconLeft-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),s("div",{class:"tab-content",id:"myTabContent-11"},[s("div",{class:"tab-pane fade show active",id:"IconLeft",role:"tabpanel","aria-labelledby":"home-tab-11"},[s("div",{class:"card-body pt-0"},[s("div",{class:"alert alert-primary solid alert-end-icon alert-dismissible fade show"},[s("span",null,[s("i",{class:"mdi mdi-account-search"})]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),a(" Success! Message has been sent. ")]),s("div",{class:"alert alert-secondary solid alert-end-icon alert-dismissible fade show"},[s("span",null,[s("i",{class:"icon icon-bell-53"})]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),a(" Success! Message has been sent. ")]),s("div",{class:"alert alert-success solid alert-end-icon alert-dismissible fade show"},[s("span",null,[s("i",{class:"mdi mdi-check"})]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),a(" Success! Message has been sent. ")]),s("div",{class:"alert alert-info solid alert-end-icon alert-dismissible fade show"},[s("span",null,[s("i",{class:"mdi mdi-email"})]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),a(" Info! You have got 5 new email. ")]),s("div",{class:"alert alert-warning solid alert-end-icon alert-dismissible fade show"},[s("span",null,[s("i",{class:"mdi mdi-alert"})]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Warning!"),a(" Something went wrong. Please check. ")]),s("div",{class:"alert alert-danger solid alert-end-icon alert-dismissible fade show"},[s("span",null,[s("i",{class:"mdi mdi-help"})]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")]),s("div",{class:"alert alert-dark solid alert-end-icon alert-dismissible fade show"},[s("span",null,[s("i",{class:"mdi mdi-settings"})]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")]),s("div",{class:"alert alert-light solid alert-end-icon alert-dismissible fade show"},[s("span",null,[s("i",{class:"mdi mdi-cogs"})]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")])])]),s("div",{class:"tab-pane fade",id:"IconLeft-html",role:"tabpanel","aria-labelledby":"home-tab-11"},[s("div",{class:"card-body p-0 code-area"},[s("pre",{class:"m-0"},[s("code",{class:"language-html"},`<div class="alert alert-primary solid alert-end-icon alert-dismissible fade show">
    <span><i class="mdi mdi-account-search"></i></span>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button> Success! Message has been sent.
</div>
<div class="alert alert-secondary solid alert-end-icon alert-dismissible fade show">
    <span><i class="icon icon-bell-53"></i></span>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button> Success! Message has been sent.
</div>
<div class="alert alert-success solid alert-end-icon alert-dismissible fade show">
    <span><i class="mdi mdi-check"></i></span>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button> Success! Message has been sent.
</div>
<div class="alert alert-info solid alert-end-icon alert-dismissible fade show">
    <span><i class="mdi mdi-email"></i></span>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button> Info! You have got 5 new email.
</div>
<div class="alert alert-warning solid alert-end-icon alert-dismissible fade show">
    <span><i class="mdi mdi-alert"></i></span>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Warning!</strong> Something went wrong. Please check.
</div>
<div class="alert alert-danger solid alert-end-icon alert-dismissible fade show">
    <span><i class="mdi mdi-help"></i></span>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Message Sending failed.
</div>
<div class="alert alert-dark solid alert-end-icon alert-dismissible fade show">
    <span><i class="mdi mdi-settings"></i></span>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Message Sending failed.
</div>
<div class="alert alert-light solid alert-end-icon alert-dismissible fade show">
    <span><i class="mdi mdi-cogs"></i></span>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Message Sending failed.
</div>`)])])])])])]),s("div",{class:"col-xl-12"},[s("div",{class:"card dz-card scrollAccordian",id:"alert-outline"},[s("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[s("div",null,[s("h4",{class:"card-title"},"Alert Outline"),s("p",{class:"mb-0 subtitle"},[a(" add "),s("code",null,".alert-outline-primary,secondary,success..."),a(" to change the style ")])]),s("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-12",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"home-tab-12","data-bs-toggle":"tab","data-bs-target":"#AlertOutline",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"profile-tab-12","data-bs-toggle":"tab","data-bs-target":"#AlertOutline-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),s("div",{class:"tab-content",id:"myTabContent-12"},[s("div",{class:"tab-pane fade show active",id:"AlertOutline",role:"tabpanel","aria-labelledby":"home-tab-12"},[s("div",{class:"card-body pt-0"},[s("div",{class:"alert alert-outline-primary alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),a(" Success! Message has been sent. ")]),s("div",{class:"alert alert-outline-secondary alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),a(" Success! Message has been sent. ")]),s("div",{class:"alert alert-outline-success alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),a(" Success! Message has been sent. ")]),s("div",{class:"alert alert-outline-info alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),a(" Info! You have got 5 new email. ")]),s("div",{class:"alert alert-outline-warning alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Warning!"),a(" Something went wrong. Please check. ")]),s("div",{class:"alert alert-outline-danger alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")]),s("div",{class:"alert alert-outline-dark alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")]),s("div",{class:"alert alert-outline-light alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("strong",null,"Error!"),a(" Message Sending failed. ")])])]),s("div",{class:"tab-pane fade",id:"AlertOutline-html",role:"tabpanel","aria-labelledby":"home-tab-12"},[s("div",{class:"card-body p-0 code-area"},[s("pre",{class:"m-0"},[s("code",{class:"language-html"},`
    <div class="alert alert-outline-primary alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button> Success! Message has been sent.
</div>
<div class="alert alert-outline-secondary alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button> Success! Message has been sent.
</div>
<div class="alert alert-outline-success alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button> Success! Message has been sent.
</div>
<div class="alert alert-outline-info alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button> Info! You have got 5 new email.
</div>
<div class="alert alert-outline-warning alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Warning!</strong> Something went wrong. Please check.
</div>
<div class="alert alert-outline-danger alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Message Sending failed.
</div>
<div class="alert alert-outline-dark alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Message Sending failed.
</div>
<div class="alert alert-outline-light alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
    </button>
    <strong>Error!</strong> Message Sending failed.
</div>
`)])])])])])]),s("div",{class:"col-xl-12"},[s("div",{class:"card dz-card scrollAccordian",id:"alert-social"},[s("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[s("div",null,[s("h4",{class:"card-title"},"Alert Social"),s("p",{class:"mb-0 subtitle"},[a(" add "),s("code",null,".alert-social .facebook,.twitter,.linkedin,.google-plus"),a(" to change the style ")])]),s("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-13",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"home-tab-13","data-bs-toggle":"tab","data-bs-target":"#AlertSocial",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"profile-tab-13","data-bs-toggle":"tab","data-bs-target":"#AlertSocial-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),s("div",{class:"tab-content",id:"myTabContent-13"},[s("div",{class:"tab-pane fade show active",id:"AlertSocial",role:"tabpanel","aria-labelledby":"home-tab-13"},[s("div",{class:"card-body pt-0"},[s("div",{class:"row"},[s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-social facebook alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"alert-social-icon"},[s("span",null,[s("i",{class:"mdi mdi-facebook"})])]),s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-2 text-white"},"Facebook"),s("p",{class:"mb-0 text-white"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-social twitter alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"alert-social-icon"},[s("span",null,[s("i",{class:"mdi mdi-twitter"})])]),s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-2 text-white"},"Twitter"),s("p",{class:"mb-0 text-white"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-social linkedin alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"alert-social-icon"},[s("span",null,[s("i",{class:"mdi mdi-linkedin"})])]),s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-2 text-white"},"Linkedin"),s("p",{class:"mb-0 text-white"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-social google-plus alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"alert-social-icon"},[s("span",null,[s("i",{class:"mdi mdi-google-plus"})])]),s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-2 text-white"},"Google Plus"),s("p",{class:"mb-0 text-white"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])])])])]),s("div",{class:"tab-pane fade",id:"AlertSocial-html",role:"tabpanel","aria-labelledby":"home-tab-13"},[s("div",{class:"card-body p-0 code-area"},[s("pre",{class:"m-0"},[s("code",{class:"language-html"},`
    <div class="row">
    <div class="col-xl-6">
        <div class="alert alert-social facebook alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="alert-social-icon">
                    <span><i class="mdi mdi-facebook"></i></span>
                </div>
                <div class="media-body">
                    <h5 class="mt-1 mb-2 text-white">Facebook</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-social twitter alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="alert-social-icon">
                    <span><i class="mdi mdi-twitter"></i></span>
                </div>
                <div class="media-body">
                    <h5 class="mt-1 mb-2 text-white">Twitter</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-social linkedin alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="alert-social-icon">
                    <span><i class="mdi mdi-linkedin"></i></span>
                </div>
                <div class="media-body">
                    <h5 class="mt-1 mb-2 text-white">Linkedin</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-social google-plus alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="alert-social-icon">
                    <span><i class="mdi mdi-google-plus"></i></span>
                </div>
                <div class="media-body">
                    <h5 class="mt-1 mb-2 text-white">Google Plus</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
</div>`)])])])])])]),s("div",{class:"col-xl-12"},[s("div",{class:"card dz-card scrollAccordian",id:"message-alert"},[s("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[s("div",null,[s("h4",{class:"card-title"},"Message Alert"),s("p",{class:"subtitle mb-0"},"Bootstrap default style")]),s("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-14",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"home-tab-14","data-bs-toggle":"tab","data-bs-target":"#AlertMessage",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"profile-tab-14","data-bs-toggle":"tab","data-bs-target":"#AlertMessage-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),s("div",{class:"tab-content",id:"myTabContent-14"},[s("div",{class:"tab-pane fade show active",id:"AlertMessage",role:"tabpanel","aria-labelledby":"home-tab-14"},[s("div",{class:"card-body pt-0"},[s("div",{class:"row"},[s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-primary alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-1"},"Notifications"),s("p",{class:"mb-0"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-secondary alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-1"},"Notifications"),s("p",{class:"mb-0"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-success alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-1"},"Notifications"),s("p",{class:"mb-0"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-info alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-1"},"Notifications"),s("p",{class:"mb-0"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-warning alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-1"},"Notifications"),s("p",{class:"mb-0"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-danger alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-1"},"Notifications"),s("p",{class:"mb-0"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-dark alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-1"},"Notifications"),s("p",{class:"mb-0"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-light alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-1"},"Notifications"),s("p",{class:"mb-0"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])])])])]),s("div",{class:"tab-pane fade",id:"AlertMessage-html",role:"tabpanel","aria-labelledby":"home-tab-14"},[s("div",{class:"card-body p-0 code-area"},[s("pre",{class:"m-0"},[s("code",{class:"language-html"},`<div class="row">
    <div class="col-xl-6">
        <div class="alert alert-primary alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-1 mb-1">Notifications</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-secondary alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-1 mb-1">Notifications</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-success alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-1 mb-1">Notifications</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-info alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-1 mb-1">Notifications</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-warning alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-1 mb-1">Notifications</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-danger alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-1 mb-1">Notifications</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-dark alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-1 mb-1">Notifications</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-light alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-1 mb-1">Notifications</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
</div>`)])])])])])]),s("div",{class:"col-xl-12"},[s("div",{class:"card dz-card scrollAccordian",id:"message-alert-color"},[s("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[s("div",null,[s("h4",{class:"card-title"},"Message Alert with Solid color"),s("p",{class:"mb-0 subtitle"},[a("add "),s("code",null,".solid"),a(" to change the style")])]),s("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-15",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"home-tab-15","data-bs-toggle":"tab","data-bs-target":"#AlertSolidcolor",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"profile-tab-15","data-bs-toggle":"tab","data-bs-target":"#AlertSolidcolor-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),s("div",{class:"tab-content",id:"myTabContent-15"},[s("div",{class:"tab-pane fade show active",id:"AlertSolidcolor",role:"tabpanel","aria-labelledby":"home-tab-15"},[s("div",{class:"card-body pt-0"},[s("div",{class:"row"},[s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-primary solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-2 text-white"},"Notifications"),s("p",{class:"mb-0 text-white"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-secondary solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-2 text-white"},"Notifications"),s("p",{class:"mb-0 text-white"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-success solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-2 text-white"},"Notifications"),s("p",{class:"mb-0 text-white"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-info solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-2 text-white"},"Notifications"),s("p",{class:"mb-0 text-white"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-warning solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-2 text-white"},"Notifications"),s("p",{class:"mb-0 text-white"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-danger solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-2 text-white"},"Notifications"),s("p",{class:"mb-0 text-white"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-dark solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-2 text-white"},"Notifications"),s("p",{class:"mb-0 text-white"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-light solid alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-2 text-white"},"Notifications"),s("p",{class:"mb-0 text-white"}," Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])])])])])]),s("div",{class:"tab-pane fade",id:"AlertSolidcolor-html",role:"tabpanel","aria-labelledby":"home-tab-15"},[s("div",{class:"card-body p-0 code-area"},[s("pre",{class:"m-0"},[s("code",{class:"language-html"},`<div class="row">
    <div class="col-xl-6">
        <div class="alert alert-primary solid alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-1 mb-2 text-white">Notifications</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-secondary solid alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-1 mb-2 text-white">Notifications</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-success solid alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-1 mb-2 text-white">Notifications</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-info solid alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-1 mb-2 text-white">Notifications</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-warning solid alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-1 mb-2 text-white">Notifications</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-danger solid alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-1 mb-2 text-white">Notifications</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-dark solid alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-1 mb-2 text-white">Notifications</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="alert alert-light solid alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-1 mb-2">Notifications</h5>
                    <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </div>
    </div>
</div>`)])])])])])]),s("div",{class:"col-xl-12"},[s("div",{class:"card dz-card scrollAccordian",id:"alert-icon-big"},[s("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[s("div",null,[s("h4",{class:"card-title"},"Alert left icon big"),s("p",{class:"mb-0 subtitle"},[a("add "),s("code",null,".left-icon-big"),a(" to change the style")])]),s("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-16",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"home-tab-16","data-bs-toggle":"tab","data-bs-target":"#AlertLeftIcon",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"profile-tab-16","data-bs-toggle":"tab","data-bs-target":"#AlertLeftIcon-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),s("div",{class:"tab-content",id:"myTabContent-16"},[s("div",{class:"tab-pane fade show active",id:"AlertLeftIcon",role:"tabpanel","aria-labelledby":"home-tab-16"},[s("div",{class:"card-body pt-0"},[s("div",{class:"row"},[s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-primary left-icon-big alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"alert-left-icon-big"},[s("span",null,[s("i",{class:"mdi mdi-email-alert"})])]),s("div",{class:"media-body"},[s("h6",{class:"mt-1 mb-2"},"Welcome to your account, Dear user!"),s("p",{class:"mb-0"}," Please confirm your email address: email@example.com ")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-warning left-icon-big alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"alert-left-icon-big"},[s("span",null,[s("i",{class:"mdi mdi-help-circle-outline"})])]),s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-2"},"Pending!"),s("p",{class:"mb-0"},"You message sending failed.")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-success left-icon-big alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"alert-left-icon-big"},[s("span",null,[s("i",{class:"mdi mdi-check-circle-outline"})])]),s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-2"},"Congratulations!"),s("p",{class:"mb-0"},"You have successfully created a account.")])])])]),s("div",{class:"col-xl-6"},[s("div",{class:"alert alert-danger left-icon-big alert-dismissible fade show"},[s("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"btn-close"},[s("span",null,[s("i",{class:"fa-solid fa-xmark"})])]),s("div",{class:"media"},[s("div",{class:"alert-left-icon-big"},[s("span",null,[s("i",{class:"mdi mdi-alert"})])]),s("div",{class:"media-body"},[s("h5",{class:"mt-1 mb-2"},"Loading failed!"),s("p",{class:"mb-0"},"Again upload your server")])])])])])])]),s("div",{class:"tab-pane fade",id:"AlertLeftIcon-html",role:"tabpanel","aria-labelledby":"home-tab-16"},[s("div",{class:"card-body p-0 code-area"},[s("pre",{class:"m-0"},[s("code",{class:"language-html"},`<div class="row">
        <div class="col-xl-6">
            <div class="alert alert-primary left-icon-big alert-dismissible fade show">
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
                </button>
                <div class="media">
                    <div class="alert-left-icon-big">
                        <span><i class="mdi mdi-email-alert"></i></span>
                    </div>
                    <div class="media-body">
                        <h6 class="mt-1 mb-2">Welcome to your account, Dear user!</h6>
                        <p class="mb-0">Please confirm your email address: email@example.com</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="alert alert-warning left-icon-big alert-dismissible fade show">
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
                </button>
                <div class="media">
                    <div class="alert-left-icon-big">
                        <span><i class="mdi mdi-help-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h5 class="mt-1 mb-2">Pending!</h5>
                        <p class="mb-0">You message sending failed.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="alert alert-success left-icon-big alert-dismissible fade show">
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
                </button>
                <div class="media">
                    <div class="alert-left-icon-big">
                        <span><i class="mdi mdi-check-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h5 class="mt-1 mb-2">Congratulations!</h5>
                        <p class="mb-0">You have successfully created a account.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="alert alert-danger left-icon-big alert-dismissible fade show">
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i class="fa-solid fa-xmark"></i></span>
                </button>
                <div class="media">
                    <div class="alert-left-icon-big">
                        <span><i class="mdi mdi-alert"></i></span>
                    </div>
                    <div class="media-body">
                        <h5 class="mt-1 mb-2">Loading failed!</h5>
                        <p class="mb-0">Again upload your server</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`),a()])])])])])])])])],-1)),s("div",k,[s("div",x,[l[17]||(l[17]=s("h4",{class:"title"},"Alert",-1)),s("div",S,[s("ul",C,[s("li",null,[s("a",{onClick:l[0]||(l[0]=t=>e.scrollView(0)),href:"javascript:void(0)",class:"scroll"},"Basic-Alerts")]),s("li",null,[s("a",{onClick:l[1]||(l[1]=t=>e.scrollView(1)),href:"javascript:void(0)",class:"scroll"},"Solid color alerts")]),s("li",null,[s("a",{onClick:l[2]||(l[2]=t=>e.scrollView(2)),href:"javascript:void(0)",class:"scroll"},"Square Alerts")]),s("li",null,[s("a",{onClick:l[3]||(l[3]=t=>e.scrollView(3)),href:"javascript:void(0)",class:"scroll"},"Rounded Alerts")]),s("li",null,[s("a",{onClick:l[4]||(l[4]=t=>e.scrollView(4)),href:"javascript:void(0)",class:"scroll"},"Dismissable Alerts")]),s("li",null,[s("a",{onClick:l[5]||(l[5]=t=>e.scrollView(5)),href:"javascript:void(0)",class:"scroll"},"Alerts Alt")]),s("li",null,[s("a",{onClick:l[6]||(l[6]=t=>e.scrollView(6)),href:"javascript:void(0)",class:"scroll"},"Solid Alt")]),s("li",null,[s("a",{onClick:l[7]||(l[7]=t=>e.scrollView(7)),href:"javascript:void(0)",class:"scroll"},"Dismissable with solid")]),s("li",null,[s("a",{onClick:l[8]||(l[8]=t=>e.scrollView(8)),href:"javascript:void(0)",class:"scroll"},"Alert with Link")]),s("li",null,[s("a",{onClick:l[9]||(l[9]=t=>e.scrollView(9)),href:"javascript:void(0)",class:"scroll"},"Alert with Link and Solid Color")]),s("li",null,[s("a",{onClick:l[10]||(l[10]=t=>e.scrollView(10)),href:"javascript:void(0)",class:"scroll"},"Inline Notifications")]),s("li",null,[s("a",{onClick:l[11]||(l[11]=t=>e.scrollView(11)),href:"javascript:void(0)",class:"scroll"},"Alert Icon Left")]),s("li",null,[s("a",{onClick:l[12]||(l[12]=t=>e.scrollView(12)),href:"javascript:void(0)",class:"scroll"},"Alert outline")]),s("li",null,[s("a",{onClick:l[13]||(l[13]=t=>e.scrollView(13)),href:"javascript:void(0)",class:"scroll"},"Alert Social")]),s("li",null,[s("a",{onClick:l[14]||(l[14]=t=>e.scrollView(14)),href:"javascript:void(0)",class:"scroll"},"Message Alert")]),s("li",null,[s("a",{onClick:l[15]||(l[15]=t=>e.scrollView(15)),href:"javascript:void(0)",class:"scroll"},"Message Alert Color")]),s("li",null,[s("a",{onClick:l[16]||(l[16]=t=>e.scrollView(16)),href:"javascript:void(0)",class:"scroll"},"Alert left icon big ")])])])])])])])],64)}const T=u(h,[["render",M]]);export{T as default};
