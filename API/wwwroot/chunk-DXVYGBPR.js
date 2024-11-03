import{a as B,h as C}from"./chunk-5VZTVWW2.js";import{d as U,e as b,f as y,g as J,k}from"./chunk-3R2MKDRZ.js";import{Aa as p,Ca as M,Da as L,Fa as D,Ga as P,Ha as R,Ia as E,Ja as x,Ka as e,La as t,Ma as n,R as _,Rb as A,S as m,Sa as f,Ta as j,_b as q,ab as i,ac as g,bb as w,bc as H,cb as I,dc as S,fc as O,ib as s,jb as c,la as T,pa as a,ya as F}from"./chunk-J2NUHFWV.js";var Y=()=>["/others/help-article"];function G(o,h){if(o&1&&(e(0,"div",4)(1,"div",5)(2,"a",6),n(3,"img",7),t(),e(4,"div",8)(5,"a",9)(6,"h4"),i(7),t()(),e(8,"p"),i(9),t()()()()),o&2){let r=h.$implicit;a(2),p("routerLink",c(4,Y)),a(),p("src",r.icon,T),a(4),w(r.title),a(2),w(r.desc)}}var N=(()=>{class o{constructor(){this.popularTopics=J}static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=m({type:o,selectors:[["app-popular-topics"]],standalone:!0,features:[s],decls:8,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"title"],[1,"col-lg-4","col-md-6"],[1,"topic-box"],[1,"icon",3,"routerLink"],["alt","",1,"img-fluid",3,"src"],[1,"topic-content"],["href","javascript:void(0)"]],template:function(l,d){l&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3"),i(5,"popular topics"),t()()(),E(6,G,10,5,"div",4,R),t()()),l&2&&(a(6),x(d.popularTopics))},dependencies:[S,g]})}}return o})();var V=(()=>{class o{static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=m({type:o,selectors:[["app-inquiry"]],standalone:!0,features:[s],decls:32,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-lg-6"],[1,"intro-part"],[1,"title"],[1,"contact-img"],["src","assets/svg/help-topics/contact.svg","alt","",1,"img-fluid"],[1,"theme-form","row"],[1,"col-md-6","form-group","mb-3"],["type","text",1,"form-control"],["type","email",1,"form-control"],[1,"col-md-12","form-group","mb-3"],[1,"col-md-12","form-group","mb-0"],[1,"d-block"],["rows","6",1,"form-control"],[1,"col-12","mt-4","text-right"],["type","button",1,"btn","btn-solid","btn-lg"]],template:function(l,d){l&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2"),i(6,"don't be strange! reach us"),t(),e(7,"p"),i(8,"looking for anything else? reach us by fill this form"),t()(),e(9,"div",5),n(10,"img",6),t()()(),e(11,"div",2)(12,"form",7)(13,"div",8)(14,"label"),i(15,"Your name"),t(),n(16,"input",9),t(),e(17,"div",8)(18,"label"),i(19,"Email address"),t(),n(20,"input",10),t(),e(21,"div",11)(22,"label"),i(23,"Subject"),t(),n(24,"input",9),t(),e(25,"div",12)(26,"label",13),i(27,"Messages"),t(),n(28,"textarea",14),t(),e(29,"div",15)(30,"button",16),i(31,"Submit"),t()()()()()())}})}}return o})();function K(o,h){if(o&1&&(e(0,"li"),i(1),t()),o&2){let r=h.$implicit;a(),I(" ",r," ")}}function Q(o,h){if(o&1&&(e(0,"div")(1,"ul"),E(2,K,2,1,"li",null,P),t()()),o&2){let r=j();a(2),x(r.validationErrors)}}var $=(()=>{class o{constructor(){this.baseUrl=B.apiUrl,this.http=_(A),this.validationErrors=[]}get400Error(){this.http.get(this.baseUrl+"buggy/bad-request").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get401Error(){this.http.get(this.baseUrl+"buggy/auth").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get404Error(){this.http.get(this.baseUrl+"buggy/not-found").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get500Error(){this.http.get(this.baseUrl+"buggy/server-error").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get400ValidationError(){this.http.post(this.baseUrl+"account/register",{}).subscribe({next:r=>console.log(r),error:r=>{console.log(r),this.validationErrors=r}})}static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=m({type:o,selectors:[["app-test-errors"]],standalone:!0,features:[s],decls:12,vars:1,consts:[[3,"click"]],template:function(l,d){l&1&&(e(0,"div")(1,"button",0),f("click",function(){return d.get400Error()}),i(2,"400"),t(),e(3,"button",0),f("click",function(){return d.get401Error()}),i(4,"401"),t(),e(5,"button",0),f("click",function(){return d.get404Error()}),i(6,"404"),t(),e(7,"button",0),f("click",function(){return d.get500Error()}),i(8,"500"),t(),e(9,"button",0),f("click",function(){return d.get400ValidationError()}),i(10,"Validation"),t(),F(11,Q,4,0,"div"),t()),l&2&&(a(11),D(d.validationErrors.length>0?11:-1))}})}}return o})();var W=(()=>{class o{static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=m({type:o,selectors:[["app-breadcrumb-section"]],standalone:!0,features:[s],decls:15,vars:0,consts:[["src","assets/images/breadcrumb.jpg","alt","",1,"img-fluid","bg-img",2,"display","none"],[1,"animation-emoji"],[1,"help-search"],[1,"container"],[1,"row"],[1,"col-lg-6","col-md-8","col-12","m-auto"],["type","search","placeholder","Search something here...",1,"form-control"]],template:function(l,d){l&1&&(n(0,"img",0),e(1,"div",1),n(2,"app-animation-emoji"),t(),e(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"h2"),i(8,"how can we help you?"),t(),e(9,"form"),n(10,"input",6),e(11,"span"),i(12,"popular topics: privacy, security, profile"),t()()()()()(),e(13,"div"),n(14,"app-test-errors"),t())},dependencies:[U,$]})}}return o})();var we=(()=>{class o{ngOnInit(){document.body.classList.add("bg-white")}ngOnDestroy(){document.body.classList.remove("bg-white")}static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=m({type:o,selectors:[["app-help-support"]],standalone:!0,features:[s],decls:13,vars:1,consts:[[1,"no-sticky","bg-transparent"],[1,"breadcrumb-section","bg-size",2,"background-image","url(assets/images/breadcrumb.jpg)","background-size","cover","background-position","center center","background-repeat","no-repeat","display","block"],[1,"section-pt-space","section-pb-space","popular-topics"],[1,"section-pb-space","help-contact"],[1,"footer-t-space"],[3,"footerClass"]],template:function(l,d){l&1&&(n(0,"app-loading"),e(1,"header",0),n(2,"app-header-one"),t(),e(3,"section",1),n(4,"app-breadcrumb-section"),t(),e(5,"section",2),n(6,"app-popular-topics"),t(),e(7,"section",3),n(8,"app-inquiry"),t(),e(9,"section"),n(10,"app-download"),t(),e(11,"footer",4),n(12,"app-footer",5),t()),l&2&&(a(12),p("footerClass","footer-b-space"))},dependencies:[C,N,V,y,b,k,W]})}}return o})();var X=()=>["/others/help-support"],Fe=(()=>{class o{static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=m({type:o,selectors:[["app-setting-home"]],standalone:!0,features:[s],decls:49,vars:2,consts:[[1,"setting-home"],[1,"top-content"],[1,"row"],[1,"col-xl-4","col-sm-6"],[1,"detail-box"],["src","assets/svg/setting/profile.svg","alt","",1,"img-fluid"],["src","assets/svg/setting/account.svg","alt","",1,"img-fluid"],["src","assets/svg/setting/privacy.svg","alt","",1,"img-fluid"],["src","assets/svg/setting/notification.svg","alt","",1,"img-fluid"],["src","assets/svg/setting/story.svg","alt","",1,"img-fluid"],[1,"detail-box",3,"routerLink"],["src","assets/svg/setting/help.svg","alt","",1,"img-fluid"]],template:function(l,d){l&1&&(e(0,"div",0)(1,"div",1)(2,"h2"),i(3,"Welcome back Josephin water"),t(),e(4,"p"),i(5,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur repellat officiis, perspiciatis minus veniam ad sapiente nemo odit, corrupti iure earum, atque tenetur asperiores incidunt placeat eius voluptatem nesciunt in. "),t()(),e(6,"div",2)(7,"div",3)(8,"a",4),n(9,"img",5),e(10,"h3"),i(11,"personal details"),t(),e(12,"p"),i(13,"provide all personal detail settings."),t()()(),e(14,"div",3)(15,"a",4),n(16,"img",6),e(17,"h3"),i(18,"account"),t(),e(19,"p"),i(20,"provide all personal detail settings."),t()()(),e(21,"div",3)(22,"a",4),n(23,"img",7),e(24,"h3"),i(25,"privacy"),t(),e(26,"p"),i(27,"provide all personal detail settings."),t()()(),e(28,"div",3)(29,"a",4),n(30,"img",8),e(31,"h3"),i(32,"notification"),t(),e(33,"p"),i(34,"provide all personal detail settings."),t()()(),e(35,"div",3)(36,"a",4),n(37,"img",9),e(38,"h3"),i(39,"story"),t(),e(40,"p"),i(41,"provide all personal detail settings."),t()()(),e(42,"div",3)(43,"a",10),n(44,"img",11),e(45,"h3"),i(46,"help"),t(),e(47,"p"),i(48,"provide all personal detail settings."),t()()()()()),l&2&&(a(43),p("routerLink",c(1,X)))},dependencies:[S,g]})}}return o})();var Le=(()=>{class o{static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=m({type:o,selectors:[["app-setting-personal-account"]],standalone:!0,features:[s],decls:36,vars:0,consts:[[1,"setting-wrapper"],[1,"setting-title"],[1,"form-sec"],[1,"theme-form","form-sm"],[1,"row"],[1,"form-group","col-12"],["type","password","placeholder","current password",1,"form-control"],[1,"form-group","col-sm-6"],["type","password","placeholder","new password",1,"form-control"],["type","password","placeholder","repeat password",1,"form-control"],[1,"form-group","toggle-sec","col-12"],[1,"button","toggle-btn"],["type","checkbox","checked","",1,"checkbox"],[1,"knobs"],[1,"layer"],[1,"text-right"],["href","javascript:void(0)",1,"btn","btn-solid"]],template:function(l,d){l&1&&(e(0,"div",0)(1,"div",1)(2,"h3"),i(3,"Account settings"),t()(),e(4,"div",2)(5,"div")(6,"form",3)(7,"div",4)(8,"div",5)(9,"label"),i(10,"current password"),t(),n(11,"input",6),t(),e(12,"div",7)(13,"label"),i(14,"new password"),t(),n(15,"input",8),t(),e(16,"div",7)(17,"label"),i(18,"repeat password"),t(),n(19,"input",9),t(),e(20,"div",5)(21,"label"),i(22,"use two factor authentication"),t()(),e(23,"div",10)(24,"div",11),n(25,"input",12),e(26,"div",13),n(27,"span"),t(),n(28,"div",14),t(),e(29,"label"),i(30,"enable "),e(31,"span"),i(32,"we'll ask for a code if we notice an unrecognized device"),t()()()(),e(33,"div",15)(34,"a",16),i(35,"save changes"),t()()()()()())}})}}return o})();var Pe=(()=>{class o{static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=m({type:o,selectors:[["app-setting-personal-notification"]],standalone:!0,features:[s],decls:84,vars:0,consts:[[1,"setting-wrapper"],[1,"setting-title"],[1,"form-sec"],[1,"theme-form","form-sm"],[1,"row"],[1,"form-group","col-12"],[1,"form-group","toggle-sec","col-md-6"],[1,"button","toggle-btn"],["type","checkbox",1,"checkbox"],[1,"knobs"],[1,"layer"],["type","checkbox","checked","",1,"checkbox"],["checked","","type","checkbox",1,"checkbox"]],template:function(l,d){l&1&&(e(0,"div",0)(1,"div",1)(2,"h3"),i(3,"notification"),t()(),e(4,"div",2)(5,"div")(6,"form",3)(7,"div",4)(8,"div",5)(9,"label"),i(10,"where you receive these notifications?"),t()(),e(11,"div",6)(12,"div",7),n(13,"input",8),e(14,"div",9),n(15,"span"),t(),n(16,"div",10),t(),e(17,"label"),i(18,"email "),e(19,"span"),i(20,"Lorem ipsum dolor sit amet "),t()()(),e(21,"div",6)(22,"div",7),n(23,"input",11),e(24,"div",9),n(25,"span"),t(),n(26,"div",10),t(),e(27,"label"),i(28,"SMS "),e(29,"span"),i(30,"Lorem ipsum dolor sit amet"),t()()(),e(31,"div",5)(32,"label"),i(33,"other notification"),t()(),e(34,"div",6)(35,"div",7),n(36,"input",8),e(37,"div",9),n(38,"span"),t(),n(39,"div",10),t(),e(40,"label"),i(41,"sound "),e(42,"span"),i(43,"Lorem ipsum dolor sit amet"),t()()(),e(44,"div",6)(45,"div",7),n(46,"input",12),e(47,"div",9),n(48,"span"),t(),n(49,"div",10),t(),e(50,"label"),i(51,"vibration "),e(52,"span"),i(53,"Lorem ipsum dolor sit amet"),t()()(),e(54,"div",6)(55,"div",7),n(56,"input",8),e(57,"div",9),n(58,"span"),t(),n(59,"div",10),t(),e(60,"label"),i(61,"friend request "),e(62,"span"),i(63,"Lorem ipsum dolor sit amet"),t()()(),e(64,"div",6)(65,"div",7),n(66,"input",8),e(67,"div",9),n(68,"span"),t(),n(69,"div",10),t(),e(70,"label"),i(71,"message "),e(72,"span"),i(73,"Lorem ipsum dolor sit amet"),t()()(),e(74,"div",6)(75,"div",7),n(76,"input",8),e(77,"div",9),n(78,"span"),t(),n(79,"div",10),t(),e(80,"label"),i(81,"comment "),e(82,"span"),i(83,"Lorem ipsum dolor sit amet"),t()()()()()()()())}})}}return o})();var je=(()=>{class o{static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=m({type:o,selectors:[["app-setting-personal-privacy"]],standalone:!0,features:[s],decls:51,vars:0,consts:[[1,"setting-wrapper"],[1,"setting-title"],[1,"form-sec"],[1,"theme-form","form-sm"],[1,"row"],[1,"form-group","col-12"],[1,"form-control"],["selected",""],["id","inputState",1,"form-control"],[1,"text-right"],["href","javascript:void(0)",1,"btn","btn-solid"]],template:function(l,d){l&1&&(e(0,"div",0)(1,"div",1)(2,"h3"),i(3,"privacy setting"),t()(),e(4,"div",2)(5,"div")(6,"form",3)(7,"div",4)(8,"div",5)(9,"label"),i(10,"who can see your future post?"),t(),e(11,"select",6)(12,"option",7),i(13,"everyone"),t(),e(14,"option"),i(15,"friends"),t(),e(16,"option"),i(17,"only me"),t()()(),e(18,"div",5)(19,"label"),i(20,"who can send you friend request?"),t(),e(21,"select",6)(22,"option",7),i(23,"everyone"),t(),e(24,"option"),i(25,"friends"),t(),e(26,"option"),i(27,"only me"),t()()(),e(28,"div",5)(29,"label"),i(30,"who can see your email address provided?"),t(),e(31,"select",6)(32,"option"),i(33,"everyone"),t(),e(34,"option"),i(35,"friends"),t(),e(36,"option",7),i(37,"only me"),t()()(),e(38,"div",5)(39,"label"),i(40,"who can see your phone number provided?"),t(),e(41,"select",8)(42,"option"),i(43,"everyone"),t(),e(44,"option",7),i(45,"friends"),t(),e(46,"option"),i(47,"only me"),t()()()(),e(48,"div",9)(49,"a",10),i(50,"save changes"),t()()()()()())}})}}return o})();var Ae=(()=>{class o{static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=m({type:o,selectors:[["app-setting-personal-story"]],standalone:!0,features:[s],decls:107,vars:0,consts:[[1,"setting-wrapper"],[1,"setting-title"],[1,"form-sec"],[1,"theme-form","form-sm"],[1,"row"],[1,"form-group","col-sm-6"],[1,"title-lable"],[1,"form-check","col-12"],["for","exampleRadios1",1,"form-check-label","font-weight-normal"],["type","radio","name","exampleRadios","id","exampleRadios1","value","option1","checked","",1,"form-check-input","radio_animated"],["for","exampleRadios2",1,"form-check-label","font-weight-normal"],["type","radio","name","exampleRadios","id","exampleRadios2","value","option2",1,"form-check-input","radio_animated"],["for","exampleRadios3",1,"form-check-label","font-weight-normal"],["type","radio","name","message","id","exampleRadios3","value","allow","checked","",1,"form-check-input","radio_animated"],["for","exampleRadios4",1,"form-check-label","font-weight-normal"],["type","radio","name","message","id","exampleRadios4","value","dont",1,"form-check-input","radio_animated"],["for","exampleRadios6",1,"form-check-label","font-weight-normal"],["type","radio","name","message","id","exampleRadios6","value","off",1,"form-check-input","radio_animated"],[1,"form-group","col-12"],[1,"form-group","toggle-sec","col-md-6"],[1,"button","toggle-btn"],["type","checkbox",1,"checkbox"],[1,"knobs"],[1,"layer"],["type","checkbox","checked","",1,"checkbox"],["for","radio1",1,"form-check-label","font-weight-normal"],["type","radio","name","share","id","radio1","value","allow","checked","",1,"form-check-input","radio_animated"],["for","radio2",1,"form-check-label","font-weight-normal"],["type","radio","name","share","id","radio2","value","dont",1,"form-check-input","radio_animated"],["for","radio3",1,"form-check-label","font-weight-normal"],["type","radio","name","share","id","radio3","value","off",1,"form-check-input","radio_animated"],[1,"text-right"],["href","javascript:void(0)",1,"btn","btn-solid"]],template:function(l,d){l&1&&(e(0,"div",0)(1,"div",1)(2,"h3"),i(3,"sharing option"),t()(),e(4,"div",2)(5,"div")(6,"form",3)(7,"div",4)(8,"div",5)(9,"label",6),i(10,"allow others to share your stories to their own story? "),t(),e(11,"div",4)(12,"div",7)(13,"label",8),n(14,"input",9),i(15," allow "),t()(),e(16,"div",7)(17,"label",10),n(18,"input",11),i(19," don't allow "),t()()()(),e(20,"div",5)(21,"label",6),i(22,"Allow message replies"),t(),e(23,"div",4)(24,"div",7)(25,"label",12),n(26,"input",13),i(27," your followers "),t()(),e(28,"div",7)(29,"label",14),n(30,"input",15),i(31," followers you follow back "),t()(),e(32,"div",7)(33,"label",16),n(34,"input",17),i(35," off "),t()()()(),e(36,"div",18)(37,"label",6),i(38,"saving"),t(),e(39,"div",4)(40,"div",19)(41,"div",20),n(42,"input",21),e(43,"div",22),n(44,"span"),t(),n(45,"div",23),t(),e(46,"label"),i(47,"save to gallery "),e(48,"span"),i(49,"Lorem ipsum dolor sit amet"),t()()(),e(50,"div",19)(51,"div",20),n(52,"input",24),e(53,"div",22),n(54,"span"),t(),n(55,"div",23),t(),e(56,"label"),i(57,"save to archive "),e(58,"span"),i(59,"Lorem ipsum dolor sit amet"),t()()()()(),e(60,"div",18)(61,"label",6),i(62,"sharing"),t(),e(63,"div",4)(64,"div",19)(65,"div",20),n(66,"input",24),e(67,"div",22),n(68,"span"),t(),n(69,"div",23),t(),e(70,"label"),i(71,"allow resharing to stories "),t()(),e(72,"div",19)(73,"div",20),n(74,"input",21),e(75,"div",22),n(76,"span"),t(),n(77,"div",23),t(),e(78,"label"),i(79,"allow sharing "),t()(),e(80,"div",19)(81,"div",20),n(82,"input",21),e(83,"div",22),n(84,"span"),t(),n(85,"div",23),t(),e(86,"label"),i(87,"share to other social app "),t()()()(),e(88,"div",5)(89,"label",6),i(90,"story setting"),t(),e(91,"div",4)(92,"div",7)(93,"label",25),n(94,"input",26),i(95," only specific friend "),t()(),e(96,"div",7)(97,"label",27),n(98,"input",28),i(99," all friends "),t()(),e(100,"div",7)(101,"label",29),n(102,"input",30),i(103," hide from "),t()()()()(),e(104,"div",31)(105,"a",32),i(106,"save changes"),t()()()()()())}})}}return o})();var Z=()=>["/others/setting/home"],ee=()=>["/others/setting/personal-info"],te=()=>["/others/setting/account"],ie=()=>["/others/setting/privacy"],ne=()=>["/others/setting/notifications"],oe=()=>["/others/setting/story"],re=()=>["/others/help-support"],ot=(()=>{class o{constructor(){this.isOpenMenu=!1}static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=m({type:o,selectors:[["app-setting"]],standalone:!0,features:[s],decls:51,vars:20,consts:[[1,"header-relative"],[1,"setting-section","section-pb-space","section-pt-space"],[1,"container"],[1,"row"],[1,"col-xl-3","col-lg-4"],[1,"setting-sidebar"],[1,"back-btn","d-lg-none","d-block",3,"click"],[3,"icons"],[1,"user-details"],[1,"user-img"],["src","assets/images/user/3.jpg","alt","",1,"img-fluid","bg-img"],[1,"tab-section"],[1,"nav","flex-column","nav-pills"],["routerLinkActive","active",1,"nav-link",3,"routerLink"],[1,"fas","fa-home","me-2"],[1,"fas","fa-info","me-2"],[1,"fas","fa-user","me-2"],[1,"fas","fa-lock","me-2"],[1,"fas","fa-bell","me-2"],[1,"fas","fa-photo-video","me-2"],[1,"fas","fa-question-circle","me-2"],[1,"col-xl-9","col-lg-8"],[1,"d-lg-none","d-block","text-right","mb-3",3,"click"],["href","javascript:void(0)",1,"btn","btn-solid","setting-menu"],["id","v-pills-tabContent",1,"tab-content"],["role","tabpanel",1,"tab-pane","fade","active","show"],[1,"footer-t-space","pb-0"],[3,"footerClass"]],template:function(l,d){l&1&&(n(0,"app-loading"),e(1,"header",0),n(2,"app-header-one"),t(),e(3,"section",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"div",5)(8,"div",6),f("click",function(){return d.isOpenMenu=!1}),n(9,"app-feather-icon",7),t(),e(10,"div",8)(11,"div",9),n(12,"img",10),t(),e(13,"h5"),i(14,"Josephin water"),t(),e(15,"h6"),i(16,"Josephin.water@gmail.com"),t()(),e(17,"div",11)(18,"div",12)(19,"a",13),n(20,"i",14),i(21,"Home"),t(),e(22,"a",13),n(23,"i",15),i(24,"personal info"),t(),e(25,"a",13),n(26,"i",16),i(27,"account"),t(),e(28,"a",13),n(29,"i",17),i(30,"privacy"),t(),e(31,"a",13),n(32,"i",18),i(33,"notification"),t(),e(34,"a",13),n(35,"i",19),i(36,"story"),t(),e(37,"a",13),n(38,"i",20),i(39,"help"),t()()()()(),e(40,"div",21)(41,"div",22),f("click",function(){return d.isOpenMenu=!0}),e(42,"a",23),i(43," setting menu "),t()(),e(44,"div",24)(45,"div",25),n(46,"router-outlet"),t()()()()()(),e(47,"section"),n(48,"app-download"),t(),e(49,"footer",26),n(50,"app-footer",27),t()),l&2&&(a(7),M("show",d.isOpenMenu),a(2),L("icon-theme"),p("icons","x"),a(10),p("routerLink",c(13,Z)),a(3),p("routerLink",c(14,ee)),a(3),p("routerLink",c(15,te)),a(3),p("routerLink",c(16,ie)),a(3),p("routerLink",c(17,ne)),a(3),p("routerLink",c(18,oe)),a(3),p("routerLink",c(19,re)),a(13),p("footerClass","footer-b-space"))},dependencies:[C,b,k,O,y,S,q,g,H]})}}return o})();export{$ as a,we as b,Fe as c,Le as d,Pe as e,je as f,Ae as g,ot as h};
