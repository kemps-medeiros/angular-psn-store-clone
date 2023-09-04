import { Component, OnInit } from '@angular/core';
import { socialLinks } from 'src/app/data/dataFake';

export type TSocialLinks = {
	socialMedia: string,
	href: string
}

@Component({
  selector: 'app-menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.css']
})
export class MenuLinksComponent implements OnInit {
	socialLinks: TSocialLinks[] = [];

  constructor() { }

  ngOnInit(): void {
		this.socialLinks = socialLinks
  }

}
