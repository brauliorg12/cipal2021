(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"4xiL":function(t,e,o){"use strict";o.r(e),o.d(e,"CategoriasAddPageModule",(function(){return p}));var c=o("ofXK"),i=o("3Pt+"),a=o("tyNb"),n=o("TEn/"),r=o("mrSG"),s=o("fXoL"),l=o("5egi"),d=o("1+z8");function u(t,e){if(1&t&&(s.dc(0,"ion-select-option",19),s.Lc(1),s.qc(2,"uppercase"),s.cc()),2&t){const t=e.$implicit;s.wc("value",t),s.Mb(1),s.Nc(" ",s.rc(2,2,t)," ")}}const m=[{path:"",component:(()=>{class t{constructor(t,e,o,c,a){this.formBuilder=t,this.router=e,this.uiService=o,this.stextService=c,this.loadingController=a,this.cats=["comercio","profesional","servicio"],this.positionAlertOptions={header:"Elige un tipo",subHeader:"Padres de categor\xedas",translucent:!0},this.catsForm=this.formBuilder.group({status:[!0,i.s.required],tipo:["",i.s.required],nombre:["",i.s.required],tags:["",i.s.required],isadmin:[!1,i.s.required]})}ngOnInit(){}createBanner(){return Object(r.a)(this,void 0,void 0,(function*(){return this.presentLoading("Creando Categor\xeda..."),"comercio"===this.catsForm.get("tipo").value&&this.catsForm.patchValue({tipo:"comercio"}),"profesional"===this.catsForm.get("tipo").value&&this.catsForm.patchValue({tipo:"profesional"}),"servicio"===this.catsForm.get("tipo").value&&this.catsForm.patchValue({tipo:"servicio"}),yield this.stextService.createCat(this.catsForm.value).then(t=>{t&&(this.loading.dismiss(),this.router.navigateByUrl("/admin-categorias"),this.presentToast(),this.ResetForm())},t=>console.log(t)),!1}))}statusCommerce(){"false"===this.catsForm.get("status").value&&this.catsForm.patchValue({status:"true"}),"true"===this.catsForm.get("status").value&&this.catsForm.patchValue({status:"false"})}btnCommerce(){"false"===this.catsForm.get("isadmin").value&&this.catsForm.patchValue({isadmin:"true"}),"true"===this.catsForm.get("isadmin").value&&this.catsForm.patchValue({isadmin:"false"})}ResetForm(){this.catsForm.reset()}presentToast(){return Object(r.a)(this,void 0,void 0,(function*(){this.uiService.toastGeneral("Texto creado correctamente")}))}presentLoading(t){return Object(r.a)(this,void 0,void 0,(function*(){return this.loading=yield this.loadingController.create({message:t}),yield this.loading.present()}))}}return t.\u0275fac=function(e){return new(e||t)(s.Yb(i.b),s.Yb(a.g),s.Yb(l.a),s.Yb(d.a),s.Yb(n.cb))},t.\u0275cmp=s.Sb({type:t,selectors:[["app-categorias-add"]],decls:43,vars:4,consts:[["color","primary"],["slot","start"],["defaultHref","/"],["novalidate","",3,"formGroup"],["size","12",1,"card_form"],["lines","inset"],["name","globe","color","tertiary",1,"icon_addi"],["formControlName","status",3,"ionChange"],["lines","none"],["position","floating","color","tertiary",1,"text_floating"],["formControlName","tipo","cancelText","Cancelar","placeholder","elej\xed uno",3,"interfaceOptions"],[3,"value",4,"ngFor","ngForOf"],["position","floating","color","tertiary",1,"text_floating","font_seis"],["type","text","formControlName","nombre","autocapitalize","on","placeholder","nombre de la categor\xeda"],["type","text","formControlName","tags","autocapitalize","off","autoGrow","true","placeholder","palabras clave"],["name","person","color","tertiary",1,"icon_addi"],["formControlName","isadmin",3,"ionChange"],["size","12"],["expand","block","shape","round","color","tertiary",3,"disabled","click"],[3,"value"]],template:function(t,e){1&t&&(s.dc(0,"ion-header"),s.dc(1,"ion-toolbar",0),s.dc(2,"ion-buttons",1),s.Zb(3,"ion-back-button",2),s.dc(4,"ion-title"),s.Lc(5,"Nueva categor\xeda"),s.cc(),s.cc(),s.cc(),s.cc(),s.dc(6,"ion-content",0),s.dc(7,"form",3),s.dc(8,"ion-grid"),s.dc(9,"ion-row"),s.dc(10,"ion-col",4),s.dc(11,"ion-card"),s.dc(12,"ion-item",5),s.dc(13,"ion-label"),s.Zb(14,"ion-icon",6),s.Lc(15,"Publicada "),s.cc(),s.dc(16,"ion-toggle",7),s.lc("ionChange",(function(){return e.statusCommerce()})),s.cc(),s.cc(),s.dc(17,"ion-item",8),s.dc(18,"ion-label",9),s.Lc(19,"Seleccione un tipo:"),s.cc(),s.dc(20,"ion-select",10),s.Kc(21,u,3,4,"ion-select-option",11),s.cc(),s.cc(),s.cc(),s.cc(),s.dc(22,"ion-col",4),s.dc(23,"ion-card"),s.dc(24,"ion-item",5),s.dc(25,"ion-label",12),s.Lc(26,"Nombre: "),s.cc(),s.Zb(27,"ion-input",13),s.cc(),s.dc(28,"ion-item",5),s.dc(29,"ion-label",12),s.Lc(30,"Palabras clave: "),s.cc(),s.Zb(31,"ion-textarea",14),s.cc(),s.dc(32,"ion-item",8),s.dc(33,"ion-label"),s.Zb(34,"ion-icon",15),s.Lc(35,"\xbfSolo para Admins?: "),s.cc(),s.dc(36,"ion-toggle",16),s.lc("ionChange",(function(){return e.btnCommerce()})),s.cc(),s.cc(),s.cc(),s.cc(),s.cc(),s.cc(),s.cc(),s.cc(),s.dc(37,"ion-footer"),s.dc(38,"ion-row"),s.dc(39,"ion-col",17),s.dc(40,"ion-button",18),s.lc("click",(function(){return e.createBanner()})),s.dc(41,"b"),s.Lc(42,"Publicar"),s.cc(),s.cc(),s.cc(),s.cc(),s.cc()),2&t&&(s.Mb(7),s.vc("formGroup",e.catsForm),s.Mb(13),s.vc("interfaceOptions",e.positionAlertOptions),s.Mb(1),s.vc("ngForOf",e.cats),s.Mb(19),s.vc("disabled",!e.catsForm.valid))},directives:[n.t,n.Z,n.j,n.f,n.g,n.X,n.q,i.t,i.m,i.e,n.s,n.K,n.p,n.k,n.x,n.D,n.u,n.Y,n.c,i.l,i.d,n.O,n.kb,c.j,n.w,n.lb,n.V,n.r,n.i,n.P],pipes:[c.q],styles:["ion-col[_ngcontent-%COMP%]{padding:0!important}.text_floating[_ngcontent-%COMP%]{font-size:20px!important;padding-bottom:1rem}ion-card[_ngcontent-%COMP%]{margin-left:0!important;margin-right:0!important}.img_banner[_ngcontent-%COMP%]{padding:1rem}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=s.Wb({type:t}),t.\u0275inj=s.Vb({factory:function(e){return new(e||t)},imports:[[c.b,i.f,n.ab,i.q,a.j.forChild(m)]]}),t})()}}]);