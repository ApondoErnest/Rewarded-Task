import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../interfaces/task';
import { TASK_LIST } from '../mock/task-list';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }

  getUserTasks(userId:string): Observable<Task[]> {

    return of(TASK_LIST);
  }
}
