import{C as m}from"./CommonNavbar-BhIZaCLC.js";import{d as g,_ as h,c as y,b as x,a,az as S,aA as b,aB as n,aC as r,aD as c,f as u,aE as p,aF as k,F as w,o as f,r as C}from"./index-W9UAkHyD.js";const E=g({name:"carousel_",setup(){return{}},components:{CommonNavbar:m},mounted:function(){window.addEventListener("scroll",this.setScrollVal)},unMouted:function(){window.removeEventListener("scroll",this.setScrollVal)},methods:{scrollView(l){document.querySelectorAll(".scrollAccordian")[l].scrollIntoView({behavior:"smooth",block:"start"})},setScrollVal(){var i,o,d;let l=document.querySelectorAll(".scrollAccordian"),s=document.querySelectorAll(".scroll");for(let e=0;e<l.length;e++)l[e].getBoundingClientRect().top<2?(i=s[e].parentElement)==null||i.classList.add("active"):(o=s[e].parentElement)==null||o.classList.remove("active"),l[e].getBoundingClientRect().bottom<=-1&&((d=s[e].parentElement)==null||d.classList.remove("active"))}}}),I={class:"container-fluid"},T={class:"element-area"},j={class:"demo-right"},N={class:"demo-right-inner dz-scroll",id:"right-sidebar"},_={class:"dz-scroll demo-right-tabs",id:"rightSidebarScroll"},F={class:"navbar-nav",id:"menu-bar"};function z(l,s,i,o,d,e){const v=C("CommonNavbar");return f(),y(w,null,[x(v,{page:"Bootstrap",path:"Carousel"}),a("div",I,[s[7]||(s[7]=a("div",{class:"col-xl-12"},null,-1)),a("div",T,[s[6]||(s[6]=a("div",{class:"demo-view"},[a("div",{class:"container-fluid pt-0 ps-0 pe-lg-4 pe-0"},[a("div",{class:"row"},[a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"slides-only"},[a("div",{class:"card-header flex-wrap border-0 pb-0"},[a("h4",{class:"card-intro-title mb-0"},"Slides only"),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#SlidesOnly",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#SlidesOnly-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent"},[a("div",{class:"tab-pane fade show active",id:"SlidesOnly",role:"tabpanel","aria-labelledby":"home-tab"},[a("div",{class:"card-body pt-0 p-4"},[a("div",{id:"carouselExampleIndicators",class:"carousel slide","data-bs-ride":"carousel"},[a("div",{class:"carousel-indicators"},[a("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),a("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1","aria-label":"Slide 2"}),a("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2","aria-label":"Slide 3"})]),a("div",{class:"carousel-inner"},[a("div",{class:"carousel-item active"},[a("img",{class:"d-block w-100 rounded",src:S,alt:"First slide"})]),a("div",{class:"carousel-item"},[a("img",{class:"d-block w-100 rounded",src:b,alt:"Second slide"})]),a("div",{class:"carousel-item"},[a("img",{class:"d-block w-100 rounded",src:n,alt:"Third slide"})])]),a("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev"},[a("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),a("span",{class:"visually-hidden"},"Previous")]),a("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next"},[a("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),a("span",{class:"visually-hidden"},"Next")])])])]),a("div",{class:"tab-pane fade",id:"SlidesOnly-html",role:"tabpanel","aria-labelledby":"home-tab"},[a("div",{class:"card-body p-0 code-area"},[a("pre",{class:"m-0"},[a("code",{class:"language-html"},`<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
	<div class="carousel-indicators">
		<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
		<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
		<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
	</div>
	<div class="carousel-inner">
		<div class="carousel-item active">
			<img class="d-block w-100" src="../../assets/images/big/img1.jpg" alt="First slide">
		</div>
		<div class="carousel-item">
			<img class="d-block w-100" src="../../assets/images/big/img2.jpg" alt="Second slide">
		</div>
		<div class="carousel-item">
			<img class="d-block w-100" src="../../assets/images/big/img3.jpg" alt="Third slide">
		</div>
	</div>
	<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Previous</span>
	</button>
	<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Next</span>
	</button>
</div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"with-captions"},[a("div",{class:"card-header flex-wrap border-0 pb-0"},[a("h4",{class:"card-intro-title mb-0"},"With Captions"),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-1",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab-1","data-bs-toggle":"tab","data-bs-target":"#WithCaptions",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab-1","data-bs-toggle":"tab","data-bs-target":"#WithCaptions-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent-1"},[a("div",{class:"tab-pane fade show active",id:"WithCaptions",role:"tabpanel","aria-labelledby":"home-tab-1"},[a("div",{class:"card-body pt-0 p-4"},[a("div",{class:"bootstrap-carousel"},[a("div",{class:"carousel slide","data-bs-ride":"carousel"},[a("div",{class:"carousel-inner"},[a("div",{class:"carousel-item active"},[a("img",{class:"d-block w-100 rounded",src:b,alt:"First slide"}),a("div",{class:"carousel-caption d-none d-md-block"},[a("h5",null,"First slide label"),a("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum.")])]),a("div",{class:"carousel-item"},[a("img",{class:"d-block w-100 rounded",src:n,alt:"Second slide"}),a("div",{class:"carousel-caption d-none d-md-block"},[a("h5",null,"Second slide label"),a("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum.")])]),a("div",{class:"carousel-item"},[a("img",{class:"d-block w-100 rounded",src:r,alt:"Third slide"}),a("div",{class:"carousel-caption d-none d-md-block"},[a("h5",null,"Third slide label"),a("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum.")])])])])])])]),a("div",{class:"tab-pane fade",id:"WithCaptions-html",role:"tabpanel","aria-labelledby":"home-tab-1"},[a("div",{class:"card-body p-0 code-area"},[a("pre",{class:"m-0"},[a("code",{class:"language-html"},`<div class="bootstrap-carousel">
	<div class="carousel slide" data-bs-ride="carousel">
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img class="d-block w-100" src="../../assets/images/big/img2.jpg" alt="First slide">
				<div class="carousel-caption d-none d-md-block">
					<h5>First slide label</h5>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</div>
			</div>
			<div class="carousel-item">
				<img class="d-block w-100" src="../../assets/images/big/img3.jpg" alt="Second slide">
				<div class="carousel-caption d-none d-md-block">
					<h5>Second slide label</h5>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</div>
			</div>
			<div class="carousel-item">
				<img class="d-block w-100" src="../../assets/images/big/img4.jpg" alt="Third slide">
				<div class="carousel-caption d-none d-md-block">
					<h5>Third slide label</h5>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</div>
			</div>
		</div>
	</div>
</div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"slides-only-1"},[a("div",{class:"card-header flex-wrap border-0 pb-0"},[a("h4",{class:"card-intro-title mb-0"},"Slides Only-1"),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-2",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab-2","data-bs-toggle":"tab","data-bs-target":"#SlidesOnly2",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab-2","data-bs-toggle":"tab","data-bs-target":"#SlidesOnly2-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent-2"},[a("div",{class:"tab-pane fade show active",id:"SlidesOnly2",role:"tabpanel","aria-labelledby":"home-tab-2"},[a("div",{class:"card-body pt-0 p-4"},[a("div",{class:"bootstrap-carousel"},[a("div",{class:"carousel slide","data-bs-ride":"carousel"},[a("div",{class:"carousel-inner"},[a("div",{class:"carousel-item active"},[a("img",{class:"d-block w-100 rounded",src:n,alt:"First slide"})]),a("div",{class:"carousel-item"},[a("img",{class:"d-block w-100 rounded",src:r,alt:"Second slide"})]),a("div",{class:"carousel-item"},[a("img",{class:"d-block w-100 rounded",src:c,alt:"Third slide"})])])])])])]),a("div",{class:"tab-pane fade",id:"SlidesOnly2-html",role:"tabpanel","aria-labelledby":"home-tab-2"},[a("div",{class:"card-body p-0 code-area"},[a("pre",{class:"m-0"},[u(),a("code",{class:"language-html"},`<div class="bootstrap-carousel">
<div class="carousel slide" data-bs-ride="carousel">
	<div class="carousel-inner">
		<div class="carousel-item active">
			<img class="d-block w-100" src="../../assets/images/big/img3.jpg" alt="First slide">
		</div>
		<div class="carousel-item">
			<img class="d-block w-100" src="../../assets/images/big/img4.jpg" alt="Second slide">
		</div>
		<div class="carousel-item">
			<img class="d-block w-100" src="../../assets/images/big/img5.jpg" alt="Third slide">
		</div>
	</div>
</div>
</div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"slides-indicators"},[a("div",{class:"card-header flex-wrap border-0 pb-0"},[a("h4",{class:"card-intro-title mb-0"},"Slides With indicators"),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-3",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab-3","data-bs-toggle":"tab","data-bs-target":"#SlidesIndicators",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab-3","data-bs-toggle":"tab","data-bs-target":"#SlidesIndicators-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent-3"},[a("div",{class:"tab-pane fade show active",id:"SlidesIndicators",role:"tabpanel","aria-labelledby":"home-tab-3"},[a("div",{class:"card-body pt-0 p-4"},[a("div",{class:"bootstrap-carousel"},[a("div",{id:"carouselExampleIndicators2",class:"carousel slide","data-bs-ride":"carousel"},[a("div",{class:"carousel-indicators"},[a("button",{type:"button","data-bs-target":"#carouselExampleIndicators2","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),a("button",{type:"button","data-bs-target":"#carouselExampleIndicators2","data-bs-slide-to":"1","aria-label":"Slide 2"}),a("button",{type:"button","data-bs-target":"#carouselExampleIndicators2","data-bs-slide-to":"2","aria-label":"Slide 3"})]),a("div",{class:"carousel-inner"},[a("div",{class:"carousel-item active"},[a("img",{class:"d-block w-100 rounded",src:r,alt:"First slide"})]),a("div",{class:"carousel-item"},[a("img",{class:"d-block w-100 rounded",src:c,alt:"Second slide"})]),a("div",{class:"carousel-item"},[a("img",{class:"d-block w-100 rounded",src:p,alt:"Third slide"})])]),a("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleIndicators2","data-bs-slide":"prev"},[a("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),a("span",{class:"visually-hidden"},"Previous")]),a("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleIndicators2","data-bs-slide":"next"},[a("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),a("span",{class:"visually-hidden"},"Next")])])])])]),a("div",{class:"tab-pane fade",id:"SlidesIndicators-html",role:"tabpanel","aria-labelledby":"home-tab-3"},[a("div",{class:"card-body p-0 code-area"},[a("pre",{class:"m-0"},[u(),a("code",{class:"language-html"},`<div class="bootstrap-carousel">
	<div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="carousel">
		<div class="carousel-indicators">
			<button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
			<button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
			<button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
		</div>
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img class="d-block w-100" src="../../assets/images/big/img4.jpg" alt="First slide">
			</div>
			<div class="carousel-item">
				<img class="d-block w-100" src="../../assets/images/big/img5.jpg" alt="Second slide">
			</div>
			<div class="carousel-item">
				<img class="d-block w-100" src="../../assets/images/big/img6.jpg" alt="Third slide">
			</div>
		</div>
		<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		</button>
	</div>
</div>`)])])])])])]),a("div",{class:"col-xl-12"},[a("div",{class:"card dz-card scrollAccordian",id:"slides-captions"},[a("div",{class:"card-header flex-wrap border-0 pb-0"},[a("h4",{class:"card-intro-title mb-0"},"Slides With captions"),a("ul",{class:"nav nav-tabs dzm-tabs",id:"myTab-4",role:"tablist"},[a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link active",id:"home-tab-4","data-bs-toggle":"tab","data-bs-target":"#SlidesCaptions",type:"button",role:"tab","aria-selected":"true"}," Preview ")]),a("li",{class:"nav-item",role:"presentation"},[a("button",{class:"nav-link",id:"profile-tab-4","data-bs-toggle":"tab","data-bs-target":"#SlidesCaptions-html",type:"button",role:"tab","aria-selected":"false"}," HTML ")])])]),a("div",{class:"tab-content",id:"myTabContent-4"},[a("div",{class:"tab-pane fade show active",id:"SlidesCaptions",role:"tabpanel","aria-labelledby":"home-tab-4"},[a("div",{class:"card-body pt-0 p-4"},[a("div",{class:"bootstrap-carousel"},[a("div",{"data-bs-ride":"carousel",class:"carousel slide",id:"carouselExampleCaptions"},[a("div",{class:"carousel-indicators"},[a("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),a("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),a("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})]),a("div",{class:"carousel-inner"},[a("div",{class:"carousel-item active"},[a("img",{class:"d-block w-100",src:c,alt:""}),a("div",{class:"carousel-caption d-none d-md-block"},[a("h5",null,"First slide label"),a("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum.")])]),a("div",{class:"carousel-item"},[a("img",{alt:"",class:"d-block w-100",src:p}),a("div",{class:"carousel-caption d-none d-md-block"},[a("h5",null,"Second slide label"),a("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])]),a("div",{class:"carousel-item"},[a("img",{alt:"",class:"d-block w-100",src:k}),a("div",{class:"carousel-caption d-none d-md-block"},[a("h5",null,"Third slide label"),a("p",null," Praesent commodo cursus magna, vel scelerisque nisl consectetur. ")])])]),a("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev"},[a("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),a("span",{class:"visually-hidden"},"Previous")]),a("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next"},[a("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),a("span",{class:"visually-hidden"},"Next")])])])])]),a("div",{class:"tab-pane fade",id:"SlidesCaptions-html",role:"tabpanel","aria-labelledby":"home-tab-4"},[a("div",{class:"card-body p-0 code-area"},[a("pre",{class:"m-0"},[a("code",{class:"language-html"},`<div class="bootstrap-carousel">
	<div data-bs-ride="carousel" class="carousel slide" id="carouselExampleCaptions">
		<div class="carousel-indicators">
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
		</div>
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img class="d-block w-100" src="../../assets/images/big/img5.jpg" alt="">
				<div class="carousel-caption d-none d-md-block">
					<h5>First slide label</h5>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</div>
			</div>
			<div class="carousel-item">
				<img alt="" class="d-block w-100" src="../../assets/images/big/img6.jpg">
				<div class="carousel-caption d-none d-md-block">
					<h5>Second slide label</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
			</div>
			<div class="carousel-item">
				<img alt="" class="d-block w-100" src="../../assets/images/big/img7.jpg">
				<div class="carousel-caption d-none d-md-block">
					<h5>Third slide label</h5>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</div>
			</div>
		</div>
		<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		</button>
	</div>
</div>`)])])])])])])])])],-1)),a("div",j,[a("div",N,[s[5]||(s[5]=a("h4",{class:"title"},"Carousel",-1)),a("div",_,[a("ul",F,[a("li",null,[a("a",{onClick:s[0]||(s[0]=t=>l.scrollView(0)),href:"javascript:void(0)",class:"scroll"},"Slides Only")]),a("li",null,[a("a",{onClick:s[1]||(s[1]=t=>l.scrollView(1)),href:"javascript:void(0)",class:"scroll"},"With Captions")]),a("li",null,[a("a",{onClick:s[2]||(s[2]=t=>l.scrollView(2)),href:"javascript:void(0)",class:"scroll"},"slides only-1")]),a("li",null,[a("a",{onClick:s[3]||(s[3]=t=>l.scrollView(3)),href:"javascript:void(0)",class:"scroll"},"Slides With indicators")]),a("li",null,[a("a",{onClick:s[4]||(s[4]=t=>l.scrollView(4)),href:"javascript:void(0)",class:"scroll"},"Slides With captions")])])])])])])])],64)}const L=h(E,[["render",z]]);export{L as default};
