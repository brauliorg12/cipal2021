(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{Tntf:function(n,t,o){"use strict";o.r(t),o.d(t,"ProfilePageModule",(function(){return v}));var c=o("ofXK"),i=o("3Pt+"),e=o("tyNb"),a=o("TEn/"),r=o("mrSG"),s=o("fXoL"),l=o("on2l"),u=o("5egi"),d=o("e8h1"),b=o("riPR");function f(n,t){if(1&n){const n=s.ec();s.dc(0,"div",5),s.dc(1,"ion-tab-button",6),s.lc("click",(function(){return s.Dc(n),s.pc().logout()})),s.Zb(2,"ion-icon",7),s.dc(3,"ion-text",8),s.Lc(4,"Salir"),s.cc(),s.cc(),s.cc()}}function g(n,t){1&n&&(s.dc(0,"ion-content"),s.dc(1,"ion-row",9),s.Zb(2,"ion-spinner",10),s.cc(),s.cc())}function p(n,t){1&n&&(s.dc(0,"ion-item",19),s.Zb(1,"ion-icon",20),s.Lc(2,"\xa0\xa0 "),s.dc(3,"ion-label"),s.dc(4,"h2"),s.Lc(5,"Conectado con Facebook"),s.cc(),s.cc(),s.cc())}function h(n,t){if(1&n){const n=s.ec();s.dc(0,"ion-content"),s.Zb(1,"br"),s.Zb(2,"br"),s.dc(3,"ion-row",11),s.dc(4,"ion-col",12),s.Zb(5,"ion-icon",13),s.cc(),s.cc(),s.dc(6,"ion-row"),s.dc(7,"ion-col"),s.dc(8,"ion-list"),s.dc(9,"ion-item",14),s.dc(10,"ion-label",15),s.Lc(11,"Email"),s.cc(),s.dc(12,"ion-input",16),s.lc("ngModelChange",(function(t){return s.Dc(n),s.pc().user.email=t})),s.cc(),s.cc(),s.dc(13,"ion-item",14),s.dc(14,"ion-label",15),s.Lc(15,"Nombre"),s.cc(),s.dc(16,"ion-input",17),s.lc("ngModelChange",(function(t){return s.Dc(n),s.pc().user.nombre=t})),s.cc(),s.cc(),s.Kc(17,p,6,0,"ion-item",18),s.cc(),s.cc(),s.cc(),s.cc()}if(2&n){const n=s.pc();s.Mb(12),s.vc("ngModel",n.user.email),s.Mb(4),s.vc("ngModel",n.user.nombre),s.Mb(1),s.vc("ngIf","fb"===n.status)}}const m=[{path:"",component:(()=>{class n{constructor(n,t,o,c,i){this.usuarioService=n,this.uiService=t,this.route=o,this.storage=c,this.refreshEvent=i,this.usuario={},this.user={nombre:"",email:"",avatar:"",avatarfb:"",fb:""},this.status="loading"}ionViewWillEnter(){this.status="loading",this.storage.get("usuariocache").then(n=>Object(r.a)(this,void 0,void 0,(function*(){n&&(this.user={nombre:yield n.nombre,email:yield n.email,avatarfb:yield n.avatarfb,avatar:yield n.avatar,fb:yield n.fb},setTimeout(()=>{this.status="ok"},300))})),n=>{})}actualizar(){return Object(r.a)(this,void 0,void 0,(function*(){(yield this.usuarioService.actualizarUsuario(this.usuario))?(this.uiService.presentToast("Usuario actualizado"),this.route.navigateByUrl("/main/tabs/tab3")):this.uiService.presentToast("No se pudo actualizar")}))}logout(){this.usuarioService.logout().then(n=>{n&&(this.user={nombre:"",email:"",avatarfb:"",avatar:"",fb:""},this.refreshEvent.Page())})}}return n.\u0275fac=function(t){return new(t||n)(s.Yb(l.a),s.Yb(u.a),s.Yb(e.g),s.Yb(d.b),s.Yb(b.a))},n.\u0275cmp=s.Sb({type:n,selectors:[["app-profile"]],decls:9,vars:3,consts:[["color","primary"],["slot","start"],["defaultHref","/"],["class","ion-float-right",4,"ngIf"],[4,"ngIf"],[1,"ion-float-right"],[3,"click"],["name","exit",1,"blanco"],[1,"blanco"],[1,"center","ion-text-center"],["name","crescent","color","primary"],[1,"top-2"],["size","12",1,"ion-text-center"],["name","person","color","primary",1,"icon_profile"],["lines","inset"],["position","floating","color","primary",1,"text_floating"],["name","email","type","email","required","","readonly","",3,"ngModel","ngModelChange"],["name","nombre","type","text","required","","readonly","",3,"ngModel","ngModelChange"],["lines","none",4,"ngIf"],["lines","none"],["name","logo-facebook",1,"icon_fb"]],template:function(n,t){1&n&&(s.dc(0,"ion-header"),s.dc(1,"ion-toolbar",0),s.dc(2,"ion-buttons",1),s.Zb(3,"ion-back-button",2),s.dc(4,"ion-title"),s.Lc(5,"Mi Perfil"),s.cc(),s.cc(),s.Kc(6,f,5,0,"div",3),s.cc(),s.cc(),s.Kc(7,g,3,0,"ion-content",4),s.Kc(8,h,18,3,"ion-content",4)),2&n&&(s.Mb(6),s.vc("ngIf","loading"!==t.status),s.Mb(1),s.vc("ngIf","loading"===t.status),s.Mb(1),s.vc("ngIf","loading"!==t.status))},directives:[a.t,a.Z,a.j,a.f,a.g,a.X,c.k,a.T,a.u,a.U,a.q,a.K,a.S,a.p,a.E,a.x,a.D,a.w,a.lb,i.r,i.l,i.o],styles:[".img-avatar[_ngcontent-%COMP%]{width:170px;border-radius:50%}.col_avatar[_ngcontent-%COMP%]{min-height:182px}.top-20[_ngcontent-%COMP%]{margin-top:20px}.text_floating[_ngcontent-%COMP%]{font-size:18px}.icon_profile[_ngcontent-%COMP%]{width:80px;height:80px}.btn_profile[_ngcontent-%COMP%]{background-color:#0f4c94;color:#fff}.icon_fb[_ngcontent-%COMP%]{color:#4267b2!important}"]}),n})()}];let v=(()=>{class n{}return n.\u0275mod=s.Wb({type:n}),n.\u0275inj=s.Vb({factory:function(t){return new(t||n)},imports:[[c.b,i.f,a.ab,e.j.forChild(m)]]}),n})()}}]);