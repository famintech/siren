import{d as x,R as D,S,i as h,x as M,_ as y,o as s,c as d,a as t,f as o,t as a,F as m,e as g,n as $,j as O,b as C,h as j,r as P}from"./index-W9UAkHyD.js";import{n as B,o as V,q as T,v as F}from"./TableArrayData-lMFgiduJ.js";import{h as f}from"./HandlePaginatin-BIxsylJk.js";const q=x({components:{RouterLink:D},data(){return S},methods:{setValueOption(n){this.selectOption=n,this.entryValue=this.optionArray[n].num}},setup(){const n=h(!1),e=h(0);let r=h(10),p=f(B,r.value);return M(r,k=>{p=f(B,10)},{immediate:!0}),{...p,checkboxes:n,selectOption:e,entryValue:r,optionArray:[{num:10},{num:25},{num:50},{num:100}]}}}),I={class:"col-xl-12"},z={class:"card dz-card",id:"accordion-one"},G={class:"tab-content",id:"myTabContent"},E={class:"tab-pane fade show active",id:"Preview",role:"tabpanel","aria-labelledby":"home-tab"},L={class:"card-body pt-0"},H={class:"table-responsive"},_={id:"example_wrapper"},J={class:"dataTables_length",id:"example_length"},W={class:"dropdown bootstrap-select dropup",style:{width:"auto"}},K={type:"button",tabindex:"-1",class:"btn dropdown-toggle btn-light","data-bs-toggle":"dropdown",role:"combobox","aria-owns":"bs-select-1","aria-haspopup":"listbox","aria-expanded":"false",title:"10"},Q={class:"filter-option"},U={class:"filter-option-inner"},X={class:"filter-option-inner-inner"},Y={class:"dropdown-menu",style:{"max-height":"193.067px",overflow:"hidden","min-height":"86px"}},Z={class:"inner show",role:"listbox",id:"bs-select-1",tabindex:"-1",style:{"max-height":"179.067px","overflow-y":"auto","min-height":"72px"},"aria-activedescendant":"bs-select-1-0"},tt={class:"dropdown-menu inner show",role:"presentation",style:{"margin-top":"0px","margin-bottom":"0px"}},et=["onClick"],nt=["id","aria-setsize","aria-posinset"],lt={class:"text"},at={id:"example_filter",class:"dataTables_filter"},st={id:"example",class:"display table",style:{"min-width":"845px"}},dt={class:"d-flex align-items-center justify-content-between"},it={class:"dataTables_paginate paging_simple_numbers",id:"empoloyees-tblwrapper_paginate"},ot=["onClick"];function rt(n,e,r,p,k,A){return s(),d("div",I,[t("div",z,[e[17]||(e[17]=t("div",{class:"card-header flex-wrap"},[t("div",null,[t("h4",{class:"card-title"},"Basic Datatable"),t("p",{class:"m-0 subtitle"},[o("Default datatables. Add "),t("code",null,"datatables"),o(" class in root")])]),t("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#Preview",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#html",type:"button",role:"tab","aria-controls":"html","aria-selected":"false"}," HTML ")])])],-1)),t("div",G,[t("div",E,[t("div",L,[t("div",H,[t("div",_,[t("div",J,[t("label",null,[e[9]||(e[9]=o("Show ")),t("div",W,[t("button",K,[t("div",Q,[t("div",U,[t("div",X,a(n.entryValue),1)])])]),t("div",Y,[t("div",Z,[t("ul",tt,[(s(!0),d(m,null,g(n.optionArray,({num:l},i)=>(s(),d("li",{class:"selected active",onClick:c=>n.setValueOption(i)},[t("a",{role:"option",class:$(`dropdown-item ${i===n.selectOption?"active selected":""}`),id:`bs-select-1-${i}`,tabindex:"0","aria-setsize":i+1,"aria-posinset":i+1,"aria-selected":"true"},[t("span",lt,a(l),1)],10,nt)],8,et))),256))])])])]),e[10]||(e[10]=o(" entries"))])]),t("div",at,[e[11]||(e[11]=t("label",{class:"mb-0 me-2"},"Search:",-1)),t("input",{type:"search",class:"table-data-base-search",placeholder:"",onInput:e[0]||(e[0]=l=>n.searchData(l.target.value)),"aria-controls":"example"},null,32)])]),t("table",st,[t("thead",null,[t("tr",null,[t("th",{onClick:e[1]||(e[1]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Name"),t("th",{onClick:e[2]||(e[2]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Position"),t("th",{onClick:e[3]||(e[3]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Office"),t("th",{onClick:e[4]||(e[4]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Age"),t("th",{onClick:e[5]||(e[5]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Start date"),t("th",{onClick:e[6]||(e[6]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Salary")])]),t("tbody",null,[(s(!0),d(m,null,g(n.paginatedData,({name:l,Position:i,Office:c,Age:b,Start_date:u,Salary:w},v)=>(s(),d("tr",{key:v},[t("td",null,a(l),1),t("td",null,a(i),1),t("td",null,a(c),1),t("td",null,a(b),1),t("td",null,a(u),1),t("td",null,a(w),1)]))),128))]),e[12]||(e[12]=t("tfoot",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Position"),t("th",null,"Office"),t("th",null,"Age"),t("th",null,"Start date"),t("th",null,"Salary")])],-1))]),t("div",dt,[e[15]||(e[15]=t("div",{class:"dataTables_info"},"Showing 11 to 12 of "+a("")+" entries",-1)),t("div",it,[t("a",{class:"paginate_button previous",id:"empoloyees-tblwrapper_previous",onClick:e[7]||(e[7]=(...l)=>n.backPage&&n.backPage(...l))},e[13]||(e[13]=[t("i",{class:"fa-solid fa-angle-left"},null,-1)])),t("span",null,[(s(!0),d(m,null,g(Math.ceil(n.data.length/n.perPage),l=>(s(),d("a",{class:"paginate_button",key:l,style:O(`background-color:${n.addActive==l?"var(--primary);":""};color:${n.addActive==l?"#fff !important":""}`),onClick:()=>n.goToPage(l)},a(l),13,ot))),128))]),t("a",{class:"paginate_button next",onClick:e[8]||(e[8]=(...l)=>n.nextPage&&n.nextPage(...l)),"aria-controls":"empoloyees-tblwrapper","data-dt-idx":"3",tabindex:"0",id:"empoloyees-tblwrapper_next"},e[14]||(e[14]=[t("i",{class:"fa-solid fa-angle-right"},null,-1)]))])])])])]),e[16]||(e[16]=t("div",{class:"tab-pane fade",id:"html",role:"tabpanel","aria-labelledby":"home-tab"},[t("div",{class:"card-body pt-0 p-0 code-area"},[t("pre",{class:"mb-0"},[t("code",{class:"language-html"},`
 <div class="table-responsive">
	<table id="example" class="display table" style="min-width: 845px">
		<thead>
			<tr>
				<th>Name</th>
				<th>Position</th>
				<th>Office</th>
				<th>Age</th>
				<th>Start date</th>
				<th>Salary</th>
			</tr>
		</thead>
		<tbody>
			<tr>  v-for="(
      { name, Position, Office, Age, Start_date, Salary }, ind
              ) in paginatedData"
              :key="ind"
				<td>Tiger Nixon</td>
				<td>System Architect</td>
				<td>Edinburgh</td>
				<td>61</td>
				<td>2011/04/25</td>
				<td>$320,800</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<th>Name</th>
				<th>Position</th>
				<th>Office</th>
				<th>Age</th>
				<th>Start date</th>
				<th>Salary</th>
			</tr>
		</tfoot>
	</table>
</div>
`)])])],-1))])])])}const ct=y(q,[["render",rt],["__scopeId","data-v-0082b891"]]),ht=x({components:{RouterLink:D},data(){return S},setup(){const n=h(!1),e=h(0),r=h(10);return{...f(B,10),checkboxes:n,selectOption:e,entryValue:r,optionArray:[{num:10},{num:25},{num:50},{num:100}]}},methods:{setValueOption(n){this.selectOption=n,this.entryValue=this.optionArray[n].num,f(B,this.entryValue)}}}),pt={class:"col-xl-12"},bt={class:"card dz-card",id:"accordion-two"},ut={class:"tab-content",id:"myTabContent-1"},mt={class:"tab-pane fade show active",id:"bordered",role:"tabpanel","aria-labelledby":"home-tab-1"},gt={class:"card-body"},ft={class:"table-responsive"},vt={id:"example2_wrapper",class:"dataTables_wrapper"},wt={id:"example_filter",class:"dataTables_filter"},kt={id:"table_example",class:"display table",style:{"min-width":"845px"}};function xt(n,e,r,p,k,A){return s(),d("div",pt,[t("div",bt,[e[10]||(e[10]=t("div",{class:"card-header flex-wrap d-flex justify-content-between"},[t("div",null,[t("h4",{class:"card-title"},"Datatable"),t("p",{class:"m-0 subtitle"},[o(" datatables with border. Add class "),t("code",null,"datatables-bordered"),o(" with the class "),t("code",null," datatables")])]),t("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-1",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link active",id:"home-tab-1","data-bs-toggle":"tab","data-bs-target":"#bordered",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"profile-tab-1","data-bs-toggle":"tab","data-bs-target":"#bordered-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])],-1)),t("div",ut,[t("div",mt,[t("div",gt,[t("div",ft,[t("div",vt,[t("div",wt,[e[7]||(e[7]=t("label",{class:"mb-0 me-2"},"Search:",-1)),t("input",{type:"search",class:"table-data-base-search",placeholder:"",onInput:e[0]||(e[0]=l=>n.searchData(l.target.value)),"aria-controls":"table_example"},null,32)]),t("table",kt,[t("thead",null,[t("tr",null,[t("th",{onClick:e[1]||(e[1]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Name"),t("th",{onClick:e[2]||(e[2]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Position"),t("th",{onClick:e[3]||(e[3]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Office"),t("th",{onClick:e[4]||(e[4]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Age"),t("th",{onClick:e[5]||(e[5]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Start date"),t("th",{onClick:e[6]||(e[6]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Salary")])]),t("tbody",null,[(s(!0),d(m,null,g(n.paginatedData,({name:l,Position:i,Office:c,Age:b,Start_date:u,Salary:w},v)=>(s(),d("tr",{key:v},[t("td",null,a(l),1),t("td",null,a(i),1),t("td",null,a(c),1),t("td",null,a(b),1),t("td",null,a(u),1),t("td",null,a(w),1)]))),128))]),e[8]||(e[8]=t("tfoot",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Position"),t("th",null,"Office"),t("th",null,"Age"),t("th",null,"Start date"),t("th",null,"Salary")])],-1))])])])])]),e[9]||(e[9]=t("div",{class:"tab-pane fade",id:"bordered-html",role:"tabpanel","aria-labelledby":"home-tab-1"},[t("div",{class:"card-body pt-0 p-0 code-area"},[t("pre",{class:"mb-0"},[t("code",{class:"language-html"},`
  <div class="table-responsive">
	<table id="table_example" class="display table" style="min-width: 845px">
		<thead>
			<tr>
				<th>Name</th>
				<th>Position</th>
				<th>Office</th>
				<th>Age</th>
				<th>Start date</th>
				<th>Salary</th>
			</tr>
		</thead>
		<tbody>
			<tr>  v-for="(
      { name, Position, Office, Age, Start_date, Salary }, ind
              ) in paginatedData"
              :key="ind"
				<td>Tiger Nixon</td>
				<td>System Architect</td>
				<td>Edinburgh</td>
				<td>61</td>
				<td>2011/04/25</td>
				<td>$320,800</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<th>Name</th>
				<th>Position</th>
				<th>Office</th>
				<th>Age</th>
				<th>Start date</th>
				<th>Salary</th>
			</tr>
		</tfoot>
	</table>
</div>`)])])],-1))])])])}const yt=y(ht,[["render",xt],["__scopeId","data-v-1daf8e2a"]]),At=x({setup(){const n=h(!1),e=h(0),r=h(10);return{...f(V,10),checkboxes:n,selectOption:e,entryValue:r,optionArray:[{num:10},{num:25},{num:50},{num:100}]}},methods:{setValueOption(n){this.selectOption=n,this.entryValue=this.optionArray[n].num,f(V,this.entryValue)}}}),Ct={class:"col-xl-12"},Pt={class:"card dz-card",id:"accordion-three"},$t={class:"tab-content",id:"myTabContent-2"},Bt={class:"tab-pane fade show active",id:"withoutSpace",role:"tabpanel","aria-labelledby":"home-tab-2"},Dt={class:"card-body pt-0"},St={class:"table-responsive"},Vt={id:"example_wrapper"},Tt={class:"dataTables_length",id:"example_length"},Ot={class:"dropdown bootstrap-select dropup",style:{width:"auto"}},Rt={type:"button",tabindex:"-1",class:"btn dropdown-toggle btn-light","data-bs-toggle":"dropdown",role:"combobox","aria-owns":"bs-select-1","aria-haspopup":"listbox","aria-expanded":"false",title:"10"},Nt={class:"filter-option"},Mt={class:"filter-option-inner"},jt={class:"filter-option-inner-inner"},Ft={class:"dropdown-menu",style:{"max-height":"193.067px",overflow:"hidden","min-height":"86px"}},qt={class:"inner show",role:"listbox",id:"bs-select-1",tabindex:"-1",style:{"max-height":"179.067px","overflow-y":"auto","min-height":"72px"},"aria-activedescendant":"bs-select-1-0"},It={class:"dropdown-menu inner show",role:"presentation",style:{"margin-top":"0px","margin-bottom":"0px"}},zt=["onClick"],Gt=["id"],Et={class:"text"},Lt={id:"example_filter",class:"dataTables_filter"},Ht={id:"example3",class:"display table",style:{"min-width":"845px"}},_t=["src"];function Jt(n,e,r,p,k,A){return s(),d("div",Ct,[t("div",Pt,[e[19]||(e[19]=t("div",{class:"card-header flex-wrap d-flex justify-content-between"},[t("div",null,[t("h4",{class:"card-title"},"Profile Datatable"),t("p",{class:"m-0 subtitle"},[o("Add "),t("code",null,"profile"),o(" class with "),t("code",null,"datatables")])]),t("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-2",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link active",id:"home-tab-2","data-bs-toggle":"tab","data-bs-target":"#withoutSpace",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"profile-tab-2","data-bs-toggle":"tab","data-bs-target":"#withoutSpace-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])],-1)),t("div",$t,[t("div",Bt,[t("div",Dt,[t("div",St,[t("div",Vt,[t("div",Tt,[t("label",null,[e[10]||(e[10]=o("Show ")),t("div",Ot,[t("button",Rt,[t("div",Nt,[t("div",Mt,[t("div",jt,a(n.entryValue),1)])])]),t("div",Ft,[t("div",qt,[t("ul",It,[(s(!0),d(m,null,g(n.optionArray,({num:l},i)=>(s(),d("li",{class:"selected active",onClick:c=>n.setValueOption(i)},[t("a",{role:"option",class:$(`dropdown-item ${i===n.selectOption?"active selected":""}`),id:`bs-select-1-${i}`,tabindex:"0","aria-setsize":"4","aria-posinset":"1","aria-selected":"true"},[t("span",Et,a(l),1)],10,Gt)],8,zt))),256))])])])]),e[11]||(e[11]=o(" entries"))])]),t("div",Lt,[e[12]||(e[12]=t("label",{class:"mb-0 me-2"},"Search:",-1)),t("input",{type:"search",class:"table-data-base-search",placeholder:"",onInput:e[0]||(e[0]=l=>n.searchData(l.target.value)),"aria-controls":"example"},null,32)])]),t("table",Ht,[t("thead",null,[t("tr",null,[t("th",{onClick:e[1]||(e[1]=(...l)=>n.sortingArr&&n.sortingArr(...l))}),t("th",{onClick:e[2]||(e[2]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Name"),t("th",{onClick:e[3]||(e[3]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Department"),t("th",{onClick:e[4]||(e[4]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Gender"),t("th",{onClick:e[5]||(e[5]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Education"),t("th",{onClick:e[6]||(e[6]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Mobile"),t("th",{onClick:e[7]||(e[7]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Email"),t("th",{onClick:e[8]||(e[8]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Joining Date"),t("th",{onClick:e[9]||(e[9]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Action")])]),t("tbody",null,[(s(!0),d(m,null,g(n.paginatedData,({img:l,name:i,Department:c,Gender:b},u)=>(s(),d("tr",{key:u},[t("td",null,[t("img",{class:"rounded-circle",width:"35",src:l,alt:""},null,8,_t)]),t("td",null,a(i),1),t("td",null,a(c),1),t("td",null,a(b),1),e[13]||(e[13]=t("td",null,"M.COM., P.H.D.",-1)),e[14]||(e[14]=t("td",null,[t("a",{href:"javascript:void(0);"},[t("strong",null,"123 456 7890")])],-1)),e[15]||(e[15]=t("td",null,[t("a",{href:"javascript:void(0);"},[t("strong",null,"info@example.com")])],-1)),e[16]||(e[16]=t("td",null,"2011/04/25",-1)),e[17]||(e[17]=t("td",null,[t("div",{class:"d-flex"},[t("a",{href:"#",class:"btn btn-primary shadow btn-xs sharp me-1"},[t("i",{class:"fas fa-pencil-alt"})]),t("a",{href:"#",class:"btn btn-danger shadow btn-xs sharp"},[t("i",{class:"fa fa-trash"})])])],-1))]))),128))])])])])]),e[18]||(e[18]=t("div",{class:"tab-pane fade",id:"withoutSpace-html",role:"tabpanel","aria-labelledby":"home-tab-2"},[t("div",{class:"card-body pt-0 p-0 code-area"},[t("pre",{class:"mb-0"},[t("code",{class:"language-html"},`<div class="table-responsive">
	<table id="example" class="display table" style="min-width: 845px">
		<thead>
			<tr>
				<th>Name</th>
				<th>Position</th>
				<th>Office</th>
				<th>Age</th>
				<th>Start date</th>
				<th>Salary</th>
			</tr>
		</thead>
		<tbody>
			<tr>  v-for="(
      { img, name, Department, Gender }, ind
              ) in paginatedData"
              :key="ind"
				<td>Tiger Nixon</td>
				<td>System Architect</td>
				<td>Edinburgh</td>
				<td>61</td>
				<td>2011/04/25</td>
				<td>$320,800</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<th>Name</th>
				<th>Position</th>
				<th>Office</th>
				<th>Age</th>
				<th>Start date</th>
				<th>Salary</th>
			</tr>
		</tfoot>
	</table>
</div>`)])])],-1))])])])}const Wt=y(At,[["render",Jt],["__scopeId","data-v-b3c65577"]]),Kt=x({name:"feeCollection",components:{RouterLink:D},data(){return S},setup(){const n=h(!1),e=h(0),r=h(10);return{...f(T,10),checkboxes:n,selectOption:e,entryValue:r,optionArray:[{num:10},{num:25},{num:50},{num:100}]}},methods:{setValueOption(n){this.selectOption=n,this.entryValue=this.optionArray[n].num,f(T,this.entryValue)}}}),Qt={class:"col-xl-12"},Ut={class:"card dz-card",id:"accordion-four"},Xt={class:"tab-content",id:"myTabContent-3"},Yt={class:"tab-pane fade show active",id:"withoutBorder",role:"tabpanel","aria-labelledby":"home-tab-3"},Zt={class:"card-body pt-0"},te={class:"table-responsive"},ee={id:"example_wrapper"},ne={class:"dataTables_length",id:"example_length"},le={class:"dropdown bootstrap-select dropup",style:{width:"auto"}},ae={type:"button",tabindex:"-1",class:"btn dropdown-toggle btn-light","data-bs-toggle":"dropdown",role:"combobox","aria-owns":"bs-select-1","aria-haspopup":"listbox","aria-expanded":"false",title:"10"},se={class:"filter-option"},de={class:"filter-option-inner"},ie={class:"filter-option-inner-inner"},oe={class:"dropdown-menu",style:{"max-height":"193.067px",overflow:"hidden","min-height":"86px"}},re={class:"inner show",role:"listbox",id:"bs-select-1",tabindex:"-1",style:{"max-height":"179.067px","overflow-y":"auto","min-height":"72px"},"aria-activedescendant":"bs-select-1-0"},ce={class:"dropdown-menu inner show",role:"presentation",style:{"margin-top":"0px","margin-bottom":"0px"}},he=["onClick"],pe=["id"],be={class:"text"},ue={id:"example_filter",class:"dataTables_filter"},me={id:"example4",class:"display table",style:{"min-width":"845px"}},ge={class:"d-flex align-items-center justify-content-between"},fe={class:"dataTables_paginate paging_simple_numbers",id:"empoloyees-tblwrapper_paginate"},ve=["onClick"];function we(n,e,r,p,k,A){return s(),d("div",Qt,[t("div",Ut,[e[19]||(e[19]=t("div",{class:"card-header flex-wrap d-flex justify-content-between"},[t("div",null,[t("h4",{class:"card-title"},"Fees Collection"),t("p",{class:"m-0 subtitle"},[o("Add "),t("code",null,"fees"),o(" class with "),t("code",null,"datatables")])]),t("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-3",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link active",id:"home-tab-3","data-bs-toggle":"tab","data-bs-target":"#withoutBorder",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"profile-tab-3","data-bs-toggle":"tab","data-bs-target":"#withoutBorder-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])],-1)),t("div",Xt,[t("div",Yt,[t("div",Zt,[t("div",te,[t("div",ee,[t("div",ne,[t("label",null,[e[11]||(e[11]=o("Show ")),t("div",le,[t("button",ae,[t("div",se,[t("div",de,[t("div",ie,a(n.entryValue),1)])])]),t("div",oe,[t("div",re,[t("ul",ce,[(s(!0),d(m,null,g(n.optionArray,({num:l},i)=>(s(),d("li",{class:"selected active",onClick:c=>n.setValueOption(i)},[t("a",{role:"option",class:$(`dropdown-item ${i===n.selectOption?"active selected":""}`),id:`bs-select-1-${i}`,tabindex:"0","aria-setsize":"4","aria-posinset":"1","aria-selected":"true"},[t("span",be,a(l),1)],10,pe)],8,he))),256))])])])]),e[12]||(e[12]=o(" entries"))])]),t("div",ue,[e[13]||(e[13]=t("label",{class:"mb-0 me-2"},"Search:",-1)),t("input",{type:"search",class:"table-data-base-search",placeholder:"",onInput:e[0]||(e[0]=l=>n.searchData(l.target.value)),"aria-controls":"example"},null,32)])]),t("table",me,[t("thead",null,[t("tr",null,[t("th",{onClick:e[1]||(e[1]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Roll No"),t("th",{onClick:e[2]||(e[2]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Student Name"),t("th",{onClick:e[3]||(e[3]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Invoice number"),t("th",{onClick:e[4]||(e[4]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Fees Type"),t("th",{onClick:e[5]||(e[5]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Payment Type"),t("th",{onClick:e[6]||(e[6]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Status"),t("th",{onClick:e[7]||(e[7]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Date"),t("th",{onClick:e[8]||(e[8]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Amount")])]),t("tbody",null,[(s(!0),d(m,null,g(n.paginatedData,({rollno:l,name:i,invoicnumber:c,feetype:b,paytype:u,status:w,date:v,badgeColor:R},N)=>(s(),d("tr",{key:N},[t("td",null,a(l),1),t("td",null,a(i),1),t("td",null,a(c),1),t("td",null,a(b),1),t("td",null,a(u),1),t("td",null,[t("span",{class:$(`badge light badge-${R}`)},a(w),3)]),t("td",null,a(v),1),e[14]||(e[14]=t("td",null,[t("strong",null,"120$")],-1))]))),128))])]),t("div",ge,[e[17]||(e[17]=t("div",{class:"dataTables_info"},"Showing 11 to 12 of "+a("")+" entries",-1)),t("div",fe,[t("a",{class:"paginate_button previous",id:"empoloyees-tblwrapper_previous",onClick:e[9]||(e[9]=(...l)=>n.backPage&&n.backPage(...l))},e[15]||(e[15]=[t("i",{class:"fa-solid fa-angle-left"},null,-1)])),t("span",null,[(s(!0),d(m,null,g(Math.ceil(n.data.length/n.perPage),l=>(s(),d("a",{class:"paginate_button",key:l,style:O(`background-color:${n.addActive==l?"var(--primary);":""};color:${n.addActive==l?"#fff !important":""}`),onClick:()=>n.goToPage(l)},a(l),13,ve))),128))]),t("a",{class:"paginate_button next",onClick:e[10]||(e[10]=(...l)=>n.nextPage&&n.nextPage(...l)),"aria-controls":"empoloyees-tblwrapper","data-dt-idx":"3",tabindex:"0",id:"empoloyees-tblwrapper_next"},e[16]||(e[16]=[t("i",{class:"fa-solid fa-angle-right"},null,-1)]))])])])])]),e[18]||(e[18]=t("div",{class:"tab-pane fade",id:"withoutBorder-html",role:"tabpanel","aria-labelledby":"home-tab-3"},[t("div",{class:"card-body pt-0 p-0 code-area"},[t("pre",{class:"mb-0"},[t("code",{class:"language-html"},`<div class="table-responsive">
	<table id="example" class="display table" style="min-width: 845px">
		<thead>
			<tr>
				<th>Name</th>
				<th>Position</th>
				<th>Office</th>
				<th>Age</th>
				<th>Start date</th>
				<th>Salary</th>
			</tr>
		</thead>
		<tbody>
			<tr>  v-for="(
      { rollno, name, invoicnumber, feetype,paytype,status,date,badgeColor }, ind
              ) in paginatedData"
              :key="ind"
				<td>Tiger Nixon</td>
				<td>System Architect</td>
				<td>Edinburgh</td>
				<td>61</td>
				<td>2011/04/25</td>
				<td>$320,800</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<th>Name</th>
				<th>Position</th>
				<th>Office</th>
				<th>Age</th>
				<th>Start date</th>
				<th>Salary</th>
			</tr>
		</tfoot>
	</table>
</div>`)])])],-1))])])])}const ke=y(Kt,[["render",we],["__scopeId","data-v-18363869"]]),xe=x({name:"patient_",setup(){const n=h(!1);return{...f(F,20),checkboxes:n}}}),ye={class:"col-xl-12"},Ae={class:"card dz-card",id:"accordion-five"},Ce={class:"tab-content",id:"myTabContent-4"},Pe={class:"tab-pane fade show active",id:"leftPosition",role:"tabpanel","aria-labelledby":"home-tab-4"},$e={class:"card-body"},Be={class:"table-responsive"},De={id:"example5",class:"display table",style:{"min-width":"845px"}},Se={class:"custom-control d-inline custom-checkbox"},Ve={class:"form-check custom-checkbox ms-2"},Te=["checked"];function Oe(n,e,r,p,k,A){return s(),d("div",ye,[t("div",Ae,[e[15]||(e[15]=t("div",{class:"card-header flex-wrap d-flex justify-content-between"},[t("div",null,[t("h4",{class:"card-title"},"Patient"),t("p",{class:"m-0 subtitle"},[o("Add "),t("code",null,"Patient"),o(" class with "),t("code",null,"datatables")])]),t("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-4",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link active",id:"home-tab-4","data-bs-toggle":"tab","data-bs-target":"#leftPosition",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"profile-tab-4","data-bs-toggle":"tab","data-bs-target":"#leftPosition-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])],-1)),t("div",Ce,[t("div",Pe,[t("div",$e,[t("div",Be,[t("table",De,[t("thead",null,[t("tr",null,[t("th",null,[t("div",Se,[t("input",{type:"checkbox",class:"form-check-input",id:"checkAll",required:"",onClick:e[0]||(e[0]=l=>n.checkboxes=!n.checkboxes)}),e[9]||(e[9]=t("label",{class:"form-check-label",for:"checkAll"},null,-1))])]),t("th",{onClick:e[1]||(e[1]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Patient ID"),t("th",{onClick:e[2]||(e[2]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Date Check in"),t("th",{onClick:e[3]||(e[3]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Patient Name"),t("th",{onClick:e[4]||(e[4]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Doctor Assgined"),t("th",{onClick:e[5]||(e[5]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Disease"),t("th",{onClick:e[6]||(e[6]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Status"),t("th",{onClick:e[7]||(e[7]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Room no"),t("th",{onClick:e[8]||(e[8]=(...l)=>n.sortingArr&&n.sortingArr(...l))},"Action")])]),t("tbody",null,[(s(!0),d(m,null,g(n.paginatedData,({doctor:l,disease:i,name:c,status:b,roomNo:u,badgeColor:w},v)=>(s(),d("tr",{key:v},[t("td",null,[t("div",Ve,[t("input",{type:"checkbox",class:"form-check-input",id:"customCheckBox2",required:"",checked:n.checkboxes},null,8,Te),e[10]||(e[10]=t("label",{class:"form-check-label",for:"customCheckBox2"},null,-1))])]),t("td",null,"#P-0000#"+a(v+1),1),e[12]||(e[12]=t("td",null,"26/02/2020, 12:42 AM",-1)),t("td",null,a(c),1),t("td",null,a(l),1),t("td",null,a(i),1),t("td",null,[t("span",{class:$(`badge light badge-${w}`)},[e[11]||(e[11]=t("i",{class:"fa fa-circle text-danger me-1"},null,-1)),o(" "+a(b),1)],2)]),t("td",null,a(u),1),e[13]||(e[13]=t("td",null,[t("div",{class:"dropdown ms-auto text-end c-pointer"},[t("div",{class:"btn-link","data-bs-toggle":"dropdown"},[t("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1"},[t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[t("rect",{x:"0",y:"0",width:"24",height:"24"}),t("circle",{fill:"#000000",cx:"5",cy:"12",r:"2"}),t("circle",{fill:"#000000",cx:"12",cy:"12",r:"2"}),t("circle",{fill:"#000000",cx:"19",cy:"12",r:"2"})])])]),t("div",{class:"dropdown-menu dropdown-menu-end"},[t("a",{class:"dropdown-item",href:"#"},"Accept Patient"),t("a",{class:"dropdown-item",href:"#"},"Reject Order"),t("a",{class:"dropdown-item",href:"#"},"View Details")])])],-1))]))),128))])])])])]),e[14]||(e[14]=t("div",{class:"tab-pane fade",id:"leftPosition-html",role:"tabpanel","aria-labelledby":"home-tab-4"},[t("div",{class:"card-body pt-0 p-0 code-area"},[t("pre",{class:"mb-0"},[t("code",{class:"language-html"},`<div class="table-responsive">
<table id="example5" class="display table" style="min-width: 845px">
	<thead>
		<tr>
			<th>
				<div class="custom-control d-inline custom-checkbox">
					<input type="checkbox" class="form-check-input" id="checkAll" required>
					<label class="form-check-label" for="checkAll"></label>
				</div>
			</th>
			<th>Patient ID</th>
			<th>Date Check in</th>
			<th>Patient Name</th>
			<th>Doctor Assgined</th>
			<th>Disease</th>
			<th>Status</th>
			<th>Room no</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox2" required>
					<label class="form-check-label" for="customCheckBox2"></label>
				</div>
			</td>
			<td>#P-00001</td>
			<td>26/02/2020, 12:42 AM</td>
			<td>Tiger Nixon</td>
			<td>Dr. Cedric</td>
			<td>Cold & Flu</td>
			<td>
				<span class="badge light badge-danger">
					<i class="fa fa-circle text-danger me-1"></i>
					New Patient
				</span>
			</td>
			<td>AB-001</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>												
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox3" required>
					<label class="form-check-label" for="customCheckBox3"></label>
				</div>
			</td>
			<td>#P-00002</td>
			<td>28/02/2020, 12:42 AM</td>
			<td>Garrett Winters</td>
			<td>Dr. Cedric</td>
			<td>Sleep Problem</td>
			<td>
				<span class="badge light badge-warning">
					<i class="fa fa-circle text-warning me-1"></i>
					In Treatment
				</span>
			</td>
			<td>AB-002</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox4" required>
					<label class="form-check-label" for="customCheckBox4"></label>
				</div>
			</td>
			<td>#P-00003</td>
			<td>26/02/2020, 12:42 AM</td>
			<td>Ashton Cox</td>
			<td>Dr. Rhona</td>
			<td>Cold & Flu</td>
			<td>
				<span class="badge light badge-success">
					<i class="fa fa-circle text-success me-1"></i>
					Recovered
				</span>
			</td>
			<td>AB-003</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox5" required>
					<label class="form-check-label" for="customCheckBox5"></label>
				</div>
			</td>
			<td>#P-00004</td>
			<td>29/02/2020, 12:42 AM</td>
			<td>Ashton Cox</td>
			<td>Dr. Cedric</td>
			<td>Cold & Flu</td>
			<td>
				<span class="badge light badge-warning">
					<i class="fa fa-circle text-warning me-1"></i>
					In Treatment
				</span>
			</td>
			<td>AB-004</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox6" required>
					<label class="form-check-label" for="customCheckBox6"></label>
				</div>
			</td>
			<td>#P-00005</td>
			<td>28/02/2020, 12:42 AM</td>
			<td>Ashton Cox</td>
			<td>Dr. Cedric</td>
			<td>Cold & Flu</td>
			<td>
				<span class="badge light badge-warning">
					<i class="fa fa-circle text-warning me-1"></i>
					In Treatment
				</span>
			</td>
			<td>AB-005</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox7" required>
					<label class="form-check-label" for="customCheckBox7"></label>
				</div>
			</td>
			<td>#P-00006</td>
			<td>28/02/2020, 12:42 AM</td>
			<td>Ashton Cox</td>
			<td>Dr. Rhona</td>
			<td>Sleep Problem</td>
			<td>
				<span class="badge light badge-warning">
					<i class="fa fa-circle text-warning me-1"></i>
					In Treatment
				</span>
			</td>
			<td>AB-006</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox8" required>
					<label class="form-check-label" for="customCheckBox8"></label>
				</div>
			</td>
			<td>#P-00007</td>
			<td>26/02/2020, 12:42 AM</td>
			<td>Airi Satou</td>
			<td>Dr. Rhona</td>
			<td>Cold & Flu</td>
			<td>
				<span class="badge light badge-danger">
					<i class="fa fa-circle text-danger me-1"></i>
					New Patient
				</span>
			</td>
			<td>AB-007</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox9" required>
					<label class="form-check-label" for="customCheckBox9"></label>
				</div>
			</td>
			<td>#P-00008</td>
			<td>29/02/2020, 12:42 AM</td>
			<td>Airi Satou</td>
			<td>Dr. Garrett </td>
			<td>Sleep Problem</td>
			<td>
				<span class="badge light badge-warning">
					<i class="fa fa-circle text-warning me-1"></i>
					In Treatment
				</span>
			</td>
			<td>AB-008</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox10" required>
					<label class="form-check-label" for="customCheckBox10"></label>
				</div>
			</td>
			<td>#P-00009</td>
			<td>25/02/2020, 12:42 AM</td>
			<td>Airi Satou</td>
			<td>Dr. Rhona</td>
			<td>Cold & Flu</td>
			<td>
				<span class="badge light badge-danger">
					<i class="fa fa-circle text-danger me-1"></i>
					New Patient
				</span>
			</td>
			<td>AB-009</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox11" required>
					<label class="form-check-label" for="customCheckBox11"></label>
				</div>
			</td>
			<td>#P-00010</td>
			<td>26/02/2020, 12:42 AM</td>
			<td>Airi Satou</td>
			<td>Dr. Rhona</td>
			<td>Sleep Problem</td>
			<td>
				<span class="badge light badge-danger">
					<i class="fa fa-circle text-danger me-1"></i>
					New Patient
				</span>
			</td>
			<td>AB-010</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox12" required>
					<label class="form-check-label" for="customCheckBox12"></label>
				</div>
			</td>
			<td>#P-00011</td>
			<td>28/02/2020, 12:42 AM</td>
			<td>Airi Satou</td>
			<td>Dr. Rhona</td>
			<td>Cold & Flu</td>
			<td>
				<span class="badge light badge-warning">
					<i class="fa fa-circle text-warning me-1"></i>
					In Treatment
				</span>
			</td>
			<td>AB-011</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox13" required>
					<label class="form-check-label" for="customCheckBox13"></label>
				</div>
			</td>
			<td>#P-00012</td>
			<td>29/02/2020, 12:42 AM</td>
			<td>Sonya Frost</td>
			<td>Dr. Garrett</td>
			<td>Sleep Problem</td>
			<td>
				<span class="badge light badge-danger">
					<i class="fa fa-circle text-danger me-1"></i>
					New Patient
				</span>
			</td>
			<td>AB-012</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox14" required>
					<label class="form-check-label" for="customCheckBox14"></label>
				</div>
			</td>
			<td>#P-00013</td>
			<td>25/02/2020, 12:42 AM</td>
			<td>Sonya Frost</td>
			<td>Dr. Rhona</td>
			<td>Cold & Flu</td>
			<td>
				<span class="badge light badge-danger">
					<i class="fa fa-circle text-danger me-1"></i>
					New Patient
				</span>
			</td>
			<td>AB-013</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox15" required>
					<label class="form-check-label" for="customCheckBox15"></label>
				</div>
			</td>
			<td>#P-00014</td>
			<td>26/02/2020, 12:42 AM</td>
			<td>Sonya Frost</td>
			<td>Dr. Garrett</td>
			<td>Sleep Problem</td>
			<td>
				<span class="badge light badge-warning">
					<i class="fa fa-circle text-warning me-1"></i>
					In Treatment
				</span>
			</td>
			<td>AB-014</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox16" required>
					<label class="form-check-label" for="customCheckBox16"></label>
				</div>
			</td>
			<td>#P-00015</td>
			<td>28/02/2020, 12:42 AM</td>
			<td>Sonya Frost</td>
			<td>Dr. Rhona</td>
			<td>Cold & Flu</td>
			<td>
				<span class="badge light badge-danger">
					<i class="fa fa-circle text-danger me-1"></i>
					New Patient
				</span>
			</td>
			<td>AB-015</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox17" required>
					<label class="form-check-label" for="customCheckBox17"></label>
				</div>
			</td>
			<td>#P-00016</td>
			<td>29/02/2020, 12:42 AM</td>
			<td>Sonya Frost</td>
			<td>Dr. Garrett</td>
			<td>Sleep Problem</td>
			<td>
				<span class="badge light badge-danger">
					<i class="fa fa-circle text-danger me-1"></i>
					New Patient
				</span>
			</td>
			<td>AB-016</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox18" required>
					<label class="form-check-label" for="customCheckBox18"></label>
				</div>
			</td>
			<td>#P-00017</td>
			<td>25/02/2020, 12:42 AM</td>
			<td>Sonya Frost</td>
			<td>Dr. Rhona</td>
			<td>Cold & Flu</td>
			<td>
				<span class="badge light badge-warning">
					<i class="fa fa-circle text-warning me-1"></i>
					In Treatment
				</span>
			</td>
			<td>AB-017</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox19" required>
					<label class="form-check-label" for="customCheckBox19"></label>
				</div>
			</td>
			<td>#P-00018</td>
			<td>26/02/2020, 12:42 AM</td>
			<td>Sonya Frost</td>
			<td>Dr. Rhona</td>
			<td>Sleep Problem</td>
			<td>
				<span class="badge light badge-danger">
					<i class="fa fa-circle text-danger me-1"></i>
					New Patient
				</span>
			</td>
			<td>AB-018</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox20" required>
					<label class="form-check-label" for="customCheckBox20"></label>
				</div>
			</td>
			<td>#P-00019</td>
			<td>28/02/2020, 12:42 AM</td>
			<td>Sonya Frost</td>
			<td>Dr. Rhona</td>
			<td>Cold & Flu</td>
			<td>
				<span class="badge light badge-danger">
					<i class="fa fa-circle text-danger me-1"></i>
					New Patient
				</span>
			</td>
			<td>AB-019</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check custom-checkbox ms-2">
					<input type="checkbox" class="form-check-input" id="customCheckBox21" required>
					<label class="form-check-label" for="customCheckBox21"></label>
				</div>
			</td>
			<td>#P-00020</td>
			<td>25/02/2020, 12:42 AM</td>
			<td>Sonya Frost</td>
			<td>Dr. Garrett</td>
			<td>Sleep Problem</td>
			<td>
				<span class="badge light badge-warning">
					<i class="fa fa-circle text-warning me-1"></i>
					In Treatment
				</span>
			</td>
			<td>AB-020</td>
			<td>
				<div class="dropdown ms-auto text-end">
					<div class="btn-link" data-bs-toggle="dropdown">
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
					</div>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">Accept Patient</a>
						<a class="dropdown-item" href="#">Reject Order</a>
						<a class="dropdown-item" href="#">View Details</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>
</div>
`)])])],-1))])])])}const Re=y(xe,[["render",Oe]]),Ne=x({name:"tableDatabase",components:{RouterLink:D,BasicDatatable:ct,DataTable:yt,ProfileDatatable:Wt,FeesCollection:ke,PatientTable:Re},setup(){return{}}}),Me={class:"container-fluid"},je={class:"element-area"},Fe={class:"demo-view"},qe={class:"container-fluid pt-0 ps-0 pe-lg-4 pe-0"},Ie={class:"row"};function ze(n,e,r,p,k,A){const l=P("BasicDatatable"),i=P("DataTable"),c=P("ProfileDatatable"),b=P("FeesCollection"),u=P("PatientTable");return s(),d("div",Me,[t("div",je,[t("div",Fe,[t("div",qe,[t("div",Ie,[C(l)]),C(i),C(c),C(b),C(u)])]),e[0]||(e[0]=j('<div class="demo-right"><div class="demo-right-inner" id="right-sidebar"><h4 class="title">Datatabls</h4><div class="dz-scroll demo-right-tabs" id="rightSidebarScroll"><ul class="navbar-nav nav" id="menu-bar"><li><a href="#accordion-one" class="scroll">Basic Datatable</a></li><li><a href="#accordion-two" class="scroll">Datatable</a></li><li><a href="#accordion-three" class="scroll">Profile Datatable</a></li><li><a href="#accordion-four" class="scroll">Fees Collection</a></li><li><a href="#accordion-five" class="scroll">Patient</a></li></ul></div></div></div>',1))])])}const He=y(Ne,[["render",ze]]);export{He as default};
