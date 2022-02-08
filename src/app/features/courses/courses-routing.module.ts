import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CourseComponent } from "./containers/course/course.component";
import { CoursesComponent } from "./containers/courses/courses.component";

const routes: Routes = [{
    path: '',
    component: CoursesComponent
}, {
    path: 'add',
    component: CourseComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule { }