import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{
    path: '',
    loadChildren: () => import('./features/courses/courses.module').then(module => module.CoursesModule)
}, {
    path: 'courses',
    loadChildren: () => import('./features/courses/courses.module').then(module => module.CoursesModule)
},
{
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(module => module.AboutModule)
},
{
    path: '**',
    loadChildren: () => import('./features/not-found/not-found.module').then(module => module.NotFoundModule)
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }