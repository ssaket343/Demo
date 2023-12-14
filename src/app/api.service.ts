import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private baseUrl = 'http://localhost:8081/api/EmployeeDetails/details'; // Base URL of your API
  isLoggedIn: any;
  
  

  constructor(private http: HttpClient) { }

  createUser(requestData: any) {
    return this.http.post(this.baseUrl, requestData);
}
private apiurl = 'http://localhost:8081/api/GetEmployeeDetails/details'; // Base URL of your API

getData(hardcoded : number): Observable<any>{
  const headers = new HttpHeaders().set('Id', hardcoded.toString());

  return this.http.get<any>(`${this.apiurl}`, { headers });
}
private userAccessUrl='http://localhost:8081/api/LoginDetails/details';
User(signupData: any) {
  return this.http.post(this.userAccessUrl, signupData);
}
//this is for login purpose
private loginUrl='http://localhost:8081/api/Login/details';
login(signinData: any) {
  const headers = new HttpHeaders()
    .set('Email', signinData.email)
    .set('passWord', signinData.password);

  // Include the headers in the request options
 
  return this.http.get(this.loginUrl,{headers});
}
isLoggedInUser() {
  // Return the current authentication status
  return this.isLoggedIn;
}

}
