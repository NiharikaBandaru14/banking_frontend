import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
password: string;

  constructor(private http: HttpClient) {
    this.email = '';
    this.password = '';
  }


  //constructor(private http: HttpClient) { }

  onSubmit() {
    const data = { email: this.email, password: this.password };
    this.http.post<any>('/api/validate-password', data).subscribe(
      response => {
        console.log(response);
        alert('Password validated successfully');
      },
      error => {
        console.error(error);
        alert('Incorrect password');
      }
    );
  }
}
