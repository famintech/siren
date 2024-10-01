import{h as m}from"./HandlePaginatin-BIxsylJk.js";import{U as w,c as C}from"./TableArrayData-lMFgiduJ.js";import{d as g,_ as y,o as d,c as o,a,F as n,e as c,t as i,f as r,j as h,b as u,h as T,r as b}from"./index-W9UAkHyD.js";import{C as A}from"./CommonNavbar-BhIZaCLC.js";const N=g({setup(){return{...m(w,5)}}}),V={id:"projects-tbl1",class:"table"},D={class:"d-flex align-items-center"},U=["src"],R={class:"ms-2"},S={class:"mb-0 text-start text-black font-w500"},L={class:"d-flex align-items-center justify-content-between"},M={class:"dataTables_paginate paging_simple_numbers",id:"empoloyees-tblwrapper_paginate"},B=["onClick"];function E(s,t,_,x,k,P){return d(),o(n,null,[a("table",V,[t[4]||(t[4]=a("thead",null,[a("tr",null,[a("th",null,"Name"),a("th",null,"Date Added"),a("th",null,"Last active"),a("th",null,"Action")])],-1)),a("tbody",null,[(d(!0),o(n,null,c(s.paginatedData,({name:e,date:f,day:l,img:v},p)=>(d(),o("tr",{key:p},[a("td",null,[a("div",D,[a("img",{src:v,class:"avatar avatar-md rounded-circle",alt:""},null,8,U),a("div",R,[a("p",S,i(e),1),t[2]||(t[2]=a("span",null,"demo@gmail.com",-1))])])]),a("td",null,i(f),1),a("td",null,i(l),1),t[3]||(t[3]=a("td",null,[a("div",{class:"action-button"},[a("button",{type:"button",class:"btn btn-primary btn-icon-xxs"},[a("i",{class:"fas fa-pencil-alt"})]),r(" "+i(" ")+" "),a("button",{type:"button",class:"btn btn-danger btn-icon-xxs"},[a("i",{class:"fas fa-trash-alt"})])])],-1))]))),128))])]),a("div",L,[t[7]||(t[7]=a("div",{class:"dataTables_info"},"Showing 11 to 12 of "+i("")+" entries",-1)),a("div",M,[a("a",{class:"paginate_button previous",id:"empoloyees-tblwrapper_previous",onClick:t[0]||(t[0]=(...e)=>s.backPage&&s.backPage(...e))},t[5]||(t[5]=[a("i",{class:"fa-solid fa-angle-left"},null,-1)])),a("span",null,[(d(!0),o(n,null,c(Math.ceil(s.data.length/s.perPage),e=>(d(),o("a",{class:"paginate_button",key:e,style:h(`${s.addActive==e?"background-color: var(--primary); color: #fff":""}`),onClick:()=>s.goToPage(e)},i(e),13,B))),128))]),a("a",{class:"paginate_button next disabled active",onClick:t[1]||(t[1]=(...e)=>s.nextPage&&s.nextPage(...e)),"aria-controls":"empoloyees-tblwrapper","data-dt-idx":"3",tabindex:"0",id:"empoloyees-tblwrapper_next"},t[6]||(t[6]=[a("i",{class:"fa-solid fa-angle-right"},null,-1)]))])])],64)}const F=y(N,[["render",E],["__scopeId","data-v-870f3fe8"]]),I=g({setup(){return{...m(C,5)}},components:{UserTable2:F,CommonNavbar:A}}),J={class:"container-fluid"},z={class:"row"},q={class:"col-xl-9 col-lg-8"},G={class:"row"},H={class:"col-xl-12"},K={class:"card h-auto"},O={class:"card-body p-0"},Q={class:"table-responsive active-projects"},W={id:"projects-tbl",class:"table"},X={class:"d-flex align-items-center"},Y=["src"],Z={class:"ms-2"},aa={class:"mb-0 text-start text-black font-w500"},ta={class:"d-flex align-items-center justify-content-between"},sa={class:"dataTables_paginate paging_simple_numbers",id:"empoloyees-tblwrapper_paginate"},ea=["onClick"],la={class:"col-xl-12"},ia={class:"card h-auto"},da={class:"card-body p-0"},oa={class:"table-responsive active-projects"};function na(s,t,_,x,k,P){const e=b("CommonNavbar"),f=b("UserTable2");return d(),o(n,null,[u(e,{page:"App",path:"Roles Listing"}),a("div",J,[a("div",z,[t[10]||(t[10]=a("div",{class:"d-flex align-items-center justify-content-between"},[a("h4",{class:"heading mb-3"},"Account Setting"),a("a",{class:"btn btn-primary btn-sm mb-3","data-bs-toggle":"offcanvas",href:"#offcanvasExample",role:"button","aria-controls":"offcanvasExample"},"+ Add a role")],-1)),t[11]||(t[11]=T('<div class="col-xl-3 col-lg-4" data-v-d194690f><div class="row" data-v-d194690f><div class="col-xl-12" data-v-d194690f><div class="card" data-v-d194690f><div class="card-header py-3" data-v-d194690f><h4 class="heading mb-0" data-v-d194690f>Personal</h4></div><div class="card-body px-0 py-2" data-v-d194690f><ul class="personal-info" data-v-d194690f><li data-v-d194690f><a href="javascript:void(0);" data-v-d194690f><i class="fa-solid fa-user text-primary me-2" data-v-d194690f></i> Profile</a></li><li data-v-d194690f><a href="javascript:void(0);" data-v-d194690f><i class="fa-solid fa-lock text-primary me-2" data-v-d194690f></i> Password</a></li><li data-v-d194690f><a href="javascript:void(0);" data-v-d194690f><i class="fa-solid fa-calendar-days text-primary me-2" data-v-d194690f></i> Date</a></li></ul></div></div></div><div class="col-xl-12" data-v-d194690f><div class="card" data-v-d194690f><div class="card-header py-3" data-v-d194690f><h4 class="heading mb-0" data-v-d194690f>Company</h4></div><div class="card-body px-0 py-2" data-v-d194690f><ul class="personal-info" data-v-d194690f><li data-v-d194690f><a href="javascript:void(0);" data-v-d194690f><i class="fa-solid fa-building text-primary me-2" data-v-d194690f></i> Commpany Details</a></li><li data-v-d194690f><a href="javascript:void(0);" data-v-d194690f><i class="fa-solid fa-user-plus text-primary me-2" data-v-d194690f></i> Team Members</a></li><li data-v-d194690f><a href="javascript:void(0);" data-v-d194690f><i class="far fa-clock text-primary me-2" data-v-d194690f></i> Format setting</a></li><li data-v-d194690f><a href="javascript:void(0);" data-v-d194690f><i class="fa-solid fa-briefcase text-primary me-2" data-v-d194690f></i> Job boards</a></li><li data-v-d194690f><a href="javascript:void(0);" data-v-d194690f><i class="far fa-user text-primary me-2" data-v-d194690f></i> Positions</a></li><li data-v-d194690f><a href="javascript:void(0);" data-v-d194690f><i class="fas fa-times-circle text-danger me-2" data-v-d194690f></i>Rejections resions</a></li><li data-v-d194690f><a href="javascript:void(0);" data-v-d194690f><i class="fas fa-envelope text-primary me-2" data-v-d194690f></i>Automated message</a></li></ul></div></div></div></div></div>',1)),a("div",q,[a("div",G,[a("div",H,[t[8]||(t[8]=a("h4",{class:"heading mb-0"},[a("i",{class:"fa-solid fa-user-plus text-primary me-2 mb-3"}),r(" Job Management ")],-1)),a("div",K,[a("div",O,[a("div",Q,[a("table",W,[t[4]||(t[4]=a("thead",null,[a("tr",null,[a("th",null,"Name"),a("th",null,"Date Added"),a("th",null,"Last active"),a("th",null,"Action")])],-1)),a("tbody",null,[(d(!0),o(n,null,c(s.paginatedData,({name:l,date:v,day:p,img:j},$)=>(d(),o("tr",{key:$},[a("td",null,[a("div",X,[a("img",{src:j,class:"avatar avatar-md rounded-circle",alt:""},null,8,Y),a("div",Z,[a("p",aa,i(l),1),t[2]||(t[2]=a("span",null,"demo@gmail.com",-1))])])]),a("td",null,i(v),1),a("td",null,i(p),1),t[3]||(t[3]=a("td",null,[a("div",{class:"action-button"},[a("button",{type:"button",class:"btn btn-primary btn-icon-xxs"},[a("i",{class:"fas fa-pencil-alt"})]),r(" "+i(" ")+" "),a("button",{type:"button",class:"btn btn-danger btn-icon-xxs"},[a("i",{class:"fas fa-trash-alt"})])])],-1))]))),128))])]),a("div",ta,[t[7]||(t[7]=a("div",{class:"dataTables_info"},"Showing 11 to 12 of "+i("")+" entries",-1)),a("div",sa,[a("a",{class:"paginate_button previous",id:"empoloyees-tblwrapper_previous",onClick:t[0]||(t[0]=(...l)=>s.backPage&&s.backPage(...l))},t[5]||(t[5]=[a("i",{class:"fa-solid fa-angle-left"},null,-1)])),a("span",null,[(d(!0),o(n,null,c(Math.ceil(s.data.length/s.perPage),l=>(d(),o("a",{class:"paginate_button",key:l,style:h(`${s.addActive==l?"background-color: var(--primary); color: #fff":""}`),onClick:()=>s.goToPage(l)},i(l),13,ea))),128))]),a("a",{class:"paginate_button next disabled active",onClick:t[1]||(t[1]=(...l)=>s.nextPage&&s.nextPage(...l)),"aria-controls":"empoloyees-tblwrapper","data-dt-idx":"3",tabindex:"0",id:"empoloyees-tblwrapper_next"},t[6]||(t[6]=[a("i",{class:"fa-solid fa-angle-right"},null,-1)]))])])])])])]),a("div",la,[t[9]||(t[9]=a("h4",{class:"heading"},[a("i",{class:"fas fa-times-circle text-danger me-2"}),r(" Rejections resions ")],-1)),a("div",ia,[a("div",da,[a("div",oa,[u(f)])])])])])])])])],64)}const pa=y(I,[["render",na],["__scopeId","data-v-d194690f"]]);export{pa as default};
