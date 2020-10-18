import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  @Input() name;
  @Input() lable;
  @Input() description;
  @Input() icon;

  constructor() { }

  ngOnInit(): void {
  }

}
