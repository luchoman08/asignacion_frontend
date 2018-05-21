import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { UserStory } from '../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class UserStoriesService {

  constructor ( private apiService: ApiService) {  }

  get(slug): Observable<UserStory> {
    return this.apiService.get('/userstories/' + slug)
    .pipe(map(data => data));
  }
  getProjectUserStories(project_id): Observable<UserStory[]> {
    const params = new HttpParams().set('project', String(project_id));
    return this.apiService.get('/userstories', params)
    .pipe(map(data => data));
      }
    }