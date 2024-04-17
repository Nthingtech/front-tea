import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { Component } from '@angular/core';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportComponent } from './pages/report/report.component';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "record",
    component: ReportComponent
  }
];
