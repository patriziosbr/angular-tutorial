import { Injectable } from '@angular/core';
import { Task } from './interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private tasks: Task[] = [
    {
      heading: 'feed the dog',
      description : ' buy the food '
    },
    {
      heading: 'lista della spesa',
      description : 'pasta, carne, pomodore, insalata'
    }
  ]

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.unshift(task)
  }
}
