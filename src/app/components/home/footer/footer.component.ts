import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  medias: object[] = [
    {
      icon: 'facebook',
      label: 'anselme23',
      to: ''
    },
    {
      icon: 'instagram',
      label: '__anselme23',
      to: 'https://www.facebook.com/anselme23'
    },
    {
      icon: 'twitter',
      label: 'anselme23',
      to: 'https://www.facebook.com/anselme23'
    },
    {
      icon: 'github',
      label: 'AnselmeIrumva',
      to: 'https://www.facebook.com/anselme23'
    },
    {
      icon: 'linkedin',
      label: 'IRUMVA HABUMUGISHA Anselme',
      to: 'https://www.facebook.com/anselme23'
    },
    {
      icon: 'phone',
      label: '+250 783 384 212',
      to: 'https://www.facebook.com/anselme23'
    },
    {
      icon: 'google-maps',
      label: 'Kirehe - Rwanda',
      to: 'https://www.facebook.com/anselme23'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
