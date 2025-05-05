import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseTableComponent } from '../course-table/course-table.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, CourseTableComponent,NavbarComponent],
  templateUrl: './side-menu.component.html'
})
export class SideMenuComponent {
  courses = [
    'Angular Basics', 'Advanced Angular', 'RxJS Deep Dive', 'Angular Forms',
    'Routing in Angular', 'State Management', 'Unit Testing', 'Animations',
    'Performance Tuning', 'Angular with Firebase'
  ];
  activeCourse: string | null = null;

  selectCourse(course: string) {
    this.activeCourse = course;
  }
}
