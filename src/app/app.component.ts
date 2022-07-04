import { Component } from '@angular/core';
import { MessageService } from './common/services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rewarded';

  constructor(private messageService: MessageService) {
  }
}
