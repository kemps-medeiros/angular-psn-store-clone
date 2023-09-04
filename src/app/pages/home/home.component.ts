import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

export type TGames = {
	id: string,
	gameCover: string,
	gameLabel: string,
	gameType: string,
	gamePrice: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	games: TGames[] = []

  constructor() { }

  ngOnInit(): void {
		this.games = dataFake
  }

}
