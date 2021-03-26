import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../classes/interfaces';
import { UsuarioService } from '../../../services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-chat',
  templateUrl: './profile_chat.page.html',
  styleUrls: ['./profile_chat.page.scss'],
})
export class ProfileChatPage implements OnInit {

  usuario: Usuario = {};

  user = {
    _id: '',
    nombre: '',
    email: '',
    avatar: '',
    avatarfb: '',
    fb: ''
  };

  status = 'loading';

  constructor(
    private usuarioService: UsuarioService,
    public activeR: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getData(this.activeR.snapshot.params['id']);
  }

  getData(data: string) {

    this.usuarioService.getUser(data).toPromise()
      .then(async (dataDB: any) => {
        if (dataDB.ok) {
          console.log(dataDB);

          this.user = {
            _id: await dataDB.usuario._id,
            nombre: await dataDB.usuario.nombre,
            email: await dataDB.usuario.email,
            avatarfb: await dataDB.usuario.avatarfb,
            avatar: await dataDB.usuario.avatar,
            fb: await dataDB.usuario.fb
          };

          setTimeout(() => {
            this.status = 'ok';
          }, 200);


        }
      });
  }

}
