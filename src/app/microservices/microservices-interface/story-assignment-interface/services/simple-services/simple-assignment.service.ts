import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../../../../core/services';
import { SimpleAssignmentOutput, AssignmentInput } from '../../../../../core/models';
import { AsignacionSimpleInterfaceService } from '../../story-assignment-ssa-interface/services-interface';
import { AssignmentMiroservicesInterfaceService } from '../story-assignment-microservices-interface.services';
import { map } from 'rxjs/operators/map';
import { StoryAssignmentMiroservicesEnum } from '../../enums';

@Injectable()
export class SimpleAssignmentService {

  constructor (
    private asignacionSimpleInterfaceService: AsignacionSimpleInterfaceService,
    private assignmentMicroservicesInterface: AssignmentMiroservicesInterfaceService
  ) {
  }

  generateSimpleAssignment(simpleAssignmentInput: AssignmentInput): Observable<SimpleAssignmentOutput> {
    switch (this.assignmentMicroservicesInterface.choosenAssignmentMicroservicee) {
      case StoryAssignmentMiroservicesEnum.SIMPLE_SISTEM_ASSIGNMENT: {
        return this.asignacionSimpleInterfaceService.generarAsignacionSimple(simpleAssignmentInput);
      }
    }
  }
}
