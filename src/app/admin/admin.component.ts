import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { AngularFire, AuthProviders } from 'angularfire2';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})
export class AdminComponent implements OnInit {
  currentUser: {};

  constructor(public af: AngularFire, private playerService: PlayerService) {
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.currentUser = auth;
      } else {
        this.currentUser = {};
      }
    });
  }

  ngOnInit() {
  }

  submitForm(name: string, number: number, age: number, height: string, position: string, gp: number, mpg: number, points: number ){
    var newPlayer: Player = new Player(name, number, age, height, position, gp, mpg, points);
    this.playerService.addPlayer(newPlayer);
  }

  login() {
    this.af.auth.login();
    console.log(this.currentUser);
  }

  logout() {
     this.af.auth.logout();
     console.log(this.currentUser);
  }


}
