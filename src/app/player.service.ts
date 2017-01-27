import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class PlayerService {

  players: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.players = angularFire.database.list('players');
   }

  getPlayers() {
    return this.players
  }

  addPlayer(newPlayer: Player){
    this.players.push(newPlayer);
  }

  getPlayerKey(playerKey: string){
    return this.angularFire.database.object('players/' + playerKey);
  }

  deletePlayer(player){
    var playerInFirebase = this.getPlayerKey(player.$key);
    playerInFirebase.remove();
  }

  editPlayer(player) {
    console.log(player);
    var playerInFirebase = this.getPlayerKey(player.$key);
    playerInFirebase.update({name: player.name,
                              number: player.number,
                              age: player.age,
                              height: player.height,
                              position: player.position,
                              gp: player.gp,
                              mpg: player.mpg,
                              points: player.points});
  }

  addGame(player) {
    console.log(player);
    var playerInFirebase = this.getPlayerKey(player.$key);
    playerInFirebase.update({gp: parseInt(player.gp) + 1});
  }

}
