import{C as c}from"./CommonNavbar-BhIZaCLC.js";import{d as p,_ as b,c as v,b as m,a,f as o,F as w,o as u,r as g}from"./index-W9UAkHyD.js";const h=p({name:"dropdown_",setup(){return{}},components:{CommonNavbar:c},mounted:function(){window.addEventListener("scroll",this.setScrollVal)},unmounted:function(){window.removeEventListener("scroll",this.setScrollVal)},methods:{scrollView(d){document.querySelectorAll(".scrollAccordian")[d].scrollIntoView({behavior:"smooth",block:"start"})},setScrollVal(){var e,i,r;let d=document.querySelectorAll(".scrollAccordian"),t=document.querySelectorAll(".scroll");for(let n=0;n<d.length;n++)d[n].getBoundingClientRect().top<2?(e=t[n].parentElement)==null||e.classList.add("active"):(i=t[n].parentElement)==null||i.classList.remove("active"),d[n].getBoundingClientRect().bottom<=-1&&((r=t[n].parentElement)==null||r.classList.remove("active"))}}}),f={class:"container-fluid"},y={class:"element-area"},j={class:"demo-right"},k={class:"demo-right-inner dz-scroll",id:"right-sidebar"},L={class:"dz-scroll demo-right-tabs",id:"rightSidebarScroll"},A={class:"navbar-nav",id:"menu-bar"};function D(d,t,e,i,r,n){const l=g("CommonNavbar");return u(),v(w,null,[m(l,{page:"Bootstrap",path:"Dropdown"}),a("div",f,[t[11]||(t[11]=a("div",{class:"row"},[a("div",{class:"col-xl-12"})],-1)),a("div",y,[t[10]||(t[10]=a("div",{class:"demo-view"},[a("div",{class:"container-fluid pt-0 ps-0 pe-lg-4 pe-0"},[a("div",{class:"row"},[a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"basic-dropdown"},[a("div",{class:"card-header border-0 flex-wrap"},[a("div",null,[a("h4",{class:"card-title"},"Basic Dropdown"),a("p",{class:"m-0 subtitle"}," A dropdown menu is a toggleable menu that allows the user to choose one value from a predefined list ")]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#BasicDropdown",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#BasicDropdown-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent"},[a("div",{class:"tab-pane fade show active",id:"BasicDropdown",role:"tabpanel","aria-labelledby":"home-tab"},[a("div",{class:"card-body pt-0"},[a("div",{class:"basic-dropdown"},[a("div",{class:"dropdown"},[a("button",{type:"button",class:"btn me-2 mb-2 btn-primary dropdown-toggle","data-bs-toggle":"dropdown"}," Dropdown button "),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 1"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 2"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 3")])])])])]),a("div",{class:"tab-pane fade",id:"BasicDropdown-html",role:"tabpanel","aria-labelledby":"home-tab"},[a("div",{class:"card-body p-0 code-area"},[a("pre",{class:"m-0"},[a("code",{class:"language-html"},`<div class="basic-dropdown">
	<div class="dropdown">
		<button type="button" class="btn me-2 mb-2 btn-default dropdown-toggle" data-bs-toggle="dropdown">
			Dropdown button
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="javascript:void(0);">Link 1</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 2</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 3</a>
		</div>
	</div>
</div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"#dropdown-divider"},[a("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[a("div",null,[a("h4",{class:"card-title"},"Dropdown Divider"),a("p",{class:"m-0 subtitle"},[o(" The "),a("code",null,".dropdown-divider"),o(" class is used to separate links inside the dropdown menu with a thin horizontal border ")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab1",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab1","data-bs-toggle":"tab","data-bs-target":"#DropdownDivider",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab1","data-bs-toggle":"tab","data-bs-target":"#DropdownDivider-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent1"},[a("div",{class:"tab-pane fade show active",id:"DropdownDivider",role:"tabpanel","aria-labelledby":"home-tab"},[a("div",{class:"card-body pt-0"},[a("div",{class:"basic-dropdown"},[a("div",{class:"dropdown"},[a("button",{type:"button",class:"btn me-2 mb-2 btn-primary dropdown-toggle","data-bs-toggle":"dropdown"}," Dropdown button "),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 1"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 2"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 3"),a("div",{class:"dropdown-divider"}),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Another link")])])])])]),a("div",{class:"tab-pane fade",id:"DropdownDivider-html",role:"tabpanel","aria-labelledby":"home-tab1"},[a("div",{class:"card-body p-0 code-area"},[a("pre",{class:"m-0"},[o(),a("code",{class:"language-html"},`<div class="basic-dropdown">
	<div class="dropdown">
		<button type="button" class="btn me-2 mb-2 btn-default dropdown-toggle" data-bs-toggle="dropdown">
			Dropdown button
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="javascript:void(0);">Link 1</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 2</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 3</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item"  href="javascript:void(0);">Another link</a>
		</div>
	</div>
</div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"dropdown-header"},[a("div",{class:"card-header flex-wrap border-0"},[a("div",null,[a("h4",{class:"card-title"},"Dropdown Header"),a("p",{class:"m-0 subtitle"},[o(" The "),a("code",null,".dropdown-header"),o(" class is used to add headers inside the dropdown menu ")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab3",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab3","data-bs-toggle":"tab","data-bs-target":"#DropdownHeader",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab3","data-bs-toggle":"tab","data-bs-target":"#DropdownHeader-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent3"},[a("div",{class:"tab-pane fade show active",id:"DropdownHeader",role:"tabpanel","aria-labelledby":"home-tab3"},[a("div",{class:"card-body pt-0"},[a("div",{class:"basic-dropdown"},[a("div",{class:"dropdown"},[a("button",{type:"button",class:"btn me-2 mb-2 btn-primary dropdown-toggle","data-bs-toggle":"dropdown"}," Dropdown button "),a("div",{class:"dropdown-menu"},[a("h5",{class:"dropdown-header"},"Dropdown header"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 1"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 2"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 3"),a("h5",{class:"dropdown-header"},"Dropdown header"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Another link")])])])])]),a("div",{class:"tab-pane fade",id:"DropdownHeader-html",role:"tabpanel","aria-labelledby":"home-tab3"},[a("div",{class:"card-body p-0 code-area"},[a("pre",{class:"m-0"},[a("code",{class:"language-html"},`<div class="basic-dropdown">
	<div class="dropdown">
		<button type="button" class="btn me-2 mb-2 btn-default dropdown-toggle" data-bs-toggle="dropdown">
			Dropdown button
		</button>
		<div class="dropdown-menu">
			<h5 class="dropdown-header">Dropdown header</h5>
			<a class="dropdown-item" href="javascript:void(0);">Link 1</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 2</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 3</a>
			<h5 class="dropdown-header">Dropdown header</h5>
			<a class="dropdown-item" href="javascript:void(0);">Another link</a>
		</div>
	</div>
</div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"disable-active"},[a("div",{class:"card-header flex-wrap border-0"},[a("div",null,[a("h4",{class:"card-title"},"Disable and Active items"),a("p",{class:"m-0 subtitle"},[o(" The "),a("code",null,".dropdown-header"),o(" class is used to add headers inside the dropdown menu ")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab4",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab4","data-bs-toggle":"tab","data-bs-target":"#DisableActive",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab4","data-bs-toggle":"tab","data-bs-target":"#DisableActive-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent4"},[a("div",{class:"tab-pane fade show active",id:"DisableActive",role:"tabpanel","aria-labelledby":"home-tab4"},[a("div",{class:"card-body pt-0"},[a("div",{class:"basic-dropdown"},[a("div",{class:"dropdown"},[a("button",{type:"button",class:"btn me-2 mb-2 btn-primary dropdown-toggle","data-bs-toggle":"dropdown"}," Dropdown button "),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Normal"),a("a",{class:"dropdown-item active",href:"javascript:void(0);"},"Active"),a("a",{class:"dropdown-item disabled",href:"javascript:void(0);"},"Disabled")])])])])]),a("div",{class:"tab-pane fade",id:"DisableActive-html",role:"tabpanel","aria-labelledby":"home-tab4"},[a("div",{class:"card-body p-0 code-area"},[a("pre",{class:"m-0"},[a("code",{class:"language-html"},`<div class="basic-dropdown">
	<div class="dropdown">
		<button type="button" class="btn me-2 mb-2 btn-default dropdown-toggle" data-bs-toggle="dropdown">
			Dropdown button
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="javascript:void(0);">Normal</a>
			<a class="dropdown-item active" href="javascript:void(0);">Active</a>
			<a class="dropdown-item disabled" href="javascript:void(0);">Disabled</a>
		</div>
	</div>
</div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"align-right"},[a("div",{class:"card-header flex-wrap border-0"},[a("div",null,[a("h4",{class:"card-title"},"Align Right"),a("p",{class:"m-0 subtitle"},[o(" To right-align the dropdown, add the "),a("code",null,".dropdown-menu-end"),o(" class to the element with .dropdown-menu ")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab5",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab5","data-bs-toggle":"tab","data-bs-target":"#AlignRight",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab5","data-bs-toggle":"tab","data-bs-target":"#AlignRight-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent5"},[a("div",{class:"tab-pane fade show active",id:"AlignRight",role:"tabpanel","aria-labelledby":"home-tab5"},[a("div",{class:"card-body pt-0"},[a("div",{class:"basic-dropdown"},[a("div",{class:"dropdown"},[a("button",{type:"button",class:"btn me-2 mb-2 btn-primary dropdown-toggle","data-bs-toggle":"dropdown"}," Dropdown button "),a("div",{class:"dropdown-menu dropdown-menu-end"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 1"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 2"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 3")])])])])]),a("div",{class:"tab-pane fade",id:"AlignRight-html",role:"tabpanel","aria-labelledby":"home-tab5"},[a("div",{class:"card-body p-0 code-area"},[a("pre",{class:"m-0"},[o(),a("code",{class:"language-html"},`<div class="basic-dropdown">
	<div class="dropdown">
		<button type="button" class="btn me-2 mb-2 btn-default dropdown-toggle" data-bs-toggle="dropdown">
			Dropdown button
		</button>
		<div class="dropdown-menu dropdown-menu-end">
			<a class="dropdown-item" href="javascript:void(0);">Link 1</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 2</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 3</a>
		</div>
	</div>
</div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"dropup"},[a("div",{class:"card-header flex-wrap border-0"},[a("div",null,[a("h4",{class:"card-title"},"Dropup"),a("p",{class:"m-0 subtitle"},[o(" The "),a("code",null,".dropup"),o(" class makes the dropdown menu expand upwards instead of downwards ")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab6",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab6","data-bs-toggle":"tab","data-bs-target":"#Dropup",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab6","data-bs-toggle":"tab","data-bs-target":"#Dropup-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent6"},[a("div",{class:"tab-pane fade show active",id:"Dropup",role:"tabpanel","aria-labelledby":"home-tab6"},[a("div",{class:"card-body pt-0"},[a("div",{class:"basic-dropdown"},[a("div",{class:"btn-group dropup mb-1"},[a("button",{type:"button",class:"btn me-2 mb-2 btn-primary dropdown-toggle","data-bs-toggle":"dropdown"}," Dropup "),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 1"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 2"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 3")])]),a("div",{class:"btn-group dropup mb-1"},[a("button",{type:"button",class:"btn mb-2 btn-primary"},"Split dropup"),a("button",{type:"button",class:"btn mb-2 btn-primary dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown"},[a("span",{class:"sr-only"},"Toggle Dropdown")]),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 1"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 2"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 3")])])])])]),a("div",{class:"tab-pane fade",id:"Dropup-html",role:"tabpanel","aria-labelledby":"home-tab6"},[a("div",{class:"card-body p-0 code-area"},[a("pre",{class:"m-0"},[a("code",{class:"language-html"},`<div class="basic-dropdown">
	<!-- Default dropup button -->
	<div class="btn-group dropup mb-1">
		<button type="button" class="btn me-2 mb-2 btn-default dropdown-toggle" data-bs-toggle="dropdown">
			Dropup
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="javascript:void(0);">Link 1</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 2</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 3</a>
		</div>
	</div>javascript:void(0);
	<!-- Split dropup button -->
	<div class="btn-group dropup mb-1">
		<button type="button" class="btn me-2 mb-2 btn-primary">
			Split dropup
		</button>
		<button type="button" class="btn me-2 mb-2 btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
			<span class="sr-only">Toggle Dropdown</span>
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="javascript:void(0);">Link 1</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 2</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 3</a>
		</div>
	</div>
</div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"dropright"},[a("div",{class:"card-header flex-wrap border-0"},[a("div",null,[a("h4",{class:"card-title"},"Dropright"),a("p",{class:"m-0 subtitle"},[o(" Trigger dropdown menus at the right of the elements by adding "),a("code",null,".dropend"),o(" to the parent element ")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab7",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab7","data-bs-toggle":"tab","data-bs-target":"#Dropright",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab7","data-bs-toggle":"tab","data-bs-target":"#Dropright-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent7"},[a("div",{class:"tab-pane fade show active",id:"Dropright",role:"tabpanel","aria-labelledby":"home-tab7"},[a("div",{class:"card-body pt-0"},[a("div",{class:"basic-dropdown"},[a("div",{class:"btn-group dropend mb-1"},[a("button",{type:"button",class:"btn me-2 mb-2 btn-primary dropdown-toggle","data-bs-toggle":"dropdown"}," Dropright "),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 1"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 2"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 3")])]),a("div",{class:"btn-group dropend mb-1"},[a("button",{type:"button",class:"btn mb-2 btn-primary"}," Split dropright "),a("button",{type:"button",class:"btn mb-2 btn-primary dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown"},[a("span",{class:"sr-only"},"Toggle Dropright")]),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 1"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 2"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 3")])])])])]),a("div",{class:"tab-pane fade",id:"Dropright-html",role:"tabpanel","aria-labelledby":"home-tab7"},[a("div",{class:"card-body p-0 code-area"},[a("pre",{class:"m-0"},[o(),a("code",{class:"language-html"},`<div class="basic-dropdown">
	<!-- Default dropright button -->
	<div class="btn-group dropend mb-1">
		<button type="button" class="btn me-2 mb-2 btn-primary dropdown-toggle" data-bs-toggle="dropdown">
			Dropright
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="javascript:void(0);">Link 1</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 2</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 3</a>
		</div>
	</div>

	<!-- Split dropright button -->
	<div class="btn-group dropend mb-1">
		<button type="button" class="btn me-2 mb-2 btn-primary">
			Split dropright
		</button>
		<button type="button" class="btn me-2 mb-2 btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
			<span class="sr-only">Toggle Dropright</span>
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="javascript:void(0);">Link 1</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 2</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 3</a>
		</div>
	</div>
</div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"dropstart"},[a("div",{class:"card-header flex-wrap border-0"},[a("div",null,[a("h4",{class:"card-title"},"dropstart"),a("p",{class:"m-0 subtitle"},[o(" Trigger dropdown menus at the right of the elements by adding "),a("code",null,".dropstart "),o(" to the parent element ")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab8",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab8","data-bs-toggle":"tab","data-bs-target":"#Dropstart",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab8","data-bs-toggle":"tab","data-bs-target":"#Dropstart-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent8"},[a("div",{class:"tab-pane fade show active",id:"Dropstart",role:"tabpanel","aria-labelledby":"home-tab8"},[a("div",{class:"card-body pt-0"},[a("div",{class:"basic-dropdown"},[a("div",{class:"btn-group dropstart mb-1"},[a("button",{type:"button",class:"btn me-2 mb-2 btn-primary dropdown-toggle","data-bs-toggle":"dropdown"}," dropstart "),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 1"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 2"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 3")])]),a("div",{class:"btn-group mb-1"},[a("div",{class:"btn-group dropstart",role:"group"},[a("button",{type:"button",class:"btn mb-2 btn-primary dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown"},[a("span",{class:"sr-only"},"Toggle dropstart")]),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 1"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 2"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Link 3")])]),a("button",{type:"button",class:"btn mb-2 btn-primary"}," Split dropstart ")])])])]),a("div",{class:"tab-pane fade",id:"Dropstart-html",role:"tabpanel","aria-labelledby":"home-tab8"},[a("div",{class:"card-body p-0 code-area"},[a("pre",{class:"m-0"},[o(),a("code",{class:"language-html"},`<div class="basic-dropdown">
	<!-- Default dropstart button -->
	<div class="btn-group dropstart mb-1">
		<button type="button" class="btn me-2 mb-2 btn-primary dropdown-toggle" data-bs-toggle="dropdown">
			dropstart
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="javascript:void(0);">Link 1</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 2</a>
			<a class="dropdown-item" href="javascript:void(0);">Link 3</a>
		</div>
	</div>

	<!-- Split dropstart button -->
	<div class="btn-group mb-1">
		<div class="btn-group dropstart " role="group">
			<button type="button" class="btn me-2 mb-2 btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
				<span class="sr-only">Toggle dropstart</span>
			</button>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="javascript:void(0);">Link 1</a>
				<a class="dropdown-item" href="javascript:void(0);">Link 2</a>
				<a class="dropdown-item" href="javascript:void(0);">Link 3</a>
			</div>
		</div>
		<button type="button" class="btn me-2 mb-2 btn-primary">
			Split dropstart
		</button>
	</div>
</div>`)])])])])])]),a("div",{class:"col-xl-12",id:"button-dropdowns"},[a("div",{class:"card dz-card scrollAccordian"},[a("div",{class:"card-header flex-wrap border-0"},[a("h4",{class:"card-title"},"Button Dropdowns"),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab9",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab9","data-bs-toggle":"tab","data-bs-target":"#ButtonDropdowns",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab9","data-bs-toggle":"tab","data-bs-target":"#ButtonDropdowns-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent9"},[a("div",{class:"tab-pane fade show active",id:"ButtonDropdowns",role:"tabpanel","aria-labelledby":"home-tab9"},[a("div",{class:"card-body pt-0"},[a("div",{class:"button-dropdown"},[a("div",{class:"btn-group mb-1"},[a("button",{type:"button",class:"btn mb-2 btn-primary"},"Primary"),a("button",{type:"button",class:"btn me-2 mb-2 btn-primary dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown"}),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Another action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Something else here"),a("div",{class:"dropdown-divider"}),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Separated link")])]),a("div",{class:"btn-group mb-1"},[a("button",{type:"button",class:"btn mb-2 btn-secondary"},"Secondary"),a("button",{type:"button",class:"btn me-2 mb-2 btn-secondary dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown"}),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Another action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Something else here"),a("div",{class:"dropdown-divider"}),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Separated link")])]),a("div",{class:"btn-group mb-1"},[a("button",{type:"button",class:"btn mb-2 btn-success"},"Success"),a("button",{type:"button",class:"btn me-2 mb-2 btn-success dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown"}),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Another action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Something else here"),a("div",{class:"dropdown-divider"}),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Separated link")])]),a("div",{class:"btn-group mb-1"},[a("button",{type:"button",class:"btn mb-2 btn-info"},"Info"),a("button",{type:"button",class:"btn me-2 mb-2 btn-info dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown"}),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Another action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Something else here"),a("div",{class:"dropdown-divider"}),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Separated link")])]),a("div",{class:"btn-group mb-1"},[a("button",{type:"button",class:"btn mb-2 btn-warning"},"Warning"),a("button",{type:"button",class:"btn me-2 mb-2 btn-warning dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown"}),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Another action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Something else here"),a("div",{class:"dropdown-divider"}),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Separated link")])]),a("div",{class:"btn-group mb-1"},[a("button",{type:"button",class:"btn mb-2 btn-danger"},"Danger"),a("button",{type:"button",class:"btn me-2 mb-2 btn-danger dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown"}),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Another action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Something else here"),a("div",{class:"dropdown-divider"}),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Separated link")])])])])]),a("div",{class:"tab-pane fade",id:"ButtonDropdowns-html",role:"tabpanel","aria-labelledby":"home-tab9"},[a("div",{class:"card-body p-0 code-area"},[a("pre",{class:"m-0"},[o(),a("code",{class:"language-html"},`<div class="button-dropdown">
<div class="btn-group mb-1">
	<button type="button" class="btn me-2 mb-2 btn-primary">Primary</button>
	<button type="button" class="btn me-2 mb-2 btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
	</button>
	<div class="dropdown-menu">
		<a class="dropdown-item" href="javascript:void(0);">Action</a>
		<a class="dropdown-item" href="javascript:void(0);">Another action</a>
		<a class="dropdown-item" href="javascript:void(0);">Something else here</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="javascript:void(0);">Separated link</a>
	</div>
</div>javascript:void(0);
<div class="btn-group mb-1">
	<button type="button" class="btn me-2 mb-2 btn-secondary">Secondary</button>
	<button type="button" class="btn me-2 mb-2 btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
	</button>
	<div class="dropdown-menu">
		<a class="dropdown-item" href="javascript:void(0);">Action</a>
		<a class="dropdown-item" href="javascript:void(0);">Another action</a>
		<a class="dropdown-item" href="javascript:void(0);">Something else here</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="javascript:void(0);">Separated link</a>
	</div>
</div>

<div class="btn-group mb-1">
	<button type="button" class="btn me-2 mb-2 btn-success">Success</button>
	<button type="button" class="btn me-2 mb-2 btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
	</button>
	<div class="dropdown-menu">
		<a class="dropdown-item" href="javascript:void(0);">Action</a>
		<a class="dropdown-item" href="javascript:void(0);">Another action</a>
		<a class="dropdown-item" href="javascript:void(0);">Something else here</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="javascript:void(0);">Separated link</a>
	</div>
</div>

<div class="btn-group mb-1">
	<button type="button" class="btn me-2 mb-2 btn-info">Info</button>
	<button type="button" class="btn me-2 mb-2 btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
	</button>
	<div class="dropdown-menu">
		<a class="dropdown-item" href="javascript:void(0);">Action</a>
		<a class="dropdown-item" href="javascript:void(0);">Another action</a>
		<a class="dropdown-item" href="javascript:void(0);">Something else here</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="javascript:void(0);">Separated link</a>
	</div>
</div>

<div class="btn-group mb-1">
	<button type="button" class="btn me-2 mb-2 btn-warning">Warning</button>
	<button type="button" class="btn me-2 mb-2 btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
	</button>
	<div class="dropdown-menu">
		<a class="dropdown-item" href="javascript:void(0);">Action</a>
		<a class="dropdown-item" href="javascript:void(0);">Another action</a>
		<a class="dropdown-item" href="javascript:void(0);">Something else here</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="javascript:void(0);">Separated link</a>
	</div>
</div>

<div class="btn-group mb-1">
	<button type="button" class="btn me-2 mb-2 btn-danger">Danger</button>
	<button type="button" class="btn me-2 mb-2 btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
	</button>
	<div class="dropdown-menu">
		<a class="dropdown-item" href="javascript:void(0);">Action</a>
		<a class="dropdown-item" href="javascript:void(0);">Another action</a>
		<a class="dropdown-item" href="javascript:void(0);">Something else here</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="javascript:void(0);">Separated link</a>
	</div>
</div>
</div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"sizing"},[a("div",{class:"card-header flex-wrap border-0"},[a("div",null,[a("h4",{class:"card-title"},"Sizing"),a("p",{class:"m-0 subtitle"}," Button dropdowns work with buttons of all sizes, including default and split dropdown buttons. ")]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab10",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab10","data-bs-toggle":"tab","data-bs-target":"#Sizing",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab10","data-bs-toggle":"tab","data-bs-target":"#Sizing-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent10"},[a("div",{class:"tab-pane fade show active",id:"Sizing",role:"tabpanel","aria-labelledby":"home-tab10"},[a("div",{class:"card-body pt-0"},[a("div",{class:"dropdown-size"},[a("div",{class:"btn-group mb-1"},[a("button",{class:"btn me-2 mb-2 btn-primary btn-lg dropdown-toggle",type:"button","data-bs-toggle":"dropdown"}," Large button "),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Another action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Something else here"),a("div",{class:"dropdown-divider"}),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Separated link")])]),a("div",{class:"btn-group mb-1"},[a("button",{class:"btn mb-2 btn-primary btn-lg",type:"button"}," Large split button "),a("button",{type:"button",class:"btn me-2 mb-2 btn-lg btn-primary dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},[a("span",{class:"sr-only"},"Toggle Dropdown")]),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Another action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Something else here"),a("div",{class:"dropdown-divider"}),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Separated link")])]),a("div",{class:"btn-group mb-1"},[a("button",{class:"btn me-2 mb-2 btn-primary btn-sm dropdown-toggle",type:"button","data-bs-toggle":"dropdown"}," Small button "),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Another action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Something else here"),a("div",{class:"dropdown-divider"}),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Separated link")])]),a("div",{class:"btn-group mb-1"},[a("button",{class:"btn mb-2 btn-primary btn-sm",type:"button"}," Small split button "),a("button",{type:"button",class:"btn me-2 mb-2 btn-sm btn-primary dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},[a("span",{class:"sr-only"},"Toggle Dropdown")]),a("div",{class:"dropdown-menu"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Another action"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Something else here"),a("div",{class:"dropdown-divider"}),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Separated link")])])])])]),a("div",{class:"tab-pane fade",id:"Sizing-html",role:"tabpanel","aria-labelledby":"home-tab10"},[a("div",{class:"card-body p-0 code-area"},[a("pre",{class:"m-0"},[o(),a("code",{class:"language-html"},`<div class="dropdown-size">
	<!-- Large button groups (default and split) -->
	<div class="btn-group mb-1">
		<button class="btn me-2 mb-2 btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown">
			Large button
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="javascript:void(0);">Action</a>
			<a class="dropdown-item" href="javascript:void(0);">Another action</a>
			<a class="dropdown-item" href="javascript:void(0);">Something else here</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" href="javascript:void(0);">Separated link</a>
		</div>
	</div>
	<div class="btn-group mb-1">
		<button class="btn me-2 mb-2 btn-primary btn-lg" type="button">
			Large split button
		</button>
		<button type="button" class="btn me-2 mb-2 btn-lg btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			<span class="sr-only">Toggle Dropdown</span>
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="javascript:void(0);">Action</a>
			<a class="dropdown-item" href="javascript:void(0);">Another action</a>
			<a class="dropdown-item" href="javascript:void(0);">Something else here</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" href="javascript:void(0);">Separated link</a>
		</div>
	</div>

	<!-- Small button groups (default and split) -->
	<div class="btn-group mb-1">
		<button class="btn me-2 mb-2 btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
			Small button
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="javascript:void(0);">Action</a>
			<a class="dropdown-item" href="javascript:void(0);">Another action</a>
			<a class="dropdown-item" href="javascript:void(0);">Something else here</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" href="javascript:void(0);">Separated link</a>
		</div>
	</div>
	<div class="btn-group mb-1">
		<button class="btn me-2 mb-2 btn-primary btn-sm" type="button">
			Small split button
		</button>
		<button type="button" class="btn me-2 mb-2 btn-sm btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			<span class="sr-only">Toggle Dropdown</span>
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="javascript:void(0);">Action</a>
			<a class="dropdown-item" href="javascript:void(0);">Another action</a>
			<a class="dropdown-item" href="javascript:void(0);">Something else here</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" href="javascript:void(0);">Separated link</a>
		</div>
	</div>
</div>`)])])])])])]),a("div",{class:"col-lg-12"},[a("div",{class:"card dz-card scrollAccordian",id:"custom-style"},[a("div",{class:"card-header flex-wrap border-0"},[a("div",null,[a("h4",{class:"card-title"},"Custom style"),a("p",{class:"m-0 subtitle"},[o(" Use "),a("code",null,".custom-dropdown"),o(" this class for this style ")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab11",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab11","data-bs-toggle":"tab","data-bs-target":"#CustomStyle",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab11","data-bs-toggle":"tab","data-bs-target":"#CustomStyle-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent11"},[a("div",{class:"tab-pane fade show active",id:"CustomStyle",role:"tabpanel","aria-labelledby":"home-tab11"},[a("div",{class:"card-body pt-0"},[a("div",{class:"row"},[a("div",{class:"col-xl-3 col-md-3 col-sm-4 col-6"},[a("div",{class:"dropdown custom-dropdown"},[a("div",{"data-bs-toggle":"dropdown"},[o(" Last 7 days "),a("i",{class:"fa fa-angle-down ms-3"})]),a("div",{class:"dropdown-menu dropdown-menu-end"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Last 1 Month"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Last 6 Month"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Last 10 Month")])])]),a("div",{class:"col-xl-3 col-md-3 mb-3 col-sm-4 col-6"},[a("div",{class:"dropdown custom-dropdown"},[a("button",{type:"button",class:"btn me-2 mb-2 btn-sm btn-outline-primary","data-bs-toggle":"dropdown"},[o(" Last 7 days "),a("i",{class:"fa fa-angle-down ms-3"})]),a("div",{class:"dropdown-menu dropdown-menu-end"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Last 1 Month"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Last 6 Month"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Last 10 Month")])])]),a("div",{class:"col-xl-3 col-md-3 col-sm-4 col-6 mb-3 mb-sm-0"},[a("div",{class:"dropdown custom-dropdown"},[a("button",{type:"button",class:"btn me-2 mb-2 btn-sm btn-outline-primary","data-bs-toggle":"dropdown"},[o(" Last 1 Hour "),a("i",{class:"fa fa-angle-down ms-3"})]),a("div",{class:"dropdown-menu dropdown-menu-end"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Last 1 hour"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Last 2 hour"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Last 3 hour")])])]),a("div",{class:"col-xl-3 col-md-3 col-sm-4 col-6 mb-3 mb-sm-0"},[a("div",{class:"dropdown custom-dropdown"},[a("button",{type:"button",class:"btn me-2 mb-2 btn-sm btn-primary","data-bs-toggle":"dropdown"},[o(" Last 7 days "),a("i",{class:"fa fa-angle-down ms-3"})]),a("div",{class:"dropdown-menu dropdown-menu-end"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Last 1 Month"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Last 6 Month"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Last 10 Month")])])]),a("div",{class:"col-xl-3 col-md-3 col-sm-4 col-6 mb-3 mb-sm-0"},[a("div",{class:"dropdown custom-dropdown"},[a("button",{type:"button",class:"btn me-2 mb-2 btn-sm btn-primary d-flex align-items-center","data-bs-toggle":"dropdown"},[a("i",{class:"ti-search me-2 mt-1"}),o(" 3 AM "),a("i",{class:"fa fa-angle-down ms-3"})]),a("div",{class:"dropdown-menu dropdown-menu-end"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"6 AM"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"9 AM"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"12 AM")])])]),a("div",{class:"col-xl-3 col-md-3 col-sm-4 col-6 mb-3 mb-sm-0"},[a("div",{class:"dropdown custom-dropdown"},[a("button",{type:"button",class:"btn me-2 mb-2 btn-sm btn-primary flex-wrap","data-bs-toggle":"dropdown"},[a("i",{class:"ti-calendar me-3"}),o(" March 20, 2018   To  April 20, 2018 "),a("i",{class:"fa fa-angle-down ms-3"})]),a("div",{class:"dropdown-menu dropdown-menu-end"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"May 20, 2018   To   June 20, 2018"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"July 20, 2018   To   August 20, 2018")])])]),a("div",{class:"col-xl-3 col-md-3 col-sm-4 col-6"},[a("div",{class:"dropdown custom-dropdown"},[a("div",{class:"btn me-2 mb-2 sharp btn-primary tp-btn ms-3","data-bs-toggle":"dropdown"},[a("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M13.5202 17.4167C13.5202 18.81 12.3927 19.9375 10.9994 19.9375C9.60601 19.9375 8.47852 18.81 8.47852 17.4167C8.47852 16.0233 9.60601 14.8958 10.9994 14.8958C12.3927 14.8958 13.5202 16.0233 13.5202 17.4167ZM9.85352 17.4167C9.85352 18.0492 10.3669 18.5625 10.9994 18.5625C11.6319 18.5625 12.1452 18.0492 12.1452 17.4167C12.1452 16.7842 11.6319 16.2708 10.9994 16.2708C10.3669 16.2708 9.85352 16.7842 9.85352 17.4167Z",fill:"#2696FD"}),a("path",{d:"M13.5202 4.58369C13.5202 5.97699 12.3927 7.10449 10.9994 7.10449C9.60601 7.10449 8.47852 5.97699 8.47852 4.58369C8.47852 3.19029 9.60601 2.06279 10.9994 2.06279C12.3927 2.06279 13.5202 3.19029 13.5202 4.58369ZM9.85352 4.58369C9.85352 5.21619 10.3669 5.72949 10.9994 5.72949C11.6319 5.72949 12.1452 5.21619 12.1452 4.58369C12.1452 3.95119 11.6319 3.43779 10.9994 3.43779C10.3669 3.43779 9.85352 3.95119 9.85352 4.58369Z",fill:"#2696FD"}),a("path",{d:"M13.5202 10.9997C13.5202 12.393 12.3927 13.5205 10.9994 13.5205C9.60601 13.5205 8.47852 12.393 8.47852 10.9997C8.47852 9.6063 9.60601 8.4788 10.9994 8.4788C12.3927 8.4788 13.5202 9.6063 13.5202 10.9997ZM9.85352 10.9997C9.85352 11.6322 10.3669 12.1455 10.9994 12.1455C11.6319 12.1455 12.1452 11.6322 12.1452 10.9997C12.1452 10.3672 11.6319 9.8538 10.9994 9.8538C10.3669 9.8538 9.85352 10.3672 9.85352 10.9997Z",fill:"#2696FD"})])]),a("div",{class:"dropdown-menu dropdown-menu-end"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Option 1"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Option 2"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Option 3")])])]),a("div",{class:"col-xl-3 col-md-3 col-sm-4 col-6"},[a("div",{class:"dropdown custom-dropdown"},[a("div",{class:"btn me-2 mb-2 sharp btn-primary tp-btn","data-bs-toggle":"dropdown"},[a("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M13.5202 17.4167C13.5202 18.81 12.3927 19.9375 10.9994 19.9375C9.60601 19.9375 8.47852 18.81 8.47852 17.4167C8.47852 16.0233 9.60601 14.8958 10.9994 14.8958C12.3927 14.8958 13.5202 16.0233 13.5202 17.4167ZM9.85352 17.4167C9.85352 18.0492 10.3669 18.5625 10.9994 18.5625C11.6319 18.5625 12.1452 18.0492 12.1452 17.4167C12.1452 16.7842 11.6319 16.2708 10.9994 16.2708C10.3669 16.2708 9.85352 16.7842 9.85352 17.4167Z",fill:"#2696FD"}),a("path",{d:"M13.5202 4.58369C13.5202 5.97699 12.3927 7.10449 10.9994 7.10449C9.60601 7.10449 8.47852 5.97699 8.47852 4.58369C8.47852 3.19029 9.60601 2.06279 10.9994 2.06279C12.3927 2.06279 13.5202 3.19029 13.5202 4.58369ZM9.85352 4.58369C9.85352 5.21619 10.3669 5.72949 10.9994 5.72949C11.6319 5.72949 12.1452 5.21619 12.1452 4.58369C12.1452 3.95119 11.6319 3.43779 10.9994 3.43779C10.3669 3.43779 9.85352 3.95119 9.85352 4.58369Z",fill:"#2696FD"}),a("path",{d:"M13.5202 10.9997C13.5202 12.393 12.3927 13.5205 10.9994 13.5205C9.60601 13.5205 8.47852 12.393 8.47852 10.9997C8.47852 9.6063 9.60601 8.4788 10.9994 8.4788C12.3927 8.4788 13.5202 9.6063 13.5202 10.9997ZM9.85352 10.9997C9.85352 11.6322 10.3669 12.1455 10.9994 12.1455C11.6319 12.1455 12.1452 11.6322 12.1452 10.9997C12.1452 10.3672 11.6319 9.8538 10.9994 9.8538C10.3669 9.8538 9.85352 10.3672 9.85352 10.9997Z",fill:"#2696FD"})])]),a("div",{class:"dropdown-menu dropdown-menu-end"},[a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Option 1"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Option 2"),a("a",{class:"dropdown-item",href:"javascript:void(0);"},"Option 3")])])])])])]),a("div",{class:"tab-pane fade",id:"CustomStyle-html",role:"tabpanel","aria-labelledby":"home-tab11"},[a("div",{class:"card-body p-0 code-area"},[a("pre",{class:"m-0"},[o(),a("code",{class:"language-html"},`<div class="row">
<div class="col-xl-3">
	<div class="dropdown custom-dropdown">
		<div data-bs-toggle="dropdown">Last 7 days
			<i class="fa fa-angle-down ms-3"></i>
		</div>
		<div class="dropdown-menu dropdown-menu-end">
			<a class="dropdown-item" href="javascript:void(0);">Last 1 Month</a>
			<a class="dropdown-item" href="javascript:void(0);">Last 6 Month</a>
			<a class="dropdown-item" href="javascript:void(0);">Last 10 Month</a>
		</div>
	</div>
</div>

<div class="col-xl-3">
	<div class="dropdown custom-dropdown">
		<button type="button" class="btn me-2 mb-2 btn-sm btn-outline-primary" data-bs-toggle="dropdown">Last 7 days
			<i class="fa fa-angle-down ms-3"></i>
		</button>
		<div class="dropdown-menu dropdown-menu-end">
			<a class="dropdown-item" href="javascript:void(0);">Last 1 Month</a>
			<a class="dropdown-item" href="javascript:void(0);">Last 6 Month</a>
			<a class="dropdown-item" href="javascript:void(0);">Last 10 Month</a>
		</div>
	</div>
</div>

<div class="col-xl-3">
	<div class="dropdown custom-dropdown">
		<button type="button" class="btn me-2 mb-2 btn-sm btn-outline-primary" data-bs-toggle="dropdown">Last 1 Hour
			<i class="fa fa-angle-down ms-3"></i>
		</button>
		<div class="dropdown-menu dropdown-menu-end">
			<a class="dropdown-item" href="javascript:void(0);">Last 1 hour</a>
			<a class="dropdown-item" href="javascript:void(0);">Last 2 hour</a>
			<a class="dropdown-item" href="javascript:void(0);">Last 3 hour</a>
		</div>
	</div>
</div>

<div class="col-xl-3">
	<div class="dropdown custom-dropdown">
		<button type="button" class="btn me-2 mb-2 btn-sm btn-primary" data-bs-toggle="dropdown">Last 7 days
			<i class="fa fa-angle-down ms-3"></i>
		</button>
		<div class="dropdown-menu dropdown-menu-end">
			<a class="dropdown-item"  href="javascript:void(0);">Last 1 Month</a>
			<a class="dropdown-item"  href="javascript:void(0);">Last 6 Month</a>
			<a class="dropdown-item"  href="javascript:void(0);">Last 10 Month</a>
		</div>
	</div>
</div>

<div class="col-xl-3">
	<div class="dropdown custom-dropdown">
		<button type="button" class="btn me-2 mb-2 btn-sm btn-primary" data-bs-toggle="dropdown">
			<i class="ti-search mr-3"></i> 3 AM
			<i class="fa fa-angle-down ms-3"></i>
		</button>
		<div class="dropdown-menu dropdown-menu-end">
			<a class="dropdown-item"  href="javascript:void(0);">6 AM</a>
			<a class="dropdown-item"  href="javascript:void(0);">9 AM</a>
			<a class="dropdown-item"  href="javascript:void(0);">12 AM</a>
		</div>
	</div>
</div>

<div class="col-xl-3">
	<div class="dropdown custom-dropdown">
		<button type="button" class="btn me-2 mb-2 btn-sm btn-primary" data-bs-toggle="dropdown">
			<i class="ti-calendar m-r-5"></i> March 20, 2018   To  April
			20, 2018
			<i class="fa fa-angle-down ms-3"></i>
		</button>
		<div class="dropdown-menu dropdown-menu-end">
			<a class="dropdown-item"  href="javascript:void(0);">May 20, 2018   To   June 20,
				2018</a>
			<a class="dropdown-item"  href="javascript:void(0);">July 20, 2018   To   August
				20, 2018</a>
		</div>
	</div>
</div>
<div class="col-xl-3">
	<div class="dropdown custom-dropdown">
		<div class="btn me-2 mb-2 sharp btn-primary tp-btn" data-bs-toggle="dropdown">
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="12" cy="5" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="12" cy="19" r="2"/></g></svg>
		</div>
		<div class="dropdown-menu dropdown-menu-end">
			<a class="dropdown-item"  href="javascript:void(0);">Option 1</a>
			<a class="dropdown-item"  href="javascript:void(0);">Option 2</a>
			<a class="dropdown-item"  href="javascript:void(0);">Option 3</a>
		</div>
	</div>
</div>

<div class="col-xl-3">
	<div class="dropdown custom-dropdown">
		<div class="btn me-2 mb-2 sharp btn-primary tp-btn" data-bs-toggle="dropdown">
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="12" cy="5" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="12" cy="19" r="2"/></g></svg>
		</div>
		<div class="dropdown-menu dropdown-menu-end">
			<a class="dropdown-item"  href="javascript:void(0);">Option 1</a>
			<a class="dropdown-item"  href="javascript:void(0);">Option 2</a>
			<a class="dropdown-item"  href="javascript:void(0);">Option 3</a>
		</div>
	</div>
</div>
</div>`)])])])])])])])])],-1)),a("div",j,[a("div",k,[t[9]||(t[9]=a("h4",{class:"title"},"Dropdown",-1)),a("div",L,[a("ul",A,[a("li",null,[a("a",{onClick:t[0]||(t[0]=s=>d.scrollView(0)),href:"javascript:void(0)",class:"scroll"},"Basic Dropdown")]),a("li",null,[a("a",{onClick:t[1]||(t[1]=s=>d.scrollView(1)),href:"javascript:void(0)",class:"scroll"},"Dropdown Divider")]),a("li",null,[a("a",{onClick:t[2]||(t[2]=s=>d.scrollView(2)),href:"javascript:void(0)",class:"scroll"},"Dropdown Header")]),a("li",null,[a("a",{onClick:t[3]||(t[3]=s=>d.scrollView(3)),href:"javascript:void(0)",class:"scroll"},"Align Right")]),a("li",null,[a("a",{onClick:t[4]||(t[4]=s=>d.scrollView(4)),href:"javascript:void(0)",class:"scroll"},"Dropright")]),a("li",null,[a("a",{onClick:t[5]||(t[5]=s=>d.scrollView(5)),href:"javascript:void(0)",class:"scroll"},"Dropstart")]),a("li",null,[a("a",{onClick:t[6]||(t[6]=s=>d.scrollView(6)),href:"javascript:void(0)",class:"scroll"},"Button Dropdowns")]),a("li",null,[a("a",{onClick:t[7]||(t[7]=s=>d.scrollView(7)),href:"javascript:void(0)",class:"scroll"},"Sizing")]),a("li",null,[a("a",{onClick:t[8]||(t[8]=s=>d.scrollView(8)),href:"javascript:void(0)",class:"scroll"},"Custom Style")])])])])])])])],64)}const S=b(h,[["render",D]]);export{S as default};
