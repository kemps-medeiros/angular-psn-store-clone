import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-logo',
  templateUrl: './menu-logo.component.html',
  styleUrls: ['./menu-logo.component.css']
})
export class MenuLogoComponent implements OnInit {

	@Input()
	logoCover:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
