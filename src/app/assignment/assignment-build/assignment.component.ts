import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Project, Sprint, Developer, AssignmentInput } from '../../core/models';
import { LoadingBarService } from '@ngx-loading-bar/core';

import { Errors } from '../../core/models';
import { ProjectsService, SprintsService, DevelopersService } from '../../core/services';
import { AssignmentService } from '../../core/services/assginment.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

  selectedSimpleProject: Project;
  selectedSimpleSprint: Sprint;
  simpleProjects: Project[];
  projectErrors: {};
  sprints: Sprint[];
  developers: Developer[];
  step = 0;
  assignmentOutput: AssignmentInput;
  errors: Errors = {errors: {}};
  formSelectProject: FormGroup;
  formSelectSprint: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  simpleAssignmentInput: AssignmentInput;
  constructor(
    private _formBuilder: FormBuilder,
    private simpleProjectService: ProjectsService,
    private sprintsService: SprintsService,
    private assignmentService: AssignmentService,
    private simpleDeveloperService: DevelopersService,
    private loadingBar: LoadingBarService) {
        this.sprints = new Array<Sprint>();
      this.assignmentOutput = null;
      this.simpleAssignmentInput = new AssignmentInput();
    }

    setStep(index: number) {
      this.step = index;
    }

    nextStep() {
      this.step++;
    }

    prevStep() {
      this.step--;
    }
  initSimpleSprints(project_id) {
    this.loadingBar.start();
    this.sprintsService.getProjectSprints(project_id)
    .subscribe((sprints: Sprint[]) => {
      this.sprints = sprints;
      if ( this.sprints.length === 0) {
        this.formSelectSprint.controls['sprintCntrl'].disable();
      } else {
        this.formSelectSprint.controls['sprintCntrl'].enable();
      }
      // this.formSelectSprint.controls['sprintCntrl'].enable();
      this.loadingBar.complete();
      this.nextStep();
    })
  }
  initSimpleDevelopers(project_id) {
    this.loadingBar.start();
    this.simpleDeveloperService.getProjectDevelopers(project_id)
    .subscribe((developers: Developer[]) => {
      this.developers = developers;
      this.loadingBar.complete();
    })
  }
  getSimpleAssignment(): void {
    this.simpleAssignmentInput.relationHoursPoints = 1;
    this.simpleAssignmentInput.startDate = new Date(this.selectedSimpleSprint.estimated_start);
    this.simpleAssignmentInput.endDate = new Date(this.selectedSimpleSprint.estimated_finish);
    this.simpleAssignmentInput.developers = this.developers;
    this.simpleAssignmentInput.userStories = this.selectedSimpleSprint.user_stories;
    console.log(JSON.stringify(this.simpleAssignmentInput));
    this.assignmentService.generarAsignacionSimple(this.simpleAssignmentInput)
    .subscribe( (assignment: AssignmentInput) => {
      this.assignmentOutput = assignment;
      console.log(assignment);
    }
  );

  }

  ngOnInit() {
    this.loadingBar.start();
    this.simpleProjectService.getByMemberId('303456')
    .subscribe (
      (simpleProjects: Project[]) => {
        this.simpleProjects = simpleProjects;
        console.log(this.simpleProjects);
        this.loadingBar.complete();
      },
      errors => {
        this.projectErrors  = errors;
        console.log(this.projectErrors);
      }

    );
    this.formSelectProject = this._formBuilder.group({
      projectContrl: ['', Validators.required]
    });
    this.formSelectSprint = this._formBuilder.group({
      sprintCntrl: [{value: '', disabled: true}]
    });
  }
}

