import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  @Input() selectedPlayer;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  beginDeletePlayer(playerToDelete){
    if(confirm("Delete player?")){
      this.playerService.deletePlayer(playerToDelete);
    }
  }

  beginEditPlayer(playerToEdit){
    this.playerService.editPlayer(playerToEdit);
  }

  beginStats(selectedPlayer) {
    this.playerService.addGame(selectedPlayer);
  }

}
