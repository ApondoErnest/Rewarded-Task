import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/common/interfaces/task';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.css']
})
export class CardTaskComponent implements OnInit {
  @Input() task!: Task;
  @Input() pos!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
