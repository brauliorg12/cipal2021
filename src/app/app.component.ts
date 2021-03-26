import { Component, ViewChild, Input } from '@angular/core';
import { IonRouterOutlet, Platform, MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { EventsApp } from './services/events.service';
import { AutocloseOverlaysService } from './services/autoCloseOverlay.service';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { environment } from '../environments/environment';
import { UiServiceService } from './services/ui-service.service';
import { HttpClient } from '@angular/common/http';
//API
// import { Plugins, StatusBarStyle, } from '@capacitor/core';
import { UserUpdateService } from './services/userupdate.service';
import { UsuarioService } from './services/usuario.service';
import { Plugins, StatusBarStyle } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  @ViewChild(IonRouterOutlet, { static: true }) routerOutlet: IonRouterOutlet;
  @Input()
  routerLinkActive: string | string[];

  version: number;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private autocloseOverlaysService: AutocloseOverlaysService,
    private appVersion: AppVersion,
    private storage: Storage,
    private router: Router,
    private refreshEvent: EventsApp,
    private mobileAccessibility: MobileAccessibility,
    private http: HttpClient,
    private uiService: UiServiceService,
    public menu: MenuController,
    private usuarioService: UsuarioService,
    private userupdateService: UserUpdateService,
  ) {

    this.updateUser();

    if (this.platform.is('capacitor')) {
      this.platform.ready().then(() => {

        // Evitar texto grande
        this.mobileAccessibility.usePreferredTextZoom(false);

        // Version y chequeo de la misma //// APP
        this.appVersion.getVersionNumber().then((resp: any) => {
          if (resp) {
            this.version = resp;

            const urlVersion = environment.url + '/uploads/update/version_pablo.json';
            this.http.get(urlVersion).subscribe((data: any) => {
              const update = data.version;

              if (update > this.version) {
                alert(update)

                // this.uiService.update(data.title, data.content);

              }
            });

            // Guardar version en localstorage
            this.storage.set('version', resp).then(res => { });
          }
        });

        this.initializeApp();

        // !BOTON ATRAS NATIVO
        this.platform.backButton.subscribeWithPriority(999990, async () => {

          if (this.router.url === '/inicio') {
            this.refreshEvent.home();
          } else {
            this.back();
          }
        });

      });

      // platform.resume.subscribe(() => {
      //   this.openAppBranch();

      //   this.pushService.clearNoti();
      // });
    } else {


      // Guardar version en localstorage //// WEB
      this.storage.set('version', 'web').then(res => {
        // alert('version: ' + res);
      });
    }


  }

  initializeApp() {
    const { SplashScreen, StatusBar } = Plugins;
    StatusBar.show().catch(error => alert(error.message));
    StatusBar.setBackgroundColor({ color: '#00416b' }).catch(error => alert(error.message));
    SplashScreen.hide().catch(error => alert(error.message));
  }

  // ! Volver y cerrar popus
  async back() {
    await this.autocloseOverlaysService.trigger().then(resp => {
      if (!resp) {
        this.routerOutlet.pop();
      }
    });
  }

  async close() {
    const element = await this.menu.getOpen();
    if (element !== null) {
      this.menu.close();
    }

  }

  async updateUser() {
    this.storage.get('usuariocache')
      .then(async data => {
        if (data) {
          this.usuarioService.validaToken().then(async response => {
            if (response) {
              await this.userupdateService.updateUser();
            }
          });
        }
      });
  }

  goTo(data: string) {
    window.open(data, '_system');
  }



}
