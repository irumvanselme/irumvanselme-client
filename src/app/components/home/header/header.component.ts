import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async say_hello(): Promise<void> {
    sessionStorage.setItem('message_title', '1');
    await this.router.navigateByUrl('/contact');
  }
}
