import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async hire_me(): Promise<void> {
    sessionStorage.setItem('message_title', '0');
    await this.router.navigateByUrl('/contact');
  }
}
