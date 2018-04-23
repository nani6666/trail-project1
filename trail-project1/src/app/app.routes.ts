
import { Component } from '@angular/core';
// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFormComponent } from './components/main-form/main-form.component';
import { GetTemplatesComponent } from './components/get-templates/get-templates.component';


// Route Configuration
export const routes: Routes = [
    { path: '', component: MainFormComponent },
    { path: 'forms', component: MainFormComponent },
    { path: 'Tempaltes', component: GetTemplatesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
