import { Component, Input, OnInit } from '@angular/core';
import { NavService } from '../../common/services/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() title: String = "";
@Input() coins: number = 0;
  constructor(public navService: NavService) { }

  ngOnInit(): void {

  }

}
