import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})
export class AdminComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, number: number, age: number, height: string, position: string, gp: number, mpg: number, points: number ){
    var newPlayer: Player = new Player(name, number, age, height, position, gp, mpg, points);
    this.playerService.addPlayer(newPlayer);
  }

}
