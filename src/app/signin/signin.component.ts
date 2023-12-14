import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Cust } from '../shared/cust.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';




@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  signupData: any = {};
  signinData: any ={};
  showSignin = true;
  showSignup = false;
  isAuthenticated: boolean=false;
 

 
  constructor(private apiService: ApiService,private snackBar: MatSnackBar,private router: Router ) { }


  

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // milliseconds
    });
  }
  

  onSignin() {
    this.apiService.login(this.signinData).subscribe(
      (response : any) => {
        // Handle the API response here
        const apiMessage = response.message;
  
        // Set the message based on the response
        if (apiMessage === "suceess") {
          // Display the message using the snackbar
          this.isAuthenticated = true; 
          
          this.router.navigate(['/Aside']); 

          

        } else {
          this.openSnackBar(apiMessage);
        }
      },
    );
  }


  onSignup() {
    this.apiService.User(this.signupData).subscribe(
      
      (response : any) => {
      // Handle the API response here
      const apiMessage = response.message;

      // Set the message based on the response
      if (apiMessage !== undefined) {
        // Display the message using the snackbar
        this.openSnackBar(apiMessage);
      } else {
        console.error('Invalid API response format. Expected a "message" field.');
      }
    },

    (error) => {
      // Handle API errors here
      console.error('API Error:', error);
    }
    );
  }
 
}
