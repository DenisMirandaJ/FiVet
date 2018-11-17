import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*template: `{
    <ul *ngIf="courses$ | async as courses else noData">
        <li *ngFor="let course of courses">
            {{course.description}}
        </li> 
    </ul>
    <ng-template #noData>No Data Available</ng-template>
  }`*/
})
export class AppComponent {// implements OnInit {
  title = 'FiVetWebApp';
  
}
