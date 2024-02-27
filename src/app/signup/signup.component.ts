import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  name: string = '';
  email: string = '';
  password: string = '';
  phoneNo: string = '';
  dob: string = '';
  age: any;
  

  constructor() { }

  onSubmit() {
    // Submission logic
    console.log('Form submitted!');

    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Contact No:', this.phoneNo);
    console.log('Date of Birth:', this.dob);
    console.log('Age:', this.age);
  }
}
