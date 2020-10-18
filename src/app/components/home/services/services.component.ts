import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  title = 'my services';
  serivices = [
    {
      name: 'Mobile and Web design',
      label: 'user focused',
      description: 'An app should be designed for the people who will use it, so that\'s exactly what I do. User focused design should be the primary goal of any Application'
    },
    {
      name: 'Web Development',
      label: 'fast and responsive',
      description: 'Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.'
    },
    {
      name: 'Mobile Development',
      label: 'user friendly',
      description: 'An application is kept close to users in their mobile devices. You can\'t keep close to you people who are not your friends. we also to make an app user\'s friend'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
