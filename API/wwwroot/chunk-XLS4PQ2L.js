import{a as B}from"./chunk-D6HRZITC.js";import{c as U,d as G,e as Y,f as L}from"./chunk-PDOYQQSA.js";import{l as M,m as T,n as j}from"./chunk-WWLK2I5L.js";import{Aa as v,Ac as P,Ba as g,Ca as f,Da as e,Db as b,Ea as i,Fa as a,Ka as y,La as C,N as c,Tb as w,Ua as s,Ub as z,Va as _,Wa as x,ab as S,cb as k,ea as u,ia as o,ja as I,oc as O,ra as h,ta as r,va as D,wa as d,xa as A,xb as E}from"./chunk-6ZEAUD4G.js";var $=(()=>{class t{constructor(){this.isCreatePost=!1}static{this.\u0275fac=function(m){return new(m||t)}}static{this.\u0275cmp=c({type:t,selectors:[["app-story-upload"]],standalone:!0,features:[S],decls:3,vars:1,consts:[[1,"modal-content"],[1,"modal-body","p-0"],[3,"isCreatePost"]],template:function(m,l){m&1&&(e(0,"div",0)(1,"div",1),a(2,"app-create-post",2),i()()),m&2&&(o(2),r("isCreatePost",l.isCreatePost))},dependencies:[B]})}}return t})();var J=t=>({"background-image":t});function K(t,p){if(t&1&&(e(0,"div")(1,"div",13)(2,"div")(3,"div",34),a(4,"img",35),i()(),e(5,"div",20)(6,"h5"),s(7),i(),e(8,"h6"),s(9),i()()()()),t&2){let n=p.$implicit;o(2),A("story-img ",n.class,""),o(),r("ngStyle",k(7,J,"url("+n.url+")")),o(),r("src",n.url,u),o(3),_(n.username),o(2),x("",n.time," hours ago")}}function Q(t,p){if(t&1&&(e(0,"div")(1,"div",36),a(2,"img",37),i()()),t&2){let n=C().$implicit;o(2),r("src",n.image,u)}}function R(t,p){t&1&&h(0,Q,3,1,"ng-template",29)}function V(t,p){if(t&1&&(e(0,"li"),a(1,"img",38),i()),t&2){let n=p.$implicit;o(),r("src",n.svg,u)}}var le=(()=>{class t{constructor(n){this.modalServices=n,this.allStories=Y,this.stories=U,this.storySlider=G,this.emoji=[{svg:"assets/svg/emoji/040.svg"},{svg:"assets/svg/emoji/113.svg"},{svg:"assets/svg/emoji/027.svg"},{svg:"assets/svg/emoji/052.svg"},{svg:"assets/svg/emoji/039.svg"},{svg:"assets/svg/emoji/042.svg"}],this.friendSuggestionOptions={loop:!0,margin:20,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,dots:!0,nav:!1,responsive:{0:{items:1},600:{items:3},1e3:{items:1}}}}uploadStory(){this.modalServices.open($,{centered:!0})}static{this.\u0275fac=function(m){return new(m||t)(I(O))}}static{this.\u0275cmp=c({type:t,selectors:[["app-add-stories"]],standalone:!0,features:[S],decls:54,vars:4,consts:[[1,"modal-content"],[1,"modal-body"],[1,"story-bg"],[1,"container-fluid","p-0"],[1,"row","m-0"],[1,"left-box","col-xl-3","col-lg-4"],[1,"model-title"],[1,"title-main"],[1,"title-setting"],["href","javascript:void(0)"],[1,"modal-flex"],[1,"add-story"],[1,"story-title"],[1,"media","list-media"],[1,"story-img",3,"click"],[1,"user-img"],["src","assets/images/story-bg.jpg","alt","user",1,"img-fluid","bg-img"],[1,"add-icon"],[1,"icon"],["src","assets/images/icon/plus.png","alt","plus",1,"img-fluid"],[1,"media-body"],[1,"friend-story"],[1,"slider-nav"],[1,"right-box","col-xl-9","col-lg-8","p-0"],["href","javascript:void(0)",3,"click"],[3,"icons"],[1,"sliderContainer"],[1,"slider","single-item"],[3,"options"],["carouselSlide",""],[1,"reply-section"],[1,"reply-form"],["placeholder","reply...",1,"form-control"],[1,"emoji","icon-xl"],[1,"user-img","bg-size",2,"background-size","cover","background-position","center center","background-repeat","no-repeat","display","block",3,"ngStyle"],["alt","user",1,"img-fluid","bg-img",2,"display","none",3,"src"],[1,"story-image"],["alt","image",1,"img-fluid",3,"src"],["alt","smile",1,"img-fluid",3,"src"]],template:function(m,l){m&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h2"),s(9,"stories"),i()(),e(10,"div",8)(11,"ul")(12,"li")(13,"a",9),s(14,"archive"),i()(),e(15,"li")(16,"a",9),s(17,"settings"),i()()()()(),e(18,"div",10)(19,"div",11)(20,"h4",12),s(21,"your story"),i(),e(22,"div",13)(23,"div",14),y("click",function(){return l.uploadStory()}),e(24,"div",15),a(25,"img",16),i(),e(26,"div",17)(27,"div",18),a(28,"img",19),i()()(),e(29,"div",20)(30,"h5"),s(31,"add story"),i(),e(32,"h6"),s(33,"share your photos or video"),i()()()(),e(34,"div",21)(35,"h4",12),s(36,"all stories"),i(),e(37,"div",22),g(38,K,10,9,"div",null,v),i()()()(),e(40,"div",23)(41,"a",24),y("click",function(){return l.modalServices.dismissAll()}),a(42,"app-feather-icon",25),i(),e(43,"div",26)(44,"div",27)(45,"owl-carousel-o",28),g(46,R,1,0,null,29,v),i()()(),e(48,"div",30)(49,"div",31),a(50,"input",32),i(),e(51,"ul",33),g(52,V,2,1,"li",null,v),i()()()()()()()()),m&2&&(o(38),f(l.stories),o(4),d("icon-light close"),r("icons","x"),o(3),r("options",l.friendSuggestionOptions),o(),f(l.storySlider),o(6),f(l.emoji))},dependencies:[w,b,E,j,T,M]})}}return t})();var W=t=>({"background-image":t});function X(t,p){if(t&1&&(e(0,"div")(1,"div",14),a(2,"div",15),e(3,"div",16),a(4,"img",17),i(),e(5,"div",18)(6,"h6"),s(7),i(),e(8,"span",19),a(9,"app-feather-icon",4),s(10),i()()()()),t&2){let n=C().$implicit;o(3),r("ngStyle",k(7,W,"url("+n.image+")")),o(),r("src",n.image,u),o(3),_(n.title),o(2),d("icon-light iw-10 ih-10"),r("icons","user"),o(),x(" ",n.friends,"k")}}function Z(t,p){t&1&&h(0,X,11,9,"ng-template",13)}var fe=(()=>{class t{constructor(){this.isShow=!1,this.gamesList=L,this.gamesListOptions={loop:!0,margin:20,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!1,dots:!1,nav:!1,responsive:{0:{items:2},600:{items:3},1e3:{items:5}}}}outSideClose(){this.isShow=!1}static{this.\u0275fac=function(m){return new(m||t)}}static{this.\u0275cmp=c({type:t,selectors:[["app-your-games"]],standalone:!0,features:[S],decls:32,vars:18,consts:[[1,"card-title"],[1,"settings"],[1,"setting-btn"],["href","javascript:void(0)",1,"d-flex"],[3,"icons"],[1,"setting-btn","setting-dropdown","ms-2",3,"clickOutside"],[1,"btn-group","custom-dropdown","arrow-none","dropdown-sm"],["href","javascript:void(0)",3,"click"],[1,"dropdown-menu","dropdown-menu-right","custom-dropdown",2,"position","absolute","inset","0px auto auto 0px","margin","0px","transform","translate(0px, 23px)"],["href","javascript:void(0)"],[1,"suggestion-content","ratio_115"],[1,"slide-2","no-arrow","default-space"],[3,"options"],["carouselSlide",""],[1,"story-box"],[1,"adaptive-overlay"],[1,"story-bg","bg-size",2,"background-size","cover","background-position","center center","background-repeat","no-repeat","display","block",3,"ngStyle"],["alt","",1,"img-fluid","bg-img",2,"display","none",3,"src"],[1,"story-content"],[1,"player"]],template:function(m,l){m&1&&(e(0,"div",0)(1,"h3"),s(2,"your games"),i(),e(3,"h5"),s(4,"24 games"),i(),e(5,"div",1)(6,"div",2)(7,"a",3),a(8,"app-feather-icon",4),i()(),e(9,"div",5),y("clickOutside",function(){return l.outSideClose()}),e(10,"div",6)(11,"a",7),y("click",function(){return l.isShow=!l.isShow}),a(12,"app-feather-icon",4),i(),e(13,"div",8)(14,"ul")(15,"li")(16,"a",9),a(17,"app-feather-icon",4),s(18,"see all"),i()(),e(19,"li")(20,"a",9),a(21,"app-feather-icon",4),s(22,"find friends"),i()(),e(23,"li")(24,"a",9),a(25,"app-feather-icon",4),s(26,"settings"),i()()()()()()()(),e(27,"div",10)(28,"div",11)(29,"owl-carousel-o",12),g(30,Z,1,0,null,13,v),i()()()),m&2&&(o(8),d("icon icon-dark stroke-width-3 iw-11 ih-11"),r("icons","rotate-cw"),o(4),d("icon-dark stroke-width-3 icon iw-11 ih-11"),r("icons","sun"),o(),D("show",l.isShow),o(4),d("icon-font-light iw-16 ih-16"),r("icons","user"),o(4),d("icon-font-light iw-16 ih-16"),r("icons","search"),o(4),d("icon-font-light iw-16 ih-16"),r("icons","settings"),o(4),r("options",l.gamesListOptions),o(),f(l.gamesList))},dependencies:[w,P,j,T,M,b,E,z]})}}return t})();export{le as a,fe as b};
