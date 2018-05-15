import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { SimpleAssignmentComponent } from './simple-assignment/simple-assignment.component';
const routes: Routes = [
    { path: 'simpleassignment',      component: SimpleAssignmentComponent },
    {
    path: 'userstories',
    loadChildren: './user-story/user-story.module#UserStoryModule'
    },
    {
      path: 'developers',
      loadChildren: './developer/developer.module#DeveloperModule'
    },
    { path: '',               redirectTo: 'simpleassignment', pathMatch: 'full' }
];

@NgModule({

    imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]

/*
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],*/
})




export class AppRoutingModule { }