import{C as p}from"./TableArrayData-lMFgiduJ.js";import{h as $}from"./HandlePaginatin-BIxsylJk.js";import{d as b,_ as f,o as a,c as n,h as L,R as E,S as T,i as _,s as M,u as R,a as l,f as r,F as i,e as c,t as o,b as m,w as V,n as B,j as N,r as u}from"./index-W9UAkHyD.js";const H=b({name:"addCustomer",setup(){return{}}}),z={class:"offcanvas offcanvas-end customeoff",tabindex:"-1",id:"addCustomers"};function G(e,s,d,v,g,h){return a(),n("div",z,s[0]||(s[0]=[L('<div class="offcanvas-header"><h5 class="modal-title" id="#gridSystemModal">Add Customer</h5><button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-xmark"></i></button></div><div class="offcanvas-body"><div class="container-fluid"><div><label>Profile Picture</label><div class="dz-default dlab-message upload-img mb-3"><form action="#" class="dropzone"><svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.1666 26.6667L20.4999 20L13.8333 26.6667" stroke="#DADADA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5 20V35" stroke="#DADADA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M34.4833 30.6501C36.1088 29.7638 37.393 28.3615 38.1331 26.6644C38.8731 24.9673 39.027 23.0721 38.5703 21.2779C38.1136 19.4836 37.0724 17.8926 35.6111 16.7558C34.1497 15.619 32.3514 15.0013 30.4999 15.0001H28.3999C27.8955 13.0488 26.9552 11.2373 25.6498 9.70171C24.3445 8.16614 22.708 6.94647 20.8634 6.1344C19.0189 5.32233 17.0142 4.93899 15.0001 5.01319C12.9861 5.0874 11.015 5.61722 9.23523 6.56283C7.45541 7.50844 5.91312 8.84523 4.7243 10.4727C3.53549 12.1002 2.73108 13.9759 2.37157 15.959C2.01205 17.9421 2.10678 19.9809 2.64862 21.9222C3.19047 23.8634 4.16534 25.6565 5.49994 27.1667" stroke="#DADADA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.1666 26.6667L20.4999 20L13.8333 26.6667" stroke="#DADADA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><div class="fallback"><input name="file" type="file" multiple></div></form></div></div><form><div class="row"><div class="col-xl-6 mb-3"><label for="exampleFormControlInput1" class="form-label">Employee ID <span class="text-danger">*</span></label><input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""></div><div class="col-xl-6 mb-3"><label for="exampleFormControlInput2" class="form-label">Employee Name<span class="text-danger">*</span></label><input type="text" class="form-control" id="exampleFormControlInput2" placeholder=""></div><div class="col-xl-6 mb-3"><label for="exampleFormControlInput3" class="form-label">Employee Email<span class="text-danger">*</span></label><input type="email" class="form-control" id="exampleFormControlInput3" placeholder=""></div><div class="col-xl-6 mb-3"><label for="exampleFormControlInput4" class="form-label">Password<span class="text-danger">*</span></label><input type="password" class="form-control" id="exampleFormControlInput4" placeholder=""></div><div class="col-xl-6 mb-3"><label class="form-label">Designation<span class="text-danger">*</span></label><select class="default-select style-1 form-control"><option data-display="Select">Please select</option><option value="html">Software Engineer</option><option value="css">Civil Engineer</option><option value="javascript">Web Doveloper</option></select></div><div class="col-xl-6 mb-3"><label class="form-label">Department<span class="text-danger">*</span></label><select class="default-select style-1 form-control"><option data-display="Select">Please select</option><option value="html">Software</option><option value="css">Doit</option><option value="javascript">Designing</option></select></div><div class="col-xl-6 mb-3"><label class="form-label">Country<span class="text-danger">*</span></label><select class="default-select style-1 form-control"><option data-display="Select">Please select</option><option value="html">Ind</option><option value="css">USA</option><option value="javascript">UK</option></select></div><div class="col-xl-6 mb-3"><label for="exampleFormControlInput88" class="form-label">Mobile<span class="text-danger">*</span></label><input type="number" class="form-control" id="exampleFormControlInput88" placeholder=""></div><div class="col-xl-6 mb-3"><label class="form-label">Gender<span class="text-danger">*</span></label><select class="default-select style-1 form-control"><option data-display="Select">Please select</option><option value="html">Male</option><option value="css">Female</option><option value="javascript">Other</option></select></div><div class="col-xl-6 mb-3"><label for="exampleFormControlInput99" class="form-label">Joining Date<span class="text-danger">*</span></label><input type="date" class="form-control" id="exampleFormControlInput99"></div><div class="col-xl-6 mb-3"><label for="exampleFormControlInput8" class="form-label">Date of Birth<span class="text-danger">*</span></label><input type="date" class="form-control" id="exampleFormControlInput8"></div><div class="col-xl-6 mb-3"><label for="exampleFormControlInput10" class="form-label">Reporting To<span class="text-danger">*</span></label><input type="text" class="form-control" id="exampleFormControlInput10" placeholder=""></div><div class="col-xl-6 mb-3"><label class="form-label">Language Select<span class="text-danger">*</span></label><select class="default-select style-1 form-control"><option data-display="Select">Please select</option><option value="html">English</option><option value="css">Hindi</option><option value="javascript">Canada</option></select></div><div class="col-xl-6 mb-3"><label class="form-label">User Role<span class="text-danger">*</span></label><select class="default-select style-1 form-control"><option data-display="Select">Please select</option><option value="html">Parmanent</option><option value="css">Parttime</option><option value="javascript">Per Hours</option></select></div><div class="col-xl-12 mb-3"><label class="form-label">Address<span class="text-danger">*</span></label><textarea rows="2" class="form-control"></textarea></div><div class="col-xl-12 mb-3"><label class="form-label">About<span class="text-danger">*</span></label><textarea rows="3" class="form-control"></textarea></div></div><div><button class="btn btn-danger light me-1">Cancel</button><button class="btn btn-primary me-1">Submit</button></div></form></div></div>',2)]))}const U=f(H,[["render",G]]),q=b({name:"customer_",components:{RouterLink:E,AddCustomers:U},data(){return T},setup(){const e=_(!1),{paginationLength:s}=M(R());return{...$(p,9),checkboxes:e,Customer:p,paginationLength:s}}}),J={class:"page-titles"},K={class:"breadcrumb"},O={class:"breadcrumb-item"},W={href:"javascript:void(0)"},Q=["innerHTML"],X={class:"container-fluid vh-100"},Y={class:"row"},Z={class:"col-xl-12 bst-seller"},ll={class:"card h-auto"},sl={class:"card-body p-0"},el={class:"table-responsive active-projects style-1 dt-filter exports"},tl={id:"user-tbl_wrapper",class:"dataTables_wrapper"},ol={id:"user-tbl_filter",class:"dataTables_filter"},al={id:"customer-tbl",class:"table shorting"},nl={class:""},rl={class:"form-check custom-checkbox ms-0"},il={class:"form-check custom-checkbox"},dl=["checked"],pl={class:"products"},cl=["src"],ml={href:"javascript:void(0)",class:"text-primary"},ul={class:"d-flex align-items-center justify-content-between"},bl={class:"dataTables_info"},fl={class:"dataTables_paginate paging_simple_numbers",id:"empoloyees-tblwrapper_paginate"},vl=["onClick"];function gl(e,s,d,v,g,h){const C=u("RouterLink"),x=u("AddCustomers");return a(),n(i,null,[l("div",J,[l("ol",K,[s[12]||(s[12]=l("li",null,[l("h5",{class:"bc-title"},"Dashboard")],-1)),l("li",O,[l("a",W,[l("span",{innerHTML:e.homeIcon},null,8,Q),s[11]||(s[11]=r(" Customers "))])]),s[13]||(s[13]=l("li",{class:"breadcrumb-item active"},[l("a",{href:"javascript:void(0)"},"Customers")],-1))]),s[14]||(s[14]=l("a",{class:"text-primary fs-13","data-bs-toggle":"offcanvas",href:"#offcanvasExample1",role:"button","aria-controls":"offcanvasExample1"},"+ Add Task",-1))]),l("div",X,[l("div",Y,[l("div",Z,[s[21]||(s[21]=l("div",{class:"d-flex align-items-center justify-content-between mb-4"},[l("h4",{class:"heading mb-0"},"Customer"),l("div",{class:"d-flex align-items-center"},[l("button",{type:"button",class:"btn btn-primary btn-sm me-2"},[l("i",{class:"fa-solid fa-filter me-2"}),r("Filter ")]),l("a",{class:"btn btn-primary btn-sm ms-2","data-bs-toggle":"offcanvas",href:"#addCustomers",role:"button","aria-controls":"addCustomers"},"+ Add Customer")])],-1)),l("div",ll,[l("div",sl,[l("div",el,[l("div",tl,[s[20]||(s[20]=l("div",{class:"dt-buttons"},[l("button",{class:"dt-button buttons-excel buttons-html5 btn btn-sm border-0",tabindex:"0","aria-controls":"user-tbl",type:"button",style:{"margin-top":"1rem","margin-right":"1rem"}},[l("span",null,[l("i",{class:"fa-solid fa-file-excel"}),r(" Export Report")])])],-1)),l("div",ol,[l("label",null,[s[15]||(s[15]=l("i",{class:"fa-solid fa-magnifying-glass"},null,-1)),l("input",{type:"search",class:"",placeholder:"Search...","aria-controls":"user-tbl",onInput:s[0]||(s[0]=t=>e.searchData(t.target.value))},null,32)])]),l("table",al,[l("thead",null,[l("tr",null,[l("th",nl,[l("div",rl,[l("input",{type:"checkbox",class:"form-check-input",onClick:s[1]||(s[1]=t=>e.checkboxes=!e.checkboxes),id:"checkAll",required:""}),s[16]||(s[16]=l("label",{class:"form-check-label",for:"checkAll"},null,-1))])]),l("th",{onClick:s[2]||(s[2]=(...t)=>e.sortingArr&&e.sortingArr(...t))},"Customer ID"),l("th",{onClick:s[3]||(s[3]=(...t)=>e.sortingArr&&e.sortingArr(...t))},"Customer Name"),l("th",{onClick:s[4]||(s[4]=(...t)=>e.sortingArr&&e.sortingArr(...t))},"Email Address"),l("th",{onClick:s[5]||(s[5]=(...t)=>e.sortingArr&&e.sortingArr(...t))},"Contact Number"),l("th",{onClick:s[6]||(s[6]=(...t)=>e.sortingArr&&e.sortingArr(...t))},"Gender"),l("th",{onClick:s[7]||(s[7]=(...t)=>e.sortingArr&&e.sortingArr(...t))},"Location"),l("th",{onClick:s[8]||(s[8]=(...t)=>e.sortingArr&&e.sortingArr(...t))},"Status")])]),l("tbody",null,[(a(!0),n(i,null,c(e.paginatedData,({name:t,country:k,designation:y,email:A,gender:w,id:D,phone:I,badge:P,status:S,img:F},j)=>(a(),n("tr",{key:j},[l("td",null,[l("div",il,[l("input",{checked:e.checkboxes,type:"checkbox",class:"form-check-input",id:"customCheckBox022"},null,8,dl),s[17]||(s[17]=l("label",{class:"form-check-label",for:"customCheckBox022"},null,-1))])]),l("td",null,[l("span",null,o(D),1)]),l("td",null,[l("div",pl,[l("img",{src:F,class:"avatar avatar-md",alt:""},null,8,cl),l("div",null,[l("h6",null,[m(C,{to:"/app-profile-2"},{default:V(()=>[r(o(t),1)]),_:2},1024)]),l("span",null,o(y),1)])])]),l("td",null,[l("a",ml,o(A),1)]),l("td",null,[l("span",null,o(I),1)]),l("td",null,[l("span",null,o(w),1)]),l("td",null,[l("span",null,o(k),1)]),l("td",null,[l("span",{class:B(`badge badge-${P} light border-0`)},o(S),3)])]))),128))])]),l("div",ul,[l("div",bl," Showing "+o(e.paginationLength-8)+" to "+o(e.paginationLength)+" of "+o(e.Customer.length)+" entries ",1),l("div",fl,[l("a",{class:"paginate_button previous",id:"empoloyees-tblwrapper_previous",onClick:s[9]||(s[9]=(...t)=>e.backPage&&e.backPage(...t))},s[18]||(s[18]=[l("i",{class:"fa-solid fa-angle-left"},null,-1)])),l("span",null,[(a(!0),n(i,null,c(Math.ceil(e.data.length/e.perPage),t=>(a(),n("a",{class:"paginate_button",key:t,style:N(`background-color:${e.addActive==t?"var(--primary);":""};color:${e.addActive==t?"#fff !important":""}`),onClick:()=>e.goToPage(t)},o(t),13,vl))),128))]),l("a",{class:"paginate_button next",onClick:s[10]||(s[10]=(...t)=>e.nextPage&&e.nextPage(...t)),"aria-controls":"empoloyees-tblwrapper","data-dt-idx":"3",tabindex:"0",id:"empoloyees-tblwrapper_next"},s[19]||(s[19]=[l("i",{class:"fa-solid fa-angle-right"},null,-1)]))])])])])])])])])]),m(x)],64)}const kl=f(q,[["render",gl],["__scopeId","data-v-e80f364e"]]);export{kl as default};
