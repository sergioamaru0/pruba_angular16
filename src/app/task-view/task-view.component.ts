import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { Tarea } from '../models/person.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agregar FormsModule aquí
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {
  selectedFilter = 'all'; // Filtro por defecto
  tareas: Tarea[] = []; // Aquí se almacenarán las tareas obtenidas del servicio

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    // Al inicializar el componente, cargamos las tareas desde el servicio
    this.tareas = this.taskService.getTasks();
  }

  // Función para filtrar las tareas según el estado seleccionado
  get filteredTareas() {
    if (this.selectedFilter === 'all') {
      return this.tareas;
    }
    return this.tareas.filter(tarea => 
      this.selectedFilter === 'completada' ? tarea.estado === 'completada' : tarea.estado === 'pendiente'
    );
  }
    // Método para cambiar el estado de una tarea
    toggleTaskStatus(tarea: Tarea) {
      tarea.estado = tarea.estado === 'pendiente' ? 'completada' : 'pendiente';
    }
}
