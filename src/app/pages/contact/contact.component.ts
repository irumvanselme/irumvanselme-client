import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  reasons = [
    'I want to hire you',
    'I just wanted to say hello',
    'Let\' s talk on mobile and web design',
    'Let\'s talk on Web development',
    'Let\'s talk on Mobile development',
    'Intreseted on doing a project togather',
    'Asking a question'
  ];
  form: FormGroup;
  selected = JSON.parse(sessionStorage.getItem('message_title')) || -1;

  constructor(private http: ContactService) {
    document.title = 'Contact - anselme';
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(this.selected, Validators.required),
      first_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [ Validators.email, Validators.required ]),
      message: new FormControl('', [Validators.required, Validators.minLength(20)])
    });
    sessionStorage.removeItem('message_title');
  }

  get f(): { [p: string]: AbstractControl } {
    return this.form.controls;
  }

  submit(): void {
    if ( !this.form.valid ) {
      this.form.markAllAsTouched();
    }else{
      const conf = confirm('Are you sure you want to send the message');
      if ( conf === true ) {
        this.http.create(this.form.value).subscribe(res => {
            console.log(res);
            this.form.reset();
            alert('Message successfully sent ! ');
          }
        );
      }
    }
  }
}
