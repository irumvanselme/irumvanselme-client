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
      to: 'https://www.facebook.com/anselme23'
    },
    {
      icon: 'instagram',
      label: '__anselme23',
      to: 'https://www.instagram.com/__anselme_23/'
    },
    {
      icon: 'twitter',
      label: 'anselme23',
      to: 'https://twitter.com/officialanselme'
    },
    {
      icon: 'github',
      label: 'AnselmeIrumva',
      to: 'https://www.github.com/anselme-rca'
    },
    {
      icon: 'linkedin',
      label: 'IRUMVA HABUMUGISHA Anselme',
      to: 'https://www.linkedin.com/in/irumva-habumugisha-anselme-182618193/'
    },
    {
      icon: 'phone',
      label: '+250 783 384 212',
      to: 'tel:0783384212'
    },
    {
      icon: 'google-maps',
      label: 'Kirehe - Rwanda',
      to: "https://www.google.com/maps/place/2%C2%B015'42.6%22S+30%C2%B039'06.7%22E/@-2.2618333,30.6496671,17z/data=!3m1!4b1!4m13!1m6!3m5!1s0x19c4c5087243937d:0x242f8479cbca81de!2sKirehe+District+Office!8m2!3d-2.278229!4d30.667683!3m5!1s0x0:0x0!7e2!8m2!3d-2.261833!4d30.6518456"
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
