import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  htmlStr: string;
name: any;
namee:any;
nameee:any;
  constructor(public httpClient: HttpClient,private router: Router) {}
  ngOnInit(){
  }

  sendPostRequest() {
    console.log("name",this.name)
    // const req = {
    //   experience : '4',
    //   test_score : '4',
    //   interview_score:'5'
    
    // }
  
    // this.httpClient.post('http://127.0.0.1:5000/predict',req).subscribe(data => {
   
    //   console.log(data);
    // })
  
  const formData = new FormData();
  formData.append("experience", this.name);
  formData.append("test_score", this.namee);
  formData.append("interview_score", this.nameee);
  
    this.httpClient.post('http://127.0.0.1:5000/predict',formData,{responseType: 'text'}).subscribe(data => {
      console.log("jjj",data);
      this.htmlStr = data;
      console.log("thisss",this.htmlStr)
    }) ,
     
      error => console.log('Error from backend API', +error);
  
  }
  }
  