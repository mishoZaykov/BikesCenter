import { Component } from '@angular/core';
import {
  Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-project';
  userData: Observable<any> | undefined;

  constructor(private firestore: Firestore) {}
}
