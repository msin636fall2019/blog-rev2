import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';


const routes: Routes = [
  { path: 'add', component: TemplateFormComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'post-detail/:id', component: PostDetailComponent },
  { path: 'edit/:id', component: TemplateFormComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
