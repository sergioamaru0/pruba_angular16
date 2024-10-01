export interface Person {
    fullName: string;
    age: number;
    skills: string[];
  }

export interface Tarea {
  personas:Person[],
  estado:string,
  title:string,
  fechaFin:string,
} 