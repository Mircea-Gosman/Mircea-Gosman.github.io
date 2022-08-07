(function(){"use strict";var e={6779:function(e,t,n){var o=n(3396);function i(e,t,n,i,a,r){const s=(0,o.up)("HomeComponent");return(0,o.wg)(),(0,o.j4)(s)}const a={class:"app-container"},r={class:"container"};function s(e,t,n,i,s,c){const l=(0,o.up)("NavigationComponent"),p=(0,o.up)("PresentationComponent"),m=(0,o.up)("FooterComponent");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",r,[(0,o.Wm)(l,{onPageJump:c.gotToPage,currentPage:c.getCurrentPage()},null,8,["onPageJump","currentPage"]),(0,o.Wm)(p,{onNextPage:c.nextPage,copy:s.page},null,8,["onNextPage","copy"]),(0,o.Wm)(m)])])}var c=n(7139);const l={class:"nav-container"};function p(e,t,n,i,a,r){return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("a",{onClick:t[0]||(t[0]=()=>r.select("Projects")),class:(0,c.C_)("nav-element active-"+a.activeSection.Projects)},"Projects",2),(0,o._)("a",{onClick:t[1]||(t[1]=()=>r.select("Internships")),class:(0,c.C_)("nav-element center-nav-element active-"+a.activeSection.Internships)},"Internships",2),(0,o._)("a",{onClick:t[2]||(t[2]=()=>r.select("Contact")),class:(0,c.C_)("nav-element active-"+a.activeSection.Contact)},"Contact",2)])}var m={name:"NavigationComponent",props:{currentPage:String},data(){return{activeSection:{Projects:!1,Internships:!1,Contact:!1}}},methods:{select(e){for(const[t]of Object.entries(this.activeSection))this.activeSection[t]=t===e;this.$emit("pageJump",e)}},watch:{currentPage:function(e){this.select(e)}}},u=n(89);const d=(0,u.Z)(m,[["render",p]]);var h=d,g=n(9242);const w={class:"presentation-container"},f={key:0,class:"presentation-meta"},v={key:1,class:"presentation-hook"},k={key:2,class:"presentation-body"},y={key:0,class:"presentation-postScriptum"};function C(e,t,n,i,a,r){const s=(0,o.up)("LinkSVG"),l=(0,o.up)("ArrowSVG");return(0,o.wg)(),(0,o.iD)("div",w,[n.copy.meta?((0,o.wg)(),(0,o.iD)("h1",f,(0,c.zw)(n.copy.meta),1)):(0,o.kq)("",!0),(0,o.Wm)(g.uT,{name:"fade"},{default:(0,o.w5)((()=>[n.copy.title?((0,o.wg)(),(0,o.iD)("h2",{key:0,class:"presentation-title",onClick:t[0]||(t[0]=e=>r.openLinks())},[(0,o.Uk)((0,c.zw)(n.copy.title)+" ",1),n.copy.links?((0,o.wg)(),(0,o.j4)(s,{key:0,class:"linkSVG"})):(0,o.kq)("",!0)])):(0,o.kq)("",!0)])),_:1}),n.copy.hook?((0,o.wg)(),(0,o.iD)("p",v,(0,c.zw)(n.copy.hook),1)):(0,o.kq)("",!0),n.copy.body?((0,o.wg)(),(0,o.iD)("p",k,(0,c.zw)(n.copy.body),1)):(0,o.kq)("",!0),(0,o.Wm)(g.uT,{name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[n.copy.postScriptum?((0,o.wg)(),(0,o.iD)("p",y,(0,c.zw)(n.copy.postScriptum),1)):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(g.uT,{name:"fadeBtn",mode:"in-out"},{default:(0,o.w5)((()=>["Contact"!==n.copy.meta?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"presentation-button",onClick:t[1]||(t[1]=e=>this.$emit("nextPage"))},[(0,o.Wm)(l,{class:"presentation-button-svg"})])):(0,o.kq)("",!0)])),_:1})])}const b={width:"38",height:"22",viewBox:"0 0 38 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},x=(0,o._)("path",{d:"M17.2322 20.7678C18.2085 21.7441 19.7915 21.7441 20.7678 20.7678L36.6777 4.85786C37.654 3.88155 37.654 2.29864 36.6777 1.32233C35.7014 0.34602 34.1184 0.34602 33.1421 1.32233L19 15.4645L4.85786 1.32233C3.88155 0.34602 2.29864 0.34602 1.32233 1.32233C0.34602 2.29864 0.34602 3.88155 1.32233 4.85786L17.2322 20.7678ZM16.5 18V19H21.5V18H16.5Z",fill:"#585555"},null,-1),S=[x];function _(e,t,n,i,a,r){return(0,o.wg)(),(0,o.iD)("svg",b,S)}var V={name:"ArrowSVG"};const P=(0,u.Z)(V,[["render",_]]);var I=P;const G={"xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:cc":"http://creativecommons.org/ns#","xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape",viewBox:"0 -256 1850 1850",id:"svg3025",version:"1.1","inkscape:version":"0.48.3.1 r9886","sodipodi:docname":"external_link_font_awesome.svg"},q={id:"metadata3035"},W=(0,o.Uk)("image/svg+xml"),j=(0,o._)("defs",{id:"defs3033"},null,-1),H=(0,o._)("g",{transform:"matrix(1,0,0,-1,30.372881,1426.9492)",id:"g3027"},[(0,o._)("path",{d:"M 1408,608 V 288 Q 1408,169 1323.5,84.5 1239,0 1120,0 H 288 Q 169,0 84.5,84.5 0,169 0,288 v 832 Q 0,1239 84.5,1323.5 169,1408 288,1408 h 704 q 14,0 23,-9 9,-9 9,-23 v -64 q 0,-14 -9,-23 -9,-9 -23,-9 H 288 q -66,0 -113,-47 -47,-47 -47,-113 V 288 q 0,-66 47,-113 47,-47 113,-47 h 832 q 66,0 113,47 47,47 47,113 v 320 q 0,14 9,23 9,9 23,9 h 64 q 14,0 23,-9 9,-9 9,-23 z m 384,864 V 960 q 0,-26 -19,-45 -19,-19 -45,-19 -26,0 -45,19 L 1507,1091 855,439 q -10,-10 -23,-10 -13,0 -23,10 L 695,553 q -10,10 -10,23 0,13 10,23 l 652,652 -176,176 q -19,19 -19,45 0,26 19,45 19,19 45,19 h 512 q 26,0 45,-19 19,-19 19,-45 z",id:"path3029","inkscape:connector-curvature":"0",style:{fill:"currentColor"}})],-1);function M(e,t,n,i,a,r){const s=(0,o.up)("dc:format"),c=(0,o.up)("dc:type"),l=(0,o.up)("cc:Work"),p=(0,o.up)("rdf:RDF"),m=(0,o.up)("sodipodi:namedview");return(0,o.wg)(),(0,o.iD)("svg",G,[(0,o._)("metadata",q,[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l,{"rdf:about":""},{default:(0,o.w5)((()=>[(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[W])),_:1}),(0,o.Wm)(c,{"rdf:resource":"http://purl.org/dc/dcmitype/StillImage"})])),_:1})])),_:1})]),j,(0,o.Wm)(m,{pagecolor:"#ffffff",bordercolor:"#666666",borderopacity:"1",objecttolerance:"10",gridtolerance:"10",guidetolerance:"10","inkscape:pageopacity":"0","inkscape:pageshadow":"2","inkscape:window-width":"640","inkscape:window-height":"480",id:"namedview3031",showgrid:"false","inkscape:zoom":"0.13169643","inkscape:cx":"896","inkscape:cy":"896","inkscape:window-x":"0","inkscape:window-y":"25","inkscape:window-maximized":"0","inkscape:current-layer":"svg3025"}),H])}var Z={name:"LinkSVG"};const D=(0,u.Z)(Z,[["render",M]]);var L=D,T={name:"PresentationComponent",components:{ArrowSVG:I,LinkSVG:L},props:{copy:Object},methods:{openLinks(){this.copy.links.forEach((e=>window.open(e,"_blank")))}}};const O=(0,u.Z)(T,[["render",C]]);var z=O;const A={class:"footer-container"},B={class:"footer-icons"},F={href:"mailto:mircea.gosman@mail.mcgill.com",target:"_blank"},N={href:"https://github.com/Mircea-Gosman",target:"_blank"},E={href:"https://www.linkedin.com/in/mircea-gosman-14ab08177/",target:"_blank"},U=(0,o._)("div",{class:"footer-signature"},[(0,o.Uk)("Mircea Gosman"),(0,o._)("br"),(0,o.Uk)("2022")],-1);function J(e,t,n,i,a,r){const s=(0,o.up)("EmailSVG"),c=(0,o.up)("GithubSVG"),l=(0,o.up)("LinkedInSVG");return(0,o.wg)(),(0,o.iD)("div",A,[(0,o._)("div",B,[(0,o._)("a",F,[(0,o.Wm)(s,{class:"footer-icon"})]),(0,o._)("a",N,[(0,o.Wm)(c,{class:"footer-icon center-footer-icon"})]),(0,o._)("a",E,[(0,o.Wm)(l,{class:"footer-icon"})])]),U])}const Q={width:"36",height:"36",viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},K=(0,o._)("path",{d:"M18 19.0695L0.0225 4.5H35.9775L18 19.0695ZM18 22.9305L0 8.343V31.5H36V8.343L18 22.9305Z"},null,-1),$=[K];function R(e,t,n,i,a,r){return(0,o.wg)(),(0,o.iD)("svg",Q,$)}var X={name:"EmailSVG"};const Y=(0,u.Z)(X,[["render",R]]);var ee=Y;const te={width:"36",height:"36",viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},ne=(0,o._)("path",{d:"M28.5 0H7.5C3.3585 0 0 3.3585 0 7.5V28.5C0 32.6415 3.3585 36 7.5 36H28.5C32.643 36 36 32.6415 36 28.5V7.5C36 3.3585 32.643 0 28.5 0ZM21.801 29.385C21.1935 29.502 21 29.1285 21 28.809V25.5165C21 24.396 20.607 23.667 20.175 23.295C22.848 22.998 25.656 21.9825 25.656 17.3745C25.656 16.0635 25.188 14.9925 24.4215 14.154C24.5445 13.851 24.9555 12.63 24.303 10.9785C24.303 10.9785 23.2965 10.656 21.006 12.2085C20.046 11.9385 19.02 11.808 18 11.802C16.98 11.8065 15.954 11.9385 14.9955 12.2055C12.7035 10.653 11.6955 10.9755 11.6955 10.9755C11.0445 12.6285 11.4555 13.848 11.58 14.1525C10.812 14.9925 10.344 16.062 10.344 17.373C10.344 21.969 13.1445 22.9995 15.8115 23.304C15.468 23.604 15.1575 24.132 15.0495 24.909C14.364 25.215 12.6285 25.7445 11.5575 23.91C11.5575 23.91 10.923 22.758 9.717 22.6725C9.717 22.6725 8.547 22.6575 9.6345 23.403C9.6345 23.403 10.422 23.772 10.968 25.158C10.968 25.158 11.6625 27.3 15 26.574V28.8075C15 29.124 14.8065 29.496 14.208 29.385C9.438 27.7995 6 23.301 6 18C6 11.3715 11.373 6 18 6C24.627 6 30 11.3715 30 18C30 23.2995 26.5665 27.7965 21.801 29.385Z"},null,-1),oe=[ne];function ie(e,t,n,i,a,r){return(0,o.wg)(),(0,o.iD)("svg",te,oe)}var ae={name:"GithubSVG"};const re=(0,u.Z)(ae,[["render",ie]]);var se=re;const ce={width:"36",height:"36",viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},le=(0,o._)("path",{d:"M28.5 0H7.5C3.3585 0 0 3.3585 0 7.5V28.5C0 32.6415 3.3585 36 7.5 36H28.5C32.643 36 36 32.6415 36 28.5V7.5C36 3.3585 32.643 0 28.5 0ZM12 28.5H7.5V12H12V28.5ZM9.75 10.098C8.301 10.098 7.125 8.913 7.125 7.452C7.125 5.991 8.301 4.806 9.75 4.806C11.199 4.806 12.375 5.991 12.375 7.452C12.375 8.913 11.2005 10.098 9.75 10.098ZM30 28.5H25.5V20.094C25.5 15.042 19.5 15.4245 19.5 20.094V28.5H15V12H19.5V14.6475C21.594 10.7685 30 10.482 30 18.3615V28.5Z"},null,-1),pe=[le];function me(e,t,n,i,a,r){return(0,o.wg)(),(0,o.iD)("svg",ce,pe)}var ue={name:"LinkedInSVG"};const de=(0,u.Z)(ue,[["render",me]]);var he=de,ge={name:"FooterComponent",components:{EmailSVG:ee,GithubSVG:se,LinkedInSVG:he}};const we=(0,u.Z)(ge,[["render",J]]);var fe=we,ve=JSON.parse('[{"meta":"Hey","body":"I’ll be a Software Engineering student at McGill University until December 2023. I’m seeking a challenging internship for next Summer."},{"meta":"Projects","title":"1. Kollecto / NFTea","hook":"Anyone can do Web3: it’s just web.","body":"With 9 other students, I started working on a marketplace that allows users to create NFTs from their Instagram content.","links":["https://github.com/Mircea-Gosman/Kollecto"]},{"meta":"Projects","title":"2. Pause the Schedule","hook":"I’ve been into CS since before University.","body":"Back then, I built a computer vision tool to scan my friends’ schedules so that I can know when they’re available for lunch.","links":["https://github.com/Mircea-Gosman/Pause"]},{"meta":"Projects","title":"3. Local Freelance","hook":"I love to make design accessible.","body":"At the start of the pandemic, I offered two local businesses web redesigns. These were my very first websites.","links":["https://barbershop.mirceagosman.com/","https://icecreamshop.mirceagosman.com/"]},{"meta":"Internships","title":"2022 Morgan Stanley","hook":"That’s where I’m at right now!","body":"It’s very WiP, but the web app I’m working on dynamically creates flow diagrams of system architectures from scratch."},{"meta":"Internships","title":"2021 Wise Systems","hook":"Startups are the best place to learn Agile.","body":"There I learned what PMs, designers and engineers really are. I did front-to-back web in their new permissioning squad!"},{"meta":"Internships","title":"2019/20 Bombardier","hook":"This was my first job, like ever.","body":"The supplier & QA department produced loads of data from supplier audits. Help with analyzing & displaying that data was me!","links":["https://bombardierquality.service-now.com/sp"]},{"meta":"Contact","title":"Summer 2023 ?","body":"I am open for a Summer 2023 internship. Welcome are also full time positions starting in January 2024. ","postScriptum":"P.S. There’s a world in which I can graduate by May 2023 if a suiting card is played. The deck is yours to shuffle! "}]'),ke={name:"HomeComponent",components:{NavigationComponent:h,PresentationComponent:z,FooterComponent:fe},data(){return{index:0,page:ve[0]}},methods:{nextPage(){this.index<ve.length&&(this.index++,this.page=ve[this.index])},gotToPage(e){const t=ve.indexOf(ve.find((t=>t.meta===e)));(t||0===t)&&(this.index=t,this.page=ve[this.index])},getCurrentPage(){return ve[this.index].meta}}};const ye=(0,u.Z)(ke,[["render",s],["__scopeId","data-v-59438ae3"]]);var Ce=ye,be={name:"App",components:{HomeComponent:Ce},mounted(){document.documentElement.setAttribute("theme","light")}};const xe=(0,u.Z)(be,[["render",i]]);var Se=xe,_e=n(678);const Ve=[{path:"/",component:Ce}],Pe=(0,_e.p7)({history:(0,_e.PO)(),routes:Ve}),Ie=(0,g.ri)(Se);Ie.use(Pe),Ie.mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,a){if(!o){var r=1/0;for(p=0;p<e.length;p++){o=e[p][0],i=e[p][1],a=e[p][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,a<r&&(r=a));if(s){e.splice(p--,1);var l=i();void 0!==l&&(t=l)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[o,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,r=o[0],s=o[1],c=o[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var p=c(n)}for(t&&t(o);l<r.length;l++)a=r[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(p)},o=self["webpackChunkportfolio2023"]=self["webpackChunkportfolio2023"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6779)}));o=n.O(o)})();
//# sourceMappingURL=app.5e8bacd8.js.map