import{d as E,i as C,x as A,y as O,z as L,o as V,c as k,A as P,a as s,_ as T,e as B,n as N,t as Z,F as $,R as I,I as f,b as y,w as S,r as F,f as j,h as R,p as M,q as D,v as q}from"./index-W9UAkHyD.js";import{C as U}from"./CustomeSelectOptinProject-DdYBc33f.js";var b=function(){return b=Object.assign||function(a){for(var e,i=1,n=arguments.length;i<n;i++)for(var t in e=arguments[i])Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t]);return a},b.apply(this,arguments)},Y=function(){function a(e,i,n){var t=this;this.endVal=i,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(l){t.startTime||(t.startTime=l);var o=l-t.startTime;t.remaining=t.duration-o,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(o,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(o,t.startVal,t.endVal-t.startVal,t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(o/t.duration);var r=t.countDown?t.frameVal<t.endVal:t.frameVal>t.endVal;t.frameVal=r?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),o<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.options.onCompleteCallback&&t.options.onCompleteCallback()},this.formatNumber=function(l){var o,r,p,u,m=l<0?"-":"";o=Math.abs(l).toFixed(t.options.decimalPlaces);var h=(o+="").split(".");if(r=h[0],p=h.length>1?t.options.decimal+h[1]:"",t.options.useGrouping){u="";for(var g=3,d=0,c=0,w=r.length;c<w;++c)t.options.useIndianSeparators&&c===4&&(g=2,d=1),c!==0&&d%g==0&&(u=t.options.separator+u),d++,u=r[w-c-1]+u;r=u}return t.options.numerals&&t.options.numerals.length&&(r=r.replace(/[0-9]/g,function(v){return t.options.numerals[+v]}),p=p.replace(/[0-9]/g,function(v){return t.options.numerals[+v]})),m+t.options.prefix+r+p+t.options.suffix},this.easeOutExpo=function(l,o,r,p){return r*(1-Math.pow(2,-10*l/p))*1024/1023+o},this.options=b(b({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof e=="string"?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return t.handleScroll(t)}),window.onscroll=function(){window.onScrollFns.forEach(function(l){return l()})},this.handleScroll(this)))}return a.prototype.handleScroll=function(e){if(e&&window&&!e.once){var i=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),t=n.top+window.pageYOffset,l=n.top+n.height+window.pageYOffset;l<i&&l>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>l||t>i)&&!e.paused&&e.reset()}},a.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var i=e-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},a.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},a.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},a.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},a.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},a.prototype.printValue=function(e){var i;if(this.el){var n=this.formattingFn(e);(i=this.options.plugin)!==null&&i!==void 0&&i.render?this.options.plugin.render(this.el,n):this.el.tagName==="INPUT"?this.el.value=n:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=n:this.el.innerHTML=n}},a.prototype.ensureNumber=function(e){return typeof e=="number"&&!isNaN(e)},a.prototype.validateValue=function(e){var i=Number(e);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},a.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},a}();const G={class:"countup-wrap"},z=E({name:"CountUp",props:{endVal:{},startVal:{default:0},duration:{default:2.5},decimalPlaces:{default:0},autoplay:{type:Boolean,default:!0},loop:{type:[Boolean,Number],default:!1},delay:{default:0},options:{default:void 0}},emits:["init","finished"],setup(a,{expose:e,emit:i}){const n=a,t=i;let l=C(),o=C(),r=0;const p=C(!1);let u;function m(){if(!l.value)return void console.warn("[vue-countup-v3]","elRef can't found");r=0,p.value=!1;const d=Number(n.startVal),c=Number(n.endVal),w=Number(n.duration);o.value=new Y(l.value,c,{startVal:d,duration:w,decimalPlaces:n.decimalPlaces,...n.options}),o.value.error?console.error("[vue-countup-v3]",o.value.error):t("init",o.value)}function h(){var d;o.value||m(),(d=o.value)==null||d.start(function(){typeof n.loop=="boolean"&&n.loop||n.loop>r?u=function(c,w=1){const v=C(-1);let x;return v.value=requestAnimationFrame(function H(_){x||(x=_),_-x<1e3*w?v.value=requestAnimationFrame(H):c()}),{cancel:function(){window.cancelAnimationFrame(v.value)}}}(()=>{var c;(c=o.value)==null||c.reset(),h()},n.delay):p.value=!0}),r++}function g(){u==null||u.cancel(),m(),h()}return A([()=>n.startVal,()=>n.endVal],()=>{n.autoplay&&g()}),A(p,d=>{var c;d&&((c=n.options)!=null&&c.onCompleteCallback&&n.options.onCompleteCallback(),t("finished"))}),O(()=>{m(),n.autoplay&&h()}),L(()=>{var d;u==null||u.cancel(),(d=o.value)==null||d.reset()}),e({init:m,restart:g}),(d,c)=>(V(),k("div",G,[P(d.$slots,"prefix"),s("span",{ref_key:"elRef",ref:l},null,512),P(d.$slots,"suffix")]))}}),K=E({name:"counter_",components:{CountUp:z},setup(){return{counterData:[{img:`<svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.9715 29.3168C15.7197 29.3168 9.52686 30.4132 9.52686 34.8043C9.52686 39.1953 15.6804 40.331 22.9715 40.331C30.2233 40.331 36.4144 39.2328 36.4144 34.8435C36.4144 30.4543 30.2626 29.3168 22.9715 29.3168Z"
                stroke="#3AC977"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.9714 23.0537C27.7304 23.0537 31.5875 19.1948 31.5875 14.4359C31.5875 9.67694 27.7304 5.81979 22.9714 5.81979C18.2125 5.81979 14.3536 9.67694 14.3536 14.4359C14.3375 19.1787 18.1696 23.0377 22.9107 23.0537H22.9714Z"
                stroke="#3AC977"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>`,num:"24",color:"success"},{img:`<svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.8961 26.5849C34.1612 26.5849 35.223 27.629 35.0296 28.8783C33.8947 36.2283 27.6026 41.6855 20.0138 41.6855C11.6178 41.6855 4.8125 34.8803 4.8125 26.4862C4.8125 19.5704 10.0664 13.1283 15.9816 11.6717C17.2526 11.3579 18.5553 12.252 18.5553 13.5605C18.5553 22.4263 18.8533 24.7197 20.5368 25.9671C22.2204 27.2145 24.2 26.5849 32.8961 26.5849Z"
                stroke="var(--primary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M41.1733 19.2019C41.2739 13.5059 34.2772 4.32428 25.7509 4.48217C25.0877 4.49402 24.5568 5.04665 24.5272 5.70783C24.3121 10.3914 24.6022 16.4605 24.764 19.2118C24.8134 20.0684 25.4864 20.7414 26.341 20.7907C29.1693 20.9526 35.4594 21.1736 40.0759 20.4749C40.7035 20.3802 41.1634 19.8355 41.1733 19.2019Z"
                stroke="var(--primary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>`,num:"12",color:"primary"},{img:`<svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.9717 41.0539C22.9717 41.0539 37.3567 36.6983 37.3567 24.6908C37.3567 12.6814 37.878 11.7439 36.723 10.5889C35.5699 9.43391 24.858 5.69891 22.9717 5.69891C21.0855 5.69891 10.3736 9.43391 9.21863 10.5889C8.0655 11.7439 8.58675 12.6814 8.58675 24.6908C8.58675 36.6983 22.9717 41.0539 22.9717 41.0539Z"
                stroke="#BB6BD9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.4945 26.4642L19.4482 19.4179"
                stroke="#BB6BD9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.4487 26.4642L26.495 19.4179"
                stroke="#BB6BD9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>`,num:"7",color:"purple"},{img:`<svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.0396 20.974C36.6552 20.6065 38.6689 18.364 38.6746 15.6471C38.6746 12.9696 36.7227 10.7496 34.1633 10.3296"
                stroke="#FF5E5E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M37.4912 27.262C40.0243 27.6407 41.7925 28.5276 41.7925 30.3557C41.7925 31.6139 40.96 32.4314 39.6137 32.9451"
                stroke="#FF5E5E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.7879 28.0373C16.7616 28.0373 11.6147 28.9504 11.6147 32.5973C11.6147 36.2423 16.7297 37.1817 22.7879 37.1817C28.8141 37.1817 33.9591 36.2779 33.9591 32.6292C33.9591 28.9804 28.846 28.0373 22.7879 28.0373Z"
                stroke="#FF5E5E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.7876 22.8325C26.742 22.8325 29.9483 19.6281 29.9483 15.6719C29.9483 11.7175 26.742 8.51123 22.7876 8.51123C18.8333 8.51123 15.627 11.7175 15.627 15.6719C15.612 19.6131 18.7939 22.8194 22.7351 22.8325H22.7876Z"
                stroke="#FF5E5E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.5344 20.974C8.91691 20.6065 6.90504 18.364 6.89941 15.6471C6.89941 12.9696 8.85129 10.7496 11.4107 10.3296"
                stroke="#FF5E5E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.0825 27.262C5.54937 27.6407 3.78125 28.5276 3.78125 30.3557C3.78125 31.6139 4.61375 32.4314 5.96 32.9451"
                stroke="#FF5E5E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>`,num:"5",color:"danger"}]}}}),J={class:"card box-hover"},Q={class:"card-body"},W={class:"d-flex align-items-center"},X=["innerHTML"],tt={class:"total-projects ms-3"};function et(a,e,i,n,t,l){return V(!0),k($,null,B(a.counterData,({img:o,color:r,num:p},u)=>(V(),k("div",{class:"col-xl-3 col-sm-6",key:u},[s("div",J,[s("div",Q,[s("div",W,[s("div",{class:"icon-box icon-box-lg bg-success-light rounded-circle",innerHTML:o},null,8,X),s("div",tt,[s("h3",{class:N(`text-${r} count`)},Z(p),3),e[0]||(e[0]=s("span",null,"Total Completed",-1))])])])])]))),128)}const nt=T(K,[["render",et]]),st=E({name:"project_",components:{Counter:nt,CustomeSelectOptinProject:U,RouterLink:I},setup(){return{optionArray:[{img:f.contactPic2,bg:"purple",selectValue:"Testing"},{img:f.contactPic2,bg:"danger",selectValue:"Pending"},{img:f.contactPic1,bg:"purple",selectValue:"In Progress"},{img:f.contactPic3,bg:"danger",selectValue:"Pending"},{img:f.contactPic3,bg:"danger",selectValue:"Pending"},{img:f.contactPic2,bg:"danger",selectValue:"Pending"},{img:f.contactPic2,bg:"purple",selectValue:"In Progress"},{img:f.contactPic3,bg:"danger",selectValue:"Pending"}]}}}),ot={class:"container-fluid"},it={class:"row"},at={class:"d-flex justify-content-between align-items-center mb-4"},rt={class:"d-flex align-items-center"},lt={class:"icon-box icon-box-sm bg-secondary me-2"},ut={class:"card box-hover"},dt={class:"card-body"},ct={class:"products style-1"},pt=["src"],ht={class:"progress mt-4"},mt={class:"card-footer d-flex justify-content-between flex-wrap"};function ft(a,e,i,n,t,l){const o=F("Counter"),r=F("RouterLink"),p=F("CustomeSelectOptinProject");return V(),k("div",ot,[s("div",it,[y(o),s("div",at,[e[2]||(e[2]=s("h5",{class:"mb-0"},"Tasks Summary",-1)),s("div",rt,[s("div",lt,[y(r,{to:"/task-summary"},{default:S(()=>e[0]||(e[0]=[s("svg",{width:"20",height:"20",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M8.50032 3H2.66699V8.83333H8.50032V3Z",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M17.6668 3H11.8335V8.83333H17.6668V3Z",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M17.6668 12.1667H11.8335V18H17.6668V12.1667Z",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M8.50032 12.1667H2.66699V18H8.50032V12.1667Z",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])),_:1})]),y(r,{to:"?",class:"btn btn-primary btn-sm ms-2"},{default:S(()=>e[1]||(e[1]=[j("+ Add Task")])),_:1})])]),(V(!0),k($,null,B(a.optionArray,({img:u,bg:m,selectValue:h},g)=>(V(),k("div",{class:"col-xl-3 col-sm-6",key:g},[s("div",ut,[e[6]||(e[6]=s("div",{class:"card-header"},[s("h5",{class:"mb-0"},"# 1 . Advertising Platform AD.")],-1)),s("div",dt,[s("div",ct,[s("img",{src:u,class:"avatar avatar-lg rounded-circle",alt:""},null,8,pt),e[3]||(e[3]=s("div",null,[s("h6",null,"Cedric Kelly"),s("span",null,"06 Feb 2023")],-1))]),e[4]||(e[4]=R('<p class="my-3"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text. </p><div><p class="text-secondary mb-1 font-w500">Team</p><div class="avatar-list avatar-list-stacked"><img src="'+M+'" class="avatar rounded-circle" alt="">  <img src="'+D+'" class="avatar rounded-circle" alt="">  <img src="'+q+'" class="avatar rounded-circle" alt="">  <img src="'+D+'" class="avatar rounded-circle" alt="">  <img src="'+M+'" class="avatar rounded-circle" alt=""></div></div>',2)),s("div",ht,[s("div",{class:N(`progress-bar bg-${m}`),style:{width:"60%",height:"5px","border-radius":"4px"},role:"progressbar"},null,2)])]),s("div",mt,[e[5]||(e[5]=s("div",{class:"due-progress"},[s("p",{class:"mb-0 text-secondary"},[j("Due "),s("span",{class:"text-purple"},": 2023-06-02")])],-1)),y(p,{valueOne:h,valueTwo:"Pending",valueThree:"Testing",valueFour:"Complete"},null,8,["valueOne"])])])]))),128))])])}const wt=T(st,[["render",ft]]);export{wt as default};
