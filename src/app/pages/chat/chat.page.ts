import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ChatService } from '../../services/chat.service';
import { Subscription, interval } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Mensaje } from '../../classes/mensaje';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild('IonContent', { static: true }) content: IonContent;

  msgList: any[];
  userInput = '';

  startTyping: any;
  usuario: any;
  vendedor: any;

  usuario_recibe: any;
  usuario_envia: any;
  param: '';

  public intervallTimer = interval(5000);
  subscription: Subscription;
  length_global: any;

  public status = 'loading';

  constructor(
    public activRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private chatService: ChatService,
    private storage: Storage
  ) {

    this.storage.get('usuariocache')
      .then(async data => {
        if (data) {
          this.usuario = data;
        }
      }, (error) => {
      });

  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.param = this.activRoute.snapshot.params['user'];
    this.loadPage(this.param);
    this.realTime(this.param);
  }

  realTime(param: string) {
    this.subscription = this.intervallTimer.subscribe(() => this.chatService.recibirChat(param).subscribe((data2: any) => {
      if (data2.ok) {
        if (this.length_global !== data2.data.length) {
          console.log('realtime');
          this.length_global = data2.data.length;
          this.msgList = data2.data;
          this.scrollDown();
        }

      }
    }));
  }

  loadPage(data: string) {

    this.usuarioService.getUser(data).toPromise()
      .then(async (dataDB: any) => {
        if (dataDB.ok) {
          console.log(dataDB);

          this.usuario_recibe = await dataDB.usuario;

          this.recibirMsj(data);


        }
      });
  }


  closeTime(itemSliding) {
    console.log('closeTime');
    itemSliding.close();
  }

  prepareMsg(image?) {

    if (this.userInput !== '') {

      const m = new Mensaje();
      m.mensaje = this.userInput;
      m.usuario_recibe = this.usuario_recibe._id;
      m.usuario_envia = this.usuario._id;
      m.estado = true;
      m.visto = false;

      this.chatService.enviarChat(m).toPromise()
        .then(async (dtaa: any) => {
          console.log(dtaa);

          if (dtaa.ok) {
            this.recibirMsj(this.param);
          }

        });

      this.userInput = '';
      this.startTyping = false;

    }
  }

  scrollDown() {
    setTimeout(() => {
      console.log('scroll');

      this.content.scrollToBottom(200);
    }, 250);
  }

  userTyping($event) {
    // console.log($event);
    this.scrollDown();

    if ($event.keyCode === 13) {
      this.prepareMsg();
    }
  }
  something($event: any) {
    $event.preventDefault();
    console.log($event);
  }

  recibirMsj(data: string) {
    if (this.param) {
      this.chatService.recibirChat(data).subscribe((lMsjs: any) => {
        console.log('Mensajes', lMsjs);

        if (lMsjs.ok) {
          this.length_global = lMsjs.data.length;
          this.msgList = lMsjs.data;
          this.scrollDown();
          console.log(lMsjs);
          this.status = 'ok';
          if (lMsjs.data.length === 0) {
            this.status = 'cero';
          }
        } else {
          this.status = 'error';
        }
      });
    }
  }


}
