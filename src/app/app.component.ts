import { ContactService } from './services/contact.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'irumvanselme';

  constructor(private http: ContactService) {
    http.getAll().subscribe(res => console.log(res))
  }
}
