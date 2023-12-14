import { Component, OnInit } from '@angular/core';
import { Cust } from '../shared/cust.model';
import {NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cust',
  templateUrl: './cust.component.html',
  styleUrls: ['./cust.component.css']
})
export class CustComponent implements OnInit{

 
  

  requestData: any = {}; // Initialize form data object
  hardcoded!: number;
  
  constructor(private apiService: ApiService,private snackBar: MatSnackBar,private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // milliseconds
    });
  }

  onSubmit() {
    // Call the API service method to get employee details
   
    this.apiService.createUser(this.requestData).subscribe(
      (response : any) => {
      // Handle the API response here
      const apiMessage = response.message;
      this.openSnackBar(apiMessage);
    },

    (error) => {
      // Handle API errors here
      console.error('API Error:', error);
    }
    );

  }

  onClick() {
    const hardcoded =1;
    const data$=this.apiService.getData(hardcoded);
    console.log(data$);
    data$.subscribe(
      (data) => {
        this.requestData = data;
        // Handle the fetched data as needed
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    
  }

  navigateToPage(page: string) {
    // Navigate to the specified route when a flex item is clicked
    this.router.navigate([`/${page}`]);
  
}
}