import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { ToastService } from '../services/toast.service'; // Import the ToastService

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService, private toastService: ToastService) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      deadline: ['', [Validators.required]],
      people: this.fb.array([]),
    });
  }

  get people(): FormArray {
    return this.taskForm.get('people') as FormArray;
  }

  addPerson() {
    const personForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      age: [null, [Validators.required, Validators.min(18)]],
      skills: this.fb.array([this.fb.control('', Validators.required)]),
    });
    this.people.push(personForm);
  }

  removePerson(index: number) {
    this.people.removeAt(index);
  }

  getSkills(personIndex: number): FormArray {
    return this.people.at(personIndex).get('skills') as FormArray;
  }

  addSkill(personIndex: number) {
    this.getSkills(personIndex).push(this.fb.control('', Validators.required));
  }

  removeSkill(personIndex: number, skillIndex: number) {
    this.getSkills(personIndex).removeAt(skillIndex);
  }

  submitTask() {
    if (this.taskForm.valid) {
      const isDuplicateName = this.people.controls.some((person, index) => {
        const fullName = person.get('fullName')?.value;
        return this.people.controls.some((otherPerson, otherIndex) => 
          otherIndex !== index && otherPerson.get('fullName')?.value === fullName
        );
      });

      if (isDuplicateName) {
        this.toastService.show('Los nombres no pueden repetirse entre las personas de la misma tarea.', 'Cerrar');
        return;
      }

      // Formar el objeto de la tarea
      const taskData = {
        title: this.taskForm.get('title')?.value,
        fechaFin: this.taskForm.get('deadline')?.value,
        estado: 'pendiente', // O cualquier estado predeterminado que desees
        personas: this.people.value, // Esto ahora contiene un array de personas
      };

      this.taskService.addTask(taskData);
      this.toastService.show('Tarea guardada correctamente.', 'Cerrar');

      // Limpiar el formulario
      this.taskForm.reset();
      while (this.people.length !== 0) {
        this.people.removeAt(0);
      }
    } else {
      this.toastService.show('Formulario no válido.', 'Cerrar');
    }
  }
}
