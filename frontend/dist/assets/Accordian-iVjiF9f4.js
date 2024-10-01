import{C as t}from"./CommonNavbar-BhIZaCLC.js";import{d as u,_ as p,c as b,b as h,a,f as e,F as v,o as m,r as g}from"./index-W9UAkHyD.js";const f=u({name:"uiAccordion",components:{CommonNavbar:t},setup(){return{}},mounted:function(){window.addEventListener("scroll",this.setScrollVal)},methods:{scrollView(c){document.querySelectorAll(".scrollAccordian")[c].scrollIntoView({behavior:"smooth",block:"start"})},setScrollVal(){var i,n,s;let c=document.querySelectorAll(".scrollAccordian"),o=document.querySelectorAll(".scroll");for(let r=0;r<c.length;r++)c[r].getBoundingClientRect().top<2?(i=o[r].parentElement)==null||i.classList.add("active"):(n=o[r].parentElement)==null||n.classList.remove("active"),c[r].getBoundingClientRect().bottom<=-1&&((s=o[r].parentElement)==null||s.classList.remove("active"))}}}),y={class:"container-fluid"},w={class:"element-area"},T={class:"demo-right"},x={class:"demo-right-inner navigation navbar",id:"right-sidebar"},A={class:"dz-scroll demo-right-tabs",id:"rightSidebarScroll"},k={class:"navbar-nav nav",id:"menu-bar"};function q(c,o,i,n,s,r){const l=g("CommonNavbar");return m(),b(v,null,[h(l,{page:"Bootstrap",path:"Accordion"}),a("div",y,[a("div",w,[o[13]||(o[13]=a("div",{class:"demo-view"},[a("div",{class:"container-fluid pt-0 ps-0 pe-lg-4 pe-0"},[a("div",{class:"row"},[a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"accordion-one"},[a("div",{class:"card-header flex-wrap border-0"},[a("div",null,[a("h4",{class:"card-title"},"Default Accordion"),a("p",{class:"m-0 subtitle"},[e(" Default accordion. Add "),a("code",null,"accordion"),e(" class in root ")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#Preview",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#html",type:"button",role:"tab","aria-controls":"html","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent"},[a("div",{class:"tab-pane fade show active",id:"Preview",role:"tabpanel","aria-labelledby":"home-tab"},[a("div",{class:"card-body pt-0"},[a("div",{class:"accordion accordion-primary"},[a("div",{class:"accordion-item"},[a("div",{class:"accordion-header rounded-lg",id:"headingOne","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-controls":"collapseOne","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header One"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapseOne",class:"collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordion-one"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"headingTwo","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-controls":"collapseTwo",role:"button","aria-expanded":"true"},[a("span",{class:"accordion-header-text"},"Accordion Header Two"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapseTwo",class:"collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordion-one"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"headingThree","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-controls":"collapseThree",role:"button","aria-expanded":"true"},[a("span",{class:"accordion-header-text"},"Accordion Header Three"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapseThree",class:"collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordion-one"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])])])])]),a("div",{class:"tab-pane fade",id:"html",role:"tabpanel","aria-labelledby":"home-tab"},[a("div",{class:"card-body pt-0 p-0 code-area"},[a("pre",{class:"mb-0"},[a("code",{class:"language-html"},`
<div class="accordion accordion-primary scrollAccordian" id="accordion-one">
	<div class="accordion-item">
	<div class="accordion-header  rounded-lg" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne"   aria-expanded="true" role="button">
		<span class="accordion-header-icon"></span>
		<span class="accordion-header-text">Accordion Header One</span>
		<span class="accordion-header-indicator"></span>
	</div>
	<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion-one">
		<div class="accordion-body-text">
			Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
		</div>
	</div>
	</div>
	<div class="accordion-item">
	<div class="accordion-header collapsed rounded-lg" id="headingTwo" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo"   role="button" aria-expanded="true">
		<span class="accordion-header-text">Accordion Header Two</span>
		<span class="accordion-header-indicator"></span>
	</div>
	<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion-one">
		<div class="accordion-body-text">
			Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
		</div>
	</div>
	</div>
	<div class="accordion-item">
	<div class="accordion-header collapsed rounded-lg" id="headingThree" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-controls="collapseThree"  role="button"  aria-expanded="true">
		<span class="accordion-header-text">Accordion Header Three</span>
		<span class="accordion-header-indicator"></span>
	</div>
	<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordion-one">
		<div class="accordion-body-text">
			Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
		</div>
	</div>
	</div>
</div>`)])])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"accordion-two"},[a("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[a("div",null,[a("h4",{class:"card-title"},"Accordion bordered"),a("p",{class:"m-0 subtitle"},[e(" Accordion with border. Add class "),a("code",null,"accordion-bordered"),e(" with the class "),a("code",null," accordion")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-1",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab-1","data-bs-toggle":"tab","data-bs-target":"#bordered",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab-1","data-bs-toggle":"tab","data-bs-target":"#bordered-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent-1"},[a("div",{class:"tab-pane fade show active",id:"bordered",role:"tabpanel","aria-labelledby":"home-tab-1"},[a("div",{class:"card-body pt-0"},[a("div",{class:"accordion accordion-danger-solid"},[a("div",{class:"accordion-item"},[a("div",{class:"accordion-header rounded-lg",id:"accord-2One","data-bs-toggle":"collapse","data-bs-target":"#collapse2One","aria-controls":"collapse2One","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-text"},"Accordion Header One"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse2One",class:"collapse accordion__body show","aria-labelledby":"accord-2One","data-bs-parent":"#accordion-two"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-2Two","data-bs-toggle":"collapse","data-bs-target":"#collapse2Two","aria-controls":"collapse2Two","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-text"},"Accordion Header Two"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse2Two",class:"collapse accordion__body","aria-labelledby":"accord-2Two","data-bs-parent":"#accordion-two"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-2Three","data-bs-toggle":"collapse","data-bs-target":"#collapse2Three","aria-controls":"collapse2Three","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-text"},"Accordion Header Three"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse2Three",class:"collapse accordion__body","aria-labelledby":"accord-2Three","data-bs-parent":"#accordion-two"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])])])])]),a("div",{class:"tab-pane fade",id:"bordered-html",role:"tabpanel","aria-labelledby":"home-tab-1"},[a("div",{class:"card-body pt-0 p-0 code-area"},[a("pre",{class:"mb-0"},[a("code",{class:"language-html"},`
	<div class="accordion accordion-danger-solid scrollAccordian" id="accordion-two">
    <div class="accordion-item">
      <div class="accordion-header  rounded-lg" id="accord-2One" data-bs-toggle="collapse" data-bs-target="#collapse2One" aria-controls="collapse2One"   aria-expanded="true"  role="button">
        <span class="accordion-header-text">Accordion Header One</span>
        <span class="accordion-header-indicator"></span>
      </div>
      <div id="collapse2One" class="collapse accordion__body show" aria-labelledby="accord-2One" data-bs-parent="#accordion-two">
        <div class="accordion-body-text">
           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header collapsed rounded-lg" id="accord-2Two" data-bs-toggle="collapse" data-bs-target="#collapse2Two" aria-controls="collapse2Two"   aria-expanded="true"  role="button">
        <span class="accordion-header-text">Accordion Header Two</span>
       <span class="accordion-header-indicator"></span>
      </div>
      <div id="collapse2Two" class="collapse accordion__body" aria-labelledby="accord-2Two" data-bs-parent="#accordion-two">
        <div class="accordion-body-text">
           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header collapsed rounded-lg" id="accord-2Three" data-bs-toggle="collapse" data-bs-target="#collapse2Three" aria-controls="collapse2Three"   aria-expanded="true"  role="button">
        <span class="accordion-header-text">Accordion Header Three</span>
       <span class="accordion-header-indicator"></span>
      </div>
      <div id="collapse2Three" class="collapse accordion__body" aria-labelledby="accord-2Three" data-bs-parent="#accordion-two">
        <div class="accordion-body-text">
           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
      </div>
    </div>
  </div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"accordion-three"},[a("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[a("div",null,[a("h4",{class:"card-title"},"Accordion without space"),a("p",{class:"m-0 subtitle"},[e(" Add "),a("code",null,"accordion-no-gutter"),e(" class with "),a("code",null,"accordion")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-2",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab-2","data-bs-toggle":"tab","data-bs-target":"#withoutSpace",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab-2","data-bs-toggle":"tab","data-bs-target":"#withoutSpace-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent-2"},[a("div",{class:"tab-pane fade show active",id:"withoutSpace",role:"tabpanel","aria-labelledby":"home-tab-2"},[a("div",{class:"card-body pt-0"},[a("div",{class:"accordion accordion-no-gutter accordion-header-bg"},[a("div",{class:"accordion-item"},[a("div",{class:"accordion-header rounded-lg",id:"accord-3One","data-bs-toggle":"collapse","data-bs-target":"#collapse3One","aria-controls":"collapse3One","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-text"},"Accordion Header One"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse3One",class:"collapse accordion__body show","aria-labelledby":"accord-3One","data-bs-parent":"#accordion-three"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-3Two","data-bs-toggle":"collapse","data-bs-target":"#collapse3Two","aria-controls":"collapse3Two","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-text"},"Accordion Header Two"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse3Two",class:"collapse accordion__body","aria-labelledby":"accord-3Two","data-bs-parent":"#accordion-three"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-3Three","data-bs-toggle":"collapse","data-bs-target":"#collapse3Three","aria-controls":"collapse3Three","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-text"},"Accordion Header Three"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse3Three",class:"collapse accordion__body","aria-labelledby":"accord-3Three","data-bs-parent":"#accordion-three"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])])])])]),a("div",{class:"tab-pane fade",id:"withoutSpace-html",role:"tabpanel","aria-labelledby":"home-tab-2"},[a("div",{class:"card-body pt-0 p-0 code-area"},[a("pre",{class:"mb-0"},[a("code",{class:"language-html"},`<div class="accordion accordion-no-gutter accordion-header-bg scrollAccordian" id="accordion-three">
	<div class="accordion-item">
		<div class="accordion-header  rounded-lg" id="accord-3One" data-bs-toggle="collapse" data-bs-target="#collapse3One" aria-controls="collapse3One"   aria-expanded="true"  role="button">
		<span class="accordion-header-text">Accordion Header One</span>
		<span class="accordion-header-indicator"></span>
		</div>
		<div id="collapse3One" class="collapse accordion__body show" aria-labelledby="accord-3One" data-bs-parent="#accordion-three">
		<div class="accordion-body-text">
			Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
		</div>
		</div>
	</div>
	<div class="accordion-item">
		<div class="accordion-header collapsed rounded-lg" id="accord-3Two" data-bs-toggle="collapse" data-bs-target="#collapse3Two" aria-controls="collapse3Two"   aria-expanded="true"  role="button">
		<span class="accordion-header-text">Accordion Header Two</span>
		<span class="accordion-header-indicator"></span>
		</div>
		<div id="collapse3Two" class="collapse accordion__body" aria-labelledby="accord-3Two" data-bs-parent="#accordion-three">
		<div class="accordion-body-text">
			Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
		</div>
		</div>
	</div>
	<div class="accordion-item">
		<div class="accordion-header collapsed rounded-lg" id="accord-3Three" data-bs-toggle="collapse" data-bs-target="#collapse3Three" aria-controls="collapse3Three"   aria-expanded="true"  role="button">
		<span class="accordion-header-text">Accordion Header Three</span>
		<span class="accordion-header-indicator"></span>
		</div>
		<div id="collapse3Three" class="collapse accordion__body" aria-labelledby="accord-3Three" data-bs-parent="#accordion-three">
		<div class="accordion-body-text">
			Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
		</div>
		</div>
	</div>
	</div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"accordion-four"},[a("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[a("div",null,[a("h4",{class:"card-title"},"Accordion without space with border"),a("p",{class:"m-0 subtitle"},[e(" Add "),a("code",null,"accordion-no-gutter accordion-bordered"),e(" class with "),a("code",null,"accordion")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-3",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab-3","data-bs-toggle":"tab","data-bs-target":"#withoutBorder",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab-3","data-bs-toggle":"tab","data-bs-target":"#withoutBorder-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent-3"},[a("div",{class:"tab-pane fade show active",id:"withoutBorder",role:"tabpanel","aria-labelledby":"home-tab-3"},[a("div",{class:"card-body pt-0"},[a("div",{class:"accordion accordion-no-gutter accordion-bordered"},[a("div",{class:"accordion-item"},[a("div",{class:"accordion-header rounded-lg",id:"accord-4One","data-bs-toggle":"collapse","data-bs-target":"#collapse4One","aria-controls":"collapse4One","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-text"},"Accordion Header One"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse4One",class:"collapse accordion__body show","aria-labelledby":"accord-4One","data-bs-parent":"#accordion-four"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-4Two","data-bs-toggle":"collapse","data-bs-target":"#collapse4Two","aria-controls":"collapse4Two","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-text"},"Accordion Header Two"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse4Two",class:"collapse accordion__body","aria-labelledby":"accord-4Two","data-bs-parent":"#accordion-four"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-4Three","data-bs-toggle":"collapse","data-bs-target":"#collapse4Three","aria-controls":"collapse4Three","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-text"},"Accordion Header Three"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse4Three",class:"collapse accordion__body","aria-labelledby":"accord-4Three","data-bs-parent":"#accordion-four"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])])])])]),a("div",{class:"tab-pane fade",id:"withoutBorder-html",role:"tabpanel","aria-labelledby":"home-tab-3"},[a("div",{class:"card-body pt-0 p-0 code-area"},[a("pre",{class:"mb-0"},[a("code",{class:"language-html"},`<div class="accordion accordion-no-gutter accordion-bordered scrollAccordian" id="accordion-four">
    <div class="accordion-item">
        <div class="accordion-header  rounded-lg" id="accord-4One" data-bs-toggle="collapse" data-bs-target="#collapse4One" aria-controls="collapse4One"   aria-expanded="true"  role="button">
        <span class="accordion-header-text">Accordion Header One</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse4One" class="collapse accordion__body show" aria-labelledby="accord-4One" data-bs-parent="#accordion-four">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    <div class="accordion-item">
        <div class="accordion-header collapsed rounded-lg" id="accord-4Two" data-bs-toggle="collapse" data-bs-target="#collapse4Two" aria-controls="collapse4Two"   aria-expanded="true"  role="button">
        <span class="accordion-header-text">Accordion Header Two</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse4Two" class="collapse accordion__body" aria-labelledby="accord-4Two" data-bs-parent="#accordion-four">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    <div class="accordion-item">
        <div class="accordion-header collapsed rounded-lg" id="accord-4Three" data-bs-toggle="collapse" data-bs-target="#collapse4Three" aria-controls="collapse4Three"   aria-expanded="true"  role="button">
        <span class="accordion-header-text">Accordion Header Three</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse4Three" class="collapse accordion__body" aria-labelledby="accord-4Three" data-bs-parent="#accordion-four">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    </div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"accordion-five"},[a("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[a("div",null,[a("h4",{class:"card-title"},"Accordion indicator in left position"),a("p",{class:"m-0 subtitle"},[e(" Add "),a("code",null,"accordion-start-indicator"),e(" class with "),a("code",null,"accordion")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-4",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab-4","data-bs-toggle":"tab","data-bs-target":"#leftPosition",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab-4","data-bs-toggle":"tab","data-bs-target":"#leftPosition-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent-4"},[a("div",{class:"tab-pane fade show active",id:"leftPosition",role:"tabpanel","aria-labelledby":"home-tab-4"},[a("div",{class:"card-body pt-0"},[a("div",{class:"accordion accordion-start-indicator"},[a("div",{class:"accordion-item"},[a("div",{class:"accordion-header rounded-lg",id:"accord-5One","data-bs-toggle":"collapse","data-bs-target":"#collapse5One","aria-controls":"collapse5One","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-text"},"Accordion Header One"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse5One",class:"collapse accordion__body show","aria-labelledby":"accord-5One","data-bs-parent":"#accordion-five"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-5Two","data-bs-toggle":"collapse","data-bs-target":"#collapse5Two","aria-controls":"collapse5Two","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-text"},"Accordion Header Two"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse5Two",class:"collapse accordion__body","aria-labelledby":"accord-5Two","data-bs-parent":"#accordion-five"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-5Three","data-bs-toggle":"collapse","data-bs-target":"#collapse5Three","aria-controls":"collapse5Three","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-text"},"Accordion Header Three"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse5Three",class:"collapse accordion__body","aria-labelledby":"accord-5Three","data-bs-parent":"#accordion-five"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])])])])]),a("div",{class:"tab-pane fade",id:"leftPosition-html",role:"tabpanel","aria-labelledby":"home-tab-4"},[a("div",{class:"card-body pt-0 p-0 code-area"},[a("pre",{class:"mb-0"},[a("code",{class:"language-html"},`<div class="accordion accordion-start-indicator scrollAccordian" id="accordion-five">
    <div class="accordion-item">
        <div class="accordion-header  rounded-lg" id="accord-5One" data-bs-toggle="collapse" data-bs-target="#collapse5One" aria-controls="collapse5One"   aria-expanded="true"  role="button">
        <span class="accordion-header-text">Accordion Header One</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse5One" class="collapse accordion__body show" aria-labelledby="accord-5One" data-bs-parent="#accordion-five">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    <div class="accordion-item">
        <div class="accordion-header collapsed rounded-lg" id="accord-5Two" data-bs-toggle="collapse" data-bs-target="#collapse5Two" aria-controls="collapse5Two"   aria-expanded="true"  role="button">
        <span class="accordion-header-text">Accordion Header Two</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse5Two" class="collapse accordion__body" aria-labelledby="accord-5Two" data-bs-parent="#accordion-five">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    <div class="accordion-item">
        <div class="accordion-header collapsed rounded-lg" id="accord-5Three" data-bs-toggle="collapse" data-bs-target="#collapse5Three" aria-controls="collapse5Three"   aria-expanded="true"  role="button">
        <span class="accordion-header-text">Accordion Header Three</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse5Three" class="collapse accordion__body" aria-labelledby="accord-5Three" data-bs-parent="#accordion-five">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    </div>
									`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"accordion-six"},[a("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[a("div",null,[a("h4",{class:"card-title"},"Accordion with icon"),a("p",{class:"m-0 subtitle"},[e(" Add "),a("code",null,"accordion-with-icon"),e(" class with "),a("code",null,"accordion")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-5",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab-5","data-bs-toggle":"tab","data-bs-target":"#widthicon",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab-5","data-bs-toggle":"tab","data-bs-target":"#widthicon-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent-5"},[a("div",{class:"tab-pane fade show active",id:"widthicon",role:"tabpanel","aria-labelledby":"home-tab-5"},[a("div",{class:"card-body pt-0"},[a("div",{class:"accordion accordion-with-icon"},[a("div",{class:"accordion-item"},[a("div",{class:"accordion-header rounded-lg",id:"accord-6One","data-bs-toggle":"collapse","data-bs-target":"#collapse6One","aria-controls":"collapse6One","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header One"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse6One",class:"collapse accordion__body show","aria-labelledby":"accord-6One","data-bs-parent":"#accordion-six"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-6Two","data-bs-toggle":"collapse","data-bs-target":"#collapse6Two","aria-controls":"collapse6Two","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header Two"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse6Two",class:"collapse accordion__body","aria-labelledby":"accord-6Two","data-bs-parent":"#accordion-six"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-6Three","data-bs-toggle":"collapse","data-bs-target":"#collapse6Three","aria-controls":"collapse6Three","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header Three"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse6Three",class:"collapse accordion__body","aria-labelledby":"accord-6Three","data-bs-parent":"#accordion-six"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])])])])]),a("div",{class:"tab-pane fade",id:"widthicon-html",role:"tabpanel","aria-labelledby":"home-tab-5"},[a("div",{class:"card-body pt-0 p-0 code-area"},[a("pre",{class:"mb-0"},[a("code",{class:"language-html"},`<div class="accordion accordion-with-icon scrollAccordian" id="accordion-six">
<div class="accordion-item">
	<div class="accordion-header  rounded-lg" id="accord-6One" data-bs-toggle="collapse" data-bs-target="#collapse6One" aria-controls="collapse6One"   aria-expanded="true"  role="button">
		<span class="accordion-header-icon"></span>
	<span class="accordion-header-text">Accordion Header One</span>
	<span class="accordion-header-indicator"></span>
	</div>
	<div id="collapse6One" class="collapse accordion__body show" aria-labelledby="accord-6One" data-bs-parent="#accordion-six">
	<div class="accordion-body-text">
		Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
	</div>
	</div>
</div>
<div class="accordion-item">
	<div class="accordion-header collapsed rounded-lg" id="accord-6Two" data-bs-toggle="collapse" data-bs-target="#collapse6Two" aria-controls="collapse6Two"   aria-expanded="true"  role="button">
		<span class="accordion-header-icon"></span>
	<span class="accordion-header-text">Accordion Header Two</span>
	<span class="accordion-header-indicator"></span>
	</div>
	<div id="collapse6Two" class="collapse accordion__body" aria-labelledby="accord-6Two" data-bs-parent="#accordion-six">
	<div class="accordion-body-text">
		Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
	</div>
	</div>
</div>
<div class="accordion-item">
	<div class="accordion-header collapsed rounded-lg" id="accord-6Three" data-bs-toggle="collapse" data-bs-target="#collapse6Three" aria-controls="collapse6Three"   aria-expanded="true"  role="button">
		<span class="accordion-header-icon"></span>
	<span class="accordion-header-text">Accordion Header Three</span>
	<span class="accordion-header-indicator"></span>
	</div>
	<div id="collapse6Three" class="collapse accordion__body" aria-labelledby="accord-6Three" data-bs-parent="#accordion-six">
	<div class="accordion-body-text">
		Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
	</div>
	</div>
</div>
</div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"accordion-seven"},[a("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[a("div",null,[a("h4",{class:"card-title"},"Accordion header background"),a("p",{class:"m-0 subtitle"},[e(" Add "),a("code",null,"accordion-header-bg"),e(" class with "),a("code",null,"accrodion")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-6",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab-6","data-bs-toggle":"tab","data-bs-target":"#headerbackground",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab-6","data-bs-toggle":"tab","data-bs-target":"#headerbackground-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent-6"},[a("div",{class:"tab-pane fade show active",id:"headerbackground",role:"tabpanel","aria-labelledby":"home-tab-6"},[a("div",{class:"card-body pt-0"},[a("div",{class:"accordion accordion-header-bg accordion-bordered"},[a("div",{class:"accordion-item"},[a("div",{class:"accordion-header rounded-lg",id:"accord-7One","data-bs-toggle":"collapse","data-bs-target":"#collapse7One","aria-controls":"collapse7One","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header One"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse7One",class:"collapse accordion__body show","aria-labelledby":"accord-7One","data-bs-parent":"#accordion-seven"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-7Two","data-bs-toggle":"collapse","data-bs-target":"#collapse7Two","aria-controls":"collapse7Two","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header Two"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse7Two",class:"collapse accordion__body","aria-labelledby":"accord-7Two","data-bs-parent":"#accordion-seven"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-7Three","data-bs-toggle":"collapse","data-bs-target":"#collapse7Three","aria-controls":"collapse7Three","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header Three"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse7Three",class:"collapse accordion__body","aria-labelledby":"accord-7Three","data-bs-parent":"#accordion-seven"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])])])])]),a("div",{class:"tab-pane fade",id:"headerbackground-html",role:"tabpanel","aria-labelledby":"home-tab-6"},[a("div",{class:"card-body pt-0 p-0 code-area"},[a("pre",{class:"mb-0"},[a("code",{class:"language-html"},`<div class="accordion accordion-header-bg accordion-bordered scrollAccordian" id="accordion-seven">
<div class="accordion-item">
	<div class="accordion-header  rounded-lg" id="accord-7One" data-bs-toggle="collapse" data-bs-target="#collapse7One" aria-controls="collapse7One"   aria-expanded="true"  role="button">
		<span class="accordion-header-icon"></span>
	<span class="accordion-header-text">Accordion Header One</span>
	<span class="accordion-header-indicator"></span>
	</div>
	<div id="collapse7One" class="collapse accordion__body show" aria-labelledby="accord-7One" data-bs-parent="#accordion-seven">
	<div class="accordion-body-text">
		Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
	</div>
	</div>
</div>
<div class="accordion-item">
	<div class="accordion-header collapsed rounded-lg" id="accord-7Two" data-bs-toggle="collapse" data-bs-target="#collapse7Two" aria-controls="collapse7Two"   aria-expanded="true"  role="button">
		<span class="accordion-header-icon"></span>
	<span class="accordion-header-text">Accordion Header Two</span>
	<span class="accordion-header-indicator"></span>
	</div>
	<div id="collapse7Two" class="collapse accordion__body" aria-labelledby="accord-7Two" data-bs-parent="#accordion-seven">
	<div class="accordion-body-text">
		Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
	</div>
	</div>
</div>
<div class="accordion-item">
	<div class="accordion-header collapsed rounded-lg" id="accord-7Three" data-bs-toggle="collapse" data-bs-target="#collapse7Three" aria-controls="collapse7Three"   aria-expanded="true"  role="button">
		<span class="accordion-header-icon"></span>
	<span class="accordion-header-text">Accordion Header Three</span>
		<span class="accordion-header-indicator"></span>
	</div>
	<div id="collapse7Three" class="collapse accordion__body" aria-labelledby="accord-7Three" data-bs-parent="#accordion-seven">
	<div class="accordion-body-text">
		Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
	</div>
	</div>
</div>
</div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"accordion-eight"},[a("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[a("div",null,[a("h4",{class:"card-title"},"Accordion solid background"),a("p",{class:"m-0 subtitle"},[e(" Add class "),a("code",null,"accordion-solid-bg"),e(" with "),a("code",null,"accordion")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-7",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab-7","data-bs-toggle":"tab","data-bs-target":"#solidbackground",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab-7","data-bs-toggle":"tab","data-bs-target":"#solidbackground-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent-7"},[a("div",{class:"tab-pane fade show active",id:"solidbackground",role:"tabpanel","aria-labelledby":"home-tab-7"},[a("div",{class:"card-body pt-0"},[a("div",{class:"accordion accordion-solid-bg"},[a("div",{class:"accordion-item"},[a("div",{class:"accordion-header rounded-lg",id:"accord-8One","data-bs-toggle":"collapse","data-bs-target":"#collapse8One","aria-controls":"collapse8One","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header One"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse8One",class:"collapse accordion__body show","aria-labelledby":"accord-8One","data-bs-parent":"#accordion-eight"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-8Two","data-bs-toggle":"collapse","data-bs-target":"#collapse8Two","aria-controls":"collapse8Two","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header Two"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse8Two",class:"collapse accordion__body","aria-labelledby":"accord-8Two","data-bs-parent":"#accordion-eight"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-8Three","data-bs-toggle":"collapse","data-bs-target":"#collapse8Three","aria-controls":"collapse8Three","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header Three"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse8Three",class:"collapse accordion__body","aria-labelledby":"accord-8Three","data-bs-parent":"#accordion-eight"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])])])])]),a("div",{class:"tab-pane fade",id:"solidbackground-html",role:"tabpanel","aria-labelledby":"home-tab-7"},[a("div",{class:"card-body pt-0 p-0 code-area"},[a("pre",{class:"mb-0"},[a("code",{class:"language-html"},`<div class="accordion accordion-solid-bg scrollAccordian" id="accordion-eight">
    <div class="accordion-item">
        <div class="accordion-header  rounded-lg" id="accord-8One" data-bs-toggle="collapse" data-bs-target="#collapse8One" aria-controls="collapse8One"   aria-expanded="true"  role="button">
            <span class="accordion-header-icon"></span>
        <span class="accordion-header-text">Accordion Header One</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse8One" class="collapse accordion__body show" aria-labelledby="accord-8One" data-bs-parent="#accordion-eight">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    <div class="accordion-item">
        <div class="accordion-header collapsed rounded-lg" id="accord-8Two" data-bs-toggle="collapse" data-bs-target="#collapse8Two" aria-controls="collapse8Two"   aria-expanded="true"  role="button">
            <span class="accordion-header-icon"></span>
        <span class="accordion-header-text">Accordion Header Two</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse8Two" class="collapse accordion__body" aria-labelledby="accord-8Two" data-bs-parent="#accordion-eight">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    <div class="accordion-item">
        <div class="accordion-header collapsed rounded-lg" id="accord-8Three" data-bs-toggle="collapse" data-bs-target="#collapse8Three" aria-controls="collapse8Three"   aria-expanded="true"  role="button">
            <span class="accordion-header-icon"></span>
        <span class="accordion-header-text">Accordion Header Three</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse8Three" class="collapse accordion__body" aria-labelledby="accord-8Three" data-bs-parent="#accordion-eight">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    </div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"accordion-nine"},[a("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[a("div",null,[a("h4",{class:"card-title"},"Accordion active background"),a("p",{class:"m-0 subtitle"},[e(" Add class "),a("code",null,"accordion-active-header"),e(" with "),a("code",null,"accordion")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-8",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab-8","data-bs-toggle":"tab","data-bs-target":"#activebackground",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab-8","data-bs-toggle":"tab","data-bs-target":"#activebackground-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent-8"},[a("div",{class:"tab-pane fade show active",id:"activebackground",role:"tabpanel","aria-labelledby":"home-tab-8"},[a("div",{class:"card-body pt-0"},[a("div",{class:"accordion accordion-active-header"},[a("div",{class:"accordion-item"},[a("div",{class:"accordion-header rounded-lg",id:"accord-9One","data-bs-toggle":"collapse","data-bs-target":"#collapse9One","aria-controls":"collapse9One","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header One"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse9One",class:"collapse accordion__body show","aria-labelledby":"accord-9One","data-bs-parent":"#accordion-nine"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-9Two","data-bs-toggle":"collapse","data-bs-target":"#collapse9Two","aria-controls":"collapse9Two","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header Two"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse9Two",class:"collapse accordion__body","aria-labelledby":"accord-9Two","data-bs-parent":"#accordion-nine"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-9Three","data-bs-toggle":"collapse","data-bs-target":"#collapse9Three","aria-controls":"collapse9Three","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header Three"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse9Three",class:"collapse accordion__body","aria-labelledby":"accord-9Three","data-bs-parent":"#accordion-nine"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])])])])]),a("div",{class:"tab-pane fade",id:"activebackground-html",role:"tabpanel","aria-labelledby":"home-tab-8"},[a("div",{class:"card-body pt-0 p-0 code-area"},[a("pre",{class:"mb-0"},[a("code",{class:"language-html"},`
	<div class="accordion accordion-active-header scrollAccordian" id="accordion-nine">
    <div class="accordion-item">
        <div class="accordion-header  rounded-lg" id="accord-9One" data-bs-toggle="collapse" data-bs-target="#collapse9One" aria-controls="collapse9One"   aria-expanded="true"  role="button">
            <span class="accordion-header-icon"></span>
        <span class="accordion-header-text">Accordion Header One</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse9One" class="collapse accordion__body show" aria-labelledby="accord-9One" data-bs-parent="#accordion-nine">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    <div class="accordion-item">
        <div class="accordion-header collapsed rounded-lg" id="accord-9Two" data-bs-toggle="collapse" data-bs-target="#collapse9Two" aria-controls="collapse9Two"   aria-expanded="true"  role="button">
            <span class="accordion-header-icon"></span>
        <span class="accordion-header-text">Accordion Header Two</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse9Two" class="collapse accordion__body" aria-labelledby="accord-9Two" data-bs-parent="#accordion-nine">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    <div class="accordion-item">
        <div class="accordion-header collapsed rounded-lg" id="accord-9Three" data-bs-toggle="collapse" data-bs-target="#collapse9Three" aria-controls="collapse9Three"   aria-expanded="true"  role="button">
            <span class="accordion-header-icon"></span>
        <span class="accordion-header-text">Accordion Header Three</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse9Three" class="collapse accordion__body" aria-labelledby="accord-9Three" data-bs-parent="#accordion-nine">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    </div>
										`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"accordion-ten"},[a("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[a("div",null,[a("h4",{class:"card-title"},"Accordion header shadow"),a("p",{class:"m-0 subtitle"},[e(" Add "),a("code",null,"accordion-header-shadow"),e(" and "),a("code",null,"accordion-rounded"),e(" class with "),a("code",null,"accordion")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-9",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab-9","data-bs-toggle":"tab","data-bs-target":"#headerShadow",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab-9","data-bs-toggle":"tab","data-bs-target":"#headerShadow-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent-9"},[a("div",{class:"tab-pane fade show active",id:"headerShadow",role:"tabpanel","aria-labelledby":"home-tab-9"},[a("div",{class:"card-body pt-0"},[a("div",{class:"accordion accordion-header-shadow accordion-rounded"},[a("div",{class:"accordion-item"},[a("div",{class:"accordion-header rounded-lg",id:"accord-10One","data-bs-toggle":"collapse","data-bs-target":"#collapse10One","aria-controls":"collapse10One","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header One"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse10One",class:"collapse accordion__body show","aria-labelledby":"accord-10One","data-bs-parent":"#accordion-ten"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-10Two","data-bs-toggle":"collapse","data-bs-target":"#collapse10Two","aria-controls":"collapse10Two","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header Two"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse10Two",class:"collapse accordion__body","aria-labelledby":"accord-10Two","data-bs-parent":"#accordion-ten"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-10Three","data-bs-toggle":"collapse","data-bs-target":"#collapse10Three","aria-controls":"collapse9Three","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header Three"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse10Three",class:"collapse accordion__body","aria-labelledby":"accord-10Three","data-bs-parent":"#accordion-ten"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])])])])]),a("div",{class:"tab-pane fade",id:"headerShadow-html",role:"tabpanel","aria-labelledby":"home-tab-9"},[a("div",{class:"card-body pt-0 code-area"},[a("pre",{class:"mb-0"},[a("code",{class:"language-html"},`<div class="accordion accordion-header-shadow accordion-rounded scrollAccordian" id="accordion-ten">
    <div class="accordion-item">
        <div class="accordion-header  rounded-lg" id="accord-10One" data-bs-toggle="collapse" data-bs-target="#collapse10One" aria-controls="collapse10One"   aria-expanded="true"  role="button">
            <span class="accordion-header-icon"></span>
        <span class="accordion-header-text">Accordion Header One</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse10One" class="collapse accordion__body show" aria-labelledby="accord-10One" data-bs-parent="#accordion-ten">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    <div class="accordion-item">
        <div class="accordion-header collapsed rounded-lg" id="accord-10Two" data-bs-toggle="collapse" data-bs-target="#collapse10Two" aria-controls="collapse10Two"   aria-expanded="true"  role="button">
            <span class="accordion-header-icon"></span>
        <span class="accordion-header-text">Accordion Header Two</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse10Two" class="collapse accordion__body" aria-labelledby="accord-10Two" data-bs-parent="#accordion-ten">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    <div class="accordion-item">
        <div class="accordion-header collapsed rounded-lg" id="accord-10Three" data-bs-toggle="collapse" data-bs-target="#collapse10Three" aria-controls="collapse9Three"   aria-expanded="true"  role="button">
            <span class="accordion-header-icon"></span>
        <span class="accordion-header-text">Accordion Header Three</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse10Three" class="collapse accordion__body" aria-labelledby="accord-10Three" data-bs-parent="#accordion-ten">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    </div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"accordion-eleven"},[a("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[a("div",null,[a("h4",{class:"card-title"},"Accordion rounded stylish"),a("p",{class:"m-0 subtitle"},[e(" Add "),a("code",null,"accordion-rounded-stylish"),e(" class with "),a("code",null,"accordion")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-10",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab-10","data-bs-toggle":"tab","data-bs-target":"#roundedStylish",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab-10","data-bs-toggle":"tab","data-bs-target":"#roundedStylish-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent-10"},[a("div",{class:"tab-pane fade show active",id:"roundedStylish",role:"tabpanel","aria-labelledby":"home-tab-10"},[a("div",{class:"card-body pt-0"},[a("div",{class:"accordion accordion-rounded-stylish accordion-bordered"},[a("div",{class:"accordion-item"},[a("div",{class:"accordion-header rounded-lg",id:"accord-11One","data-bs-toggle":"collapse","data-bs-target":"#collapse11One","aria-controls":"collapse11One","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header One"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse11One",class:"collapse accordion__body show","aria-labelledby":"accord-11One","data-bs-parent":"#accordion-eleven"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-11Two","data-bs-toggle":"collapse","data-bs-target":"#collapse11Two","aria-controls":"collapse11Two","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header Two"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse11Two",class:"collapse accordion__body","aria-labelledby":"accord-11Two","data-bs-parent":"#accordion-eleven"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-11Three","data-bs-toggle":"collapse","data-bs-target":"#collapse11Three","aria-controls":"collapse11Three","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header Three"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse11Three",class:"collapse accordion__body","aria-labelledby":"accord-11Three","data-bs-parent":"#accordion-eleven"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])])])])]),a("div",{class:"tab-pane fade",id:"roundedStylish-html",role:"tabpanel","aria-labelledby":"home-tab-10"},[a("div",{class:"card-body pt-0 p-0 code-area"},[a("pre",{class:"mb-0"},[a("code",{class:"language-html"},`<div class="accordion accordion-rounded-stylish accordion-bordered scrollAccordian" id="accordion-eleven">
    <div class="accordion-item">
        <div class="accordion-header  rounded-lg" id="accord-11One" data-bs-toggle="collapse" data-bs-target="#collapse11One" aria-controls="collapse11One"   aria-expanded="true"  role="button">
            <span class="accordion-header-icon"></span>
        <span class="accordion-header-text">Accordion Header One</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse11One" class="collapse accordion__body show" aria-labelledby="accord-11One" data-bs-parent="#accordion-eleven">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    <div class="accordion-item">
        <div class="accordion-header collapsed rounded-lg" id="accord-11Two" data-bs-toggle="collapse" data-bs-target="#collapse11Two" aria-controls="collapse11Two"   aria-expanded="true"  role="button">
            <span class="accordion-header-icon"></span>
        <span class="accordion-header-text">Accordion Header Two</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse11Two" class="collapse accordion__body" aria-labelledby="accord-11Two" data-bs-parent="#accordion-eleven">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    <div class="accordion-item">
        <div class="accordion-header collapsed rounded-lg" id="accord-11Three" data-bs-toggle="collapse" data-bs-target="#collapse11Three" aria-controls="collapse11Three"   aria-expanded="true"  role="button">
            <span class="accordion-header-icon"></span>
        <span class="accordion-header-text">Accordion Header Three</span>
        <span class="accordion-header-indicator"></span>
        </div>
        <div id="collapse11Three" class="collapse accordion__body" aria-labelledby="accord-11Three" data-bs-parent="#accordion-eleven">
        <div class="accordion-body-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </div>
        </div>
    </div>
    </div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"accordion-twelve"},[a("div",{class:"card-header flex-wrap d-flex justify-content-between border-0"},[a("div",null,[a("h4",{class:"card-title"},"Accordion gradient"),a("p",{class:"m-0 subtitle"},[e(" Add "),a("code",null,"accordion-gradient"),e(" class with "),a("code",null,"accordion")])]),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-11",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab-11","data-bs-toggle":"tab","data-bs-target":"#gradient",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab-11","data-bs-toggle":"tab","data-bs-target":"#gradient-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent-11"},[a("div",{class:"tab-pane fade show active",id:"gradient",role:"tabpanel","aria-labelledby":"home-tab-11"},[a("div",{class:"card-body pt-0"},[a("div",{class:"accordion accordion-rounded-stylish accordion-gradient"},[a("div",{class:"accordion-item"},[a("div",{class:"accordion-header rounded-lg",id:"accord-12One","data-bs-toggle":"collapse","data-bs-target":"#collapse12One","aria-controls":"collapse12One","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header One"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse12One",class:"collapse accordion__body show","aria-labelledby":"accord-12One","data-bs-parent":"#accordion-twelve"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-12Two","data-bs-toggle":"collapse","data-bs-target":"#collapse12Two","aria-controls":"collapse12Two","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header Two"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse12Two",class:"collapse accordion__body","aria-labelledby":"accord-12Two","data-bs-parent":"#accordion-twelve"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])]),a("div",{class:"accordion-item"},[a("div",{class:"accordion-header collapsed rounded-lg",id:"accord-12Three","data-bs-toggle":"collapse","data-bs-target":"#collapse12Three","aria-controls":"collapse12Three","aria-expanded":"true",role:"button"},[a("span",{class:"accordion-header-icon"}),a("span",{class:"accordion-header-text"},"Accordion Header Three"),a("span",{class:"accordion-header-indicator"})]),a("div",{id:"collapse12Three",class:"collapse accordion__body","aria-labelledby":"accord-12Three","data-bs-parent":"#accordion-twelve"},[a("div",{class:"accordion-body-text"}," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. ")])])])])]),a("div",{class:"tab-pane fade",id:"gradient-html",role:"tabpanel","aria-labelledby":"home-tab-11"},[a("div",{class:"card-body pt-0 p-0 code-area"},[a("pre",{class:"mb-0"},[a("code",{class:"language-html"},`<div class="accordion accordion-rounded-stylish accordion-gradient scrollAccordian" id="accordion-twelve">
<div class="accordion-item">
	<div class="accordion-header  rounded-lg" id="accord-12One" data-bs-toggle="collapse" data-bs-target="#collapse12One" aria-controls="collapse12One"   aria-expanded="true"  role="button">
		<span class="accordion-header-icon"></span>
	<span class="accordion-header-text">Accordion Header One</span>
	<span class="accordion-header-indicator"></span>
	</div>
	<div id="collapse12One" class="collapse accordion__body show" aria-labelledby="accord-12One" data-bs-parent="#accordion-twelve">
	<div class="accordion-body-text">
		Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
	</div>
	</div>
</div>
<div class="accordion-item">
	<div class="accordion-header collapsed rounded-lg" id="accord-12Two" data-bs-toggle="collapse" data-bs-target="#collapse12Two" aria-controls="collapse12Two"   aria-expanded="true"  role="button">
		<span class="accordion-header-icon"></span>
	<span class="accordion-header-text">Accordion Header Two</span>
	<span class="accordion-header-indicator"></span>
	</div>
	<div id="collapse12Two" class="collapse accordion__body" aria-labelledby="accord-12Two" data-bs-parent="#accordion-twelve">
	<div class="accordion-body-text">
		Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
	</div>
	</div>
</div>
<div class="accordion-item">
	<div class="accordion-header collapsed rounded-lg" id="accord-12Three" data-bs-toggle="collapse" data-bs-target="#collapse12Three" aria-controls="collapse12Three"   aria-expanded="true"  role="button">
		<span class="accordion-header-icon"></span>
	<span class="accordion-header-text">Accordion Header Three</span>
	<span class="accordion-header-indicator"></span>
	</div>
	<div id="collapse12Three" class="collapse accordion__body" aria-labelledby="accord-12Three" data-bs-parent="#accordion-twelve">
	<div class="accordion-body-text">
		Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
	</div>
	</div>
</div>
</div>`)])])])])])])])],-1)),a("div",T,[a("div",x,[o[12]||(o[12]=a("h4",{class:"title"},"Accordion",-1)),a("div",A,[a("ul",k,[a("li",null,[a("a",{onClick:o[0]||(o[0]=d=>c.scrollView(0)),href:"javaScript:void(0)",class:"scroll"},"Default Accordion")]),a("li",null,[a("a",{onClick:o[1]||(o[1]=d=>c.scrollView(1)),href:"javaScript:void(0)",class:"scroll"},"Accordion Bordered")]),a("li",null,[a("a",{onClick:o[2]||(o[2]=d=>c.scrollView(2)),href:"javaScript:void(0)",class:"scroll"},"Accordion without space")]),a("li",null,[a("a",{onClick:o[3]||(o[3]=d=>c.scrollView(3)),href:"javaScript:void(0)",class:"scroll"},"Accordion without space with border")]),a("li",null,[a("a",{onClick:o[4]||(o[4]=d=>c.scrollView(4)),href:"javaScript:void(0)",class:"scroll"},"Accordion indicator in left position")]),a("li",null,[a("a",{onClick:o[5]||(o[5]=d=>c.scrollView(5)),href:"javaScript:void(0)",class:"scroll"},"Accordion with icon")]),a("li",null,[a("a",{onClick:o[6]||(o[6]=d=>c.scrollView(6)),href:"javaScript:void(0)",class:"scroll"},"Accordion header background")]),a("li",null,[a("a",{onClick:o[7]||(o[7]=d=>c.scrollView(7)),href:"javaScript:void(0)",class:"scroll"},"Accordion solid background")]),a("li",null,[a("a",{onClick:o[8]||(o[8]=d=>c.scrollView(8)),href:"javaScript:void(0)",class:"scroll"},"Accordion active background")]),a("li",null,[a("a",{onClick:o[9]||(o[9]=d=>c.scrollView(9)),href:"javaScript:void(0)",class:"scroll"},"Accordion header shadow")]),a("li",null,[a("a",{onClick:o[10]||(o[10]=d=>c.scrollView(10)),href:"javaScript:void(0)",class:"scroll"},"Accordion Rounded Stylish")]),a("li",null,[a("a",{onClick:o[11]||(o[11]=d=>c.scrollView(11)),href:"javaScript:void(0)",class:"scroll"},"Accordion Gradient")])])])])])])])],64)}const H=p(f,[["render",q]]);export{H as default};
