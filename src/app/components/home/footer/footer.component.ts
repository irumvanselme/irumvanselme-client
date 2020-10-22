import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../../services/contact.service';

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
  form: FormGroup;


  constructor(private http: ContactService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('I just wanted to say hello', Validators.required),
      first_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl('none', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      message: new FormControl('', [Validators.required, Validators.minLength(20)])
    });
  }

  get f(): {[p: string]: AbstractControl}{
    return this.form.controls;
  }

  submit(): void {
    if ( !this.form.valid ) {
      this.form.markAllAsTouched();
    }else{
      const conf = confirm('Are you sure you want to send the message');
      if ( conf === true ) {
        this.http.create(this.form.value).subscribe(res => {
          this.form.reset();
          alert('Message successfully sent ! ');
          }
        );
      }
    }
  }
}
