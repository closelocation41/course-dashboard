import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-table.component.html'
})
export class CourseTableComponent {
  @Input() courseTitle: string | null = null;

  allCourseData: { [key: string]: { topic: string; instructor: string; duration: string }[] } = {
    'Angular Basics': [
      { topic: 'Components', instructor: 'John Doe', duration: '1h' },
      { topic: 'Templates', instructor: 'Jane Smith', duration: '1h' }
    ],
    'Advanced Angular': [
      { topic: 'Change Detection', instructor: 'Jim Beam', duration: '2h' },
      { topic: 'Optimizations', instructor: 'Elena Ray', duration: '1.5h' }
    ],
    'RxJS Deep Dive': [
      { topic: 'Observables', instructor: 'Rick Ford', duration: '1.5h' },
      { topic: 'Subjects', instructor: 'Anna Belle', duration: '1h' }
    ],
    'Angular Forms': [
      { topic: 'Template-driven Forms', instructor: 'Lisa Ray', duration: '1h' },
      { topic: 'Reactive Forms', instructor: 'Tom Smith', duration: '1h' }
    ],
    'Routing in Angular': [
      { topic: 'Route Configs', instructor: 'Sam Stark', duration: '1.5h' },
      { topic: 'Guards & Resolvers', instructor: 'Lara Croft', duration: '1h' }
    ],
    'State Management': [
      { topic: 'NgRx Intro', instructor: 'Tina Fey', duration: '2h' },
      { topic: 'Effects', instructor: 'Dave Black', duration: '1h' }
    ],
    'Unit Testing': [
      { topic: 'Jasmine Basics', instructor: 'Oliver Twist', duration: '1.5h' },
      { topic: 'Karma Setup', instructor: 'Mary Poppins', duration: '1h' }
    ],
    'Animations': [
      { topic: 'Basic Animations', instructor: 'Tony Stark', duration: '1h' },
      { topic: 'Animation Callbacks', instructor: 'Natasha Romanoff', duration: '1h' }
    ],
    'Performance Tuning': [
      { topic: 'Lazy Loading', instructor: 'Steve Rogers', duration: '1h' },
      { topic: 'Change Detection Strategy', instructor: 'Bruce Banner', duration: '1.5h' }
    ],
    'Angular with Firebase': [
      { topic: 'Hosting', instructor: 'Peter Parker', duration: '1h' },
      { topic: 'Firestore Basics', instructor: 'Clark Kent', duration: '1.5h' }
    ]
  };
  

  get courseList() {
    return this.courseTitle ? this.allCourseData[this.courseTitle] || [] : [];
  }

  saveCourse(index: any) {
    alert('Saved:'+ this.courseList[index])
    console.log('Saved:', this.courseList[index]);
  }
}
