import { Component, OnInit } from '@angular/core';
import {Alumno} from '../models/alumnos.models'
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit{
  public alumnos: Alumno[] = [
    {
      codigo:'n00206356',
      id: 1,
      nombre: 'Jairo',
      apellidos: 'Cornejo Vega',
      nota: 8,
      aprobado: false,
    },
    {
      codigo:'n00209878',
      id: 2,
      nombre: 'Joaquin',
      apellidos: 'Salas Dominguez',
      nota: 15,
      aprobado: true,
    },
    {
      codigo:'n00223654',
      id: 3,
      nombre: 'Christian',
      apellidos: 'Leon Angulo',
      nota: 17,
      aprobado: true,
    },
    {
      codigo:'n00215874',
      id: 4,
      nombre: 'Sebastian',
      apellidos: 'Cervantes Vegas',
      nota: 8,
      aprobado: false,
    },
    {
      codigo:'n00256985',
      id: 5,
      nombre: 'Carlos',
      apellidos: 'Vigil Quijano',
      nota: 8,
      aprobado: false,
    },
    {
      codigo:'n00212654',
      id: 6,
      nombre: 'Sebastian',
      apellidos: 'Chavarry Maldonado',
      nota: 16,
      aprobado: true,
    },
    {
      codigo:'n00216589',
      id: 7,
      nombre: 'Pedro',
      apellidos: 'Castillo',
      nota: 18,
      aprobado: true,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
