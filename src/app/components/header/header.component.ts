import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {

  }

  isCurrentPage(pageName: string): boolean {
    return this.location.path() == pageName; 
  }

}
