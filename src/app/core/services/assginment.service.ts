import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { ApiService } from './api.service';
import { AssignmentInput } from '../models/assignment-input.model';
import { AssignmentByPunctuation } from '../models/assignment-by-punctuations.model';
import { AssignmentByPairs } from '../models/assignment-by-pairs.model';
import { DeveloperPair } from '../models/developer-pair.model';
import { Developer } from '../models/developer.model';

@Injectable()
export class AssignmentService {
  constructor(private apiService: ApiService) {}

  generateAssignmentByPunctuations(
    assignmentByPunctuations: AssignmentByPunctuation): Observable<AssignmentByPunctuation> {
      return this.apiService
      .post('/attributeassign/', assignmentByPunctuations)
      .map((_assignmentByPunctuations: AssignmentByPunctuation) => {
        return _assignmentByPunctuations;
      })
    }

  generatePairs(
    pairsInput: {reverse: boolean, developers: Developer[]}
  ): Observable<DeveloperPair[]> {
    return this.apiService
    .post('/makepairs/', pairsInput)
    .map((pairs: DeveloperPair[]) => {
      console.log(pairs, 'pairs response');
      return pairs;
    });
  }

  generarAsignacionSimple(
    assignmentUniqueCost: AssignmentInput
  ): Observable<AssignmentInput> {
    return this.apiService
      .post('/uniquecostassign/', assignmentUniqueCost)
      .map((_assignmentUniqueCost: AssignmentInput) => {
        return _assignmentUniqueCost;
      });
  }
  generateAssignmentByPairs(
    assignmentUniqueCost: AssignmentByPairs
  ): Observable<AssignmentByPairs> {
    return this.apiService
      .post('/pairassign/', assignmentUniqueCost)
      .map((_assignmentUniqueCost: AssignmentByPairs) => {
        return _assignmentUniqueCost;
      });
  }
}
