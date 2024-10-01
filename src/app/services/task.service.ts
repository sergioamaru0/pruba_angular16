
import { Injectable } from '@angular/core';
import { Tarea } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Tarea[] = []; // Arreglo para almacenar las tareas

  constructor() {}

  // Método para agregar una nueva tarea
  addTask(task: Tarea) {
    this.tasks.push(task);
    console.log('Tareas actuales:', this.tasks); // Solo para verificar
  }

  // Método para obtener todas las tareas
  getTasks() {
    return this.tasks;
  }
}
