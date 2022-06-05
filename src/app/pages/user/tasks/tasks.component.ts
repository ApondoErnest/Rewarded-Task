import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/common/interfaces/task';
import { TaskServiceService } from 'src/app/common/services/task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskList: Task[] = [];

  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.taskService.getUserTasks('').subscribe(navs => {
      this.taskList = navs;
    })
  }

}
