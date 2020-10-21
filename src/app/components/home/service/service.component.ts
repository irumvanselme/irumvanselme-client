import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  @Input() name : string;
  @Input() lable : string;
  @Input() description : string;
  @Input() icon : string;
  @Input() index : number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async request_quote(): Promise<void> {
    sessionStorage.setItem('message_title', JSON.stringify(this.index + 2));
    await this.router.navigateByUrl('/contact');
  }
}
