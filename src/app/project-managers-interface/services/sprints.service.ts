import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../core/services';
import { Sprint } from '../../core/models';
import { TaigaMilestonesServiceInterface } from '../taiga-interface/service-interface';
import { ProjectManagersInterfaceService } from './project-managers-interface.service';
import { map } from 'rxjs/operators/map';
import { ProjectManagersEnum } from '../enums';

@Injectable()
export class SprintsService {

  constructor (
    private taigaMilestonesServiceInterface: TaigaMilestonesServiceInterface,
    private projectManagersInterfaceService: ProjectManagersInterfaceService
  ) {
  }

  get(slug): Observable<Sprint> {
    switch (this.projectManagersInterfaceService.chosenProjectManager) {
      case ProjectManagersEnum.TAIGA: {
        return this.taigaMilestonesServiceInterface.get(slug);
      }
    }
  }
  getProjectSprints(project_id): Observable<Sprint[]> {
    switch (this.projectManagersInterfaceService.chosenProjectManager) {
      case ProjectManagersEnum.TAIGA: {
        return this.taigaMilestonesServiceInterface.getProjectSprints(project_id);
      }
    }
  }

}