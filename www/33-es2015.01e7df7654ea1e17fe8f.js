(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{eHSi:function(t,n,o){"use strict";o.r(n),o.d(n,"QrGeneratorPageModule",(function(){return h}));var e=o("ofXK"),r=o("3Pt+"),i=o("TEn/"),c=o("mrSG"),a=o("fXoL"),s=o("e8h1"),d=o("0hV+");const l=["qr"];function f(t,n){if(1&t&&(a.dc(0,"div",9),a.Zb(1,"qrcode",10,11),a.dc(3,"ion-text",12),a.Lc(4,"CIPAL - 2021"),a.cc(),a.cc()),2&t){const t=a.pc();a.Mb(1),a.vc("qrdata",t.miQrText)("width",260)("elementType","img")("errorCorrectionLevel","M")}}function g(t,n){1&t&&(a.dc(0,"div",13),a.dc(1,"ion-text",14),a.Lc(2,"Cargando..."),a.cc(),a.cc())}let u=(()=>{class t{constructor(t){this.storage=t,this.login="loading"}ionViewWillEnter(){this.login="loading",this.storage.get("usuariocache").then(t=>Object(c.a)(this,void 0,void 0,(function*(){t?(this.login="login",setTimeout(()=>{this.miQrText=t.email},400)):this.login="nologin"})),t=>{this.login="nologin"})}}return t.\u0275fac=function(n){return new(n||t)(a.Yb(s.b))},t.\u0275cmp=a.Sb({type:t,selectors:[["app-qr-generator"]],viewQuery:function(t,n){var o;1&t&&a.Gc(l,!0),2&t&&a.Bc(o=a.mc())&&(n.qrInput=o.first)},decls:17,vars:2,consts:[["color","primary"],["slot","start"],["defaultHref","/"],[1,"ion-justify-content-center"],["class","qrContainer",4,"ngIf"],["class","qrContainer noqr ",4,"ngIf"],[1,"ion-justify-content-center","ion-padding"],[1,"border_global","qr_info"],["color","medium","size","small"],[1,"qrContainer"],[3,"qrdata","width","elementType","errorCorrectionLevel"],["qrInput",""],["color","primary",1,"text_qr_of"],[1,"qrContainer","noqr"],[1,"loading_qr"]],template:function(t,n){1&t&&(a.dc(0,"ion-header"),a.dc(1,"ion-toolbar",0),a.dc(2,"ion-buttons",1),a.Zb(3,"ion-back-button",2),a.dc(4,"ion-title"),a.Lc(5,"Mi C\xf3digo QR"),a.cc(),a.cc(),a.cc(),a.cc(),a.dc(6,"ion-content"),a.Zb(7,"br"),a.Zb(8,"br"),a.dc(9,"ion-row",3),a.Kc(10,f,5,4,"div",4),a.Kc(11,g,3,0,"div",5),a.cc(),a.Zb(12,"br"),a.dc(13,"ion-row",6),a.dc(14,"div",7),a.dc(15,"ion-text",8),a.Lc(16,"Pod\xe9s usar este QR en la entrada de nuestro evento CIPAL, para obtener tu gafete."),a.cc(),a.cc(),a.cc(),a.cc()),2&t&&(a.Mb(10),a.vc("ngIf",n.miQrText),a.Mb(1),a.vc("ngIf",!n.miQrText))},directives:[i.t,i.Z,i.j,i.f,i.g,i.X,i.q,i.K,e.k,i.U,d.a],styles:[".qr_info[_ngcontent-%COMP%]{max-width:500px}.text_qr_of[_ngcontent-%COMP%]{font-size:11px;font-weight:400!important;float:right}.noqr[_ngcontent-%COMP%]{display:block;width:270px;height:287px}.loading_qr[_ngcontent-%COMP%]{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%)}"]}),t})();var b=o("tyNb");const p=[{path:"",component:u}];let h=(()=>{class t{}return t.\u0275mod=a.Wb({type:t}),t.\u0275inj=a.Vb({factory:function(n){return new(n||t)},imports:[[e.b,r.f,i.ab,d.b,b.j.forChild(p)]]}),t})()}}]);