import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Job } from 'src/app/interfaces/job';
import { FuncService } from 'src/app/services/user.service';
import { passwordMatchValidator } from 'src/app/validators/passwordMatch.Validator';
import { CustomValidator } from 'src/app/validators/val.Validators';
import { Router } from '@angular/router';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  jobOptions: Job[] = [];

  constructor(
    private fb: FormBuilder,
     private FuncService: FuncService,
     private router: Router 

     ){}
  
  ngOnInit(): void {
     this.createForm();
     this.fetchJobOptions();
  }

  createForm(): void {
    this.registrationForm = this.fb.group({
      firstName: [null, [Validators.required,CustomValidator.noSpaceValidator]],
      lastName: [null, [Validators.required,CustomValidator.noSpaceValidator]],
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, Validators.required],
      jobId:  [null,Validators.required]
    }, {Validators: passwordMatchValidator});
  }

  val_fn() {
    if (this.registrationForm.get('firstName')?.invalid && this.registrationForm.get('firstName')?.touched) {
      if (this.registrationForm.get('firstName')?.errors?.['noSpaceValidator']) {
        return 'First name must not contain any spaces.';
      } else if (this.registrationForm.get('firstName')?.errors?.['required']) {
        return 'First Name is required.';
      }
    }
    return null;
  }
  val_ln() {
    if (this.registrationForm.get('lastName')?.invalid && this.registrationForm.get('lastName')?.touched) {
      if (this.registrationForm.get('lastName')?.errors?.['noSpaceValidator']) {
        return 'Last name must not contain any spaces.';
      } else if (this.registrationForm.get('lastName')?.errors?.['required']) {
        return 'Last Name is required.';
      }
    }
    return null;
  }
  val_email(){
    if(this.registrationForm.get('email')?.invalid && this.registrationForm.get('email')?.touched){
      return 'Email is invalid.';
    }
    return null;
  }

  val_pass() {
    if (this.registrationForm.get('password')?.invalid && this.registrationForm.get('password')?.touched) {
      if (this.registrationForm.get('password')?.errors?.['minlength']) {
        return 'Password must be at least 6 characters long.';
      } else if (this.registrationForm.get('password')?.errors?.['required']) {
        return 'Password is required.';
      } else return "Password is invalid";
    } 
    return null;
  }
  val_conf_pass1(){
    return this.registrationForm.get('confirmPassword')?.invalid && this.registrationForm.get('confirmPassword')?.touched;
  }
  val_confirm_pass2(){
    return this.registrationForm.get('confirmPassword')?.errors?.['passwordMatchValidator'];
  }
  onSubmit(){
    console.log(this.registrationForm);
  }

    Register(){
      if(this.registrationForm.valid){
        const {confirmPassword, jobId, ...userData} = this.registrationForm.value;
        const job = jobId as Job;

        this.FuncService.registerUser({...userData, JobId: job.id}).subscribe({
          next: (response) => {
            console.log(response);
            this.router.navigate(['/login']);
          },
          error: (error) => {
            console.log('Registration failed: ', error);
          }
        });
      }
    }

    
  fetchJobOptions():void {
   this.FuncService.getJobOptions().subscribe({
    next: (response) => {
      console.log('Job options:', response);
      this.jobOptions = response;
    },
    error: (error) => {
      console.error('Error fetching job options: ',error);
    }
   });
  }
}