import { Component, OnInit, Input } from '@angular/core';
import { SimpleAssignmentOutput } from '../../core/models';

@Component({
  selector: 'app-simple-assignment-detail-read-only',
  templateUrl: './simple-assignment-detail-read-only.component.html',
  styleUrls: ['./simple-assignment-detail-read-only.component.scss']
})
export class SimpleAssignmentDetailReadOnlyComponent implements OnInit {
  simpleAssignment: SimpleAssignmentOutput;
  constructor() { 
    this.simpleAssignment = JSON.parse('{"assignmentErrors":[],"simpleDeveloperUserStoriesAssigned":[{"simpleDeveloper":{"id":788273,"available_hours_per_week":45,"full_name":"Luis Gerardo Manrique Cardona"},"simpleUserStories":[{"id":2239865,"points":12,"subject":"Permitir el logueo en el sistema basado en los usuarios de el Campus Virtual, haciendo uso de sus nombres de usuario, contraseña y rol asignado en el Campus"},{"id":2252677,"points":12,"subject":"Permitir asignaciones basadas en un conjunto de historias resueltas"}]}]}')
    this.simpleAssignment.simpleDeveloperUserStoriesAssigned.push(this.simpleAssignment.simpleDeveloperUserStoriesAssigned[0]);
  }

  ngOnInit() {
  }

}