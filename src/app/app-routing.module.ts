import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectOneComponent } from './components/pages/project-one/project-one.component';
import { ProjectTwoComponent } from './components/pages/project-two/project-two.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wheel-friendly', component: ProjectOneComponent },
  { path: 'jd-art', component: ProjectTwoComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
