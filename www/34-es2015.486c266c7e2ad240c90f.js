(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{iWaD:function(c,t,i){"use strict";i.r(t),i.d(t,"Tab3PageModule",(function(){return L}));var n=i("TEn/"),o=i("tyNb"),e=i("ofXK"),a=i("3Pt+"),r=i("mrSG"),s=i("fXoL"),l=i("e8h1");function b(c,t){1&c&&(s.bc(0),s.dc(1,"ion-item",8),s.Zb(2,"ion-ripple-effect",9),s.Zb(3,"ion-icon",10),s.Lc(4," \xa0\xa0 "),s.dc(5,"ion-label"),s.dc(6,"h2"),s.Lc(7,"Mi Perfil"),s.cc(),s.cc(),s.cc(),s.dc(8,"ion-item",11),s.Zb(9,"ion-ripple-effect",9),s.Zb(10,"ion-icon",12),s.Lc(11," \xa0\xa0 "),s.dc(12,"ion-label"),s.dc(13,"h2"),s.Lc(14,"Mi QR"),s.cc(),s.cc(),s.cc(),s.dc(15,"ion-item",13),s.Zb(16,"ion-ripple-effect",9),s.Zb(17,"ion-icon",14),s.Lc(18," \xa0\xa0 "),s.dc(19,"ion-label"),s.dc(20,"h2"),s.Lc(21,"Guardados"),s.cc(),s.cc(),s.cc(),s.ac())}function d(c,t){1&c&&(s.dc(0,"ion-item",15),s.Zb(1,"ion-ripple-effect",9),s.Zb(2,"ion-icon",16),s.Lc(3," \xa0\xa0 "),s.dc(4,"ion-label"),s.dc(5,"h2"),s.Lc(6,"Ingresar"),s.cc(),s.cc(),s.cc())}function u(c,t){if(1&c&&(s.dc(0,"ion-card"),s.dc(1,"ion-list"),s.Kc(2,b,22,0,"ng-container",6),s.Kc(3,d,7,0,"ion-item",7),s.cc(),s.cc()),2&c){const c=s.pc();s.Mb(2),s.vc("ngIf","login"===c.status),s.Mb(1),s.vc("ngIf","nologin"===c.status)}}function p(c,t){1&c&&(s.dc(0,"ion-card"),s.dc(1,"ion-list-header"),s.Lc(2,"Admin:"),s.cc(),s.dc(3,"ion-list"),s.dc(4,"ion-item",17),s.Zb(5,"ion-ripple-effect",9),s.Zb(6,"ion-icon",18),s.Lc(7," \xa0\xa0 "),s.dc(8,"ion-label"),s.dc(9,"h2"),s.Lc(10,"Expositores"),s.cc(),s.cc(),s.cc(),s.dc(11,"ion-item",19),s.Zb(12,"ion-ripple-effect",9),s.Zb(13,"ion-icon",20),s.Lc(14," \xa0\xa0 "),s.dc(15,"ion-label"),s.dc(16,"h2"),s.Lc(17,"Conferencistas"),s.cc(),s.cc(),s.cc(),s.dc(18,"ion-item",21),s.Zb(19,"ion-ripple-effect",9),s.Zb(20,"ion-icon",22),s.Lc(21," \xa0\xa0 "),s.dc(22,"ion-label"),s.dc(23,"h2"),s.Lc(24,"Auditorios"),s.cc(),s.cc(),s.cc(),s.dc(25,"ion-item",23),s.Zb(26,"ion-ripple-effect",9),s.Zb(27,"ion-icon",24),s.Lc(28," \xa0\xa0 "),s.dc(29,"ion-label"),s.dc(30,"h2"),s.Lc(31,"Categor\xedas"),s.cc(),s.cc(),s.cc(),s.dc(32,"ion-item",25),s.Zb(33,"ion-ripple-effect",9),s.Zb(34,"ion-icon",26),s.Lc(35," \xa0\xa0 "),s.dc(36,"ion-label"),s.dc(37,"h2"),s.Lc(38,"Plano"),s.cc(),s.cc(),s.cc(),s.cc(),s.cc())}function f(c,t){1&c&&(s.bc(0),s.dc(1,"ion-row",27),s.Zb(2,"ion-spinner",28),s.cc(),s.ac())}let m=(()=>{class c{constructor(c){this.storage=c,this.status="loading",this.role="user"}ionViewWillEnter(){this.status="loading",this.storage.get("usuariocache").then(c=>Object(r.a)(this,void 0,void 0,(function*(){c?(this.role=c.role,this.status="login"):this.status="nologin"})),c=>{this.status="nologin"})}}return c.\u0275fac=function(t){return new(t||c)(s.Yb(l.b))},c.\u0275cmp=s.Sb({type:c,selectors:[["app-ajustes"]],decls:12,vars:5,consts:[[3,"translucent"],["color","primary"],["slot","start"],["defaultHref","/"],["slot","end"],["color","light",3,"fullscreen"],[4,"ngIf"],["class","ion-activatable","lines","none","routerLink","/login",4,"ngIf"],["lines","inset","routerLink","/profile",1,"ion-activatable"],["type","bounded"],["name","person-outline","slot","start","color","primary",1,"icon_start_tab3"],["lines","inset","routerLink","/qr",1,"ion-activatable"],["src","assets/icon/codigo-qr.svg","slot","start","color","primary",1,"icon_start_tab3"],["lines","none","routerLink","/favs",1,"ion-activatable"],["name","bookmarks-outline","slot","start","color","primary",1,"icon_start_tab3"],["lines","none","routerLink","/login",1,"ion-activatable"],["name","log-in-outline","slot","start","color","primary",1,"icon_start_tab3"],["lines","inset","routerLink","/expositores-list",1,"ion-activatable"],["name","podium-outline","slot","start","color","primary",1,"icon_start_tab3"],["lines","inset","routerLink","/conferencistas-list",1,"ion-activatable"],["name","people-outline","slot","start","color","primary",1,"icon_start_tab3"],["disabled","","lines","inset","routerLink","/auditorios-list",1,"ion-activatable"],["name","school-outline","slot","start","color","primary",1,"icon_start_tab3"],["disabled","","lines","inset","routerLink","/categorias-list",1,"ion-activatable"],["name","apps-outline","slot","start","color","primary",1,"icon_start_tab3"],["disabled","","lines","none",1,"ion-activatable"],["name","map-outline","slot","start","color","primary",1,"icon_start_tab3"],[1,"center"],["name","crescent","color","primary"]],template:function(c,t){1&c&&(s.dc(0,"ion-header",0),s.dc(1,"ion-toolbar",1),s.dc(2,"ion-buttons",2),s.Zb(3,"ion-back-button",3),s.dc(4,"ion-title"),s.Lc(5,"Mi Cuenta"),s.cc(),s.cc(),s.dc(6,"ion-buttons",4),s.Zb(7,"ion-menu-button"),s.cc(),s.cc(),s.cc(),s.dc(8,"ion-content",5),s.Kc(9,u,4,2,"ion-card",6),s.Kc(10,p,39,0,"ion-card",6),s.Kc(11,f,3,0,"ng-container",6),s.cc()),2&c&&(s.vc("translucent",!0),s.Mb(8),s.vc("fullscreen",!0),s.Mb(1),s.vc("ngIf","loading"!==t.status),s.Mb(1),s.vc("ngIf","admin"===t.role),s.Mb(1),s.vc("ngIf","loading"===t.status))},directives:[n.t,n.Z,n.j,n.f,n.g,n.X,n.H,n.q,e.k,n.k,n.E,n.x,n.jb,o.h,n.I,n.u,n.D,n.F,n.K,n.S],styles:[""]}),c})();const g=[{path:"",component:m}];let h=(()=>{class c{}return c.\u0275mod=s.Wb({type:c}),c.\u0275inj=s.Vb({factory:function(t){return new(t||c)},imports:[[o.j.forChild(g)],o.j]}),c})(),L=(()=>{class c{}return c.\u0275mod=s.Wb({type:c}),c.\u0275inj=s.Vb({factory:function(t){return new(t||c)},imports:[[n.ab,e.b,a.f,o.j.forChild([{path:"",component:m}]),h]]}),c})()}}]);