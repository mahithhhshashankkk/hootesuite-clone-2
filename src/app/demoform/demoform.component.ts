import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';


@Component({
  selector: 'app-demoform',
  templateUrl: './demoform.component.html',
  styleUrls: ['./demoform.component.css']
})
export class DemoformComponent implements OnInit {
  formEx:FormGroup;
  validation_msg={
    'name':[
      {type:'required',message:'Email is required.'}

    ]

  }
  constructor(private fb: FormBuilder,private backendService:BackendService) { }

  ngOnInit() {
    this.createForm();
  }

createForm(){
  this.formEx = this.fb.group({
    name:['',Validators.required],
    surname:['',Validators.required],
    email:['',Validators.required],
    company:['',Validators.required], // Primary Social Platform
    website:[''], // Profile URL (optional)
    employess:['',Validators.required], // Number of Social Accounts
    industry:['',Validators.required], // Privacy Concern Level
    country:['',Validators.required],
    phone:[''], // Optional phone
    title:['',Validators.required], // Main Privacy Goal
    companyRevenue:['',Validators.required] // Posting Frequency

  })
}

resetFields(){
   this.formEx = this.fb.group({
     name: new FormControl('', Validators.required),
     surname: new FormControl('', Validators.required),
     email: new FormControl('', Validators.required),
     company: new FormControl('', Validators.required), // Primary Social Platform
     website: new FormControl(''), // Profile URL (optional)
     employess: new FormControl('', Validators.required), // Number of Social Accounts
     industry: new FormControl('', Validators.required), // Privacy Concern Level
     country: new FormControl('', Validators.required),
     phone: new FormControl(''), // Optional phone
     title: new FormControl('', Validators.required), // Main Privacy Goal
     companyRevenue: new FormControl('', Validators.required) // Posting Frequency
   });
 }
onSubmit(value){
// Simulate privacy assessment processing
console.log('Privacy Assessment Data:', value);
this.backendService.addUser(value)
.then(res=>{
  this.resetFields();
  // Redirect to privacy assessment results page
  alert('Privacy assessment complete! Check your email for detailed results and recommendations.');
  // In a real app, you'd redirect to a results dashboard
  // window.location.href = '/privacy-assessment-results';
})

}

}
