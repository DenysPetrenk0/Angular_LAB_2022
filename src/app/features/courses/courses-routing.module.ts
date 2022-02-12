import { DataFormResolver } from './resolvers/data-form.resolver';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CourseComponent } from "./containers/course/course.component";
import { CoursesComponent } from "./containers/courses/courses.component";

const routes: Routes = [{
    path: '',
    component: CoursesComponent
},
{
    path: 'add',
    component: CourseComponent
},
{
    path: ':id',
    component: CourseComponent,
    resolve: [DataFormResolver]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule { }